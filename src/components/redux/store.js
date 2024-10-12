import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';

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
      return 0;
    }
    return state;
  };
    // Reducer to handle support feedback.
    const support = (state = [], action) => {
        if (action.type === "SET_SUPPORT") {
          return [...state, action.payload];
        }else if (action.type === "RESET_FEEDBACK") {
          return 0;
        }
        return state;
      };
      // Reducer to handle comments feedback.
      const comments = (state = "", action) => {
        if (action.type === "SET_COMMENTS") {
          return [...state, action.payload];
        }else if (action.type === "RESET_FEEDBACK") {
          return "";
        }
        return state;
      };
       // Reducer to handle support feedback submission.
    const feedback = (state = [], action) => {
        if (action.type === "SUBMIT_FEEBACK") {
          return [...state, action.payload];
        } else if (action.type === "RESET_ALL_FEEDBACK") {
          return [];
        }
        return state;
    };

    // store configuration

    const store = createStore(
        combineReducers({
            feeling,
            understanding,
            support,
            comments,
            feedback,
        }),
        applyMiddleware(logger)
    );

    export default store;