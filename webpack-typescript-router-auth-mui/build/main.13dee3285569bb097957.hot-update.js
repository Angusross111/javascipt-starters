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
var SFlogo_svg_1 = __importDefault(__webpack_require__(/*! ../assets/SFlogo.svg */ "./src/assets/SFlogo.svg"));
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
                react_1.default.createElement(SFlogo_svg_1.default, { className: classes.image }),
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
/******/ 	__webpack_require__.h = () => ("0b6c583759e4f64b3cf0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xM2RlZTMyODU1NjliYjA5Nzk1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0MsZ0JBQWdCO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQywrQkFBK0IsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDakUsb0NBQW9DLG1CQUFPLENBQUMsZ0dBQStCO0FBQzNFLGtDQUFrQyxtQkFBTyxDQUFDLDRGQUE2QjtBQUN2RSw2QkFBNkIsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDN0QsNkJBQTZCLG1CQUFPLENBQUMsa0ZBQXdCO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLGdGQUF1QjtBQUMzRCw4QkFBOEIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDL0QsbUNBQW1DLG1CQUFPLENBQUMsOEZBQThCO0FBQ3pFLGVBQWUsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDakQsa0NBQWtDLG1CQUFPLENBQUMsNEZBQTZCO0FBQ3ZFLHlDQUF5QyxtQkFBTyxDQUFDLDBHQUFvQztBQUNyRiw4QkFBOEIsbUJBQU8sQ0FBQyw0RUFBMEI7QUFDaEUsbUNBQW1DLG1CQUFPLENBQUMsOEZBQThCO0FBQ3pFLHFCQUFxQixtQkFBTyxDQUFDLCtEQUF5QjtBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQyxxREFBc0I7QUFDakUsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLElBQUk7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw2REFBNkQsbUNBQW1DO0FBQ2hHO0FBQ0EsbURBQW1ELDBCQUEwQjtBQUM3RSxzRUFBc0UsMEJBQTBCO0FBQ2hHLCtEQUErRCxrQkFBa0I7QUFDakYsMEVBQTBFLGlEQUFpRDtBQUMzSCxnRkFBZ0YsMEJBQTBCO0FBQzFHLG1FQUFtRSxNQUFNO0FBQ3pFLG1FQUFtRSxNQUFNO0FBQ3pFLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2Qiw4QkFBOEI7QUFDM0Q7QUFDQSxpRUFBaUUsMkJBQTJCO0FBQzVGLG1FQUFtRSxrQkFBa0I7QUFDckYsZ0VBQWdFLGlEQUFpRDtBQUNqSCxpRkFBaUYsa01BQWtNLDRDQUE0QztBQUMvVCxpRkFBaUYsOE1BQThNLDRDQUE0QztBQUMzVSw0RUFBNEUsc0NBQXNDO0FBQ2xILGdGQUFnRixzQkFBc0Isc0RBQXNELDRCQUE0QjtBQUN4TCxnR0FBZ0csVUFBVSx5REFBeUQsd0tBQXdLO0FBQzNVLDJEQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSwyREFBMkQ7QUFDN0g7QUFDQSx3REFBd0Qsb0RBQW9EO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7O1VDL0hmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9wYWdlcy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKSk7XG52YXIgQ3NzQmFzZWxpbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIikpO1xudmFyIFRleHRGaWVsZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIikpO1xudmFyIExpbmtfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKSk7XG52YXIgR3JpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpKTtcbnZhciBCb3hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpKTtcbnZhciBQYXBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKSk7XG52YXIgVHlwb2dyYXBoeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7XG52YXIgQ29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKSk7XG52YXIgQ2lyY3VsYXJQcm9ncmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpKTtcbnZhciBDbGVhcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIikpO1xudmFyIEljb25CdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKSk7XG52YXIgQXV0aFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIik7XG52YXIgU0Zsb2dvX3N2Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvU0Zsb2dvLnN2Z1wiKSk7XG52YXIgdXNlU3R5bGVzID0gc3R5bGVzXzEubWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHsgcmV0dXJuICh7XG4gICAgcGFwZXI6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgc2lnbkluOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICAgIH0sXG4gICAgbG9hZGluZzoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgd2lkdGg6IFwiMjUwcHhcIixcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgYmFja2dyb3VuZDogXCIjZWI2YzYzXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXG4gICAgfSxcbn0pOyB9KTtcbnZhciBMb2dpbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgLy9nbG9iYWxcbiAgICB2YXIgZmFpbGVkTG9naW4gPSBBdXRoUHJvdmlkZXJfMS51c2VBdXRoU3RhdGUoKS5mYWlsZWRMb2dpbjtcbiAgICB2YXIgYXV0aERpc3BhdGNoID0gQXV0aFByb3ZpZGVyXzEudXNlQXV0aERpc3BhdGNoKCkuYXV0aERpc3BhdGNoO1xuICAgIC8vbG9jYWxcbiAgICB2YXIgX2EgPSByZWFjdF8xLnVzZVN0YXRlKGZhbHNlKSwgaXNMb2FkaW5nID0gX2FbMF0sIHNldElzTG9hZGluZyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHJlYWN0XzEudXNlU3RhdGUoXCJcIiksIHVzZXJuYW1lVmFsdWUgPSBfYlswXSwgc2V0VXNlcm5hbWVWYWx1ZSA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHJlYWN0XzEudXNlU3RhdGUoXCJcIiksIHBhc3N3b3JkVmFsdWUgPSBfY1swXSwgc2V0UGFzc3dvcmRWYWx1ZSA9IF9jWzFdO1xuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgQXV0aFByb3ZpZGVyXzEubG9naW5Vc2VyKHtcbiAgICAgICAgICAgIGF1dGhEaXNwYXRjaDogYXV0aERpc3BhdGNoLFxuICAgICAgICAgICAgbG9naW46IHVzZXJuYW1lVmFsdWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRWYWx1ZSxcbiAgICAgICAgICAgIGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmc6IHNldElzTG9hZGluZyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lcl8xLmRlZmF1bHQsIHsgY29tcG9uZW50OiBcIm1haW5cIiwgbWF4V2lkdGg6IFwieHNcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ3NzQmFzZWxpbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLnBhcGVyIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU0Zsb2dvX3N2Z18xLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLmltYWdlIH0pLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgbXg6IFwiYXV0b1wiLCBwOiAyIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IGNvbXBvbmVudDogXCJoMVwiLCB2YXJpYW50OiBcImg1XCIsIGFsaWduOiBcImNlbnRlclwiIH0sIFwiU2lnbiBpbiB0byBTd2FybUZhcm1cIikpLFxuICAgICAgICAgICAgICAgIGZhaWxlZExvZ2luID8gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBhcGVyXzEuZGVmYXVsdCwgeyBjbGFzc05hbWU6IGNsYXNzZXMuZXJyb3IgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBwOiAyIH0sIFwiSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBwOiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uXzEuZGVmYXVsdCwgeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRoRGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQXV0aFByb3ZpZGVyXzEuVHlwZXMuQ2xlYXJMb2dpbkVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcImFyaWEtbGFiZWxcIjogXCJjbGVhckVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDbGVhcl8xLmRlZmF1bHQsIG51bGwpKSkpKSA6IChcIlwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQYXBlcl8xLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLnNpZ25JbiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IG14OiBcImF1dG9cIiwgcDogMiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLmZvcm0sIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUZXh0RmllbGRfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgbWFyZ2luOiBcIm5vcm1hbFwiLCByZXF1aXJlZDogdHJ1ZSwgZnVsbFdpZHRoOiB0cnVlLCBpZDogXCJVc2VybmFtZVwiLCBsYWJlbDogXCJVc2VybmFtZVwiLCBhdXRvQ29tcGxldGU6IFwiZW1haWxcIiwgYXV0b0ZvY3VzOiB0cnVlLCB2YWx1ZTogdXNlcm5hbWVWYWx1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRVc2VybmFtZVZhbHVlKGUudGFyZ2V0LnZhbHVlKTsgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUZXh0RmllbGRfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgbWFyZ2luOiBcIm5vcm1hbFwiLCByZXF1aXJlZDogdHJ1ZSwgZnVsbFdpZHRoOiB0cnVlLCBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIsIGlkOiBcInBhc3N3b3JkXCIsIGF1dG9Db21wbGV0ZTogXCJjdXJyZW50LXBhc3N3b3JkXCIsIHZhbHVlOiBwYXNzd29yZFZhbHVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldFBhc3N3b3JkVmFsdWUoZS50YXJnZXQudmFsdWUpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEdyaWRfMS5kZWZhdWx0LCB7IGNvbnRhaW5lcjogdHJ1ZSwgZGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEdyaWRfMS5kZWZhdWx0LCB7IGl0ZW06IHRydWUsIHhzOiB0cnVlIH0sIGlzTG9hZGluZyA/IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5sb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDaXJjdWxhclByb2dyZXNzXzEuZGVmYXVsdCwgeyBzaXplOiAyNiB9KSkpIDogKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbl8xLmRlZmF1bHQsIHsgZGlzYWJsZWQ6IHVzZXJuYW1lVmFsdWUubGVuZ3RoID09PSAwIHx8IHBhc3N3b3JkVmFsdWUubGVuZ3RoID09PSAwLCB0eXBlOiBcInN1Ym1pdFwiLCBmdWxsV2lkdGg6IHRydWUsIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgY2xhc3NOYW1lOiBjbGFzc2VzLnN1Ym1pdCB9LCBcIlNpZ24gSW5cIikpKSkpKSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBtdDogMiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvcHlyaWdodCwgbnVsbCkpKSkpO1xufTtcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHlfMS5kZWZhdWx0LCB7IHZhcmlhbnQ6IFwiYm9keTJcIiwgY29sb3I6IFwidGV4dFNlY29uZGFyeVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICBcIkNvcHlyaWdodCDCqSBcIixcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGlua18xLmRlZmF1bHQsIHsgY29sb3I6IFwiaW5oZXJpdFwiLCBocmVmOiBcImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiIH0sIFwic3ByYXlyZWNvcmRzLnN3YXJtZmFybS5jb21cIiksXG4gICAgICAgIFwiIFwiLFxuICAgICAgICBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIFwiLlwiKSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBiNmM1ODM3NTllNGY2NGIzY2YwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9