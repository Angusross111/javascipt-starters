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
var PageNotFound = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "404 Page Not Found!"),
        react_1.default.createElement("h3", null,
            "Go to ",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, " Home page "))));
};
var AuthRoutes = function () {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/" },
            react_1.default.createElement(react_router_dom_1.Navigate, { to: "/login" })),
        react_1.default.createElement(PublicRoute, { path: "/login", element: react_1.default.createElement(Login, null) }),
        react_1.default.createElement(PrivateRoute, { path: "/dashboard", element: react_1.default.createElement(Dashboard, null) }),
        react_1.default.createElement(PrivateRoute, { path: "/page2", element: react_1.default.createElement(Page2, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(PageNotFound, null) })));
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
/******/ 	__webpack_require__.h = () => ("564673a86a7733ce9f9b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYWIzNWQxOTBhNTUzNzlhOGVlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsU0FBUztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsV0FBVztBQUM3RSx5RUFBeUUsY0FBYztBQUN2RixxREFBcUQscUVBQXFFO0FBQzFILHNEQUFzRCw2RUFBNkU7QUFDbkksc0RBQXNELHFFQUFxRTtBQUMzSCxrRUFBa0UsdUVBQXVFO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0Esd0VBQXdFLGNBQWM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsa0JBQWtCO0FBQzlGO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsZUFBZTs7Ozs7Ozs7O1VDM0RmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9yb3V0ZXMvUm91dGVzLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuLy8gaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vcGFnZXMvRGFzaGJvYXJkXCI7XG4vLyBpbXBvcnQgTG9naW4gZnJvbSBcIi4uL3BhZ2VzL0xvZ2luXCI7XG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJEYXNoYm9hcmRcIik7XG59XG5mdW5jdGlvbiBQYWdlMigpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIlBhZ2UgMlwiKTtcbn1cbmZ1bmN0aW9uIExvZ2luKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9naW5cIik7XG59XG52YXIgUGFnZU5vdEZvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIjQwNCBQYWdlIE5vdCBGb3VuZCFcIiksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCxcbiAgICAgICAgICAgIFwiR28gdG8gXCIsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgeyB0bzogXCIvXCIgfSwgXCIgSG9tZSBwYWdlIFwiKSkpKTtcbn07XG52YXIgQXV0aFJvdXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZXMsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcIi9cIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9sb2dpblwiIH0pKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHVibGljUm91dGUsIHsgcGF0aDogXCIvbG9naW5cIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9naW4sIG51bGwpIH0pLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcml2YXRlUm91dGUsIHsgcGF0aDogXCIvZGFzaGJvYXJkXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERhc2hib2FyZCwgbnVsbCkgfSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByaXZhdGVSb3V0ZSwgeyBwYXRoOiBcIi9wYWdlMlwiLCBlbGVtZW50OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQYWdlMiwgbnVsbCkgfSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgeyBwYXRoOiBcIipcIiwgZWxlbWVudDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGFnZU5vdEZvdW5kLCBudWxsKSB9KSkpO1xufTtcbnZhciBQcml2YXRlUm91dGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgIGlmIChpc1VzZXJMb2dnZWRJbikge1xuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCBfX2Fzc2lnbih7fSwgcHJvcHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvbG9naW5cIiB9KTtcbn07XG52YXIgUHVibGljUm91dGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgIGlmIChpc1VzZXJMb2dnZWRJbikge1xuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Sb3V0ZSwgX19hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQXV0aFJvdXRlcztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU2NDY3M2E4NmE3NzMzY2U5ZjliXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9