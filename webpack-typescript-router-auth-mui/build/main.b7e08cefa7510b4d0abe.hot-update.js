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
var Routes = function () {
    return react_1.default.createElement("h1", null, "Routes");
};
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
exports.default = Routes;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f073d7321975c1ede40d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iN2UwOGNlZmE3NTEwYjRkMGFiZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsNENBQU87QUFDN0MseUJBQXlCLG1CQUFPLENBQUMsa0VBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RiwyQkFBMkIsa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRix1QkFBdUIsa0JBQWtCO0FBQzFIO0FBQ0EsZUFBZTs7Ozs7Ozs7O1VDNUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9yb3V0ZXMvUm91dGVzLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4vLyBpbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuLi9wYWdlcy9EYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBMb2dpbiBmcm9tIFwiLi4vcGFnZXMvTG9naW5cIjtcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkRhc2hib2FyZFwiKTtcbn1cbmZ1bmN0aW9uIExvZ2luKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9naW5cIik7XG59XG52YXIgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGVsZW1lbnQ6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm90ZWN0ZWRSb3V0ZSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERhc2hib2FyZCwgbnVsbCkpKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcbiAgICAgICAgZWxlbWVudDogKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFB1YmxpY1JvdXRlLCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9naW4sIG51bGwpKSksXG4gICAgfSxcbl07XG52YXIgUm91dGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiUm91dGVzXCIpO1xufTtcbmZ1bmN0aW9uIFByb3RlY3RlZFJvdXRlKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgY29uc29sZS5sb2coXCJwcm90ZWN0ZWRcIik7XG4gICAgdmFyIGlzQXV0aCA9IGZhbHNlO1xuICAgIHZhciBsb2NhdGlvbiA9IHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBpc0F1dGggPyBjaGlsZHJlbiA6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvZGFzaGJvYXJkXCIsIHN0YXRlOiB7IGZyb206IGxvY2F0aW9uIH0gfSk7XG59XG5mdW5jdGlvbiBQdWJsaWNSb3V0ZShfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIGNvbnNvbGUubG9nKFwiUHVibGljXCIpO1xuICAgIHZhciBpc0F1dGggPSBmYWxzZTtcbiAgICB2YXIgbG9jYXRpb24gPSByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gaXNBdXRoID8gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9sb2dpblwiLCBzdGF0ZTogeyBmcm9tOiBsb2NhdGlvbiB9IH0pIDogY2hpbGRyZW47XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMDczZDczMjE5NzVjMWVkZTQwZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==