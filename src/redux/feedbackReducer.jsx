import { useSelector } from 'react-redux';

const initialState = {
    feeling: null,
    understanding: null,
    support: null,
    comments: "",
    submissions: [],
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_ALL_FEEDBACK':
        return {
            ...state,
    feeling: null,
    understanding: null,
    support: null,
    comments: "",
} 
case 'ADD_FEEDBACK':
return { 
    ...state,
    submissions: [...state.submissions, action.payload],
}
default: 

return state;
    }
}

// Access feedback submissions from store
function FeedbackReview() {                         // Allows access to submissions
    const submissions = useSelector((store) => store.feedback.submissions);

    // Renders the Feedback Review section

    return (
        <>
        <div>
            <div id="header">
                <header>Feedback Review</header>
            </div>
        </div>
        <div className="body">
            <div className="reviewBox">
                <h3>All Submitted Feedback</h3>
                <ul>
                    {submissions.length === 0 ? (
                        <li>No feedback submitted yet.</li>
                    ) : (
                        submissions.map((submission, index) => (
                            <li key={index}>
                                <strong>submission {index + 1}</strong>
                                <ul>
                                    <li>Feeling: {submission.feeling}</li>
                                    <li>Understanding: {submission.understanding}</li>
                                    <li>Support: {submission.support}</li>
                                    <li>Comments: {submission.comments}</li>
                                </ul>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
        </>
    )
    }

    export default FeedbackReview;