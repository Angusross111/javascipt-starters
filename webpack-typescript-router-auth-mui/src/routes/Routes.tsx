import React from "react";
import { Navigate, Link, Routes, Route } from "react-router-dom";

// import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
function Dashboard() {
    return <h1>Dashboard</h1>;
}
function Page2() {
    return <h1>Page 2</h1>;
}
// function Login() {
//     return <h1>Login</h1>;
// }
const PageNotFound = () => {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <h3>
                Go to <Link to="/"> Home page </Link>
            </h3>
        </div>
    );
};

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Navigate to="/login" />
            </Route>
            <PublicRoute path="/login" element={<Login />} />
            <PrivateRoute path="/dashboard" element={<Dashboard />} />
            <PrivateRoute path="/page2" element={<Page2 />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

const PrivateRoute = (props: any) => {
    const isUserLoggedIn = false;

    if (isUserLoggedIn) {
        return <Route {...props} />;
    }

    return <Navigate to="/login" />;
};

const PublicRoute = (props: any) => {
    const isUserLoggedIn = false;

    if (isUserLoggedIn) {
        return <Navigate to="/dashboard" />;
    }
    return <Route {...props} />;
};

export default AuthRoutes;
