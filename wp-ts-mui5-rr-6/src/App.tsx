import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// Import Themes
import { themeLight } from "./themes/swarmfarmThemes";
// Import Routes
import AuthRoutes from "./routes/Routes";
// Import Context
import { LayoutProvider } from "./context/LayoutProvider";
import { AuthProvider } from "./context/AuthProvider";
const App = (): React.ReactElement => (
    <div>
        <LayoutProvider>
            <AuthProvider>
                <ThemeProvider theme={themeLight}>
                    <CssBaseline />
                    <AuthRoutes />
                </ThemeProvider>
            </AuthProvider>
        </LayoutProvider>
    </div>
);
export default App;
