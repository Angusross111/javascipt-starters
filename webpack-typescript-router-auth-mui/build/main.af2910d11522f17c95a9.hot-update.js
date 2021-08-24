"use strict";
self["webpackHotUpdatewebpack_typescript_router_auth_mui"]("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// Import Routes
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
var Routes_1 = __importDefault(__webpack_require__(/*! ./routes/Routes */ "./src/routes/Routes.tsx"));
var App = function () {
    var _a = react_1.useState(true), light = _a[0], setLight = _a[1];
    var routing = react_router_dom_1.useRoutes(Routes_1.default);
    return routing;
    // return (
    //     <div>
    //         <LayoutProvider>
    //             <AuthProvider>
    //                 <MuiThemeProvider theme={light ? themeLight : themeDark}>
    //                     <CssBaseline />
    //                     {routing}
    //                 </MuiThemeProvider>
    //             </AuthProvider>
    //         </LayoutProvider>
    //     </div>
    // );
};
exports.default = App;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1daf21c1c81a8a96f91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZjI5MTBkMTE1MjJmMTdjOTVhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLDRDQUFPO0FBQzdCO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsa0VBQWtCO0FBQ25ELCtCQUErQixtQkFBTyxDQUFDLGdEQUFpQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELCtCQUErQjtBQUMvRTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7VUMxQmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbi8vIEltcG9ydCBSb3V0ZXNcbnZhciByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbnZhciBSb3V0ZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXMvUm91dGVzXCIpKTtcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gcmVhY3RfMS51c2VTdGF0ZSh0cnVlKSwgbGlnaHQgPSBfYVswXSwgc2V0TGlnaHQgPSBfYVsxXTtcbiAgICB2YXIgcm91dGluZyA9IHJlYWN0X3JvdXRlcl9kb21fMS51c2VSb3V0ZXMoUm91dGVzXzEuZGVmYXVsdCk7XG4gICAgcmV0dXJuIHJvdXRpbmc7XG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgIDxMYXlvdXRQcm92aWRlcj5cbiAgICAvLyAgICAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxuICAgIC8vICAgICAgICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17bGlnaHQgPyB0aGVtZUxpZ2h0IDogdGhlbWVEYXJrfT5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAge3JvdXRpbmd9XG4gICAgLy8gICAgICAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAvLyAgICAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICAvLyAgICAgICAgIDwvTGF5b3V0UHJvdmlkZXI+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTFkYWYyMWMxYzgxYThhOTZmOTFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=