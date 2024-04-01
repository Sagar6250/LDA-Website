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
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import DashboardBox from "../../components/DashboardBox";

const statistics = [
    {
        number: "10",
        name: "Today",
        comparison: false,
    },
    {
        number: "13",
        name: "Yesterday",
    },
    {
        number: "53",
        name: "Week",
        comparison: true,
    },
    {
        number: "23",
        name: "Pre Week",
    },
    {
        number: "13",
        name: "Month",
        comparison: false,
    },
    {
        number: "21",
        name: "Pre Month",
    },
];

const pendingList = [
    {
        number: "10",
        name: "Pending",
    },
    {
        number: "13",
        name: "Assigned",
    },

    {
        number: "23",
        name: "Picked Up",
    },
    {
        number: "21",
        name: "Delivered",
    },
];

const DashBoard = () => {
    return (
        <RootContainer onlyText>
            <Drawer
                variant="permanent"
                sx={{
                    minWidth: "20%",
                    flexShrink: 0,
                    ["& .MuiDrawer-paper"]: {
                        minWidth: "20%",
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
            <Box sx={{ ml: "20%" }}>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    divider={
                        <Divider
                            variant="fullWidth"
                            orientation="vertical"
                            flexItem
                            sx={{
                                borderColor: "#FFB55C",
                                borderRightWidth: "2px",
                                display: "none",
                                "&:nth-child(4n)": { display: "block" },
                            }}
                        />
                    }
                    sx={{
                        border: "2px solid #FFB55C",
                        borderRadius: "10px",
                        mb: 5,
                    }}
                >
                    {statistics.map((stat, index) => (
                        <Box key={index} sx={{ p: 3 }}>
                            <Typography
                                inline
                                variant="h2"
                                sx={{ color: "#22A900", mb: 0.4 }}
                            >
                                {stat.number}
                                {index % 2 === 0 && (
                                    <Box sx={{ display: "inline" }}>
                                        {stat.comparison ? (
                                            <ArrowUpwardSharpIcon
                                                style={{ color: "green" }}
                                            />
                                        ) : (
                                            <ArrowDownwardSharpIcon
                                                style={{ color: "red" }}
                                            />
                                        )}
                                    </Box>
                                )}
                            </Typography>
                            <Typography variant="h3">{stat.name}</Typography>
                        </Box>
                    ))}
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {pendingList.map((information, index) => (
                        <DashboardBox
                            key={index}
                            number={information.number}
                            body={information.name}
                        />
                    ))}
                </Stack>
            </Box>
        </RootContainer>
    );
};

export default DashBoard;
