import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
            />
            <Route path="/app" element={<Navigate to="/app/dashboard" />} />
            <Route
                path="/app/*"
                element={
                    <PrivateRoute>
                        <PrivateRoutes />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

function useAuth() {
    return false;
}
const PublicRoute = ({ children }: { children: JSX.Element }) => {
    let auth = useAuth();
    console.log(auth);
    if (auth) {
        return <Navigate to="/app" />;
    }
    return children;
};
function PrivateRoute({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();
    console.log(auth);
    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}

function LoginPage() {
    return <div>Login</div>;
}
function Dashboard() {
    return <div>Dashboard</div>;
}
function Page2() {
    return <div>Monitoring</div>;
}
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

function PrivateRoutes() {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="monitoring" element={<Page2 />} />
        </Routes>
    );
}
