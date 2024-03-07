import {
    Box,
    Button,
    // Drawer,
    Grid,
    Paper,
    Stack,
    // Stepper,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        <Box component={Paper} elevation={3} sx={{ p: 5 }}>
            <Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 12 }}>
                {Object.entries(data).map(([key, value]) => (
                    <>
                        {value && (
                            <Grid key={key} item xs={2} sm={4} md={6}>
                                <Stack direction={"row"}>
                                    <Typography>
                                        {key
                                            .replace(/([A-Z])/g, " $1")
                                            .charAt(0)
                                            .toUpperCase() +
                                            key
                                                .replace(/([A-Z])/g, " $1")
                                                .slice(1)
                                                .toLowerCase()}
                                        :&nbsp;
                                    </Typography>
                                    <Typography fontWeight="bold">
                                        {String(value)}
                                    </Typography>
                                </Stack>
                            </Grid>
                        )}
                    </>
                ))}
            </Grid>
            <Button onClick={gotoEdit}>Edit</Button>
        </Box>
    );
};

export default OBConfirmation;
