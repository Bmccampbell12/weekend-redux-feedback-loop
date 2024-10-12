import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './FeedbackReview.css';

// Acess to feedback object from store.
function FeedbackReview() {
    const feedback = useSelector((store) => store.feedback); 
    const history = useHistory();  // for nav capability
    const dispatch = useDispatch();  // dispatch actions to store

    // Constructs the feedback data with required fields from store
    const feedbackData = {
        feeling: feedback.feedback.feeling,
        understanding: feedback.feedback.understanding,
        support: feedback.feedback.support,
        comments: feedback.feedback.comments,
    };
    // Function to handle submission form 
    const handleSubmit = () => {
        axios.post('/api/feedback', feedbackData)  // POST request to server for feedback
        .then((rersponse) => {
            history.push('/');  // redirect to home after success
            dispatch({  // resets the feedback form
                type: 'RESET_FEEDBACK',
            });
        }).catch((err) => { // logs any errors that may have occured
            console.error('Error submitting feedback', err)
        })
    };
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
                    <li>Feeling {feedback.feedback.feeling}</li>
                    <li>Understanding {feedback.feedback.understanding}</li>
                    <li>Support {feedback.feedback.support}</li>
                    <li>Comments {feedback.feedback.comments}</li>
                </ul>
            </div>
            <button onClick={handleSubmit}>SUBMIT FEEDBACK</button>
        </div>
        </div>
        </>
    );
}

export default FeedbackReview;
