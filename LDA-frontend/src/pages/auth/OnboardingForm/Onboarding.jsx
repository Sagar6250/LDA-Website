import React from "react";
import {
    Drawer,
    Button,
    Typography,
    Box,
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";
// import { Route, Routes, NavLink, Outlet } from "react-router-dom";
import { useOnboardingForm } from "../../../context/useOnboardingForm";
import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import Availability from "./Availability";
import VehicleInformation from "./VehicleInformation";

const Onboarding = () => {
    //Mobile View
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    //Stepper
    const { steps, activeStep, step, prev, next, isFirstStep, isLastStep } =
        useOnboardingForm([
            {
                element: <PersonalInformation key={0} />,
                label: "Personal Information",
            },
            {
                element: <ProfessionalInformation key={1} />,
                label: "Professional Information",
            },
            { element: <Availability key={2} />, label: "Avialability" },
            {
                element: <VehicleInformation key={3} />,
                label: "Vehicle Information",
            },
        ]);

    function handleSubmit(event) {
        event.preventDefault();
        next();
    }

    return (
        // <Container maxWidth="xl" disableGutters sx={{ mt: "7rem" }}>
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                sx={{
                    minWidth: "40%",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        justifyContent: "center",
                        alignItems: "center",
                        p: "2rem",
                        minWidth: "40%",
                        boxSizing: "border-box",
                        border: "0",
                    },
                }}
            >
                <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    sx={{
                        "& .MuiStepConnector-line": {
                            minHeight: "40px",
                        },
                    }}
                >
                    {steps.map((step, index) => (
                        <Step key={step}>
                            <StepLabel
                                optional={
                                    index === steps.length - 1 ? (
                                        <Typography variant="caption">
                                            Last step
                                        </Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Box>
                    <form onSubmit={handleSubmit}>
                        {step.element}
                        <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            {!isFirstStep && (
                                <Button onClick={prev} type="button">
                                    Back
                                </Button>
                            )}
                            <Button type="button" onClick={next}>
                                {isLastStep ? "Finish" : "Next"}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
        // </Container>
    );
};

export default Onboarding;
