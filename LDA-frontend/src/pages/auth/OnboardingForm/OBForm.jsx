import { useEffect, useState } from "react";
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
import PersonalInformation from "./FormScreens/PersonalInformation";
import ProfessionalInformation from "./FormScreens/ProfessionalInformation";
import Availability from "./FormScreens/Availability";
import VehicleInformation from "./FormScreens/VehicleInformation";
import { useNavigate } from "react-router-dom";

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
    companyName: "",
    areaOfExpertise: "",
    yearsWorked: null,
    daysAvailable: [],
    workingHours: "",
    vehicleType: "",
    vehicleRegistration: "",
};

const OBForm = () => {
    window.onbeforeunload = function (e) {
        localStorage.clear();
    };

    const [data, setData] = useState(
        localStorage.getItem("formData")
            ? JSON.parse(localStorage.getItem("formData"))
            : INITIAL_DATA
    );
    function updateFields(fields) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    }
    console.log(JSON.parse(localStorage.getItem("formData")));
    //Mobile View
    // const [open, setOpen] = React.useState(false);

    // const toggleDrawer = (newOpen) => () => {
    //     setOpen(newOpen);
    // };

    //Stepper
    const {
        steps,
        activeStep,
        step,
        prev,
        next,
        // goto,
        isFirstStep,
        isLastStep,
    } = useOnboardingForm([
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
                <Availability key={2} {...data} updateFields={updateFields} />
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

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (!isLastStep) return next();
        localStorage.setItem("formData", JSON.stringify(data));
        navigate("/onboarding/confirmation", { state: data });
    }

    return (
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
                                // onClick={() => goto(index)}
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
            <Box sx={{ flexGrow: 1, height: "90vh" }}>
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
                            <Button type="submit">
                                {/*type="button" onClick={next}*/}
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

export default OBForm;
