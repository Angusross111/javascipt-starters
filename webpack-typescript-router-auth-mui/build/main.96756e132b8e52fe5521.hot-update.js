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
// import { Routes, Route, useRoutes } from "react-router-dom";
var Routes_1 = __importDefault(__webpack_require__(/*! ./routes/Routes */ "./src/routes/Routes.tsx"));
function Dashboard() {
    return react_1.default.createElement("h1", null, "Dashboard");
}
function Login() {
    return react_1.default.createElement("h1", null, "Login");
}
function App() {
    return react_1.default.createElement(Routes_1.default, null);
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
    console.log("protected");
    var isAuth = false;
    var location = react_router_dom_1.useLocation();
    return isAuth ? children : react_1.default.createElement(react_router_dom_1.Navigate, { to: "/dashboard", state: { from: location } });
}
function PublicRoute(_a) {
    var children = _a.children;
    console.log("Public");
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
/******/ 	__webpack_require__.h = () => ("b7e08cefa7510b4d0abe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45Njc1NmUxMzJiOGU1MmZlNTUyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixZQUFZLGVBQWU7QUFDM0I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwrQkFBK0I7QUFDbEY7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3QyxZQUFZLDJCQUEyQjtBQUN2QywrQkFBK0IsbUJBQU8sQ0FBQyxnREFBaUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7QUM5Q0Y7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLDJCQUEyQixrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLHVCQUF1QixrQkFBa0I7QUFDMUg7QUFDQSxlQUFlOzs7Ozs7Ozs7VUN6Q2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9yb3V0ZXMvUm91dGVzLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuLy8gaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIC8vIEltcG9ydCBUaGVtZXNcbi8vIGltcG9ydCB7IHRoZW1lTGlnaHQsIHRoZW1lRGFyayB9IGZyb20gXCIuL3RoZW1lcy9zd2FybWZhcm1UaGVtZXNcIjtcbi8vIC8vIEltcG9ydCBSb3V0ZXNcbi8vIGltcG9ydCB7IHVzZVJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlcy9Sb3V0ZXNcIjtcbi8vIC8vIEltcG9ydCBDb250ZXh0XG4vLyBpbXBvcnQgeyBMYXlvdXRQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvTGF5b3V0UHJvdmlkZXJcIjtcbi8vIGltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvQXV0aFByb3ZpZGVyXCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBjb25zdCBBcHAgPSAoKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbi8vICAgICBjb25zdCBbbGlnaHQsIHNldExpZ2h0XSA9IHVzZVN0YXRlKHRydWUpO1xuLy8gICAgIGNvbnN0IHJvdXRpbmcgPSB1c2VSb3V0ZXMocm91dGVzKTtcbi8vICAgICByZXR1cm4gcm91dGluZztcbi8vICAgICAvLyByZXR1cm4gKFxuLy8gICAgIC8vICAgICA8ZGl2PlxuLy8gICAgIC8vICAgICAgICAgPExheW91dFByb3ZpZGVyPlxuLy8gICAgIC8vICAgICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXtsaWdodCA/IHRoZW1lTGlnaHQgOiB0aGVtZURhcmt9PlxuLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7cm91dGluZ31cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuLy8gICAgIC8vICAgICAgICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuLy8gICAgIC8vICAgICAgICAgPC9MYXlvdXRQcm92aWRlcj5cbi8vICAgICAvLyAgICAgPC9kaXY+XG4vLyAgICAgLy8gKTtcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuLy8gaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSwgdXNlUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbnZhciBSb3V0ZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXMvUm91dGVzXCIpKTtcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkRhc2hib2FyZFwiKTtcbn1cbmZ1bmN0aW9uIExvZ2luKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9naW5cIik7XG59XG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJvdXRlc18xLmRlZmF1bHQsIG51bGwpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuLy8gaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vcGFnZXMvRGFzaGJvYXJkXCI7XG4vLyBpbXBvcnQgTG9naW4gZnJvbSBcIi4uL3BhZ2VzL0xvZ2luXCI7XG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJEYXNoYm9hcmRcIik7XG59XG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkxvZ2luXCIpO1xufVxudmFyIHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxuICAgICAgICBlbGVtZW50OiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvdGVjdGVkUm91dGUsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChEYXNoYm9hcmQsIG51bGwpKSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgICAgIGVsZW1lbnQ6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQdWJsaWNSb3V0ZSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvZ2luLCBudWxsKSkpLFxuICAgIH0sXG5dO1xuZnVuY3Rpb24gUHJvdGVjdGVkUm91dGUoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICBjb25zb2xlLmxvZyhcInByb3RlY3RlZFwiKTtcbiAgICB2YXIgaXNBdXRoID0gZmFsc2U7XG4gICAgdmFyIGxvY2F0aW9uID0gcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGlzQXV0aCA/IGNoaWxkcmVuIDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9kYXNoYm9hcmRcIiwgc3RhdGU6IHsgZnJvbTogbG9jYXRpb24gfSB9KTtcbn1cbmZ1bmN0aW9uIFB1YmxpY1JvdXRlKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgY29uc29sZS5sb2coXCJQdWJsaWNcIik7XG4gICAgdmFyIGlzQXV0aCA9IGZhbHNlO1xuICAgIHZhciBsb2NhdGlvbiA9IHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBpc0F1dGggPyByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL2xvZ2luXCIsIHN0YXRlOiB7IGZyb206IGxvY2F0aW9uIH0gfSkgOiBjaGlsZHJlbjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHJvdXRlcztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3ZTA4Y2VmYTc1MTBiNGQwYWJlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9