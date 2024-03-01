import { FormLabel, Grid, TextField } from "@mui/material";
import FormWrapper from "../../../layout/FormWrapper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ProfessionalInformation = ({
    previousExperience,
    companyName,
    areaOfExpertise,
    yearsWorked,
    updateFields,
}) => {
    return (
        <FormWrapper title={"Professional Information"}>
            <Grid item xs={16}>
                <FormLabel>Do you have any previous work experience?</FormLabel>
            </Grid>
            <Grid item xs={16}>
                <RadioGroup
                    value={previousExperience}
                    onChange={(e) =>
                        updateFields({
                            previousExperience: e.target.value === "true",
                        })
                    }
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
            {previousExperience ? (
                <Grid container spacing={2}>
                    <Grid item xs={16}>
                        <FormLabel>If Yes, provide us the details</FormLabel>
                    </Grid>
                    <Grid item xs={16}>
                        <TextField
                            required
                            label="Company Name"
                            value={companyName}
                            onChange={(e) =>
                                updateFields({
                                    companyName: e.target.value,
                                })
                            }
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={16}>
                        <TextField
                            required
                            label="Area of expertise"
                            value={areaOfExpertise}
                            onChange={(e) =>
                                updateFields({
                                    areaOfExpertise: e.target.value,
                                })
                            }
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={16}>
                        <TextField
                            label="Number of years worked"
                            type="number"
                            fullWidth
                            required
                            value={yearsWorked}
                            onChange={(e) =>
                                updateFields({
                                    yearsWorked: e.target.value,
                                })
                            }
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            ) : (
                <></>
            )}
        </FormWrapper>
    );
};

export default ProfessionalInformation;
