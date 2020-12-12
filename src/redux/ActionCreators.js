import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites'; 

/*the wildcard(*) here thats lets us import all the named 
  exports from the ActionTypes.js file at once
  
*/

/*
   Define an action creator function 
*/

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    //With this we can access the add comment export that we made from ActionTypes.js
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});
// We are passing parameters that are needed to create a comment
//This will return an object which has as its properties a type and a payload
//Its worth nothing that, in ES6, when the idenitifer of a property is the same as its value you can actually pass as 
//this :
/* 
    payload: {
        campsiteId,
        rating,
        author,
        text
    }

I will keep the top that same for now 
*/

/* We are not actually going to be using a server, for now we are going to pretend like we are
We are going to simulate a server by simulating a brief delay using the set timeout function
Then after that delay we'll go ahaead and add the campsite data to the state
*/

export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

// Wrap this function in another function (redux thunk)
// redux thunk lets us pass the store's dispatch method into the innter function
// use the dispatch method to dispatch action campsite's loading 
// use setTimeout to similate a brief delay of 2000 miliseconds 
//after that delay we'll dispatch another action - add campsites along with the data from the campsites array 


export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

//Standard action creator that just returns an action object and nothing else 
//since its not being thunked, its not going to intercepted and its just gonna go 
//straight to the reducer 
//this action creator is being dispatched from fetchCampsites,
//so that means that when the fetch's campsite's action is dispatched 
//that action will dispatch this action 

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

//action creator for failed 
//we'll be passing an error message into this message
// we give it a type of campsites failed and payload will be the error message

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

//this action creator will have campsites as its parameter
// and it will be a normal action creator 