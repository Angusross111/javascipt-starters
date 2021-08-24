"use strict";
self["webpackHotUpdatewebpack_typescript_router_auth_mui"]("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// import React, { useState } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// // Import Themes
// import { themeLight, themeDark } from "./themes/swarmfarmThemes";
// // Import Routes
// import { useRoutes } from "react-router-dom";
// import routes from "./routes/Routes";
// // Import Context
// import { LayoutProvider } from "./context/LayoutProvider";
// import { AuthProvider } from "./context/AuthProvider";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// const App = (): React.ReactElement => {
//     const [light, setLight] = useState(true);
//     const routing = useRoutes(routes);
//     return routing;
//     // return (
//     //     <div>
//     //         <LayoutProvider>
//     //             <AuthProvider>
//     //                 <MuiThemeProvider theme={light ? themeLight : themeDark}>
//     //                     <CssBaseline />
//     //                     {routing}
//     //                 </MuiThemeProvider>
//     //             </AuthProvider>
//     //         </LayoutProvider>
//     //     </div>
//     // );
// };
// export default App;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
// Import Routes
var Routes_1 = __importDefault(__webpack_require__(/*! ./routes/Routes */ "./src/routes/Routes.tsx"));
// Import Context
var LayoutProvider_1 = __webpack_require__(/*! ./context/LayoutProvider */ "./src/context/LayoutProvider.tsx");
var App = function () {
    var _a = react_1.useState(true), light = _a[0], setLight = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(LayoutProvider_1.LayoutProvider, null,
            react_1.default.createElement(Routes_1.default, null))));
};
exports.default = App;


/***/ }),

