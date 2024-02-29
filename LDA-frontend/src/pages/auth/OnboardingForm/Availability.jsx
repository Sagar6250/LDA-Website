import React, { useState } from "react";
import {Typography,Checkbox,FormGroup,FormControlLabel} from "@mui/material";

const Availability = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedDays([...selectedDays, value]);
        } else {
            setSelectedDays(selectedDays.filter((day) => day !== value));
        }
};
return(
    <div>
            <Typography variant="h5" align="center" gutterBottom>
               Please state your Availability:
            </Typography>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} value="Monday" />}
                    label="Monday"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} value="Tuesday" />}
                    label="Tuesday"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} value="Wednesday" />}
                    label="Wednesday"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} value="Thursday" />}
                    label="Thursday"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} value="Friday" />}
                    label="Friday"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} value="Saturday" />}
                    label="Saturday"
                />
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} value="Sunday" />}
                    label="Sunday"
                />
            </FormGroup>
            <div>
                Selected days: {selectedDays.join(', ')}
            </div>
        </div>
   )
}
export default Availability;
