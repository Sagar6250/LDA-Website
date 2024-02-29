import { Grid, Select, OutlinedInput, TextField, MenuItem } from "@mui/material";
import FormWrapper from "../../../layout/FormWrapper";
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const vehicleTypes = [
    'Car',
    'Truck',
    'Bus', 
    'Auto', 
    'Motorcycle',
    'None'
  ];
const VehicleInformation = () => {
    
        const [vehicleType, setVehicleType] = React.useState([]);
      
        const handleChange = (event) => {
          const {
            target: { value },
          } = event;
          setVehicleType(
            typeof value === 'string' ? value.split(',') : value,
          );
        };

    return (
        <FormWrapper title={"VEHICLE INFORMATION"}>
            <Grid item xs={16}>
                <Select
                labelId="vehicle-types-label"
                id="vehicle-types"
                single
                value={vehicleType}
                onChange={handleChange}
                input={<OutlinedInput label="Vehicle Type" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {vehicleTypes.map((vehicle) => (
                <MenuItem key={vehicle} value={vehicle}>
                    {vehicle}
            </MenuItem>
          ))}
                </Select>
            </Grid>
            <Grid item xs={16}>
                <TextField
                    id="Vehicle Registration Number"
                    label="Vehicle Registration Number"
                    required
                    // placeholder="Enter your phone number here"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            </FormWrapper>
    ); 
};

export default VehicleInformation;

