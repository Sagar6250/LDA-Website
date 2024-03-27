import {
    Checkbox,
    FormGroup,
    FormControlLabel,
    Select,
    MenuItem,
    FormLabel,
    Grid,
    FormControl,
} from "@mui/material";
import FormWrapper from "../../../../components/layout/FormWrapper";

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const Availability = ({ daysAvailable, workingHours, updateFields }) => {
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            updateFields({
                daysAvailable: [...daysAvailable, e.target.value],
            });
        } else {
            updateFields({
                daysAvailable: [
                    ...daysAvailable.slice(
                        0,
                        daysAvailable.indexOf(e.target.value)
                    ),
                    ...daysAvailable.slice(
                        daysAvailable.indexOf(e.target.value) + 1
                    ),
                ],
            });
        }
    };

    return (
        <FormWrapper title={"Availability"}>
            <Grid item xs={16}>
                <FormLabel>Days of the week available for work:</FormLabel>
                <FormGroup>
                    {daysOfWeek.map((day, index) => (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    onChange={handleCheckboxChange}
                                    value={day}
                                    checked={daysAvailable.includes(day)}
                                />
                            }
                            label={day}
                        />
                    ))}
                </FormGroup>
            </Grid>
            <Grid item xs={16}>
                <FormLabel>Preferred Working Hours for the Week:</FormLabel>
                <FormControl required fullWidth>
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
                </FormControl>
            </Grid>
        </FormWrapper>
    );
};
export default Availability;
