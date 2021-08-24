"use strict";
self["webpackHotUpdatewebpack_typescript_router_auth_mui"]("main",{

/***/ "./src/pages/Login.tsx":
/*!*****************************!*\
  !*** ./src/pages/Login.tsx ***!
  \*****************************/
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
var Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
var CssBaseline_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js"));
var TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));
var Link_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js"));
var Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
var Box_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js"));
var Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));
var Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
var styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));
var CircularProgress_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js"));
var Clear_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js"));
var IconButton_1 = __importDefault(__webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js"));
var AuthProvider_1 = __webpack_require__(/*! ../context/AuthProvider */ "./src/context/AuthProvider.tsx");
var SFlogo_svg_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../build/SFlogo.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    paper: {
        textAlign: "center",
    },
    signIn: {
        margin: theme.spacing(3),
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(3, 0, 2),
    },
    image: {
        margin: theme.spacing(3),
        width: "250px",
    },
    error: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(3),
        background: "#eb6c63",
        borderColor: "black",
    },
}); });
var Login = function (props) {
    var classes = useStyles();
    //global
    var failedLogin = AuthProvider_1.useAuthState().failedLogin;
    var authDispatch = AuthProvider_1.useAuthDispatch().authDispatch;
    //local
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(""), usernameValue = _b[0], setUsernameValue = _b[1];
    var _c = react_1.useState(""), passwordValue = _c[0], setPasswordValue = _c[1];
    var handleSubmit = function (event) {
        event.preventDefault();
        AuthProvider_1.loginUser({
            authDispatch: authDispatch,
            login: usernameValue,
            password: passwordValue,
            history: props.history,
            setIsLoading: setIsLoading,
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Container_1.default, { component: "main", maxWidth: "xs" },
            react_1.default.createElement(CssBaseline_1.default, null),
            react_1.default.createElement("div", { className: classes.paper },
                react_1.default.createElement("img", { className: classes.image, src: SFlogo_svg_1.default, alt: "Logo" }),
                react_1.default.createElement(Box_1.default, { mx: "auto", p: 2 },
                    react_1.default.createElement(Typography_1.default, { component: "h1", variant: "h5", align: "center" }, "Sign in to SwarmFarm")),
                failedLogin ? (react_1.default.createElement(Paper_1.default, { className: classes.error },
                    react_1.default.createElement(Box_1.default, { p: 2 }, "Incorrect username or password."),
                    react_1.default.createElement(Box_1.default, { p: 1 },
                        react_1.default.createElement(IconButton_1.default, { onClick: function () {
                                return authDispatch({
                                    type: AuthProvider_1.Types.ClearLoginError,
                                });
                            }, "aria-label": "clearError" },
                            react_1.default.createElement(Clear_1.default, null))))) : (""),
                react_1.default.createElement(Paper_1.default, { className: classes.signIn },
                    react_1.default.createElement(Box_1.default, { mx: "auto", p: 2 },
                        react_1.default.createElement("form", { className: classes.form, onSubmit: handleSubmit },
                            react_1.default.createElement(TextField_1.default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, id: "Username", label: "Username", autoComplete: "email", autoFocus: true, value: usernameValue, onChange: function (e) { return setUsernameValue(e.target.value); } }),
                            react_1.default.createElement(TextField_1.default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, label: "Password", type: "password", id: "password", autoComplete: "current-password", value: passwordValue, onChange: function (e) { return setPasswordValue(e.target.value); } }),
                            react_1.default.createElement(Grid_1.default, { container: true, direction: "column" },
                                react_1.default.createElement(Grid_1.default, { item: true, xs: true }, isLoading ? (react_1.default.createElement("div", { className: classes.loading },
                                    react_1.default.createElement(CircularProgress_1.default, { size: 26 }))) : (react_1.default.createElement(Button_1.default, { disabled: usernameValue.length === 0 || passwordValue.length === 0, type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "Sign In")))))))),
            react_1.default.createElement(Box_1.default, { mt: 2 },
                react_1.default.createElement(Copyright, null)))));
};
function Copyright() {
    return (react_1.default.createElement(Typography_1.default, { variant: "body2", color: "textSecondary", align: "center" },
        "Copyright © ",
        react_1.default.createElement(Link_1.default, { color: "inherit", href: "https://material-ui.com/" }, "sprayrecords.swarmfarm.com"),
        " ",
        new Date().getFullYear(),
        "."));
}
exports.default = Login;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1255c52e21757f9d2b50")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOWJhZjE4NjRlNTkyNzcwNzk2NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0MsZ0JBQWdCO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQywrQkFBK0IsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDakUsb0NBQW9DLG1CQUFPLENBQUMsZ0dBQStCO0FBQzNFLGtDQUFrQyxtQkFBTyxDQUFDLDRGQUE2QjtBQUN2RSw2QkFBNkIsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDN0QsNkJBQTZCLG1CQUFPLENBQUMsa0ZBQXdCO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLGdGQUF1QjtBQUMzRCw4QkFBOEIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDL0QsbUNBQW1DLG1CQUFPLENBQUMsOEZBQThCO0FBQ3pFLGVBQWUsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDakQsa0NBQWtDLG1CQUFPLENBQUMsNEZBQTZCO0FBQ3ZFLHlDQUF5QyxtQkFBTyxDQUFDLDBHQUFvQztBQUNyRiw4QkFBOEIsbUJBQU8sQ0FBQyw0RUFBMEI7QUFDaEUsbUNBQW1DLG1CQUFPLENBQUMsOEZBQThCO0FBQ3pFLHFCQUFxQixtQkFBTyxDQUFDLCtEQUF5QjtBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQyxrSkFBcUI7QUFDaEUsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLElBQUk7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw2REFBNkQsbUNBQW1DO0FBQ2hHO0FBQ0EsbURBQW1ELDBCQUEwQjtBQUM3RSx1REFBdUQsa0VBQWtFO0FBQ3pILCtEQUErRCxrQkFBa0I7QUFDakYsMEVBQTBFLGlEQUFpRDtBQUMzSCxnRkFBZ0YsMEJBQTBCO0FBQzFHLG1FQUFtRSxNQUFNO0FBQ3pFLG1FQUFtRSxNQUFNO0FBQ3pFLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2Qiw4QkFBOEI7QUFDM0Q7QUFDQSxpRUFBaUUsMkJBQTJCO0FBQzVGLG1FQUFtRSxrQkFBa0I7QUFDckYsZ0VBQWdFLGlEQUFpRDtBQUNqSCxpRkFBaUYsa01BQWtNLDRDQUE0QztBQUMvVCxpRkFBaUYsOE1BQThNLDRDQUE0QztBQUMzVSw0RUFBNEUsc0NBQXNDO0FBQ2xILGdGQUFnRixzQkFBc0Isc0RBQXNELDRCQUE0QjtBQUN4TCxnR0FBZ0csVUFBVSx5REFBeUQsd0tBQXdLO0FBQzNVLDJEQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSwyREFBMkQ7QUFDN0g7QUFDQSx3REFBd0Qsb0RBQW9EO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7O1VDL0hmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9wYWdlcy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSk7XG52YXIgQ3NzQmFzZWxpbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIikpO1xudmFyIFRleHRGaWVsZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIikpO1xudmFyIExpbmtfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKSk7XG52YXIgR3JpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpKTtcbnZhciBCb3hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpKTtcbnZhciBQYXBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKSk7XG52YXIgVHlwb2dyYXBoeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7XG52YXIgQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKSk7XG52YXIgQ2lyY3VsYXJQcm9ncmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpKTtcbnZhciBDbGVhcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIikpO1xudmFyIEljb25CdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKSk7XG52YXIgQXV0aFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIik7XG52YXIgU0Zsb2dvX3N2Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9idWlsZC9TRmxvZ28uc3ZnXCIpKTtcbnZhciB1c2VTdHlsZXMgPSBzdHlsZXNfMS5tYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkgeyByZXR1cm4gKHtcbiAgICBwYXBlcjoge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICBzaWduSW46IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICAgIHN1Ym1pdDoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICB3aWR0aDogXCIyNTBweFwiLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNlYjZjNjNcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiYmxhY2tcIixcbiAgICB9LFxufSk7IH0pO1xudmFyIExvZ2luID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICAvL2dsb2JhbFxuICAgIHZhciBmYWlsZWRMb2dpbiA9IEF1dGhQcm92aWRlcl8xLnVzZUF1dGhTdGF0ZSgpLmZhaWxlZExvZ2luO1xuICAgIHZhciBhdXRoRGlzcGF0Y2ggPSBBdXRoUHJvdmlkZXJfMS51c2VBdXRoRGlzcGF0Y2goKS5hdXRoRGlzcGF0Y2g7XG4gICAgLy9sb2NhbFxuICAgIHZhciBfYSA9IHJlYWN0XzEudXNlU3RhdGUoZmFsc2UpLCBpc0xvYWRpbmcgPSBfYVswXSwgc2V0SXNMb2FkaW5nID0gX2FbMV07XG4gICAgdmFyIF9iID0gcmVhY3RfMS51c2VTdGF0ZShcIlwiKSwgdXNlcm5hbWVWYWx1ZSA9IF9iWzBdLCBzZXRVc2VybmFtZVZhbHVlID0gX2JbMV07XG4gICAgdmFyIF9jID0gcmVhY3RfMS51c2VTdGF0ZShcIlwiKSwgcGFzc3dvcmRWYWx1ZSA9IF9jWzBdLCBzZXRQYXNzd29yZFZhbHVlID0gX2NbMV07XG4gICAgdmFyIGhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBdXRoUHJvdmlkZXJfMS5sb2dpblVzZXIoe1xuICAgICAgICAgICAgYXV0aERpc3BhdGNoOiBhdXRoRGlzcGF0Y2gsXG4gICAgICAgICAgICBsb2dpbjogdXNlcm5hbWVWYWx1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFZhbHVlLFxuICAgICAgICAgICAgaGlzdG9yeTogcHJvcHMuaGlzdG9yeSxcbiAgICAgICAgICAgIHNldElzTG9hZGluZzogc2V0SXNMb2FkaW5nLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyXzEuZGVmYXVsdCwgeyBjb21wb25lbnQ6IFwibWFpblwiLCBtYXhXaWR0aDogXCJ4c1wiIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDc3NCYXNlbGluZV8xLmRlZmF1bHQsIG51bGwpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMucGFwZXIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5pbWFnZSwgc3JjOiBTRmxvZ29fc3ZnXzEuZGVmYXVsdCwgYWx0OiBcIkxvZ29cIiB9KSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IG14OiBcImF1dG9cIiwgcDogMiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyBjb21wb25lbnQ6IFwiaDFcIiwgdmFyaWFudDogXCJoNVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LCBcIlNpZ24gaW4gdG8gU3dhcm1GYXJtXCIpKSxcbiAgICAgICAgICAgICAgICBmYWlsZWRMb2dpbiA/IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQYXBlcl8xLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLmVycm9yIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgcDogMiB9LCBcIkluY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZC5cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgcDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbl8xLmRlZmF1bHQsIHsgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0aERpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEF1dGhQcm92aWRlcl8xLlR5cGVzLkNsZWFyTG9naW5FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJhcmlhLWxhYmVsXCI6IFwiY2xlYXJFcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJfMS5kZWZhdWx0LCBudWxsKSkpKSkgOiAoXCJcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGFwZXJfMS5kZWZhdWx0LCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5zaWduSW4gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBteDogXCJhdXRvXCIsIHA6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5mb3JtLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkXzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcIm91dGxpbmVkXCIsIG1hcmdpbjogXCJub3JtYWxcIiwgcmVxdWlyZWQ6IHRydWUsIGZ1bGxXaWR0aDogdHJ1ZSwgaWQ6IFwiVXNlcm5hbWVcIiwgbGFiZWw6IFwiVXNlcm5hbWVcIiwgYXV0b0NvbXBsZXRlOiBcImVtYWlsXCIsIGF1dG9Gb2N1czogdHJ1ZSwgdmFsdWU6IHVzZXJuYW1lVmFsdWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0VXNlcm5hbWVWYWx1ZShlLnRhcmdldC52YWx1ZSk7IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkXzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcIm91dGxpbmVkXCIsIG1hcmdpbjogXCJub3JtYWxcIiwgcmVxdWlyZWQ6IHRydWUsIGZ1bGxXaWR0aDogdHJ1ZSwgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiLCBpZDogXCJwYXNzd29yZFwiLCBhdXRvQ29tcGxldGU6IFwiY3VycmVudC1wYXNzd29yZFwiLCB2YWx1ZTogcGFzc3dvcmRWYWx1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRQYXNzd29yZFZhbHVlKGUudGFyZ2V0LnZhbHVlKTsgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChHcmlkXzEuZGVmYXVsdCwgeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChHcmlkXzEuZGVmYXVsdCwgeyBpdGVtOiB0cnVlLCB4czogdHJ1ZSB9LCBpc0xvYWRpbmcgPyAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMubG9hZGluZyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2lyY3VsYXJQcm9ncmVzc18xLmRlZmF1bHQsIHsgc2l6ZTogMjYgfSkpKSA6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCdXR0b25fMS5kZWZhdWx0LCB7IGRpc2FibGVkOiB1c2VybmFtZVZhbHVlLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZFZhbHVlLmxlbmd0aCA9PT0gMCwgdHlwZTogXCJzdWJtaXRcIiwgZnVsbFdpZHRoOiB0cnVlLCB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogY2xhc3Nlcy5zdWJtaXQgfSwgXCJTaWduIEluXCIpKSkpKSkpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgbXQ6IDIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb3B5cmlnaHQsIG51bGwpKSkpKTtcbn07XG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5XzEuZGVmYXVsdCwgeyB2YXJpYW50OiBcImJvZHkyXCIsIGNvbG9yOiBcInRleHRTZWNvbmRhcnlcIiwgYWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICAgICAgXCJDb3B5cmlnaHQgwqkgXCIsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExpbmtfMS5kZWZhdWx0LCB7IGNvbG9yOiBcImluaGVyaXRcIiwgaHJlZjogXCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIiB9LCBcInNwcmF5cmVjb3Jkcy5zd2FybWZhcm0uY29tXCIpLFxuICAgICAgICBcIiBcIixcbiAgICAgICAgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBcIi5cIikpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTG9naW47XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMjU1YzUyZTIxNzU3ZjlkMmI1MFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==