import React from "react";
import RoutePaths from "./Routes";
import { AuthProvider } from "./context/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <RoutePaths />
        </AuthProvider>
    );
}
export default App;
