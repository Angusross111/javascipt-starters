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
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(LayoutProvider_1.LayoutProvider, null,
                react_1.default.createElement(AuthProvider_1.AuthProvider, null,
                    react_1.default.createElement(styles_1.MuiThemeProvider, { theme: light ? swarmfarmThemes_1.themeLight : swarmfarmThemes_1.themeDark },
                        react_1.default.createElement(CssBaseline_1.default, null),
                        routing))))));
};
exports.default = App;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("99582a503413c5e7d6c2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YTYxZmY1N2ZhZGMzYmY0ZjFjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0MsZ0JBQWdCO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQyxvQ0FBb0MsbUJBQU8sQ0FBQyxnR0FBK0I7QUFDM0UsZUFBZSxtQkFBTyxDQUFDLHNGQUEwQjtBQUNqRDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLGtFQUEwQjtBQUMxRDtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLGtFQUFrQjtBQUNuRCwrQkFBK0IsbUJBQU8sQ0FBQyxnREFBaUI7QUFDeEQ7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyxrRUFBMEI7QUFDekQscUJBQXFCLG1CQUFPLENBQUMsOERBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLDJFQUEyRTtBQUMxSjtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7VUM5Q2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQ3NzQmFzZWxpbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIikpO1xudmFyIHN0eWxlc18xID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTtcbi8vIEltcG9ydCBUaGVtZXNcbnZhciBzd2FybWZhcm1UaGVtZXNfMSA9IHJlcXVpcmUoXCIuL3RoZW1lcy9zd2FybWZhcm1UaGVtZXNcIik7XG4vLyBJbXBvcnQgUm91dGVzXG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG52YXIgUm91dGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzL1JvdXRlc1wiKSk7XG4vLyBJbXBvcnQgQ29udGV4dFxudmFyIExheW91dFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi9jb250ZXh0L0xheW91dFByb3ZpZGVyXCIpO1xudmFyIEF1dGhQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIik7XG52YXIgQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHJlYWN0XzEudXNlU3RhdGUodHJ1ZSksIGxpZ2h0ID0gX2FbMF0sIHNldExpZ2h0ID0gX2FbMV07XG4gICAgdmFyIHJvdXRpbmcgPSByZWFjdF9yb3V0ZXJfZG9tXzEudXNlUm91dGVzKFJvdXRlc18xLmRlZmF1bHQpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkJyb3dzZXJSb3V0ZXIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMYXlvdXRQcm92aWRlcl8xLkxheW91dFByb3ZpZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEF1dGhQcm92aWRlcl8xLkF1dGhQcm92aWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc3R5bGVzXzEuTXVpVGhlbWVQcm92aWRlciwgeyB0aGVtZTogbGlnaHQgPyBzd2FybWZhcm1UaGVtZXNfMS50aGVtZUxpZ2h0IDogc3dhcm1mYXJtVGhlbWVzXzEudGhlbWVEYXJrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDc3NCYXNlbGluZV8xLmRlZmF1bHQsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZykpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5OTU4MmE1MDM0MTNjNWU3ZDZjMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==