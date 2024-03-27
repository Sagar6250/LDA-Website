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
} from "@mui/material";
import "../../index.css";

const LoginScreen = () => {
    return (
        <RootContainer>
            {
                <Grid container spacing={6}>
                    <Grid item sm={6}>
                        <SigninPaper/>
                    </Grid>
                    <Grid item sm={6} sx={{p:4}}>pic</Grid>
                </Grid>
            }
        </RootContainer>
    );
};

export default LoginScreen;
