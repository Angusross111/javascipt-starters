import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";
import type {} from "@mui/lab/themeAugmentation";
const breakpoints = createBreakpoints({});

const themeLight = createTheme({
    typography: {
        h6: {
            fontSize: "1.0rem",
            "@media (min-width:600px)": {
                fontSize: "1.3rem",
            },
            [breakpoints.up("md")]: {
                fontSize: "1.5rem",
            },
        },
        h1: {
            fontSize: "1.6rem",
            "@media (min-width:600px)": {
                fontSize: "3.0rem",
            },
        },
    },
    palette: {
        background: {
            default: "#E8E8E8",
        },
        primary: { main: "#F49424" },
        secondary: { main: "#ffffff" },
        text: {
            primary: "#303030",
            secondary: "#000000",
        },
    },
});

export { themeLight };
