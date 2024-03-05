import { createBrowserRouter } from "react-router-dom";
import OBForm from "../pages/auth/OnboardingForm/OBForm";
import Home from "../Home";
import OBConfirmation from "../pages/auth/OnboardingForm/OBConfirmation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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
