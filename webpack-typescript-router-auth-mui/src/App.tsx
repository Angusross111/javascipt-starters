import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
// Import Themes
import { themeLight, themeDark } from "./themes/swarmfarmThemes";
// Import Routes
import AuthRoutes from "./routes/Routes";
// Import Context
import { LayoutProvider } from "./context/LayoutProvider";
import { AuthProvider } from "./context/AuthProvider";

const App = (): React.ReactElement => {
    const [light, setLight] = useState(true);
    return (
        <div>
            <LayoutProvider>
                <AuthProvider>
                    <MuiThemeProvider theme={light ? themeLight : themeDark}>
                        <CssBaseline />
                        <AuthRoutes />
                    </MuiThemeProvider>
                </AuthProvider>
            </LayoutProvider>
        </div>
    );
};
export default App;
