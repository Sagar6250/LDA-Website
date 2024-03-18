import React from "react";
import RootContainer from "../../components/layout/RootContainer";
import {
    TextField,
    Grid,
    Paper,
    Typography,
    Button,
    ButtonBase,
} from "@mui/material";
import "../../index.css";

const LoginScreen = () => {
    return (
        <RootContainer>
            {
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Paper
                            sx={{
                                height: "35rem",
                                width: "5%",
                                padding: "16.7rem",
                                borderRadius: "5%",
                                position: "relative",
                                marginTop: "10px",
                            }}
                            elevation={5}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    position: "absolute",
                                    top: "50px",
                                    textAlign: "center",
                                    left: "2px",
                                    right: "15px",
                                }}
                            >
                                Welcome
                                <Typography
                                    variant="h2"
                                    sx={{
                                        display: "inline",
                                        color: "#FE910E",
                                        marginLeft: "10px",
                                    }}
                                >
                                    Back
                                </Typography>
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    position: "absolute",
                                    top: "110px",
                                    textAlign: "center",
                                    left: "5px",
                                    right: "10px",
                                    fontWeight: "bold",
                                }}
                            >
                                Hey, Enter your details to sign in to your
                                account
                            </Typography>
                            <div className="Sign-in">
                                <TextField
                                    id="outlined-basic"
                                    label="Enter mobile/Email"
                                    variant="outlined"
                                    disableGutters
                                    fullWidth
                                    sx={{ borderRadius: "2rem" }}
                                />

                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    disabledGutters
                                    fullWidth
                                    sx={{ mt: "1.5rem" }}
                                />
                            </div>
                            <Typography
                                variant="body2"
                                sx={{
                                    position: "absolute",
                                    bottom: "187px",
                                    left: "52px",
                                }}
                            >
                                Have trouble signing in?
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    position: "absolute",
                                    bottom: "80px",
                                    left: "120px",
                                    right: "120px",
                                }}
                            >
                                Sign In
                            </Button>
                            <Typography
                                variant="subtitle"
                                sx={{
                                    position: "absolute",
                                    bottom: "30px",
                                    left: "90px",
                                    right: "70px",
                                }}
                            >
                                Dont have an account?
                                <ButtonBase
                                    variant="text"
                                    sx={{ display: "inline" }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "#FE910E",
                                            display: "inline",
                                            padding: "7px",
                                        }}
                                    >
                                        Request Now
                                    </Typography>
                                </ButtonBase>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            }
        </RootContainer>
    );
};

export default LoginScreen;
