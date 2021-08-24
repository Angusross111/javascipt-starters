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
var Dashboard_1 = __importDefault(__webpack_require__(/*! ../pages/Dashboard */ "./src/pages/Dashboard.tsx"));
var Login_1 = __importDefault(__webpack_require__(/*! ../pages/Login */ "./src/pages/Login.tsx"));
var routes = [
    {
        path: "dashboard",
        element: (react_1.default.createElement(ProtectedRoute, null,
            react_1.default.createElement(Dashboard_1.default, null))),
    },
    {
        path: "/login",
        element: (react_1.default.createElement(PublicRoute, null,
            react_1.default.createElement(Login_1.default, null))),
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
/******/ 	__webpack_require__.h = () => ("9d3cb79d8ed5e221a38b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kODY2ZTViNTRiNTc1ZGIxZmIzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsNENBQU87QUFDN0MseUJBQXlCLG1CQUFPLENBQUMsa0VBQWtCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHFEQUFvQjtBQUM5RCw4QkFBOEIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLDJCQUEyQixrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRix1QkFBdUIsa0JBQWtCO0FBQzFIO0FBQ0EsZUFBZTs7Ozs7Ozs7O1VDakNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9yb3V0ZXMvUm91dGVzLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgRGFzaGJvYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3BhZ2VzL0Rhc2hib2FyZFwiKSk7XG52YXIgTG9naW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcGFnZXMvTG9naW5cIikpO1xudmFyIHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICAgIGVsZW1lbnQ6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm90ZWN0ZWRSb3V0ZSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERhc2hib2FyZF8xLmRlZmF1bHQsIG51bGwpKSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgICAgIGVsZW1lbnQ6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQdWJsaWNSb3V0ZSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvZ2luXzEuZGVmYXVsdCwgbnVsbCkpKSxcbiAgICB9LFxuXTtcbmZ1bmN0aW9uIFByb3RlY3RlZFJvdXRlKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgdmFyIGlzQXV0aCA9IGZhbHNlO1xuICAgIHZhciBsb2NhdGlvbiA9IHJlYWN0X3JvdXRlcl9kb21fMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBpc0F1dGggPyBjaGlsZHJlbiA6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5OYXZpZ2F0ZSwgeyB0bzogXCIvZGFzaGJvYXJkXCIsIHN0YXRlOiB7IGZyb206IGxvY2F0aW9uIH0gfSk7XG59XG5mdW5jdGlvbiBQdWJsaWNSb3V0ZShfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBpc0F1dGggPSBmYWxzZTtcbiAgICB2YXIgbG9jYXRpb24gPSByZWFjdF9yb3V0ZXJfZG9tXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gaXNBdXRoID8gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLk5hdmlnYXRlLCB7IHRvOiBcIi9sb2dpblwiLCBzdGF0ZTogeyBmcm9tOiBsb2NhdGlvbiB9IH0pIDogY2hpbGRyZW47XG59XG5leHBvcnRzLmRlZmF1bHQgPSByb3V0ZXM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZDNjYjc5ZDhlZDVlMjIxYTM4YlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==