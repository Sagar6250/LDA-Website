import {
    Checkbox,
    FormGroup,
    FormControlLabel,
    Select,
    MenuItem,
    FormLabel,
    Grid,
} from "@mui/material";
import FormWrapper from "../../../layout/FormWrapper";

const Availability = ({ daysAvailable, workingHours, updateFields }) => {
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            updateFields({
                daysAvailable: [...daysAvailable, e.target.value],
            });
        } else {
            daysAvailable.splice(daysAvailable.indexOf(e.target.value), 1);
        }
    };

    return (
        <FormWrapper title={"Availability"}>
            <Grid item xs={16}>
                <FormLabel>Days of the week available for work:</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange}
                                value="Monday"
                            />
                        }
                        label="Monday"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange}
                                value="Tuesday"
                            />
                        }
                        label="Tuesday"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange}
                                value="Wednesday"
                            />
                        }
                        label="Wednesday"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange}
                                value="Thursday"
                            />
                        }
                        label="Thursday"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange}
                                value="Friday"
                            />
                        }
                        label="Friday"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange}
                                value="Saturday"
                            />
                        }
                        label="Saturday"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange}
                                value="Sunday"
                            />
                        }
                        label="Sunday"
                    />
                </FormGroup>
            </Grid>
            <Grid item xs={16}>
                <FormLabel>Preferred Working Hours for the Week:</FormLabel>
                <Select
                    value={workingHours}
                    onChange={(e) =>
                        updateFields({ workingHours: e.target.value })
                    }
                    fullWidth
                >
                    <MenuItem value={"9am-5pm"}>9am-5pm</MenuItem>
                    <MenuItem value={"10am-6pm"}>10am-6pm</MenuItem>
                    <MenuItem value={"Flexible"}>Flexible</MenuItem>
                </Select>
            </Grid>
            {/* <div>Selected days: {selectedDays.join(", ")}</div>
            <div>Preferred Working Hours for the Week: {preferredHours}</div> */}
        </FormWrapper>
    );
};
export default Availability;
