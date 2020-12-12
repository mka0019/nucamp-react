/* all that this is doing is creating a variable
named add comment and setting its value to the string add comment
and exporting it */
export const ADD_COMMENT = 'ADD_COMMENT';
export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';
//This action, campsite loading will be for when our app is loading the campsite's data and 
//it hasn't received  the data yet its just made the request and is waiting for a response
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';
//this action will be for when our server request has failed for some reason and 
//we weren't able to load the data then this action will let the redux store know that, so the state 
//can update to show an error message 
export const ADD_CAMPSITES = 'ADD_CAMPSITES';
// this action is what we will dispatch when the campsite's data has successfully been retrieved 
//from the server and can be safely added to the state
  
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
export const PROMOTIONS_LOADING = 'PROMOTIONS_LOADING';
export const ADD_PROMOTIONS = 'ADD_PROMOTIONS';
export const PROMOTIONS_FAILED = 'PROMOTIONS_FAILED';
