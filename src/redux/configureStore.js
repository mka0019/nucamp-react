import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsitesReducer';
import { Comments } from './commentsReducer';
import { Partners } from './partnersReducer';
import { Promotions } from './promotionsReducer';
import { InitialFeedback } from './forms';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...createForms({
                //arguemnt --> modal name for the entire form, which we we'll call feedback form
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};

//createForms is a helper function from react redux form library
//that makes it easy to set up reducers that update the state whenever new form values are submitted 
//its designed to be user with combineReducers 


