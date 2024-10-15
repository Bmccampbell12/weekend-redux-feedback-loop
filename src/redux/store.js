import { applyMiddleware, legacy_createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import feedbackReducer from './feedbackReducer';

// Reducer to handle feeling feedback 
const feeling = (state = [], action) => {
    if (action.type === "SET_FEELING") {
      return [...state, action.payload];
    }else if (action.type === "RESET_FEEDBACK") {
      return 0;
    }
    return state;
  };
  // Reducer to handle understanding feedback.
  const understanding = (state = [], action) => {
    if (action.type === "SET_UNDERSTANDING") {
      return [...state, action.payload];
    }else if (action.type === "RESET_FEEDBACK") {
      return [];
    }
    return state;
  };
    // Reducer to handle support feedback.
    const support = (state = [], action) => {
        if (action.type === "SET_SUPPORT") {
          return [...state, action.payload];
        } else if (action.type === "RESET_FEEDBACK") {
          return [];
        }
        return state;
      };
      // Reducer to handle comments feedback.
      const comments = (state = " ", action) => {
        if (action.type === "SET_COMMENTS") {
          return [...state, action.payload];
        } else if (action.type === "RESET_FEEDBACK") {
          return "";
        }
        return state;
      };
       // Main Reducer to handle overall feedback submission.
    const feedback = (state = [], action) => {
        if (action.type === "SUBMIT_FEEBACK") {
          return [...state, action.payload];
        } else if (action.type === "RESET_ALL_FEEDBACK") {
          return [];
        }
        return state;
      }
    
    // Redux store with the rootReducer and logger middleware
    // store configuration

    const store = legacy_createStore(
      combineReducers({
        feedback: feedbackReducer,   // Main feedback Reducer
      feeling,                     // handles Feelings feedback
      understanding,               // handles understanding feedback
      support,                     // handles support feedback
      comments,                    // handles comments feedback
      feedback,               
      }),
           applyMiddleware(logger)
    );

    export default store;