/***/ "./src/context/LayoutProvider.tsx":
/*!****************************************!*\
  !*** ./src/context/LayoutProvider.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleSidebar = exports.useLayoutDispatch = exports.useLayoutState = exports.useLayoutWidth = exports.LayoutProvider = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var viewportContext = react_1.createContext(undefined);
var LayoutStateContext = react_1.createContext(undefined);
var LayoutDispatchContext = react_1.createContext(undefined);
function layoutReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return __assign(__assign({}, state), { isSidebarOpened: !state.isSidebarOpened });
        default: {
            throw new Error("Unhandled action type: " + action.type);
        }
    }
}
var LayoutProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(window.innerWidth), width = _b[0], setWidth = _b[1];
    var _c = react_1.useReducer(layoutReducer, {
        isSidebarOpened: false,
    }), state = _c[0], dispatch = _c[1];
    var handleWindowResize = function () {
        setWidth(window.innerWidth);
    };
    react_1.default.useEffect(function () {
        window.addEventListener("resize", handleWindowResize);
        return function () { return window.removeEventListener("resize", handleWindowResize); };
    }, []);
    return (react_1.default.createElement(viewportContext.Provider, { value: width },
        react_1.default.createElement(LayoutStateContext.Provider, { value: state },
            react_1.default.createElement(LayoutDispatchContext.Provider, { value: dispatch }, children))));
};
exports.LayoutProvider = LayoutProvider;
var useLayoutWidth = function () {
    var width = react_1.useContext(viewportContext);
    return { width: width };
};
exports.useLayoutWidth = useLayoutWidth;
function useLayoutState() {
    var context = react_1.useContext(LayoutStateContext);
    if (context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }
    return context;
}
exports.useLayoutState = useLayoutState;
function useLayoutDispatch() {
    var context = react_1.useContext(LayoutDispatchContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}
exports.useLayoutDispatch = useLayoutDispatch;
function toggleSidebar(dispatch) {
    dispatch({
        type: "TOGGLE_SIDEBAR",
    });
}
exports.toggleSidebar = toggleSidebar;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f349ca4c9d917420824a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNmUyOTU1ZjI2YmE2ZGFiNGVkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0MsZ0JBQWdCO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELCtCQUErQjtBQUNsRjtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDRDQUFPO0FBQzFDO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3hEO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMsa0VBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7Ozs7O0FDaEVGO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9DQUFvQyxnQkFBZ0I7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUIsR0FBRyx5QkFBeUIsR0FBRyxzQkFBc0IsR0FBRyxzQkFBc0IsR0FBRyxzQkFBc0I7QUFDNUgsMkJBQTJCLG1CQUFPLENBQUMsNENBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVkseUNBQXlDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsS0FBSztBQUNMLHNFQUFzRSxjQUFjO0FBQ3BGLHFFQUFxRSxjQUFjO0FBQ25GLDRFQUE0RSxpQkFBaUI7QUFDN0Y7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQkFBcUI7Ozs7Ozs7OztVQzFGckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9jb250ZXh0L0xheW91dFByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuLy8gaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIC8vIEltcG9ydCBUaGVtZXNcbi8vIGltcG9ydCB7IHRoZW1lTGlnaHQsIHRoZW1lRGFyayB9IGZyb20gXCIuL3RoZW1lcy9zd2FybWZhcm1UaGVtZXNcIjtcbi8vIC8vIEltcG9ydCBSb3V0ZXNcbi8vIGltcG9ydCB7IHVzZVJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlcy9Sb3V0ZXNcIjtcbi8vIC8vIEltcG9ydCBDb250ZXh0XG4vLyBpbXBvcnQgeyBMYXlvdXRQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvTGF5b3V0UHJvdmlkZXJcIjtcbi8vIGltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvQXV0aFByb3ZpZGVyXCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIGNvbnN0IEFwcCA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuLy8gICAgIGNvbnN0IFtsaWdodCwgc2V0TGlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4vLyAgICAgY29uc3Qgcm91dGluZyA9IHVzZVJvdXRlcyhyb3V0ZXMpO1xuLy8gICAgIHJldHVybiByb3V0aW5nO1xuLy8gICAgIC8vIHJldHVybiAoXG4vLyAgICAgLy8gICAgIDxkaXY+XG4vLyAgICAgLy8gICAgICAgICA8TGF5b3V0UHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICAgICAgPEF1dGhQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0ID8gdGhlbWVMaWdodCA6IHRoZW1lRGFya30+XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtyb3V0aW5nfVxuLy8gICAgIC8vICAgICAgICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICA8L0xheW91dFByb3ZpZGVyPlxuLy8gICAgIC8vICAgICA8L2Rpdj5cbi8vICAgICAvLyApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG4vLyBJbXBvcnQgUm91dGVzXG52YXIgUm91dGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzL1JvdXRlc1wiKSk7XG4vLyBJbXBvcnQgQ29udGV4dFxudmFyIExheW91dFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi9jb250ZXh0L0xheW91dFByb3ZpZGVyXCIpO1xudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSByZWFjdF8xLnVzZVN0YXRlKHRydWUpLCBsaWdodCA9IF9hWzBdLCBzZXRMaWdodCA9IF9hWzFdO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGF5b3V0UHJvdmlkZXJfMS5MYXlvdXRQcm92aWRlciwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJvdXRlc18xLmRlZmF1bHQsIG51bGwpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b2dnbGVTaWRlYmFyID0gZXhwb3J0cy51c2VMYXlvdXREaXNwYXRjaCA9IGV4cG9ydHMudXNlTGF5b3V0U3RhdGUgPSBleHBvcnRzLnVzZUxheW91dFdpZHRoID0gZXhwb3J0cy5MYXlvdXRQcm92aWRlciA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgdmlld3BvcnRDb250ZXh0ID0gcmVhY3RfMS5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG52YXIgTGF5b3V0U3RhdGVDb250ZXh0ID0gcmVhY3RfMS5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG52YXIgTGF5b3V0RGlzcGF0Y2hDb250ZXh0ID0gcmVhY3RfMS5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5mdW5jdGlvbiBsYXlvdXRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJUT0dHTEVfU0lERUJBUlwiOlxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgaXNTaWRlYmFyT3BlbmVkOiAhc3RhdGUuaXNTaWRlYmFyT3BlbmVkIH0pO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgYWN0aW9uIHR5cGU6IFwiICsgYWN0aW9uLnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIExheW91dFByb3ZpZGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgdmFyIF9iID0gcmVhY3RfMS51c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCksIHdpZHRoID0gX2JbMF0sIHNldFdpZHRoID0gX2JbMV07XG4gICAgdmFyIF9jID0gcmVhY3RfMS51c2VSZWR1Y2VyKGxheW91dFJlZHVjZXIsIHtcbiAgICAgICAgaXNTaWRlYmFyT3BlbmVkOiBmYWxzZSxcbiAgICB9KSwgc3RhdGUgPSBfY1swXSwgZGlzcGF0Y2ggPSBfY1sxXTtcbiAgICB2YXIgaGFuZGxlV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfTtcbiAgICByZWFjdF8xLmRlZmF1bHQudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7IH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodmlld3BvcnRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB3aWR0aCB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMYXlvdXRTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHN0YXRlIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMYXlvdXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGRpc3BhdGNoIH0sIGNoaWxkcmVuKSkpKTtcbn07XG5leHBvcnRzLkxheW91dFByb3ZpZGVyID0gTGF5b3V0UHJvdmlkZXI7XG52YXIgdXNlTGF5b3V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdpZHRoID0gcmVhY3RfMS51c2VDb250ZXh0KHZpZXdwb3J0Q29udGV4dCk7XG4gICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoIH07XG59O1xuZXhwb3J0cy51c2VMYXlvdXRXaWR0aCA9IHVzZUxheW91dFdpZHRoO1xuZnVuY3Rpb24gdXNlTGF5b3V0U3RhdGUoKSB7XG4gICAgdmFyIGNvbnRleHQgPSByZWFjdF8xLnVzZUNvbnRleHQoTGF5b3V0U3RhdGVDb250ZXh0KTtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZUxheW91dFN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBMYXlvdXRQcm92aWRlclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5leHBvcnRzLnVzZUxheW91dFN0YXRlID0gdXNlTGF5b3V0U3RhdGU7XG5mdW5jdGlvbiB1c2VMYXlvdXREaXNwYXRjaCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHJlYWN0XzEudXNlQ29udGV4dChMYXlvdXREaXNwYXRjaENvbnRleHQpO1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlTGF5b3V0RGlzcGF0Y2ggbXVzdCBiZSB1c2VkIHdpdGhpbiBhIExheW91dFByb3ZpZGVyXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn1cbmV4cG9ydHMudXNlTGF5b3V0RGlzcGF0Y2ggPSB1c2VMYXlvdXREaXNwYXRjaDtcbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiVE9HR0xFX1NJREVCQVJcIixcbiAgICB9KTtcbn1cbmV4cG9ydHMudG9nZ2xlU2lkZWJhciA9IHRvZ2dsZVNpZGViYXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMzQ5Y2E0YzlkOTE3NDIwODI0YVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==