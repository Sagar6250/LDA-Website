import React, { useState } from "react";
import {Typography,Checkbox,FormGroup,FormControlLabel,Select,MenuItem,Box} from "@mui/material";

const Availability = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [preferredHours, setPreferredHours] = useState('');
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedDays([...selectedDays, value]);
        } else {
            setSelectedDays(selectedDays.filter((day) => day !== value));
        }
};
const handlePreferredHoursChange = (event) => {
    setPreferredHours(event.target.value);
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
            <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                    Preferred Working Hours for the Week:
                </Typography>
                <Select
                    value={preferredHours}
                    onChange={handlePreferredHoursChange}
                    fullWidth
                >
                    <MenuItem value="9am-5pm">9am-5pm</MenuItem>
                    <MenuItem value="10am-6pm">10am-6pm</MenuItem>
                    <MenuItem value="Flexible">Flexible</MenuItem>
                </Select>
            </Box>
            <div>
                Selected days: {selectedDays.join(', ')}
            </div>
            <div>
            Preferred Working Hours for the Week: {preferredHours}
            </div>
        </div>
   )
}
export default Availability;
