import React, {
    createContext,
    useContext,
    ReactElement,
    ReactNode,
    useReducer,
    Dispatch,
    useState,
} from "react";
type ChildrenProps = {
    children: ReactNode;
};
type SideBarType = {
    isSidebarOpened: boolean;
};

type LayoutActionType = {
    type: "TOGGLE_SIDEBAR";
};
const viewportContext = createContext<number | undefined>(undefined);

const LayoutStateContext = createContext<SideBarType | undefined>(undefined);

const LayoutDispatchContext = createContext<
    Dispatch<LayoutActionType> | undefined
>(undefined);

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
    const [width, setWidth] = useState(window.innerWidth);
    const [state, dispatch] = useReducer(layoutReducer, {
        isSidebarOpened: false,
    });
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={width}>
            <LayoutStateContext.Provider value={state}>
                <LayoutDispatchContext.Provider value={dispatch}>
                    {children}
                </LayoutDispatchContext.Provider>
            </LayoutStateContext.Provider>
        </viewportContext.Provider>
    );
};

const useLayoutWidth = () => {
    const width = useContext(viewportContext);
    return { width };
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
        throw new Error(
            "useLayoutDispatch must be used within a LayoutProvider"
        );
    }
    return context;
}
function toggleSidebar(dispatch: Dispatch<LayoutActionType>) {
    dispatch({
        type: "TOGGLE_SIDEBAR",
    });
}
export {
    LayoutProvider,
    useLayoutWidth,
    useLayoutState,
    useLayoutDispatch,
    toggleSidebar,
};
