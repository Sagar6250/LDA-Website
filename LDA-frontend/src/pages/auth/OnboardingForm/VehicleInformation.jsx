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

const vehicleTypes = ["Car", "Truck", "Bus", "Auto", "Motorcycle", "None"];

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
            <Grid item xs={16}>
                <TextField
                    id="Vehicle Registration Number"
                    label="Vehicle Registration Number"
                    required
                    value={vehicleRegistration}
                    onChange={(e) =>
                        updateFields({ vehicleRegistration: e.target.value })
                    }
                    fullWidth
                    variant="outlined"
                />
            </Grid>
        </FormWrapper>
    );
};

export default VehicleInformation;
