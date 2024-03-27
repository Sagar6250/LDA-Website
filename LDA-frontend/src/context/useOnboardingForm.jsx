import { useState } from "react";

export function useOnboardingForm(steps) {
    const [activeStep, setActiveStep] = useState(0);
    const next = () => {
        setActiveStep((prevActiveStep) => {
            if (prevActiveStep >= steps.length - 1) return prevActiveStep;
            return prevActiveStep + 1;
        });
    };

    const prev = () => {
        setActiveStep((prevActiveStep) => {
            if (prevActiveStep <= 0) return prevActiveStep;
            return prevActiveStep - 1;
        });
    };

    const goto = (index) => {
        setActiveStep(index);
    };

    return {
        activeStep,
        step: steps[activeStep],
        steps,
        next,
        prev,
        goto,
        isFirstStep: activeStep === 0,
        isLastStep: activeStep === steps.length - 1,
    };
}
