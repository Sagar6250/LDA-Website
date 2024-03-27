import { Container, Toolbar } from "@mui/material";
import NavigationBar from "./NavigationBar";

const RootContainer = ({ children, onlyText }) => {
    return (
        <>
            <NavigationBar onlyText={onlyText} />
            <Toolbar
                variant="dense"
                disableGutters
                sx={{ minHeight: 117, height: 117 }}
            />
            <Container maxWidth="xl" disableGutters>
                {children}
            </Container>
        </>
    );
};

export default RootContainer;
