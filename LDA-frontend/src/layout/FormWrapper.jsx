import { Container, Grid, Typography } from "@mui/material";

const FormWrapper = ({ title, children }) => {
    return (
        <Container maxWidth="xs">
            <Typography variant="h2" sx={{ mb: "1.5rem" }}>
                {title}
            </Typography>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </Container>
    );
};

export default FormWrapper;
