import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import styled from "@emotion/styled";

const pagesArr = [
    {
        title: "Sign-in",
        link: "/onboarding",
        variant: "text",
    },
    {
        title: "Contact Us",
        link: "/",
        variant: "contained",
    },
];

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const NavigationBar = ({ onlyText = false }) => {
    return (
        <AppBar
            // component={"nav"}
            elevation={onlyText ? 3 : 0}
            position="fixed"
            // position="static"
            sx={{
                minHeight: "5rem",
                zIndex: 1400,
            }}
        >
            <Toolbar>
                <Box
                    component="div"
                    sx={{
                        flexGrow: 1,
                        m: "1rem",
                        textAlign: "left",
                    }}
                >
                    <Link to="/">
                        <Logo onlyText={onlyText} />
                    </Link>
                </Box>
                {pagesArr.map((page, i) => (
                    <Box key={i} sx={{ m: "1rem", p: "1rem" }}>
                        <Button
                            variant={page.variant}
                            component={Link}
                            to={page.link}
                            sx={{ mx: "0.1rem" }}
                        >
                            {page.title}
                        </Button>
                    </Box>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
