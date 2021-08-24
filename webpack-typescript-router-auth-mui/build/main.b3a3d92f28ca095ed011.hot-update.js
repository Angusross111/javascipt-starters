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
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
function Dashboard() {
    return react_1.default.createElement("h1", null, "Dashboard");
}
function Login() {
    return react_1.default.createElement("h1", null, "Login");
}
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Dashboard, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(Login, null) }))));
}
exports.default = App;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da1db18c7ed09915cfac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iM2EzZDkyZjI4Y2EwOTVlZDAxMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixZQUFZLGVBQWU7QUFDM0I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwrQkFBK0I7QUFDbEY7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLG9FQUFvRTtBQUMxSSxzRUFBc0UscUVBQXFFO0FBQzNJO0FBQ0EsZUFBZTs7Ozs7Ozs7O1VDaERmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG4vLyBpbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gLy8gSW1wb3J0IFRoZW1lc1xuLy8gaW1wb3J0IHsgdGhlbWVMaWdodCwgdGhlbWVEYXJrIH0gZnJvbSBcIi4vdGhlbWVzL3N3YXJtZmFybVRoZW1lc1wiO1xuLy8gLy8gSW1wb3J0IFJvdXRlc1xuLy8gaW1wb3J0IHsgdXNlUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vIGltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzL1JvdXRlc1wiO1xuLy8gLy8gSW1wb3J0IENvbnRleHRcbi8vIGltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9MYXlvdXRQcm92aWRlclwiO1xuLy8gaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIGNvbnN0IEFwcCA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuLy8gICAgIGNvbnN0IFtsaWdodCwgc2V0TGlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4vLyAgICAgY29uc3Qgcm91dGluZyA9IHVzZVJvdXRlcyhyb3V0ZXMpO1xuLy8gICAgIHJldHVybiByb3V0aW5nO1xuLy8gICAgIC8vIHJldHVybiAoXG4vLyAgICAgLy8gICAgIDxkaXY+XG4vLyAgICAgLy8gICAgICAgICA8TGF5b3V0UHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICAgICAgPEF1dGhQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0ID8gdGhlbWVMaWdodCA6IHRoZW1lRGFya30+XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtyb3V0aW5nfVxuLy8gICAgIC8vICAgICAgICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICA8L0xheW91dFByb3ZpZGVyPlxuLy8gICAgIC8vICAgICA8L2Rpdj5cbi8vICAgICAvLyApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJEYXNoYm9hcmRcIik7XG59XG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkxvZ2luXCIpO1xufVxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlcywgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcIi9cIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRGFzaGJvYXJkLCBudWxsKSB9KSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcIi9sb2dpblwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2dpbiwgbnVsbCkgfSkpKSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYTFkYjE4YzdlZDA5OTE1Y2ZhY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==