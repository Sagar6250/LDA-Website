import { Grid, TextField } from "@mui/material";
import FormWrapper from "../../../layout/FormWrapper";

const PersonalInformation = ({
    fullName,
    phoneNumber,
    emailAddress,
    dateOfBirth,
    address,
    city,
    state,
    zipcode,
    country,
    updateFields,
}) => {
    return (
        <FormWrapper title={"Personal Information"}>
            <Grid item xs={16}>
                <TextField
                    type="text"
                    id="full-name"
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => updateFields({ fullName: e.target.value })}
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
                    value={phoneNumber}
                    onChange={(e) =>
                        updateFields({ phoneNumber: e.target.value })
                    }
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
                    value={emailAddress}
                    onChange={(e) =>
                        updateFields({ emailAddress: e.target.value })
                    }
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
                    value={dateOfBirth}
                    onChange={(e) =>
                        updateFields({ dateOfBirth: e.target.value })
                    }
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
                    value={address}
                    onChange={(e) => updateFields({ address: e.target.value })}
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
                    value={city}
                    onChange={(e) => updateFields({ city: e.target.value })}
                    required
                    // placeholder=""
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16} sm={6}>
                <TextField
                    id="state"
                    label="State"
                    value={state}
                    onChange={(e) => updateFields({ state: e.target.value })}
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
                    value={zipcode}
                    onChange={(e) => updateFields({ zipcode: e.target.value })}
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={16} sm={6}>
                <TextField
                    id="country"
                    label="Country"
                    variant="outlined"
                    value={country}
                    onChange={(e) => updateFields({ country: e.target.value })}
                    fullWidth
                    required
                />
            </Grid>
        </FormWrapper>
    );
};

export default PersonalInformation;
