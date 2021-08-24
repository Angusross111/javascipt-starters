"use strict";
self["webpackHotUpdatewebpack_typescript_router_auth_mui"]("main",{

/***/ "./src/routes/Routes.tsx":
/*!*******************************!*\
  !*** ./src/routes/Routes.tsx ***!
  \*******************************/
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
function Page2() {
    return react_1.default.createElement("h1", null, "Page 2");
}
function Login() {
    return react_1.default.createElement("h1", null, "Login");
}
var AuthRoutes = function () {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/" },
            react_1.default.createElement(react_router_dom_1.Navigate, { to: "/home" })),
        react_1.default.createElement(PublicRoute, { path: "/login", element: react_1.default.createElement(Login, null) }),
        react_1.default.createElement(PrivateRoute, { path: "/dashboard", element: react_1.default.createElement(Dashboard, null) }),
        react_1.default.createElement(PrivateRoute, { path: "/page2", element: react_1.default.createElement(Page2, null) })));
};
var PrivateRoute = function (props) {
    var isUserLoggedIn = true;
    if (isUserLoggedIn) {
        return react_1.default.createElement(react_router_dom_1.Route, __assign({}, props));
    }
    return react_1.default.createElement(react_router_dom_1.Navigate, { to: "/login" });
};
var PublicRoute = function (props) {
    var isUserLoggedIn = true;
    if (isUserLoggedIn) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: "/dashboard" });
    }
    return react_1.default.createElement(react_router_dom_1.Route, __assign({}, props));
};
exports.default = AuthRoutes;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4e9a38226320867d5ca0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OThhMzMyMDI5M2VmMGU0OTI4Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsV0FBVztBQUM3RSx5RUFBeUUsYUFBYTtBQUN0RixxREFBcUQscUVBQXFFO0FBQzFILHNEQUFzRCw2RUFBNkU7QUFDbkksc0RBQXNELHFFQUFxRTtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBLHdFQUF3RSxjQUFjO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGtCQUFrQjtBQUM5RjtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLGVBQWU7Ozs7Ozs7OztVQ25EZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvLi9zcmMvcm91dGVzL1JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbi8vIGltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uL3BhZ2VzL0Rhc2hib2FyZFwiO1xuLy8gaW1wb3J0IExvZ2luIGZyb20gXCIuLi9wYWdlcy9Mb2dpblwiO1xuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiRGFzaGJvYXJkXCIpO1xufVxuZnVuY3Rpb24gUGFnZTIoKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJQYWdlIDJcIik7XG59XG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkxvZ2luXCIpO1xufVxudmFyIEF1dGhSb3V0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGVzLCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCIvXCIgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvaG9tZVwiIH0pKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHVibGljUm91dGUsIHsgcGF0aDogXCIvbG9naW5cIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9naW4sIG51bGwpIH0pLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcml2YXRlUm91dGUsIHsgcGF0aDogXCIvZGFzaGJvYXJkXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERhc2hib2FyZCwgbnVsbCkgfSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByaXZhdGVSb3V0ZSwgeyBwYXRoOiBcIi9wYWdlMlwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQYWdlMiwgbnVsbCkgfSkpKTtcbn07XG52YXIgUHJpdmF0ZVJvdXRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICBpZiAoaXNVc2VyTG9nZ2VkSW4pIHtcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgX19hc3NpZ24oe30sIHByb3BzKSk7XG4gICAgfVxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL2xvZ2luXCIgfSk7XG59O1xudmFyIFB1YmxpY1JvdXRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICBpZiAoaXNVc2VyTG9nZ2VkSW4pIHtcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvZGFzaGJvYXJkXCIgfSk7XG4gICAgfVxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIF9fYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF1dGhSb3V0ZXM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZTlhMzgyMjYzMjA4NjdkNWNhMFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==