import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
            // selectedCampsite: null  <--- not using this anymore 
        };
    }

    // onCampsiteSelect(campsiteId) {
    //     this.setState({selectedCampsite: campsiteId});
    // }

    render() {
        const HomePage = () => {
            return (
                <Home
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
                // Note 1
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} />
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

export default Main;

/* 
Note 1: 
Then, where you render the Home component, update it to pass in three different objects: the featured campsite, the featured promotion, and the featured partner. You will do this by using the filter array method to filter for objects where the featured property evaluates as true. Then, because filter returns an array and you want to pass an object, you will use [0] to access the first (and only) object in the array. 

*/