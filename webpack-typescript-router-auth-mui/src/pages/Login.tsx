import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import { useAuthState, useAuthDispatch, loginUser, Types } from "../context/AuthProvider";

import SFlogo from "../assets/SFlogo.svg";
const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
    },
    signIn: {
        margin: theme.spacing(3),
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(3, 0, 2),
    },
    image: {
        margin: theme.spacing(3),
        width: "250px",
    },
    error: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(3),
        background: "#eb6c63",
        borderColor: "black",
    },
}));

const Login = (props: any): React.ReactElement => {
    const classes = useStyles();
    //global
    const { failedLogin } = useAuthState();
    const { authDispatch } = useAuthDispatch();

    //local
    const [isLoading, setIsLoading] = useState(false);
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        loginUser({
            authDispatch,
            login: usernameValue,
            password: passwordValue,
            history: props.history,
            setIsLoading,
        });
    };
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <img className={classes.image} src={SFlogo} alt="Logo" />
                    {/* <SFlogo className={classes.image} /> */}
                    <Box mx="auto" p={2}>
                        <Typography component="h1" variant="h5" align="center">
                            Sign in to SwarmFarm
                        </Typography>
                    </Box>
                    {failedLogin ? (
                        <Paper className={classes.error}>
                            <Box p={2}>Incorrect username or password.</Box>
                            <Box p={1}>
                                <IconButton
                                    onClick={() =>
                                        authDispatch({
                                            type: Types.ClearLoginError,
                                        })
                                    }
                                    aria-label="clearError"
                                >
                                    <ClearIcon />
                                </IconButton>
                            </Box>
                        </Paper>
                    ) : (
                        ""
                    )}
                    <Paper className={classes.signIn}>
                        <Box mx="auto" p={2}>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Username"
                                    label="Username"
                                    autoComplete="email"
                                    autoFocus
                                    value={usernameValue}
                                    onChange={(e) => setUsernameValue(e.target.value)}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={passwordValue}
                                    onChange={(e) => setPasswordValue(e.target.value)}
                                />
                                <Grid container direction="column">
                                    <Grid item xs>
                                        {isLoading ? (
                                            <div className={classes.loading}>
                                                <CircularProgress size={26} />
                                            </div>
                                        ) : (
                                            <Button
                                                disabled={usernameValue.length === 0 || passwordValue.length === 0}
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                            >
                                                Sign In
                                            </Button>
                                        )}
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Paper>
                </div>

                <Box mt={2}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
};

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                sprayrecords.swarmfarm.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default Login;
