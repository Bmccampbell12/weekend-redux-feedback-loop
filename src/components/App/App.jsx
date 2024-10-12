import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom";
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import FeedbackReview from '../FeedbackReview/FeedbackReview';



function App() {
  const dispatch = useDispatch()

useEffect(() => {
  axios.get('/api/feedback')
  .then(response => {
    dispatch({ type: 'SET_FEEDBACK', payload: response.data })
  }).catch(err => {
    console.log('Error fetching feedback', err)
  })
}, [dispatch]);

  return (
    <>
    <Router>
    <div className='App'>
      <Route path="/" exact>
      <FeelingForm fetchFeelingForm={FeelingForm} />
      </Route>
      <Route path="/f"></Route>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

// Roues go here later
<Route>

  </Route>


    </div>
    </Router>
    </>
  );
}

export default App;
