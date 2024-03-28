import * as React from "react";
import { Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import theme from "../../theme/light";

export default function CustomBox() {
    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                width: 200,
                height: 100,
                borderRadius: 1,
                bgcolor: theme.palette.quaternary.main,
                color: "white",
                "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                },
            }}
        >
            <AccessTimeIcon
                fontSize="large"
                sx={{
                    position: "absolute",
                    top: 20,
                    right: -20,
                    fontSize: "6rem",
                    opacity: 0.2,
                }}
            />
            <div>
                <AccessTimeIcon fontSize="large" sx={{ marginLeft: "10px" }} />
            </div>
        </Box>
    );
}
