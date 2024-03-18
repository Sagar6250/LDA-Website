import { createBrowserRouter } from "react-router-dom";
import OBForm from "../pages/auth/OnboardingForm/OBForm";
import Home from "../Home";
import OBConfirmation from "../pages/auth/OnboardingForm/OBConfirmation";
import LoginScreen from "../pages/auth/LoginScreen";
import DashBoard from "../pages/auth/DashBoard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginScreen />,
    },
    {
        path: "/dashboard",
        element: <DashBoard />,
    },
    {
        path: "/onboarding",
        element: <OBForm />,
    },
    {
        path: "/onboarding/confirmation",
        element: <OBConfirmation />,
    },
]);

export default router;
