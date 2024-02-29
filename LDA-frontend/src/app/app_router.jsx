import { createBrowserRouter } from "react-router-dom";
import Onboarding from "../pages/auth/OnboardingForm/Onboarding";
import Home from "../Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/onboarding",
        element: <Onboarding />,
    },
]);

export default router;
