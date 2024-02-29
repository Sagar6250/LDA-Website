import { Grid, TextField } from "@mui/material";
import FormWrapper from "../../../layout/FormWrapper";

const PersonalInformation = () => {
    return (
        <FormWrapper title={"Personal Information"}>
            <Grid item xs={16}>
                <TextField
                    type="text"
                    id="full-name"
                    label="Full Name"
                    required
                    fullWidth
                    placeholder="Type your full name here"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16}>
                <TextField
                    id="contact-number"
                    label="Contact Number"
                    required
                    // placeholder="Enter your phone number here"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16}>
                <TextField
                    type="email"
                    label="Email Address"
                    id="email-address"
                    // placeholder="Enter your email address here"
                    fullWidth
                    required
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16}>
                <TextField
                    type="date"
                    label="Date of Birth"
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    id="date-of-birth"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16}>
                <TextField
                    id="address"
                    fullWidth
                    required
                    label="Address"
                    placeholder="Enter the address here"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16} sm={6}>
                <TextField
                    id="city"
                    label="City"
                    fullWidth
                    required
                    // placeholder=""
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16} sm={6}>
                <TextField
                    id="state"
                    label="State"
                    fullWidth
                    required
                    // placeholder=""
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16} sm={6}>
                <TextField
                    id="zip-code"
                    label="Zip Code"
                    variant="outlined"
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={16} sm={6}>
                <TextField
                    id="country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    required
                />
            </Grid>
        </FormWrapper>
    );
};

export default PersonalInformation;
