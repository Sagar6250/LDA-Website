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
            <Typography>Dashborad</Typography>
        </RootContainer>
    );
};

export default DashBoard;
