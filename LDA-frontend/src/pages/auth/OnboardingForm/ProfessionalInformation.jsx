import { FormLabel, Grid, TextField } from "@mui/material";
import { useState } from "react";
import FormWrapper from "../../../layout/FormWrapper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ProfessionalInformation = () => {
    const [value, setValue] = useState(null);

    return (
        <FormWrapper title={"Professional Information"}>
            <Grid item xs={16}>
                <FormLabel>Do you have any previous work experience?</FormLabel>
            </Grid>
            <Grid item xs={16}>
                <RadioGroup
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <FormControlLabel
                        value={"true"}
                        control={<Radio />}
                        label="Yes"
                    />
                    <FormControlLabel
                        value={"false"}
                        control={<Radio />}
                        label="No"
                    />
                </RadioGroup>
            </Grid>
            {value === "true" && (
                <Grid container spacing={2}>
                    <Grid item xs={16}>
                        <FormLabel>If Yes, provide us the details</FormLabel>
                    </Grid>
                    <Grid item xs={16}>
                        <TextField
                            required
                            id="outlined-textarea"
                            label="Company Name"
                            placeholder=""
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={16}>
                        <TextField
                            required
                            id="outlined-textarea"
                            label="Area of expertise"
                            placeholder=""
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={16}>
                        <TextField
                            id="standard-number"
                            label="Number of years worked"
                            type="number"
                            fullWidth
                            required
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            )}
        </FormWrapper>
    );
};

export default ProfessionalInformation;
