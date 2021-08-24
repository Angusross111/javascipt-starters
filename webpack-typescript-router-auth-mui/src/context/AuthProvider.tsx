import React, {
    Dispatch,
    createContext,
    useReducer,
    useContext,
    ReactNode,
    ReactElement,
} from "react";
import { decode as base64_decode, encode as base64_encode } from "base-64";

type AuthProviderProps = {
    children: ReactNode;
};

type AuthType = {
    login: boolean;
    failedLogin: boolean;
};
export enum Types {
    Login = "LOGIN_SUCCESS",
    LoginFailure = "LOGIN_FAILURE",
    SignOut = "SIGN_OUT_SUCCESS",
    RefreshExpired = "REFRESH_EXPIRED",
    ClearLoginError = "CLEARLOGINERROR",
}
type UserActionType = {
    type:
        | "LOGIN_SUCCESS"
        | "LOGIN_FAILURE"
        | "SIGN_OUT_SUCCESS"
        | "REFRESH_EXPIRED"
        | "CLEARLOGINERROR";
};

interface LoginUserProps {
    authDispatch: Dispatch<UserActionType>;
    login: string;
    password: string;
    history: any;
    setIsLoading: any;
}

type SignOutProps = {
    authDispatch: Dispatch<UserActionType>;
    history: any;
};
function userReducer(state: AuthType, action: UserActionType) {
    console.log(action.type);
    switch (action.type) {
        case Types.Login:
            return { ...state, login: true, failedLogin: false };
        case Types.LoginFailure:
            return { ...state, login: false, failedLogin: true };
        case Types.SignOut:
            return { ...state, login: false, failedLogin: false };
        case Types.RefreshExpired:
            return { ...state, login: false };
        case Types.ClearLoginError:
            return { ...state, failedLogin: false };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

const UserStateContext = createContext<AuthType | undefined>(undefined);
const authDispatchContext = createContext<Dispatch<UserActionType> | undefined>(
    undefined
);

const AuthProvider = ({ children }: AuthProviderProps): ReactElement => {
    const [state, dispatch] = useReducer(userReducer, {
        login: !!localStorage.getItem("login"),
        failedLogin: false,
    });
    return (
        <UserStateContext.Provider value={state}>
            <authDispatchContext.Provider value={dispatch}>
                {children}
            </authDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

function useAuthState() {
    const context = useContext(UserStateContext);
    if (context === undefined) {
        throw new Error("useUserState must be used within a UserProvider");
    }
    return context;
}

function useAuthDispatch() {
    const context = useContext(authDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within a UserProvider");
    }
    return { authDispatch: context };
}

function loginUser({
    authDispatch,
    login,
    password,
    history,
    setIsLoading,
}: LoginUserProps) {
    setIsLoading(true);

    let url = `/auth/authenticate`;
    const requestOptions: RequestInit = {
        method: "GET",
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
            Authorization: `Basic ${base64_encode(`${login}:${password}`)}`,
            "Content-Type": "application/json",
        },
    };
    fetch(url, requestOptions)
        .then((response) => {
            if (response.status == 200) {
                localStorage.setItem("login", login);

                authDispatch({ type: "LOGIN_SUCCESS" });
                setIsLoading(false);
                history.push("/app/dashboard");
                return;
            }
            authDispatch({ type: "LOGIN_FAILURE" });
            setIsLoading(false);
            return;
        })
        .catch((error) => {
            console.log(error);
            console.log("Login Error");
            authDispatch({ type: "LOGIN_FAILURE" });
            setIsLoading(false);
        });
}

function signOut({ authDispatch, history }: SignOutProps) {
    const requestOptions: RequestInit = {
        method: "POST",
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch("/auth/logout", requestOptions).then(() => {});
    localStorage.removeItem("login");
    localStorage.removeItem("period");
    localStorage.removeItem("interval");

    authDispatch({ type: "SIGN_OUT_SUCCESS" });
    history.push("/login");
}

export { AuthProvider, useAuthState, useAuthDispatch, loginUser, signOut };
