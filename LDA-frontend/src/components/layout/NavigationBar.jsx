import { AppBar, Avatar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";

const pagesArr = [
    {
        title: "Sign-in",
        link: "/onboarding",
    },
    {
        title: "Contact",
        link: "/",
    },
];

const NavigationBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                component={"nav"}
                // position="static"
                sx={{
                    minHeight: "5rem",
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
                            <Logo />
                        </Link>
                    </Box>
                    {pagesArr.map((page, i) => (
                        <Box key={i} sx={{ m: "1rem", p: "1rem" }}>
                            <Button
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
        </Box>
    );
};

export default NavigationBar;
