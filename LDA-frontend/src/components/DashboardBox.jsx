import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import theme from "../theme/light";

export default function DashboardBox({ number, body }) {
    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                width: 230,
                height: 120,
                borderRadius: "10px",
                bgcolor: theme.palette.quaternary.main,
                color: theme.palette.quinary.main,
                "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                },
            }}
        >
            <AccessTimeIcon
                fontSize="large"
                sx={{
                    position: "absolute",
                    top: 40,
                    right: -20,
                    fontSize: "6rem",
                    opacity: 0.2,
                }}
            />
            <Box
                display={"flex"}
                sx={{ alignItems: "center", justifyItems: "flex-start", ml: 1 }}
            >
                <AccessTimeIcon fontSize="large" sx={{ marginLeft: "10px" }} />
                <Stack
                    spacing={1}
                    sx={{
                        ml: 2,
                        color: theme.palette.quinary.main,
                        alignItems: "flex-start",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ color: theme.palette.quinary.main }}
                    >
                        {number}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ color: theme.palette.quinary.main }}
                    >
                        {body}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}
