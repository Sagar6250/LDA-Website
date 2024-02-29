import React from "react";
import {
    Drawer,
    List,
    ListItem,
    Link,
    Button,
    Divider,
    ListItemText,
    ListItemButton,
    Typography,
    Toolbar,
    Container,
    Box,
    Stepper,
    Step,
    StepLabel,
    FormControl,
} from "@mui/material";
import { Route, Routes, NavLink, Outlet } from "react-router-dom";
import { useOnboardingForm } from "../../../context/useOnboardingForm";
import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import Availability from "./Availability";
import VehicleInformation from "./VehicleInformation";

const steps = [
    "Personal Information",
    "Professional Information",
    "Avialability",
    "Vehicle Information",
];

const Onboarding = () => {
    //Mobile View
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    //Stepper
    const { steps, activeStep, step, prev, next, isFirstStep, isLastStep } =
        useOnboardingForm([
            <PersonalInformation label={"Personal Information"} key={0} />,
            <ProfessionalInformation
                label={"Professional Information"}
                key={1}
            />,
            <Availability label={"Avialability"} key={2} />,
            <VehicleInformation label={"Vehicle Information"} key={3} />,
        ]);

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                sx={{
                    minWidth: "16rem",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        p: "2rem",
                        minWidth: "16rem",
                        // boxSizing: "border-box",
                    },
                }}
            >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step}>
                            <StepLabel
                                optional={
                                    index === 3 ? (
                                        <Typography variant="caption">
                                            Last step
                                        </Typography>
                                    ) : null
                                }
                            >
                                {step}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Drawer>
            <Box>
                <Box>
                    <FormControl>{step}</FormControl>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {!isFirstStep && (
                        <Button onClick={prev} type="button">
                            Back
                        </Button>
                    )}
                    <Button onClick={next}>
                        {isLastStep ? "Finish" : "Next"}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Onboarding;
