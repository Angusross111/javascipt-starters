import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
// Import Themes
import { themeLight, themeDark } from "./themes/swarmfarmThemes";
// Import Routes
import Routes from "./routes/Routes";

const App = (): React.ReactElement => {
    const [light, setLight] = useState(true);

    return (
        <div>
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
                <CssBaseline />
                <Routes />
            </MuiThemeProvider>
        </div>
    );
};
export default App;
