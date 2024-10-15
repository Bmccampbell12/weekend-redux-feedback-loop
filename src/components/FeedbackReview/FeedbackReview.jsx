import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './FeedbackReview.css';

// Acess to feedback object from store.
function FeedbackReview() {
 // Constructs the feedback data with required fields from store
    const feeling = useSelector((store) => store.feeling)
    const understanding = useSelector((store) => store.understanding)
    const support = useSelector((store) => store.support)
    const comments = useSelector((store) => store.comments)

    const history = useHistory();  // for nav capability
    const dispatch = useDispatch();  // dispatch actions to store
   

    // Function to handle submission form 
    const handleSubmit = () => {
        const feedbackData = {
            feeling,
            understanding,
            support,
            comments,
        };
        axios
        .post('/api/feedback', feedbackData)  // POST request to server for feedback
        .then((response) => {
            console.log('Feedback submitted successfully:', response.data)
           
            dispatch({ type: 'RESET_ALL_FEEDBACK'});
            
            history.push('/');
        })
        .catch((err) => { // logs any errors that may have occured
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
                    <li>feeling: {feeling[0] || 'No feedback Provided'}</li>
                    <li>Understanding: {understanding[0] || 'No feedback Provided'}</li>
                    <li>Support: {support[0] || 'No feedback Provided'}</li>
                    <li>Comments: {comments || 'No feedback Provided'}</li>
                </ul>
            </div>
            <button onClick={handleSubmit}>SUBMIT FEEDBACK</button>
        </div>
        </div>
        </>
    );
}

export default FeedbackReview;
