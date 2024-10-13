import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UnderstandingForm.css';
import { TextField, Button } from '@mui/material';


function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(1); // Sets initail value to 1

    const handleUnderstandingInput = (event) => {
        setUnderstanding(event.target.value)
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (understanding < 1 || understanding > 5) {
            alert('Please enter a number between 1 and 5')

            return
        }
         dispatch({
            type: "ADD_UNDERSTANDING",
            payload: understanding,
        });
        history.push('/support'); // Will navigate to the next part of the feedback form
    };

    return (    
       <>

        <div className="form-container">
            <h2>How well do you understand the material?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                id="understanding-input"
                variant="outlined"
                label=" understanding (1-5)"
                type="number"
                onChange={handleUnderstandingInput}
                value={understanding}
                placeholder="Rate 1-5"
                sx={{ width: 1/4 }}
                />
                
                <Button variant="contained" color= "primary" type="submit">
                    NEXT
                    </Button>
            </form>
        </div>

        </>

    );

}

export default UnderstandingForm;