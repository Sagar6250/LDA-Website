import React from "react";
import RootContainer from "../../components/layout/RootContainer";
import SigninPaper from "../../components/layout/SigninPaper";
import {
    TextField,
    Grid,
    Paper,
    Typography,
    Button,
    ButtonBase,
    ThemeProvider,
    Stack,
    Link,
} from "@mui/material";
import "../../index.css";
import { Link as RouterLink } from "react-router-dom";
import FormWrapper from "../../components/layout/FormWrapper";

const LoginScreen = () => {
    return (
        <RootContainer>
            {
                <Grid container spacing={6}>
                    <Grid item sm={6}>
                        <Paper sx={{ p: 3.5, borderRadius: 4 }} elevation={4}>
                            <FormWrapper
                                title={
                                    <div>
                                        Welcome{" "}
                                        <Typography
                                            display={"inline"}
                                            variant="h2"
                                            color="primary"
                                        >
                                            Back
                                        </Typography>
                                    </div>
                                }
                                sx={{ textAlign: "center" }}
                            >
                                <Grid item xs={16} sx={{ mt: 2.6 }}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Hey, Enter your details to login to your
                                        account
                                    </Typography>
                                </Grid>
                                <Grid item xs={16}>
                                    <Stack spacing={4} sx={{ mt: 3 }}>
                                        <TextField
                                            label="Enter Mobile/Email id"
                                            type=""
                                            fullWidth
                                        />
                                        <TextField
                                            label="Enter Password"
                                            fullWidth
                                            type="Password"
                                        />
                                        <Typography
                                            variant="body1"
                                            display={"flex"}
                                        >
                                            Having trouble signing in?
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={10} sx={{ mx: 7, mt: 5, mb: 2 }}>
                                    <Button variant="contained" fullWidth>
                                        Sign in
                                    </Button>
                                </Grid>

                                <Grid item xs={16}>
                                    <Typography variant="body1">
                                        Dont have an account?
                                        <Link
                                            component={RouterLink}
                                            href="#"
                                            underline="none"
                                        >
                                            {" "}
                                            Request Now
                                        </Link>
                                    </Typography>
                                </Grid>
                            </FormWrapper>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} sx={{ p: 4 }}>
                        pic
                    </Grid>
                </Grid>
            }
        </RootContainer>
    );
};

export default LoginScreen;
