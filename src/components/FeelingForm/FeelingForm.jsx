import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './FeelingForm.css';
import { TextField, Button } from '@mui/material';

function FeelingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(1); // Sets initail value to 1

    const handleFeelingInput = (event) => {
        setFeeling(event.target.value)
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (feeling < 1 || feeling > 5) {
            alert('Please enter a number between 1 and 5')

            return
        }
         dispatch({
            type: "ADD_FEELING",
            payload: feeling,
        });
        history.push('/understanding'); // Will navigate to the next part of the feedback form
    };

    return (    
       <>

        <div className="form-container">
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                data-testid="input"
                variant="filled"
                label=" feeling (1-5)"
                type="number"
                onChange={handleFeelingInput}
                value={feeling}
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

export default FeelingForm;