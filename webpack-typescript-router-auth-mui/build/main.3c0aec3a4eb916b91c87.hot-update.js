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
// import SFlogo from "../assets/SFlogo.svg";
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
/******/ 	__webpack_require__.h = () => ("353594f439c8397288bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYzBhZWMzYTRlYjkxNmI5MWM4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0MsZ0JBQWdCO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQywrQkFBK0IsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDakUsb0NBQW9DLG1CQUFPLENBQUMsZ0dBQStCO0FBQzNFLGtDQUFrQyxtQkFBTyxDQUFDLDRGQUE2QjtBQUN2RSw2QkFBNkIsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDN0QsNkJBQTZCLG1CQUFPLENBQUMsa0ZBQXdCO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLGdGQUF1QjtBQUMzRCw4QkFBOEIsbUJBQU8sQ0FBQyxvRkFBeUI7QUFDL0QsbUNBQW1DLG1CQUFPLENBQUMsOEZBQThCO0FBQ3pFLGVBQWUsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDakQsa0NBQWtDLG1CQUFPLENBQUMsNEZBQTZCO0FBQ3ZFLHlDQUF5QyxtQkFBTyxDQUFDLDBHQUFvQztBQUNyRiw4QkFBOEIsbUJBQU8sQ0FBQyw0RUFBMEI7QUFDaEUsbUNBQW1DLG1CQUFPLENBQUMsOEZBQThCO0FBQ3pFLHFCQUFxQixtQkFBTyxDQUFDLCtEQUF5QjtBQUN0RDtBQUNBLG1DQUFtQyxtQkFBTyxDQUFDLHFEQUFzQjtBQUNqRSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDZEQUE2RCxtQ0FBbUM7QUFDaEc7QUFDQSxtREFBbUQsMEJBQTBCO0FBQzdFLHVEQUF1RCxrRUFBa0U7QUFDekgsK0RBQStELGtCQUFrQjtBQUNqRiwwRUFBMEUsaURBQWlEO0FBQzNILGdGQUFnRiwwQkFBMEI7QUFDMUcsbUVBQW1FLE1BQU07QUFDekUsbUVBQW1FLE1BQU07QUFDekUsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCLDhCQUE4QjtBQUMzRDtBQUNBLGlFQUFpRSwyQkFBMkI7QUFDNUYsbUVBQW1FLGtCQUFrQjtBQUNyRixnRUFBZ0UsaURBQWlEO0FBQ2pILGlGQUFpRixrTUFBa00sNENBQTRDO0FBQy9ULGlGQUFpRiw4TUFBOE0sNENBQTRDO0FBQzNVLDRFQUE0RSxzQ0FBc0M7QUFDbEgsZ0ZBQWdGLHNCQUFzQixzREFBc0QsNEJBQTRCO0FBQ3hMLGdHQUFnRyxVQUFVLHlEQUF5RCx3S0FBd0s7QUFDM1UsMkRBQTJELE9BQU87QUFDbEU7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLDJEQUEyRDtBQUM3SDtBQUNBLHdEQUF3RCxvREFBb0Q7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7VUNoSWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpLy4vc3JjL3BhZ2VzL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcm91dGVyLWF1dGgtbXVpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpKTtcbnZhciBDc3NCYXNlbGluZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKSk7XG52YXIgVGV4dEZpZWxkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKSk7XG52YXIgTGlua18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpKTtcbnZhciBHcmlkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIikpO1xudmFyIEJveF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIikpO1xudmFyIFBhcGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpKTtcbnZhciBUeXBvZ3JhcGh5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIikpO1xudmFyIHN0eWxlc18xID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTtcbnZhciBDb250YWluZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpKTtcbnZhciBDaXJjdWxhclByb2dyZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIikpO1xudmFyIENsZWFyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiKSk7XG52YXIgSWNvbkJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpKTtcbnZhciBBdXRoUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuLi9jb250ZXh0L0F1dGhQcm92aWRlclwiKTtcbi8vIGltcG9ydCBTRmxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9TRmxvZ28uc3ZnXCI7XG52YXIgU0Zsb2dvX3N2Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvU0Zsb2dvLnN2Z1wiKSk7XG52YXIgdXNlU3R5bGVzID0gc3R5bGVzXzEubWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHsgcmV0dXJuICh7XG4gICAgcGFwZXI6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgc2lnbkluOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICAgIH0sXG4gICAgbG9hZGluZzoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgd2lkdGg6IFwiMjUwcHhcIixcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgYmFja2dyb3VuZDogXCIjZWI2YzYzXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXG4gICAgfSxcbn0pOyB9KTtcbnZhciBMb2dpbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgLy9nbG9iYWxcbiAgICB2YXIgZmFpbGVkTG9naW4gPSBBdXRoUHJvdmlkZXJfMS51c2VBdXRoU3RhdGUoKS5mYWlsZWRMb2dpbjtcbiAgICB2YXIgYXV0aERpc3BhdGNoID0gQXV0aFByb3ZpZGVyXzEudXNlQXV0aERpc3BhdGNoKCkuYXV0aERpc3BhdGNoO1xuICAgIC8vbG9jYWxcbiAgICB2YXIgX2EgPSByZWFjdF8xLnVzZVN0YXRlKGZhbHNlKSwgaXNMb2FkaW5nID0gX2FbMF0sIHNldElzTG9hZGluZyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHJlYWN0XzEudXNlU3RhdGUoXCJcIiksIHVzZXJuYW1lVmFsdWUgPSBfYlswXSwgc2V0VXNlcm5hbWVWYWx1ZSA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHJlYWN0XzEudXNlU3RhdGUoXCJcIiksIHBhc3N3b3JkVmFsdWUgPSBfY1swXSwgc2V0UGFzc3dvcmRWYWx1ZSA9IF9jWzFdO1xuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgQXV0aFByb3ZpZGVyXzEubG9naW5Vc2VyKHtcbiAgICAgICAgICAgIGF1dGhEaXNwYXRjaDogYXV0aERpc3BhdGNoLFxuICAgICAgICAgICAgbG9naW46IHVzZXJuYW1lVmFsdWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRWYWx1ZSxcbiAgICAgICAgICAgIGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmc6IHNldElzTG9hZGluZyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lcl8xLmRlZmF1bHQsIHsgY29tcG9uZW50OiBcIm1haW5cIiwgbWF4V2lkdGg6IFwieHNcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ3NzQmFzZWxpbmVfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLnBhcGVyIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMuaW1hZ2UsIHNyYzogU0Zsb2dvX3N2Z18xLmRlZmF1bHQsIGFsdDogXCJMb2dvXCIgfSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQm94XzEuZGVmYXVsdCwgeyBteDogXCJhdXRvXCIsIHA6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgY29tcG9uZW50OiBcImgxXCIsIHZhcmlhbnQ6IFwiaDVcIiwgYWxpZ246IFwiY2VudGVyXCIgfSwgXCJTaWduIGluIHRvIFN3YXJtRmFybVwiKSksXG4gICAgICAgICAgICAgICAgZmFpbGVkTG9naW4gPyAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGFwZXJfMS5kZWZhdWx0LCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5lcnJvciB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHA6IDIgfSwgXCJJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQuXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IHA6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b25fMS5kZWZhdWx0LCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dGhEaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBdXRoUHJvdmlkZXJfMS5UeXBlcy5DbGVhckxvZ2luRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiYXJpYS1sYWJlbFwiOiBcImNsZWFyRXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENsZWFyXzEuZGVmYXVsdCwgbnVsbCkpKSkpIDogKFwiXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBhcGVyXzEuZGVmYXVsdCwgeyBjbGFzc05hbWU6IGNsYXNzZXMuc2lnbkluIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJveF8xLmRlZmF1bHQsIHsgbXg6IFwiYXV0b1wiLCBwOiAyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMuZm9ybSwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZF8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBtYXJnaW46IFwibm9ybWFsXCIsIHJlcXVpcmVkOiB0cnVlLCBmdWxsV2lkdGg6IHRydWUsIGlkOiBcIlVzZXJuYW1lXCIsIGxhYmVsOiBcIlVzZXJuYW1lXCIsIGF1dG9Db21wbGV0ZTogXCJlbWFpbFwiLCBhdXRvRm9jdXM6IHRydWUsIHZhbHVlOiB1c2VybmFtZVZhbHVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldFVzZXJuYW1lVmFsdWUoZS50YXJnZXQudmFsdWUpOyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZF8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBtYXJnaW46IFwibm9ybWFsXCIsIHJlcXVpcmVkOiB0cnVlLCBmdWxsV2lkdGg6IHRydWUsIGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiwgaWQ6IFwicGFzc3dvcmRcIiwgYXV0b0NvbXBsZXRlOiBcImN1cnJlbnQtcGFzc3dvcmRcIiwgdmFsdWU6IHBhc3N3b3JkVmFsdWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0UGFzc3dvcmRWYWx1ZShlLnRhcmdldC52YWx1ZSk7IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR3JpZF8xLmRlZmF1bHQsIHsgY29udGFpbmVyOiB0cnVlLCBkaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR3JpZF8xLmRlZmF1bHQsIHsgaXRlbTogdHJ1ZSwgeHM6IHRydWUgfSwgaXNMb2FkaW5nID8gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLmxvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENpcmN1bGFyUHJvZ3Jlc3NfMS5kZWZhdWx0LCB7IHNpemU6IDI2IH0pKSkgOiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXzEuZGVmYXVsdCwgeyBkaXNhYmxlZDogdXNlcm5hbWVWYWx1ZS5sZW5ndGggPT09IDAgfHwgcGFzc3dvcmRWYWx1ZS5sZW5ndGggPT09IDAsIHR5cGU6IFwic3VibWl0XCIsIGZ1bGxXaWR0aDogdHJ1ZSwgdmFyaWFudDogXCJjb250YWluZWRcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBjbGFzc05hbWU6IGNsYXNzZXMuc3VibWl0IH0sIFwiU2lnbiBJblwiKSkpKSkpKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCb3hfMS5kZWZhdWx0LCB7IG10OiAyIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29weXJpZ2h0LCBudWxsKSkpKSk7XG59O1xuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeV8xLmRlZmF1bHQsIHsgdmFyaWFudDogXCJib2R5MlwiLCBjb2xvcjogXCJ0ZXh0U2Vjb25kYXJ5XCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIFwiQ29weXJpZ2h0IMKpIFwiLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMaW5rXzEuZGVmYXVsdCwgeyBjb2xvcjogXCJpbmhlcml0XCIsIGhyZWY6IFwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCIgfSwgXCJzcHJheXJlY29yZHMuc3dhcm1mYXJtLmNvbVwiKSxcbiAgICAgICAgXCIgXCIsXG4gICAgICAgIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgXCIuXCIpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ2luO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzUzNTk0ZjQzOWM4Mzk3Mjg4YmRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=