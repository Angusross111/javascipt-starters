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
var Routes_1 = __importDefault(__webpack_require__(/*! ./routes/Routes */ "./src/routes/Routes.tsx"));
function Dashboard() {
    return react_1.default.createElement("h1", null, "Dashboard");
}
function Login() {
    return react_1.default.createElement("h1", null, "Login");
}
// function App() {
//     return (
//         <div>
//             <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/login" element={<Login />} />
//             </Routes>
//         </div>
//     );
// }
// export default App;
function App() {
    var routing = react_router_dom_1.useRoutes(Routes_1.default);
    return routing;
}
exports.default = App;


/***/ }),

/***/ "./src/routes/Routes.tsx":
/*!*******************************!*\
  !*** ./src/routes/Routes.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
// import Dashboard from "../pages/Dashboard";
// import Login from "../pages/Login";
function Dashboard() {
    return react_1.default.createElement("h1", null, "Dashboard");
}
function Login() {
    return react_1.default.createElement("h1", null, "Login");
}
var routes = [
    {
        path: "/dashboard",
        element: (react_1.default.createElement(ProtectedRoute, null,
            react_1.default.createElement(Dashboard, null))),
    },
    {
        path: "/login",
        element: (react_1.default.createElement(PublicRoute, null,
            react_1.default.createElement(Login, null))),
    },
];
function ProtectedRoute(_a) {
    var children = _a.children;
    var isAuth = false;
    var location = react_router_dom_1.useLocation();
    return isAuth ? children : react_1.default.createElement(react_router_dom_1.Navigate, { to: "/dashboard", state: { from: location } });
}
function PublicRoute(_a) {
    var children = _a.children;
    var isAuth = false;
    var location = react_router_dom_1.useLocation();
    return isAuth ? react_1.default.createElement(react_router_dom_1.Navigate, { to: "/login", state: { from: location } }) : children;
}
exports.default = routes;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("db70375a7bdff84a1fd2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYzg3OWZlOTVmYWUzNGFiYTNkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixZQUFZLGVBQWU7QUFDM0I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwrQkFBK0I7QUFDbEY7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQsK0JBQStCLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGVBQWU7QUFDM0QsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7QUMxREY7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RiwyQkFBMkIsa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsdUJBQXVCLGtCQUFrQjtBQUMxSDtBQUNBLGVBQWU7Ozs7Ozs7OztVQ3ZDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL3JvdXRlcy9Sb3V0ZXMudHN4Iiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG4vLyBpbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gLy8gSW1wb3J0IFRoZW1lc1xuLy8gaW1wb3J0IHsgdGhlbWVMaWdodCwgdGhlbWVEYXJrIH0gZnJvbSBcIi4vdGhlbWVzL3N3YXJtZmFybVRoZW1lc1wiO1xuLy8gLy8gSW1wb3J0IFJvdXRlc1xuLy8gaW1wb3J0IHsgdXNlUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vIGltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzL1JvdXRlc1wiO1xuLy8gLy8gSW1wb3J0IENvbnRleHRcbi8vIGltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9MYXlvdXRQcm92aWRlclwiO1xuLy8gaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIGNvbnN0IEFwcCA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuLy8gICAgIGNvbnN0IFtsaWdodCwgc2V0TGlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4vLyAgICAgY29uc3Qgcm91dGluZyA9IHVzZVJvdXRlcyhyb3V0ZXMpO1xuLy8gICAgIHJldHVybiByb3V0aW5nO1xuLy8gICAgIC8vIHJldHVybiAoXG4vLyAgICAgLy8gICAgIDxkaXY+XG4vLyAgICAgLy8gICAgICAgICA8TGF5b3V0UHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICAgICAgPEF1dGhQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0ID8gdGhlbWVMaWdodCA6IHRoZW1lRGFya30+XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtyb3V0aW5nfVxuLy8gICAgIC8vICAgICAgICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICA8L0xheW91dFByb3ZpZGVyPlxuLy8gICAgIC8vICAgICA8L2Rpdj5cbi8vICAgICAvLyApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgUm91dGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzL1JvdXRlc1wiKSk7XG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJEYXNoYm9hcmRcIik7XG59XG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkxvZ2luXCIpO1xufVxuLy8gZnVuY3Rpb24gQXBwKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8Um91dGVzPlxuLy8gICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XG4vLyAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4vLyAgICAgICAgICAgICA8L1JvdXRlcz5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICB2YXIgcm91dGluZyA9IHJlYWN0X3JvdXRlcl9kb21fMS51c2VSb3V0ZXMoUm91dGVzXzEuZGVmYXVsdCk7XG4gICAgcmV0dXJuIHJvdXRpbmc7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4vLyBpbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuLi9wYWdlcy9EYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBMb2dpbiBmcm9tIFwiLi4vcGFnZXMvTG9naW5cIjtcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkRhc2hib2FyZFwiKTtcbn1cbmZ1bmN0aW9uIExvZ2luKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9naW5cIik7XG59XG52YXIgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGVsZW1lbnQ6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm90ZWN0ZWRSb3V0ZSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERhc2hib2FyZCwgbnVsbCkpKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcbiAgICAgICAgZWxlbWVudDogKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFB1YmxpY1JvdXRlLCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9naW4sIG51bGwpKSksXG4gICAgfSxcbl07XG5mdW5jdGlvbiBQcm90ZWN0ZWRSb3V0ZShfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBpc0F1dGggPSBmYWxzZTtcbiAgICB2YXIgbG9jYXRpb24gPSByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gaXNBdXRoID8gY2hpbGRyZW4gOiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL2Rhc2hib2FyZFwiLCBzdGF0ZTogeyBmcm9tOiBsb2NhdGlvbiB9IH0pO1xufVxuZnVuY3Rpb24gUHVibGljUm91dGUoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICB2YXIgaXNBdXRoID0gZmFsc2U7XG4gICAgdmFyIGxvY2F0aW9uID0gcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGlzQXV0aCA/IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvbG9naW5cIiwgc3RhdGU6IHsgZnJvbTogbG9jYXRpb24gfSB9KSA6IGNoaWxkcmVuO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcm91dGVzO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGI3MDM3NWE3YmRmZjg0YTFmZDJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=