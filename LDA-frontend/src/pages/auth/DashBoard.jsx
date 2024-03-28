import React from "react";
import RootContainer from "../../components/layout/RootContainer";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";

import CustomBox from "../../components/icons/CustomBox";
import Threebox from "../../components/icons/Threebox";

const DashBoard = () => {
    return (
        <RootContainer onlyText>
            <Drawer
                variant="permanent"
                sx={{
                    width: "20%",
                    flexShrink: 0,
                    ["& .MuiDrawer-paper"]: {
                        width: "20%",
                        boxSizing: "border-box",
                        // position: "relative",
                    },
                }}
                // anchor="left"
            >
                <Toolbar
                    variant="dense"
                    disableGutters
                    sx={{ minHeight: 117, height: 117 }}
                />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map(
                            (text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}
                    </List>
                </Box>
            </Drawer>
            <Box sx={{ ml: "20%", mt: 5 }}>
                <Threebox />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    ml: "20%",
                    mt: 5,
                    gap: "10%",
                }}
            >
                <CustomBox />
                <CustomBox />
                <CustomBox />
                <CustomBox />
            </Box>
            <Typography>Dashborad</Typography>
        </RootContainer>
    );
};

export default DashBoard;
