import { FormLabel, TextField } from "@mui/material";
import React from "react";
import FormWrapper from "../../../layout/FormWrapper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

const ProfessionalInformation = () => {
    const [value, setValue] = React.useState();
    let text;
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    if (value === "yes") {
        text = (
            <div>
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 2, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        required
                        id="outlined-textarea"
                        label="Company Name"
                        placeholder=""
                        variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        id="outlined-textarea"
                        label="Area of expertise"
                        placeholder=""
                        variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                        id="standard-number"
                        label="Number of years worked"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <p>* required</p>
                </Box>
            </div>
        );
    }
    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
                Do you have any previous work experience?
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>

            <div>
                <h1>If Yes, provide us the details</h1>
                {text}
            </div>
        </FormControl>
    );
};

export default ProfessionalInformation;
