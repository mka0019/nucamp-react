//import { CAMPSITES } from '../shared/campsites';

// we longer need to import the campsites data into this module
// we are now going to be receiving the campsite's data from an action
// in its place we'll import from out action types module

import * as ActionTypes from './ActionTypes';

export const Campsites = (state = {
    isLoading: true,
    errMess: null,
    campsites: []
}, action) => {
        switch (action.type) {
            case ActionTypes.ADD_CAMPSITES:
                return {...state, isLoading: false, errMess: null, campsites: action.payload};
            //for the add campsites action type we're going to return a new state 
            // with the previous state spread out, and we are going to update its value to
            // its no longer loading, there's no error message, and the campsites arrat will be populated with the payload 
            case ActionTypes.CAMPSITES_LOADING:
                return {...state, isLoading: true, errMess: null, campsites: []};
                //isloading is true, error message is null and campsites is an empty array , because we haven't finished loading the data yet
            case ActionTypes.CAMPSITES_FAILED:
                return {...state, isLoading: false, errMess: action.payload};
                // isloading is false, error message to the action's payload, we don't need to update the campsites's array for this one 
            default:
                return state;
        }
};



// export const Campsites = (state = CAMPSITES, action) => {
        //before we had the state hold the campsites array, but thats not the case anymore
        // instead it going to hold:
        /* 
        isLoading: true,
        errMess: null,
        campsites: []
        */

//     switch (action.type) {
//         default:
//             return state;
//     }
// };

