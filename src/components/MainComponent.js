import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators';
import { actions } from 'react-redux-form'; 
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//this will make a action creator named actions.reset available to us
// whch we'll use here in our map dispatch to props as a value for a function named resetFeedback form


//To retrieve the state, we will use the mapStateToProps() function
// the below will return the items as props
const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const mapDispatchToProps = {
    //arrow function with parameter list of campsiteid, rating, and text 
    //in the action creater add comment -> we will passing in that data 
    postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchCampsites: () => (fetchCampsites()),
    fetchComments: () => (fetchComments()),
    fetchPromotions: () => (fetchPromotions()),
    fetchPartners: () => (fetchPartners()),
    postFeedback: feedback => (postFeedback(feedback))
};


class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                //this.props.campsites.filter --> before we were calling just the array, but now this holds
                // isLoading, errMess properites as well, so to access the array > this.props.campsites.campsites
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                    campsitesLoading={this.props.campsites.isLoading}
                    campsitesErrMess={this.props.campsites.errMess}
                    promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrMess={this.props.promotions.errMess}
                    partner={this.props.partners.partners.filter(partner => partner.featured)[0]}
                    partnersLoading={this.props.partners.isLoading}
                    partnersErrMess={this.props.partners.errMess}
                // Note 1
                />
            );
        }
        
        // match comes from react's component (props)
        const CampsiteWithId = ({match}) => {
            return(
                <CampsiteInfo
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    isLoading={this.props.campsites.isLoading}
                    errMess={this.props.campsites.errMess}
                    comments={this.props.comments.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />  
            );
            // we are going to pass the add comment function to it as a prop
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                            <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                            <Route exact path='/aboutus' render={()=> <About partners={this.props.partners} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

/* 
Note 1: 
Then, where you render the Home component, update it to pass in three different objects: the featured campsite, the featured promotion, and the featured partner. You will do this by using the filter array method to filter for objects where the featured property evaluates as true. Then, because filter returns an array and you want to pass an object, you will use [0] to access the first (and only) object in the array. 
*/

 /* Note that unlike the <Route> for the Directory component, you use the attribute component instead of render above. That is because you do not need to pass any state data into the Contact component.  */

 /* The Routes act as the case statements in switch statement */
 /* redirect  acts as the catch all, sort of like default statement in a JS switch statement */
