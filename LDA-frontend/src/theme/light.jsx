import { createTheme, hexToRgb, outlinedInputClasses } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FE910E",
        },
        secondary: {
            main: "#FEC887",
        },
        tertiary: {
            main: "#F6F2EB",
            light: "#F6F2EB35",
        },
        quaternary: {
            main: "#FFB55C",
        },
        quinary: {
            main: "#FFFFFF",
        },
    },

    typography: {
        allVariants: {
            color: "#000000",
        },
        h1: {
            fontFamily: "Righteous",
            fontSize: "2rem",
            // fontWeight: "bold",
        },
        h2: {
            fontFamily: "Righteous",
            fontSize: "1.875rem",
            // fontWeight: "bold",
        },
        h3: {
            fontFamily: "Righteous",
            fontSize: "1.5rem",
            // fontWeight: "bold",
        },
        body1: {
            fontFamily: "Roboto Condensed",
            fontSize: "1.0625rem",
        },
        body2: {
            fontFamily: "Roboto Condensed",
            fontSize: "1rem",
        },
        button: {
            fontFamily: "Roboto Condensed",
            fontSize: "1rem",
            // fontWeight: "bold",
        },
    },
});

theme.palette = {
    ...theme.palette,
    background: {
        default: theme.palette.quinary.main,
        paper: theme.palette.tertiary.light,
    },
};

theme.components = {
    ...theme.components,
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: "none",
                boxShadow: "0px 0px 0px",
                padding: "0.8rem 1.5rem",
                borderRadius: "10px",
                color: theme.typography.allVariants.color,
            },
            contained: {
                backgroundColor: theme.palette.secondary.main,

                "&:hover": {
                    boxShadow: "0px 0px 0px",
                    backgroundColor: theme.palette.primary.main,
                },
            },
            text: {},
            outlined: {
                color: theme.palette.secondary.main,
                outline: "3px solid" + theme.palette.secondary.main,
                outlineOffset: "-3px",
                "&:hover": {
                    outline: "3px solid" + theme.palette.secondary.main,
                },
            },
        },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                borderRadius: "10px",
                borderColor: theme.palette.secondary.main,
                "& label": {
                    color: "#555555",
                },
                "& label.Mui-shrink": {
                    color: theme.palette.secondary.main,
                },
            },
        },
        defaultProps: {
            InputProps: {
                disableUnderline: true,
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            notchedOutline: {
                borderColor: theme.palette.secondary.main,
            },
            root: {
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.secondary.main,
                },
                [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.secondary.main,
                },
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                background: theme.palette.quinary.main,
                color: theme.palette.secondary.dark,
                // boxShadow: `0px 0px 0px `,
            },
        },
    },
};

export default theme;
