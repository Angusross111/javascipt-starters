import React, { createContext, useContext, ReactElement, ReactNode, useReducer, Dispatch, useState } from "react";
type ChildrenProps = {
    children: ReactNode;
};
type SideBarType = {
    isSidebarOpened: boolean;
};

type LayoutActionType = {
    type: "TOGGLE_SIDEBAR";
};
type WidthHeightType = {
    width: number;
    height: number;
};
const viewportContext = createContext<WidthHeightType | undefined>(undefined);

const LayoutStateContext = createContext<SideBarType | undefined>(undefined);

const LayoutDispatchContext = createContext<Dispatch<LayoutActionType> | undefined>(undefined);

function layoutReducer(state: SideBarType, action: LayoutActionType) {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return { ...state, isSidebarOpened: !state.isSidebarOpened };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

const LayoutProvider = ({ children }: ChildrenProps): ReactElement => {
    const [dimState, setDimState] = useState({ width: window.innerWidth, height: window.screen.availHeight });

    const [state, dispatch] = useReducer(layoutReducer, {
        isSidebarOpened: false,
    });
    const handleWindowResize = () => {
        setDimState({ width: window.innerWidth, height: window.screen.availHeight });
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={dimState}>
            <LayoutStateContext.Provider value={state}>
                <LayoutDispatchContext.Provider value={dispatch}>{children}</LayoutDispatchContext.Provider>
            </LayoutStateContext.Provider>
        </viewportContext.Provider>
    );
};

const useLayoutDim = () => {
    const dimState = useContext(viewportContext);
    return { dimState };
};

function useLayoutState() {
    const context = useContext(LayoutStateContext);
    if (context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }
    return context;
}

function useLayoutDispatch() {
    const context = useContext(LayoutDispatchContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}
function toggleSidebar(dispatch: Dispatch<LayoutActionType>) {
    dispatch({
        type: "TOGGLE_SIDEBAR",
    });
}
export { LayoutProvider, useLayoutDim, useLayoutState, useLayoutDispatch, toggleSidebar };
