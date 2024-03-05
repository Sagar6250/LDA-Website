import {
    Box,
    Button,
    Drawer,
    Paper,
    Stack,
    Stepper,
    Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// const title = [
//     "Personal Information",
//     "Professional Information",
//     "Availability",
//     "Vehicle Information",
// ];

const OBConfirmation = () => {
    // const location = useLocation();
    // const data = location.state;
    const data = JSON.parse(localStorage.getItem("formData"));
    console.log(data);
    const navigate = useNavigate();

    function gotoEdit(e) {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(data));
        navigate("/onboarding");
    }

    return (
        <Box sx={{}}>
            {Object.entries(data).map(([key, value]) => (
                <Stack key={key}>
                    {value && (
                        <>
                            <Typography variant="h3">{key}</Typography>
                            <Typography>{value}</Typography>
                        </>
                    )}
                </Stack>
            ))}
            <Button onClick={gotoEdit}>Edit</Button>
        </Box>
    );
};

export default OBConfirmation;
