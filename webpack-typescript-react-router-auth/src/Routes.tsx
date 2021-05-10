import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
    Navigate,
    useNavigate,
    useRoutes,
    useLocation,
} from "react-router-dom";
import {
    useAuthState,
    loginUser,
    useAuthDispatch,
} from "./context/AuthProvider";

function Layout() {
    return <h1>This is the Layout</h1>;
}

function Login() {
    const navigate = useNavigate();
    const { authDispatch } = useAuthDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    function validateForm() {
        return usernameValue.length > 0 && passwordValue.length > 0;
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log("Submit");
        loginUser({
            authDispatch,
            login: usernameValue,
            password: passwordValue,
            navigate: navigate,
            setIsLoading,
        });
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={usernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </Form.Group>
                <Button block type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

const routes = [
    {
        path: "/app/*",
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
    },
    {
        path: "/",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
        children: [
            { path: "login", element: <Login /> },
            { path: "/", element: <Navigate to="/login" /> },
        ],
    },
];
function ProtectedRoute({ children }: any) {
    console.log("Protected");
    let { login } = useAuthState();
    const location = useLocation();
    console.log(login);
    return login ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
}
export function PublicRoute({ children }: any) {
    console.log("Public");
    let { login } = useAuthState();
    let location = useLocation();

    return login ? (
        <Navigate to="/app/dashboard" state={{ from: location }} />
    ) : (
        children
    );
}
function RoutePaths() {
    let routing = useRoutes(routes);
    return routing;
}
export default RoutePaths;
