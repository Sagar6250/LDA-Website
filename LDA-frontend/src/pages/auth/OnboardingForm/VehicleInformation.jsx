import {
    Grid,
    Select,
    // OutlinedInput,
    TextField,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import FormWrapper from "../../../layout/FormWrapper";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import React from "react";

const vehicleTypes = ["Car", "Truck", "Bus", "Auto", "Motorcycle", "None"];


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="AA 99 AA 9999"
            definitions={{
                'A': /[A-Z]/,
                '9': /[0-9]/
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

const VehicleInformation = ({
    vehicleType,
    vehicleRegistration,
    updateFields,
}) => {
    return (
        <FormWrapper title={"Vehicle Information"}>
            <Grid item xs={16}>
                <FormControl required fullWidth>
                    <InputLabel id="vehicle-type">Vehicle Type</InputLabel>
                    <Select
                        labelId="vehicle-type"
                        label="Vehicle Type"
                        value={vehicleType}
                        onChange={(e) =>
                            updateFields({ vehicleType: e.target.value })
                        }
                        // multiple
                        // input={<OutlinedInput label="Vehicle Type" />}
                        // renderValue={(selected) => selected.join(", ")}
                    >
                        {vehicleTypes.map((vehicle) => (
                            <MenuItem key={vehicle} value={vehicle}>
                                {vehicle}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            {!(vehicleType === "None" || vehicleType === "") && (
                <Grid item xs={16}>
                    <TextField
                        id="Vehicle Registration Number"
                        label="Vehicle Registration Number"
                        required
                        InputProps={{
                            inputComponent: TextMaskCustom,
                        }}
                        value={vehicleRegistration}
                        onChange={(e) =>
                            updateFields({
                                vehicleRegistration: e.target.value,
                            })
                        }
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
            )}
        </FormWrapper>
    );
};

export default VehicleInformation;
