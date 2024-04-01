import React from "react";
import RootContainer from "../../components/layout/RootContainer";
import coverImage from "../../assets/coverImage.png";
import {
    TextField,
    Grid,
    Paper,
    Typography,
    Button,
    ButtonBase,
    ThemeProvider,
    Box,
    Stack,
    Link,
} from "@mui/material";
import "../../index.css";
import { Link as RouterLink } from "react-router-dom";
import FormWrapper from "../../components/layout/FormWrapper";
import theme from "../../theme/light";

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
                                        <span
                                            style={{
                                                color: theme.palette.primary
                                                    .main,
                                            }}
                                        >
                                            Back
                                        </span>
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
                                    <Button
                                        component={RouterLink}
                                        to={"/dashboard"}
                                        variant="contained"
                                        fullWidth
                                    >
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
                    <Grid
                        item
                        sm={6}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            paddingRight: "20px",
                            paddingBottom: "0px",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{ textAlign: "left" }}
                            style={{
                                position: "absolute",
                                bottom: "55%",
                                right: "25%",
                            }}
                        >
                            Fueling your{" "}
                            <span style={{ color: theme.palette.primary.main }}>
                                logistics
                            </span>{" "}
                            <br />
                            chain!
                        </Typography>
                        <Box
                            sx={{
                                position: "relative",
                                width: "75%",
                                height: "75%",
                            }}
                        >
                            <img
                                src={coverImage}
                                alt="Example"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            }
        </RootContainer>
    );
};

export default LoginScreen;
