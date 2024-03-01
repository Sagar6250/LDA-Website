import React, { useState } from "react";
import {
    Drawer,
    Button,
    Typography,
    Box,
    Stepper,
    Step,
    StepLabel,
    Paper,
} from "@mui/material";
// import { Route, Routes, NavLink, Outlet } from "react-router-dom";
import { useOnboardingForm } from "../../../context/useOnboardingForm";
import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import Availability from "./Availability";
import VehicleInformation from "./VehicleInformation";

const INITIAL_DATA = {
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    previousExperience: false,
    experienceDetails: "",
    weeksAvailable: 0,
    workingHours: 0,
    vehicleType: "",
    vehicleRegistration: "",
};

const Onboarding = () => {
    const [data, setData] = useState(INITIAL_DATA);
    function updateFields(fields) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    }
    console.log(data);
    //Mobile View
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    //Stepper
    const { steps, activeStep, step, prev, next, isFirstStep, isLastStep } =
        useOnboardingForm([
            {
                element: (
                    <PersonalInformation
                        key={0}
                        {...data}
                        updateFields={updateFields}
                    />
                ),
                label: "Personal Information",
            },
            {
                element: (
                    <ProfessionalInformation
                        key={1}
                        {...data}
                        updateFields={updateFields}
                    />
                ),
                label: "Professional Information",
            },
            {
                element: (
                    <Availability
                        key={2}
                        {...data}
                        updateFields={updateFields}
                    />
                ),
                label: "Availability",
            },
            {
                element: (
                    <VehicleInformation
                        key={3}
                        {...data}
                        updateFields={updateFields}
                    />
                ),
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
            <Box
                component={Paper}
                elevation={0}
                sx={{ flexGrow: 1, height: "90vh" }}
            >
                <Box
                    sx={{
                        display: "flex",
                        position: "relative",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        {step.element}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                            }}
                        >
                            {!isFirstStep && (
                                <Button onClick={prev} type="button">
                                    Back
                                </Button>
                            )}
                            <Button type="button" onClick={next}>
                                {/*type="submit"*/}
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
