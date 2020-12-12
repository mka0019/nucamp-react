import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//will now cause this reducer to update its part of the state
//when the add comment action is dispatched to the store
//we need to import the actiontypes module. 


/*
Setup a case for when the action type is add comment 
*/

export const Comments = (state = COMMENTS, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
};

    /*
    Setup a case when the action type is add comment 
    here we'll put the content of action payload into a new variable named comment.

    Recall that the content of action payload is an object so we can add more
    properties to this object like this -> comment.id = state.length;
    We will add an id  which will be the length of the comments array thats stored in this part of the state

    We will also a Date of when the comment was submitted 

    Return the new state by using concat. The concat method that lets us attach a new item to the end of an array 
    without mutating the orginal array. It creats a new array 
    DON'T use the  push method, because it will mutate the orginal array, which is big NO NO

    SO this takes the existing state, which is array of objects and it concatenates the new comment 
    object to the end of the array and then it returns that new state to the redux store 

    To dispatch this action we need to update the several react conponents
    */
