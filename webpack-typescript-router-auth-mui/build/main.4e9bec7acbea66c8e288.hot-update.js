"use strict";
self["webpackHotUpdatewebpack_typescript_router_auth_mui"]("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var CssBaseline_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js"));
var styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
// Import Themes
var swarmfarmThemes_1 = __webpack_require__(/*! ./themes/swarmfarmThemes */ "./src/themes/swarmfarmThemes.tsx");
// Import Routes
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
var Routes_1 = __importDefault(__webpack_require__(/*! ./routes/Routes */ "./src/routes/Routes.tsx"));
// Import Context
var LayoutProvider_1 = __webpack_require__(/*! ./context/LayoutProvider */ "./src/context/LayoutProvider.tsx");
var AuthProvider_1 = __webpack_require__(/*! ./context/AuthProvider */ "./src/context/AuthProvider.tsx");
var App = function () {
    var _a = react_1.useState(true), light = _a[0], setLight = _a[1];
    var routing = react_router_dom_1.useRoutes(Routes_1.default);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(LayoutProvider_1.LayoutProvider, null,
            react_1.default.createElement(AuthProvider_1.AuthProvider, null,
                react_1.default.createElement(styles_1.MuiThemeProvider, { theme: light ? swarmfarmThemes_1.themeLight : swarmfarmThemes_1.themeDark },
                    react_1.default.createElement(CssBaseline_1.default, null),
                    routing)))));
};
exports.default = App;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d866e5b54b575db1fb3e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZTliZWM3YWNiZWE2NmM4ZTI4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0MsZ0JBQWdCO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQyxvQ0FBb0MsbUJBQU8sQ0FBQyxnR0FBK0I7QUFDM0UsZUFBZSxtQkFBTyxDQUFDLHNGQUEwQjtBQUNqRDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLGtFQUEwQjtBQUMxRDtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLGtFQUFrQjtBQUNuRCwrQkFBK0IsbUJBQU8sQ0FBQyxnREFBaUI7QUFDeEQ7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyxrRUFBMEI7QUFDekQscUJBQXFCLG1CQUFPLENBQUMsOERBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSwyRUFBMkU7QUFDdEo7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7O1VDN0NmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENzc0Jhc2VsaW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7XG4vLyBJbXBvcnQgVGhlbWVzXG52YXIgc3dhcm1mYXJtVGhlbWVzXzEgPSByZXF1aXJlKFwiLi90aGVtZXMvc3dhcm1mYXJtVGhlbWVzXCIpO1xuLy8gSW1wb3J0IFJvdXRlc1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIFJvdXRlc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlcy9Sb3V0ZXNcIikpO1xuLy8gSW1wb3J0IENvbnRleHRcbnZhciBMYXlvdXRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vY29udGV4dC9MYXlvdXRQcm92aWRlclwiKTtcbnZhciBBdXRoUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRleHQvQXV0aFByb3ZpZGVyXCIpO1xudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSByZWFjdF8xLnVzZVN0YXRlKHRydWUpLCBsaWdodCA9IF9hWzBdLCBzZXRMaWdodCA9IF9hWzFdO1xuICAgIHZhciByb3V0aW5nID0gcmVhY3Rfcm91dGVyX2RvbV8xLnVzZVJvdXRlcyhSb3V0ZXNfMS5kZWZhdWx0KTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExheW91dFByb3ZpZGVyXzEuTGF5b3V0UHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBdXRoUHJvdmlkZXJfMS5BdXRoUHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc3R5bGVzXzEuTXVpVGhlbWVQcm92aWRlciwgeyB0aGVtZTogbGlnaHQgPyBzd2FybWZhcm1UaGVtZXNfMS50aGVtZUxpZ2h0IDogc3dhcm1mYXJtVGhlbWVzXzEudGhlbWVEYXJrIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENzc0Jhc2VsaW5lXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmcpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkODY2ZTViNTRiNTc1ZGIxZmIzZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==