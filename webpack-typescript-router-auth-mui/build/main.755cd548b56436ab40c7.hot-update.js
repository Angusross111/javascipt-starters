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
        react_1.default.createElement(PublicRoute, { path: "/", element: react_1.default.createElement(Login, null) }),
        react_1.default.createElement(PublicRoute, { path: "/login", element: react_1.default.createElement(Login, null) }),
        react_1.default.createElement(PrivateRoute, { path: "/dashboard", element: react_1.default.createElement(Dashboard, null) }),
        react_1.default.createElement(PrivateRoute, { path: "/page2", element: react_1.default.createElement(Page2, null) })));
};
var PrivateRoute = function (elements) {
    var isUserLoggedIn = true;
    if (isUserLoggedIn) {
        return react_1.default.createElement(react_router_dom_1.Route, __assign({}, elements));
    }
    return react_1.default.createElement(react_router_dom_1.Navigate, { to: "/login" });
};
var PublicRoute = function (_a) {
    var elements = _a.elements;
    var isUserLoggedIn = true;
    if (isUserLoggedIn) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: "/dashboard" });
    }
    return react_1.default.createElement(react_router_dom_1.Route, __assign({}, elements));
};
exports.default = AuthRoutes;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c4cf95c9c69a2b099ac8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NTVjZDU0OGI1NjQzNmFiNDBjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZ0VBQWdFO0FBQ3JILHFEQUFxRCxxRUFBcUU7QUFDMUgsc0RBQXNELDZFQUE2RTtBQUNuSSxzREFBc0QscUVBQXFFO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0Esd0VBQXdFLGNBQWM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxrQkFBa0I7QUFDOUY7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxlQUFlOzs7Ozs7Ozs7VUNuRGYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL3JvdXRlcy9Sb3V0ZXMudHN4Iiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4vLyBpbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuLi9wYWdlcy9EYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBMb2dpbiBmcm9tIFwiLi4vcGFnZXMvTG9naW5cIjtcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkRhc2hib2FyZFwiKTtcbn1cbmZ1bmN0aW9uIFBhZ2UyKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiUGFnZSAyXCIpO1xufVxuZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJMb2dpblwiKTtcbn1cbnZhciBBdXRoUm91dGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlcywgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHVibGljUm91dGUsIHsgcGF0aDogXCIvXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvZ2luLCBudWxsKSB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHVibGljUm91dGUsIHsgcGF0aDogXCIvbG9naW5cIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9naW4sIG51bGwpIH0pLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcml2YXRlUm91dGUsIHsgcGF0aDogXCIvZGFzaGJvYXJkXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERhc2hib2FyZCwgbnVsbCkgfSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByaXZhdGVSb3V0ZSwgeyBwYXRoOiBcIi9wYWdlMlwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQYWdlMiwgbnVsbCkgfSkpKTtcbn07XG52YXIgUHJpdmF0ZVJvdXRlID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gICAgdmFyIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICBpZiAoaXNVc2VyTG9nZ2VkSW4pIHtcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgX19hc3NpZ24oe30sIGVsZW1lbnRzKSk7XG4gICAgfVxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL2xvZ2luXCIgfSk7XG59O1xudmFyIFB1YmxpY1JvdXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gX2EuZWxlbWVudHM7XG4gICAgdmFyIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICBpZiAoaXNVc2VyTG9nZ2VkSW4pIHtcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvZGFzaGJvYXJkXCIgfSk7XG4gICAgfVxuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIF9fYXNzaWduKHt9LCBlbGVtZW50cykpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF1dGhSb3V0ZXM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNGNmOTVjOWM2OWEyYjA5OWFjOFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==