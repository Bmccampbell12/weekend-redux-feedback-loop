import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './FeedbackReview.css';

// Acess to feedback object from store.
function FeedbackReview() {

    const history = useHistory();  // for nav capability
    const dispatch = useDispatch();  // dispatch actions to store

    const feeling = useSelector((store) => store.feeling)
    const understanding = useSelector((store) => store.understanding)
    const support = useSelector((store) => store.support)
    const comments = useSelector((store) => store.comments)


    // Constructs the feedback data with required fields from store
    const feedbackData = {
          feeling: feeling[0],
          understanding: understanding[0],
          support: support[0],
          comments: comments,
    };

    // Function to handle submission form 
    const handleSubmit = () => {
        axios.post('/api/feedback', feedbackData)  // POST request to server for feedback
        .then((response) => {
                history.push('/'); 
                console.log('error') // redirect to home after success
            dispatch({  
                type: 'RESET_ALL_FEEDBACK', // Resets the feedback.
            });
        }).catch((err) => { // logs any errors that may have occured
            console.error('Error submitting feedback', err)
        })

    }

    // Renders the Feedback Review section
    return (
        <>

        <div>
            <div id="header">
                <header>Feedback Review</header>
        </div>
        <div className="body">
            <div className="reviewBox">
                <h3>Review Your Feedback</h3>
                <ul>
                    <li>Feeling: {feeling[0]}</li>
                    <li>Understanding: {understanding[0]}</li>
                    <li>Support: {support[0]}</li>
                    <li>Comments: {comments}</li>
                </ul>
            </div>
            <button onClick={handleSubmit}>SUBMIT FEEDBACK</button>
        </div>
        </div>
        </>
    );
}

export default FeedbackReview;
