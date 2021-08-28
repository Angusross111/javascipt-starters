import React, { Dispatch, createContext, useReducer, useContext, ReactNode, ReactElement } from "react";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { Platform, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

type AuthProviderProps = {
    children?: ReactNode;
};

type AuthType = {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | undefined;
    failedSignIn: boolean;
};
export enum Types {
    SignIn = "SIGN_IN",
    SignOut = "SIGN_OUT",
    RestoreToken = "RESTORE_TOKEN",
    SignInFailure = "SIGN_IN_FAILURE",
}
type UserActionType = {
    [Types.SignIn]: {
        token: string;
    };
    [Types.SignOut]: undefined;
    [Types.RestoreToken]: {
        token: string;
    };
    [Types.SignInFailure]: undefined;
};

interface LoginUserProps {
    authDispatch: Dispatch<AuthActions>;
    login: string;
    password: string;
}

type SignOutProps = {
    authDispatch: Dispatch<AuthActions>;
};

export type AuthActions = ActionMap<UserActionType>[keyof ActionMap<UserActionType>];

function userReducer(state: AuthType, action: AuthActions) {
    console.log(action.type);
    switch (action.type) {
        case Types.SignIn:
            return { ...state, isSignout: false, userToken: action.payload.token };
        case Types.SignOut:
            return { ...state, isSignout: true, userToken: undefined };
        case Types.RestoreToken:
            return { ...state, isLoading: false, userToken: action.payload.token };
        case Types.SignInFailure:
            return { ...state, isLoading: false, failedSignIn: true };
    }
}

const UserStateContext = createContext<AuthType | undefined>(undefined);
const authDispatchContext = createContext<Dispatch<AuthActions> | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps): ReactElement => {
    const [state, dispatch] = useReducer(userReducer, {
        isLoading: true,
        isSignout: false,
        userToken: undefined,
        failedSignIn: false,
    });
    return (
        <UserStateContext.Provider value={state}>
            <authDispatchContext.Provider value={dispatch}>{children}</authDispatchContext.Provider>
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

function signIn({ authDispatch, login, password }: LoginUserProps) {
    let url = `https://authentication.swarmfarm.com/authenticate`;
    const requestOptions: RequestInit = {
        method: "GET",
        mode: "cors",
        credentials: "include", // include, *same-origin, omit
        headers: {
            Authorization: `Basic ${base64_encode(`${login}:${password}`)}`,
            "Content-Type": "application/json",
        },
    };
    fetch(url, requestOptions)
        .then((response) => {
            console.log(Platform.OS);
            console.log(JSON.stringify(response));
            if (response.status == 200) {
                AsyncStorage.setItem("@login", login);

                authDispatch({ type: Types.SignIn, payload: { token: login } });
                return;
            }
            authDispatch({ type: Types.SignInFailure });
            return;
        })
        .catch((error) => {
            console.log(error);
            console.log("Login Error");
            authDispatch({ type: Types.SignInFailure });
        });
}

function signOut({ authDispatch }: SignOutProps) {
    const requestOptions: RequestInit = {
        method: "POST",
        mode: "no-cors", // no-cors, cors, *same-origin
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch("https://authentication.swarmfarm.com/logout", requestOptions).then(() => {});
    AsyncStorage.removeItem("@login");
    authDispatch({ type: Types.SignOut });
}

export { AuthProvider, useAuthState, useAuthDispatch, signIn, signOut };
