import { createBrowserRouter } from "react-router-dom";
import Onboarding from "../pages/auth/OnboardingForm/Onboarding";
import Home from "../Home";
import OnboardingConfirmation from "../pages/auth/OnboardingForm/OnboardingConfirmation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/onboarding",
        element: <Onboarding />,
    },
    {
        path: "/onboarding/confirmation",
        element: <OnboardingConfirmation />,
    },
]);

export default router;
