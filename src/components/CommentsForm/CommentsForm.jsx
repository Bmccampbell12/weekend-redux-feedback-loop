import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CommentsForm.css';
import { TextField, Button } from '@mui/material';

function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState(''); // Sets initail value to 1

    const handleCommentsInput = (event) => {
        setComments(event.target.value)
        }

    const handleSubmit = (event) => {
        event.preventDefault();
         dispatch({
            type: "ADD_COMMENTS",
            payload: comments,
        });
        history.push('/review'); // Will navigate to the next part of the feedback form
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
                rows={4}
                onChange={handleCommentsInput}
                value={comments}
                placeHolder="Enter your comments"
                sx={{ width: '100%' }}
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