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
import { addComment, fetchCampsites, fetchComments, fetchPromotions } from '../redux/ActionCreators';
import { actions } from 'react-redux-form'; //this will make a action creator named actions.reset available to us
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

//To dispatch addComment
// 
const mapDispatchToProps = {
        //arrow function with parameter list of campsiteid, rating, and text 
    //in the action creater add comment -> we will passing in that data 
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
    fetchCampsites: () => (fetchCampsites()),
    //this will call the fetchCampsites action creator 
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchComments: () => (fetchComments()),
    fetchPromotions: () => (fetchPromotions())
};


class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
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
                partner={this.props.partners.filter(partner => partner.featured)[0]}
                // Note 1
                />
            );
        }
        
        // match comes from react's component (props)
        const CampsiteWithId = ({ match}) => {
            return(
                <CampsiteInfo 
                campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                isLoading={this.props.campsites.isLoading}
                errMess={this.props.campsites.errMess}
                comments={this.props.comments.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                commentsErrMess={this.props.comments.errMess}
                addComment={this.props.addComment}
                />
            );
            // we are going to pass the add comment function to it as a prop
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                    <Route path='/directory/:campsiteID' component={CampsiteWithId} />
                    <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path='/aboutus' render={()=> <About partners={this.props.partners} /> } />
                    {/* Note that unlike the <Route> for the Directory component, you use the attribute component instead of render above. That is because you do not need to pass any state data into the Contact component.  */}
                    <Redirect to='/home' />
                    {/* The Routes act as the case statements in switch statement */}
                    {/* redirect  acts as the catch all, sort of like default statement in a JS switch statement */}
                </Switch>


                {/* <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>   not using this anymore*/}
                {/* <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />  not using this anymore*/}
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