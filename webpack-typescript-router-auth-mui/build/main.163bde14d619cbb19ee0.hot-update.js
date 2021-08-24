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
    console.log("App");
    return routing;
}
exports.default = App;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("04df3fda0ab55ad93205")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNjNiZGUxNGQ2MTljYmIxOWVlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixZQUFZLGVBQWU7QUFDM0I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwrQkFBK0I7QUFDbEY7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3Qyx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDbkQsK0JBQStCLG1CQUFPLENBQUMsZ0RBQWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGVBQWU7QUFDM0QsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7VUMzRGYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbi8vIGltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG4vLyAvLyBJbXBvcnQgVGhlbWVzXG4vLyBpbXBvcnQgeyB0aGVtZUxpZ2h0LCB0aGVtZURhcmsgfSBmcm9tIFwiLi90aGVtZXMvc3dhcm1mYXJtVGhlbWVzXCI7XG4vLyAvLyBJbXBvcnQgUm91dGVzXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy8gaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXMvUm91dGVzXCI7XG4vLyAvLyBJbXBvcnQgQ29udGV4dFxuLy8gaW1wb3J0IHsgTGF5b3V0UHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L0xheW91dFByb3ZpZGVyXCI7XG4vLyBpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L0F1dGhQcm92aWRlclwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gY29uc3QgQXBwID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4vLyAgICAgY29uc3QgW2xpZ2h0LCBzZXRMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcbi8vICAgICBjb25zdCByb3V0aW5nID0gdXNlUm91dGVzKHJvdXRlcyk7XG4vLyAgICAgcmV0dXJuIHJvdXRpbmc7XG4vLyAgICAgLy8gcmV0dXJuIChcbi8vICAgICAvLyAgICAgPGRpdj5cbi8vICAgICAvLyAgICAgICAgIDxMYXlvdXRQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxuLy8gICAgIC8vICAgICAgICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17bGlnaHQgPyB0aGVtZUxpZ2h0IDogdGhlbWVEYXJrfT5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAge3JvdXRpbmd9XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgIDwvTGF5b3V0UHJvdmlkZXI+XG4vLyAgICAgLy8gICAgIDwvZGl2PlxuLy8gICAgIC8vICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgQXBwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBSb3V0ZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXMvUm91dGVzXCIpKTtcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkRhc2hib2FyZFwiKTtcbn1cbmZ1bmN0aW9uIExvZ2luKCkge1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9naW5cIik7XG59XG4vLyBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgIDxSb3V0ZXM+XG4vLyAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PERhc2hib2FyZCAvPn0gLz5cbi8vICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbi8vICAgICAgICAgICAgIDwvUm91dGVzPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgQXBwO1xuZnVuY3Rpb24gQXBwKCkge1xuICAgIHZhciByb3V0aW5nID0gcmVhY3Rfcm91dGVyX2RvbV8xLnVzZVJvdXRlcyhSb3V0ZXNfMS5kZWZhdWx0KTtcbiAgICBjb25zb2xlLmxvZyhcIkFwcFwiKTtcbiAgICByZXR1cm4gcm91dGluZztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA0ZGYzZmRhMGFiNTVhZDkzMjA1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9