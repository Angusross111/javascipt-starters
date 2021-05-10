import React, {
    Dispatch,
    createContext,
    useReducer,
    useContext,
    ReactNode,
    ReactElement,
} from "react";

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
    navigate: any;
    setIsLoading: any;
}

type SignOutProps = {
    authDispatch: Dispatch<UserActionType>;
    navigate: any;
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
    navigate,
    setIsLoading,
}: LoginUserProps) {
    setIsLoading(true);

    // Do a fetch for auth with username and password here instead of the if statement
    if (login === "admin" && password === "password") {
        localStorage.setItem("login", login);
        authDispatch({ type: "LOGIN_SUCCESS" });
        setIsLoading(false);
        navigate("/app/dashboard");
        return;
    } else {
        authDispatch({ type: "LOGIN_FAILURE" });
        setIsLoading(false);
        return;
    }
}

function signOut({ authDispatch, navigate }: SignOutProps) {
    localStorage.removeItem("login");
    authDispatch({ type: "SIGN_OUT_SUCCESS" });
    navigate("/login");
}

export { AuthProvider, useAuthState, useAuthDispatch, loginUser, signOut };
