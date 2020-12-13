// import * as ActionTypes from './ActionTypes';
// import { baseUrl } from '../shared/baseUrl';



// export const fetchCampsites = () => dispatch => {
//     dispatch(campsitesLoading());

//     return fetch(baseUrl + 'campsites')
//         .then(response => {
//                 if (response.ok) {
//                     return response;
//                 } else {
//                     const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => {
//                 const errMess = new Error(error.message);
//                 throw errMess;
//             }
//         )
//         .then(response => response.json())
//         .then(campsites => dispatch(addCampsites(campsites)))
//         .catch(error => dispatch(campsitesFailed(error.message)));
// };

// export const campsitesLoading = () => ({
//     type: ActionTypes.CAMPSITES_LOADING
// });


// export const campsitesFailed = errMess => ({
//     type: ActionTypes.CAMPSITES_FAILED,
//     payload: errMess
// });


// export const addCampsites = campsites => ({
//     type: ActionTypes.ADD_CAMPSITES,
//     payload: campsites
// });


// /* Comments */

// export const addComments = comments => ({
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// });


// export const addComment = comment => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });

// export const postComment = (campsiteId, rating, author, text) => dispatch => {
    
//     const newComment = {
//         campsiteId: campsiteId,
//         rating: rating,
//         author: author,
//         text: text
//     };
//     newComment.date = new Date().toISOString();

//     return fetch(baseUrl + 'comments', {
//             method: "POST",
//             body: JSON.stringify(newComment),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(response => {
//                 if (response.ok) {
//                     return response;
//                 } else {
//                     const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => { throw error; }
//         )
//         .then(response => response.json())
//         .then(response => dispatch(addComment(response)))
//         .catch(error => {
//             console.log('post comment', error.message);
//             alert('Your comment could not be posted\nError: ' + error.message);
//         });
// };


// export const fetchComments = () => dispatch => {
//     return fetch(baseUrl + 'comments')
//         .then(response => {
//                 if (response.ok) {
//                     return response;
//                 } else {
//                     const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => {
//                 const errMess = new Error(error.message);
//                 throw errMess;
//             }
//         )
//         .then(response => response.json())
//         .then(comments => dispatch(addComments(comments)))
//         .catch(error => dispatch(commentsFailed(error.message)));
// };

// export const commentsFailed = errMess => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload: errMess
// });


// //why is there no loading comments action? 

// /* Promotions */

// export const fetchPromotions = () => dispatch => {
//     dispatch(promotionsLoading());

//     return fetch(baseUrl + 'promotions')
//         .then(response => {
//                 if (response.ok) {
//                     return response;
//                 } else {
//                     const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => {
//                 const errMess = new Error(error.message);
//                 throw errMess;
//             }
//         )
//         .then(response => response.json())
//         .then(promotions => dispatch(addPromotions(promotions)))
//         .catch(error => dispatch(promotionsFailed(error.message)));
// };

// export const promotionsLoading = () => ({
//     type: ActionTypes.PROMOTIONS_LOADING
// });

// export const promotionsFailed = errMess => ({
//     type: ActionTypes.PROMOTIONS_FAILED,
//     payload: errMess
// });

// export const addPromotions = promotions => ({
//     type: ActionTypes.ADD_PROMOTIONS,
//     payload: promotions
// });



/* 
Notes

1-      //call to fetch and we'll return the result
        //fetch must take a url, in our case it will be the baseUrl for the json server
        //plus the campsites as thats location for the resource we want the campsite's data 
        //a call to fetch will return a promise - when resolved the then method will the json method
        //to convert the response from json to javascript , and that javascript will be the array of campsites
        // the json method returns a new promise for which the converted js array is the  new response value
        // when it resolves
        //so that means we can chain another then method - we'dd grab that js array in this
        //campsite's arguement once that promise resolves then we can dispatch that campsite's 
        //argurment with the  addCampsite's action creator to be used as its payload 


*/

// export const addComment = (campsiteId, rating, author, text) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: {
//         campsiteId: campsiteId,
//         rating: rating,
//         author: author,
//         text: text
//     }
// });