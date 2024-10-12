import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SupportForm.css';
import { TextField, Button } from '@mui/material';

function SupportForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState(1); // Sets initail value to 1

    const handleSupportInput = (event) => {
        setSupport(event.target.value)
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (support < 1 || support > 5) {
            alert('Please enter a number between 1 and 5')

            return
        }
         dispatch({
            type: "ADD_SUPPORT",
            payload: support,
        });
        history.push('/comments'); // Will navigate to the next part of the feedback form
    };

    return (    
       <>

        <div className="form-container">
            <h2>How well do you understand the material?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                id="filled-basic"
                variant="filled"
                label=" support (1-5)"
                type="number"
                onChange={handleSupportInput}
                value={support}
                placeHolder="Rate 1-5"
                inputProps={{ min: 1, max: 5 }}
                />
                
                <Button variant="contained" color= "primary" type="submit">
                    NEXT
                    </Button>
            </form>
        </div>

        </>

    );

}

export default SupportForm;