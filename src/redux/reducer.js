import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

//if no state is passed in, then the state gets to set the initialState object
export const Reducer = (state = initialState, action) => {
    return state;
};

//Notes:
/* 
A reducer is a pure function that takes care of inputting 
changes to its state by returning a new state.
 The reducer will take in the previous state and action as parameters and 
 return the application state. As your app grows, 
 your single reducer will be split off into smaller reducers that manage certain parts of the state tree.
*/
//use export so we can access them in other files