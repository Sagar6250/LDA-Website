import { Box, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <Box>
            <Link component={NavLink} to="/onboarding">
                Onboarding
            </Link>
        </Box>
    );
};

export default Home;
