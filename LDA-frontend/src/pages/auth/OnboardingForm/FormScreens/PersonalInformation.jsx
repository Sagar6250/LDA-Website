import { Grid, TextField, MenuItem, Autocomplete } from "@mui/material";
import FormWrapper from "../../../../components/layout/FormWrapper";
import React from "react";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="##########"
            definitions={{
                "#": /[0-9]/,
            }}
            inputRef={ref}
            onAccept={(value) =>
                onChange({ target: { name: props.name, value } })
            }
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const NumericMaskCustom = React.forwardRef (function NumericMaskCustom(props,ref)
{
    const {onChange, ...other} =props; 
    return(
        <IMaskInput
            {...other}
            mask= "######"
            definitions={
                {
                    "#": /[0-9]/, 
                }
            }
            placeholder="FORMAT: 555555"
            inputRef= {ref}
            onAccept ={
                (value)=> 
                onChange({target: {name: props.name, value}})
            }
            overwrite
        />
    );
}
);
NumericMaskCustom.propTypes= {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

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
    const statesList= [
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh", 
        "Chattigarh",
        "Dadra and Nagar Haveli and Daman & Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand", 
        "Karnataka", 
        "Kerala",
        "Ladakh",
        "Lakshadweep", 
        "Madhya Pradesh",
        "Maharashtra", 
        "Manipur",
        "Meghalaya", 
        "Mizoram", 
        "Nagaland", 
        "Odisha", 
        "Puducherry", 
        "Punjab", 
        "Rajastan",
        "Sikkim", 
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal", 
    ]; 
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
                    InputProps={{
                        inputComponent: TextMaskCustom,
                    }}
                    inputProps={{minLength: 10,}}
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
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={16} sm={6}>
                <Autocomplete
                    id="state"
                    //label="State"
                    //select
                    options= {statesList}
                    value={state}
                    onChange={(event, newValue) => updateFields({ state: newValue })}
                    //fullWidth
                    //required
                    //variant="outlined"    
                    //SelectProps={{
                        //MenuProps: {
                           // PaperProps: {
                             //   style: {
                               //     backgroundColor: 'white', // Set background color to white
                                //},
                            //},
                       // },
                   // }}
                   renderInput={(params)=> (
                    <TextField
                        {...params}
                        label="State"
                        variant= "outlined"
                        required
                        fullWidth />
                   )}
                >
                {statesList.map((state)=> (
                    <MenuItem key={state} value={state}>
                    {state}
                    </MenuItem>                ))}
            </Autocomplete>
            </Grid>
            <Grid item xs={16} sm={6}>
                <TextField
                    id="zip-code"
                    label="Zip Code"
                    variant="outlined"
                    value={zipcode}
                    onChange={(e) => updateFields({ zipcode: e.target.value })}
                    InputProps= {{inputComponent:NumericMaskCustom,}}
                    inputProps= {{minLength: 6,}}
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
