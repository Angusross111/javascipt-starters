import * as React from "react";
import { Provider } from "react-native-paper";
import { theme } from "./src/core/theme";
import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/AuthProvider";

export default function App() {
    return (
        <AuthProvider>
            <Provider theme={theme}>
                <Navigation />
            </Provider>
        </AuthProvider>
    );
}
