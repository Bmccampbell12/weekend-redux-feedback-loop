import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CommentsForm.css';
import { TextField, Button } from '@mui/material';

function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState(''); // Sets initial value to empty string

    const handleCommentsInput = (event) => { // updates comments when user types in input field
        setComments(event.target.value)
        }

    const handleSubmit = (event) => {
        event.preventDefault();
         dispatch({     // dispatches comments to store
            type: "ADD_COMMENTS",
            url: '/feedback',
            payload: comments,
        });
        if (history.location.pathname !== '/review') {     
            history.push('/review'); // navigates to the review page
        }
        // Will navigate to the next part of the feedback form
    };

    return (    
       <>

        <div className="form-container">
            <h2>Any comments you would like to share?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                id="standard-basic"
                variant="standard"
                label="comments"
                type="text"
                multiline
                rows={3}
                onChange={handleCommentsInput}
                value={comments}
                placeholder="Enter your comments"
                sx={{ width: '80%' }}
                />
                
                <Button variant="contained" color= "primary" type="submit">
                    NEXT
                    </Button>
            </form>
        </div>

        </>

    );

}

export default CommentsForm;