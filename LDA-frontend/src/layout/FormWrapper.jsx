import { Container, Grid } from "@mui/material";

const FormWrapper = ({ title, children }) => {
    return (
        <Container maxWidth="xs">
            <h2>{title}</h2>
            <Grid container spacing={2}>
                {children}{" "}
            </Grid>
        </Container>
    );
};

export default FormWrapper;
