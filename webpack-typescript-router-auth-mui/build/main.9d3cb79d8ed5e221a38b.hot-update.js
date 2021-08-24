"use strict";
self["webpackHotUpdatewebpack_typescript_router_auth_mui"]("main",{

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
        path: "dashboard",
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
/******/ 	__webpack_require__.h = () => ("e58601f39060155e708d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZDNjYjc5ZDhlZDVlMjIxYTM4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsNENBQU87QUFDN0MseUJBQXlCLG1CQUFPLENBQUMsa0VBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsMkJBQTJCLGtCQUFrQjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLHVCQUF1QixrQkFBa0I7QUFDMUg7QUFDQSxlQUFlOzs7Ozs7Ozs7VUN2Q2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL3JvdXRlcy9Sb3V0ZXMudHN4Iiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbi8vIGltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uL3BhZ2VzL0Rhc2hib2FyZFwiO1xuLy8gaW1wb3J0IExvZ2luIGZyb20gXCIuLi9wYWdlcy9Mb2dpblwiO1xuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiRGFzaGJvYXJkXCIpO1xufVxuZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJMb2dpblwiKTtcbn1cbnZhciByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgICBlbGVtZW50OiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvdGVjdGVkUm91dGUsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChEYXNoYm9hcmQsIG51bGwpKSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgICAgIGVsZW1lbnQ6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQdWJsaWNSb3V0ZSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvZ2luLCBudWxsKSkpLFxuICAgIH0sXG5dO1xuZnVuY3Rpb24gUHJvdGVjdGVkUm91dGUoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICB2YXIgaXNBdXRoID0gZmFsc2U7XG4gICAgdmFyIGxvY2F0aW9uID0gcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGlzQXV0aCA/IGNoaWxkcmVuIDogcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9kYXNoYm9hcmRcIiwgc3RhdGU6IHsgZnJvbTogbG9jYXRpb24gfSB9KTtcbn1cbmZ1bmN0aW9uIFB1YmxpY1JvdXRlKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgdmFyIGlzQXV0aCA9IGZhbHNlO1xuICAgIHZhciBsb2NhdGlvbiA9IHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBpc0F1dGggPyByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTmF2aWdhdGUsIHsgdG86IFwiL2xvZ2luXCIsIHN0YXRlOiB7IGZyb206IGxvY2F0aW9uIH0gfSkgOiBjaGlsZHJlbjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHJvdXRlcztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU1ODYwMWYzOTA2MDE1NWU3MDhkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9