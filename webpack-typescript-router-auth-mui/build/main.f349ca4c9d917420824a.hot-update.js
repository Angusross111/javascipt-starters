self["webpackHotUpdatewebpack_typescript_router_auth_mui"]("main",{

/***/ "./node_modules/base-64/base64.js":
/*!****************************************!*\
  !*** ./node_modules/base-64/base64.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/base64 v1.0.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '1.0.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return base64;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
// Import Routes
var Routes_1 = __importDefault(__webpack_require__(/*! ./routes/Routes */ "./src/routes/Routes.tsx"));
// Import Context
var LayoutProvider_1 = __webpack_require__(/*! ./context/LayoutProvider */ "./src/context/LayoutProvider.tsx");
var AuthProvider_1 = __webpack_require__(/*! ./context/AuthProvider */ "./src/context/AuthProvider.tsx");
var App = function () {
    var _a = react_1.useState(true), light = _a[0], setLight = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(LayoutProvider_1.LayoutProvider, null,
            react_1.default.createElement(AuthProvider_1.AuthProvider, null,
                react_1.default.createElement(Routes_1.default, null)))));
};
exports.default = App;


/***/ }),

/***/ "./src/context/AuthProvider.tsx":
/*!**************************************!*\
  !*** ./src/context/AuthProvider.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signOut = exports.loginUser = exports.useAuthDispatch = exports.useAuthState = exports.AuthProvider = exports.Types = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var base_64_1 = __webpack_require__(/*! base-64 */ "./node_modules/base-64/base64.js");
var Types;
(function (Types) {
    Types["Login"] = "LOGIN_SUCCESS";
    Types["LoginFailure"] = "LOGIN_FAILURE";
    Types["SignOut"] = "SIGN_OUT_SUCCESS";
    Types["RefreshExpired"] = "REFRESH_EXPIRED";
    Types["ClearLoginError"] = "CLEARLOGINERROR";
})(Types = exports.Types || (exports.Types = {}));
function userReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case Types.Login:
            return __assign(__assign({}, state), { login: true, failedLogin: false });
        case Types.LoginFailure:
            return __assign(__assign({}, state), { login: false, failedLogin: true });
        case Types.SignOut:
            return __assign(__assign({}, state), { login: false, failedLogin: false });
        case Types.RefreshExpired:
            return __assign(__assign({}, state), { login: false });
        case Types.ClearLoginError:
            return __assign(__assign({}, state), { failedLogin: false });
        default: {
            throw new Error("Unhandled action type: " + action.type);
        }
    }
}
var UserStateContext = react_1.createContext(undefined);
var authDispatchContext = react_1.createContext(undefined);
var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useReducer(userReducer, {
        login: !!localStorage.getItem("login"),
        failedLogin: false,
    }), state = _b[0], dispatch = _b[1];
    return (react_1.default.createElement(UserStateContext.Provider, { value: state },
        react_1.default.createElement(authDispatchContext.Provider, { value: dispatch }, children)));
};
exports.AuthProvider = AuthProvider;
function useAuthState() {
    var context = react_1.useContext(UserStateContext);
    if (context === undefined) {
        throw new Error("useUserState must be used within a UserProvider");
    }
    return context;
}
exports.useAuthState = useAuthState;
function useAuthDispatch() {
    var context = react_1.useContext(authDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within a UserProvider");
    }
    return { authDispatch: context };
}
exports.useAuthDispatch = useAuthDispatch;
function loginUser(_a) {
    var authDispatch = _a.authDispatch, login = _a.login, password = _a.password, history = _a.history, setIsLoading = _a.setIsLoading;
    setIsLoading(true);
    var url = "/auth/authenticate";
    var requestOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
            Authorization: "Basic " + base_64_1.encode(login + ":" + password),
            "Content-Type": "application/json",
        },
    };
    fetch(url, requestOptions)
        .then(function (response) {
        if (response.status == 200) {
            localStorage.setItem("login", login);
            authDispatch({ type: "LOGIN_SUCCESS" });
            setIsLoading(false);
            history.push("/app/dashboard");
            return;
        }
        authDispatch({ type: "LOGIN_FAILURE" });
        setIsLoading(false);
        return;
    })
        .catch(function (error) {
        console.log(error);
        console.log("Login Error");
        authDispatch({ type: "LOGIN_FAILURE" });
        setIsLoading(false);
    });
}
exports.loginUser = loginUser;
function signOut(_a) {
    var authDispatch = _a.authDispatch, history = _a.history;
    var requestOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch("/auth/logout", requestOptions).then(function () { });
    localStorage.removeItem("login");
    localStorage.removeItem("period");
    localStorage.removeItem("interval");
    authDispatch({ type: "SIGN_OUT_SUCCESS" });
    history.push("/login");
}
exports.signOut = signOut;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("73e3aad42759d04c9d8d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMzQ5Y2E0YzlkOTE3NDIwODI0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1CQUFtQixLQUEwQjs7QUFFN0M7QUFDQSxrQkFBa0IsS0FBeUI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixxQkFBTSxnQkFBZ0IscUJBQU07QUFDckQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFFVTtBQUNaO0FBQ0EsRUFBRSxtQ0FBTztBQUNUO0FBQ0EsR0FBRztBQUFBLGtHQUFDO0FBQ0osR0FBRyxLQUFLLFlBVU47O0FBRUYs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OERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7OztVQzlJZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvLi9ub2RlX21vZHVsZXMvYmFzZS02NC9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXJvdXRlci1hdXRoLW11aS8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvLi9zcmMvY29udGV4dC9BdXRoUHJvdmlkZXIudHN4Iiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1yb3V0ZXItYXV0aC1tdWkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBodHRwczovL210aHMuYmUvYmFzZTY0IHYxLjAuMCBieSBAbWF0aGlhcyB8IE1JVCBsaWNlbnNlICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgYGV4cG9ydHNgLlxuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzO1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLlxuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0bW9kdWxlLmV4cG9ydHMgPT0gZnJlZUV4cG9ydHMgJiYgbW9kdWxlO1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgLCBmcm9tIE5vZGUuanMgb3IgQnJvd3NlcmlmaWVkIGNvZGUsIGFuZCB1c2Vcblx0Ly8gaXQgYXMgYHJvb3RgLlxuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdHZhciBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fTtcblx0SW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcblx0SW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cblx0dmFyIGVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdC8vIE5vdGU6IHRoZSBlcnJvciBtZXNzYWdlcyB1c2VkIHRocm91Z2hvdXQgdGhpcyBmaWxlIG1hdGNoIHRob3NlIHVzZWQgYnlcblx0XHQvLyB0aGUgbmF0aXZlIGBhdG9iYC9gYnRvYWAgaW1wbGVtZW50YXRpb24gaW4gQ2hyb21pdW0uXG5cdFx0dGhyb3cgbmV3IEludmFsaWRDaGFyYWN0ZXJFcnJvcihtZXNzYWdlKTtcblx0fTtcblxuXHR2YXIgVEFCTEUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cdC8vIGh0dHA6Ly93aGF0d2cub3JnL2h0bWwvY29tbW9uLW1pY3Jvc3ludGF4ZXMuaHRtbCNzcGFjZS1jaGFyYWN0ZXJcblx0dmFyIFJFR0VYX1NQQUNFX0NIQVJBQ1RFUlMgPSAvW1xcdFxcblxcZlxcciBdL2c7XG5cblx0Ly8gYGRlY29kZWAgaXMgZGVzaWduZWQgdG8gYmUgZnVsbHkgY29tcGF0aWJsZSB3aXRoIGBhdG9iYCBhcyBkZXNjcmliZWQgaW4gdGhlXG5cdC8vIEhUTUwgU3RhbmRhcmQuIGh0dHA6Ly93aGF0d2cub3JnL2h0bWwvd2ViYXBwYXBpcy5odG1sI2RvbS13aW5kb3diYXNlNjQtYXRvYlxuXHQvLyBUaGUgb3B0aW1pemVkIGJhc2U2NC1kZWNvZGluZyBhbGdvcml0aG0gdXNlZCBpcyBiYXNlZCBvbiBAYXRr4oCZcyBleGNlbGxlbnRcblx0Ly8gaW1wbGVtZW50YXRpb24uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2F0ay8xMDIwMzk2XG5cdHZhciBkZWNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRcdGlucHV0ID0gU3RyaW5nKGlucHV0KVxuXHRcdFx0LnJlcGxhY2UoUkVHRVhfU1BBQ0VfQ0hBUkFDVEVSUywgJycpO1xuXHRcdHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdFx0aWYgKGxlbmd0aCAlIDQgPT0gMCkge1xuXHRcdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC89PT8kLywgJycpO1xuXHRcdFx0bGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRsZW5ndGggJSA0ID09IDEgfHxcblx0XHRcdC8vIGh0dHA6Ly93aGF0d2cub3JnL0MjYWxwaGFudW1lcmljLWFzY2lpLWNoYXJhY3RlcnNcblx0XHRcdC9bXithLXpBLVowLTkvXS8udGVzdChpbnB1dClcblx0XHQpIHtcblx0XHRcdGVycm9yKFxuXHRcdFx0XHQnSW52YWxpZCBjaGFyYWN0ZXI6IHRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0dmFyIGJpdENvdW50ZXIgPSAwO1xuXHRcdHZhciBiaXRTdG9yYWdlO1xuXHRcdHZhciBidWZmZXI7XG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdHZhciBwb3NpdGlvbiA9IC0xO1xuXHRcdHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XG5cdFx0XHRidWZmZXIgPSBUQUJMRS5pbmRleE9mKGlucHV0LmNoYXJBdChwb3NpdGlvbikpO1xuXHRcdFx0Yml0U3RvcmFnZSA9IGJpdENvdW50ZXIgJSA0ID8gYml0U3RvcmFnZSAqIDY0ICsgYnVmZmVyIDogYnVmZmVyO1xuXHRcdFx0Ly8gVW5sZXNzIHRoaXMgaXMgdGhlIGZpcnN0IG9mIGEgZ3JvdXAgb2YgNCBjaGFyYWN0ZXJz4oCmXG5cdFx0XHRpZiAoYml0Q291bnRlcisrICUgNCkge1xuXHRcdFx0XHQvLyDigKZjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gYSBzaW5nbGUgQVNDSUkgY2hhcmFjdGVyLlxuXHRcdFx0XHRvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcblx0XHRcdFx0XHQweEZGICYgYml0U3RvcmFnZSA+PiAoLTIgKiBiaXRDb3VudGVyICYgNilcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fTtcblxuXHQvLyBgZW5jb2RlYCBpcyBkZXNpZ25lZCB0byBiZSBmdWxseSBjb21wYXRpYmxlIHdpdGggYGJ0b2FgIGFzIGRlc2NyaWJlZCBpbiB0aGVcblx0Ly8gSFRNTCBTdGFuZGFyZDogaHR0cDovL3doYXR3Zy5vcmcvaHRtbC93ZWJhcHBhcGlzLmh0bWwjZG9tLXdpbmRvd2Jhc2U2NC1idG9hXG5cdHZhciBlbmNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRcdGlucHV0ID0gU3RyaW5nKGlucHV0KTtcblx0XHRpZiAoL1teXFwwLVxceEZGXS8udGVzdChpbnB1dCkpIHtcblx0XHRcdC8vIE5vdGU6IG5vIG5lZWQgdG8gc3BlY2lhbC1jYXNlIGFzdHJhbCBzeW1ib2xzIGhlcmUsIGFzIHN1cnJvZ2F0ZXMgYXJlXG5cdFx0XHQvLyBtYXRjaGVkLCBhbmQgdGhlIGlucHV0IGlzIHN1cHBvc2VkIHRvIG9ubHkgY29udGFpbiBBU0NJSSBhbnl3YXkuXG5cdFx0XHRlcnJvcihcblx0XHRcdFx0J1RoZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgb2YgdGhlICcgK1xuXHRcdFx0XHQnTGF0aW4xIHJhbmdlLidcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHZhciBwYWRkaW5nID0gaW5wdXQubGVuZ3RoICUgMztcblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0dmFyIHBvc2l0aW9uID0gLTE7XG5cdFx0dmFyIGE7XG5cdFx0dmFyIGI7XG5cdFx0dmFyIGM7XG5cdFx0dmFyIGJ1ZmZlcjtcblx0XHQvLyBNYWtlIHN1cmUgYW55IHBhZGRpbmcgaXMgaGFuZGxlZCBvdXRzaWRlIG9mIHRoZSBsb29wLlxuXHRcdHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGggLSBwYWRkaW5nO1xuXG5cdFx0d2hpbGUgKCsrcG9zaXRpb24gPCBsZW5ndGgpIHtcblx0XHRcdC8vIFJlYWQgdGhyZWUgYnl0ZXMsIGkuZS4gMjQgYml0cy5cblx0XHRcdGEgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKSA8PCAxNjtcblx0XHRcdGIgPSBpbnB1dC5jaGFyQ29kZUF0KCsrcG9zaXRpb24pIDw8IDg7XG5cdFx0XHRjID0gaW5wdXQuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblx0XHRcdGJ1ZmZlciA9IGEgKyBiICsgYztcblx0XHRcdC8vIFR1cm4gdGhlIDI0IGJpdHMgaW50byBmb3VyIGNodW5rcyBvZiA2IGJpdHMgZWFjaCwgYW5kIGFwcGVuZCB0aGVcblx0XHRcdC8vIG1hdGNoaW5nIGNoYXJhY3RlciBmb3IgZWFjaCBvZiB0aGVtIHRvIHRoZSBvdXRwdXQuXG5cdFx0XHRvdXRwdXQgKz0gKFxuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDE4ICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDEyICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDYgJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgJiAweDNGKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAocGFkZGluZyA9PSAyKSB7XG5cdFx0XHRhID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbikgPDwgODtcblx0XHRcdGIgPSBpbnB1dC5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXHRcdFx0YnVmZmVyID0gYSArIGI7XG5cdFx0XHRvdXRwdXQgKz0gKFxuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDEwKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdCgoYnVmZmVyID4+IDQpICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA8PCAyKSAmIDB4M0YpICtcblx0XHRcdFx0Jz0nXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAocGFkZGluZyA9PSAxKSB7XG5cdFx0XHRidWZmZXIgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcblx0XHRcdG91dHB1dCArPSAoXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA8PCA0KSAmIDB4M0YpICtcblx0XHRcdFx0Jz09J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9O1xuXG5cdHZhciBiYXNlNjQgPSB7XG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCd2ZXJzaW9uJzogJzEuMC4wJ1xuXHR9O1xuXG5cdC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIHNwZWNpZmljIGNvbmRpdGlvbiBwYXR0ZXJuc1xuXHQvLyBsaWtlIHRoZSBmb2xsb3dpbmc6XG5cdGlmIChcblx0XHR0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JyAmJlxuXHRcdGRlZmluZS5hbWRcblx0KSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGJhc2U2NDtcblx0XHR9KTtcblx0fVx0ZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgIWZyZWVFeHBvcnRzLm5vZGVUeXBlKSB7XG5cdFx0aWYgKGZyZWVNb2R1bGUpIHsgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IGJhc2U2NDtcblx0XHR9IGVsc2UgeyAvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGJhc2U2NCkge1xuXHRcdFx0XHRiYXNlNjQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IGJhc2U2NFtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7IC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LmJhc2U2NCA9IGJhc2U2NDtcblx0fVxuXG59KHRoaXMpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG4vLyBpbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gLy8gSW1wb3J0IFRoZW1lc1xuLy8gaW1wb3J0IHsgdGhlbWVMaWdodCwgdGhlbWVEYXJrIH0gZnJvbSBcIi4vdGhlbWVzL3N3YXJtZmFybVRoZW1lc1wiO1xuLy8gLy8gSW1wb3J0IFJvdXRlc1xuLy8gaW1wb3J0IHsgdXNlUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vIGltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzL1JvdXRlc1wiO1xuLy8gLy8gSW1wb3J0IENvbnRleHRcbi8vIGltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9MYXlvdXRQcm92aWRlclwiO1xuLy8gaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gY29uc3QgQXBwID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4vLyAgICAgY29uc3QgW2xpZ2h0LCBzZXRMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcbi8vICAgICBjb25zdCByb3V0aW5nID0gdXNlUm91dGVzKHJvdXRlcyk7XG4vLyAgICAgcmV0dXJuIHJvdXRpbmc7XG4vLyAgICAgLy8gcmV0dXJuIChcbi8vICAgICAvLyAgICAgPGRpdj5cbi8vICAgICAvLyAgICAgICAgIDxMYXlvdXRQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxuLy8gICAgIC8vICAgICAgICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17bGlnaHQgPyB0aGVtZUxpZ2h0IDogdGhlbWVEYXJrfT5cbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAge3JvdXRpbmd9XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cbi8vICAgICAvLyAgICAgICAgIDwvTGF5b3V0UHJvdmlkZXI+XG4vLyAgICAgLy8gICAgIDwvZGl2PlxuLy8gICAgIC8vICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgQXBwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbi8vIEltcG9ydCBSb3V0ZXNcbnZhciBSb3V0ZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXMvUm91dGVzXCIpKTtcbi8vIEltcG9ydCBDb250ZXh0XG52YXIgTGF5b3V0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRleHQvTGF5b3V0UHJvdmlkZXJcIik7XG52YXIgQXV0aFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi9jb250ZXh0L0F1dGhQcm92aWRlclwiKTtcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gcmVhY3RfMS51c2VTdGF0ZSh0cnVlKSwgbGlnaHQgPSBfYVswXSwgc2V0TGlnaHQgPSBfYVsxXTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExheW91dFByb3ZpZGVyXzEuTGF5b3V0UHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBdXRoUHJvdmlkZXJfMS5BdXRoUHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUm91dGVzXzEuZGVmYXVsdCwgbnVsbCkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zaWduT3V0ID0gZXhwb3J0cy5sb2dpblVzZXIgPSBleHBvcnRzLnVzZUF1dGhEaXNwYXRjaCA9IGV4cG9ydHMudXNlQXV0aFN0YXRlID0gZXhwb3J0cy5BdXRoUHJvdmlkZXIgPSBleHBvcnRzLlR5cGVzID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBiYXNlXzY0XzEgPSByZXF1aXJlKFwiYmFzZS02NFwiKTtcbnZhciBUeXBlcztcbihmdW5jdGlvbiAoVHlwZXMpIHtcbiAgICBUeXBlc1tcIkxvZ2luXCJdID0gXCJMT0dJTl9TVUNDRVNTXCI7XG4gICAgVHlwZXNbXCJMb2dpbkZhaWx1cmVcIl0gPSBcIkxPR0lOX0ZBSUxVUkVcIjtcbiAgICBUeXBlc1tcIlNpZ25PdXRcIl0gPSBcIlNJR05fT1VUX1NVQ0NFU1NcIjtcbiAgICBUeXBlc1tcIlJlZnJlc2hFeHBpcmVkXCJdID0gXCJSRUZSRVNIX0VYUElSRURcIjtcbiAgICBUeXBlc1tcIkNsZWFyTG9naW5FcnJvclwiXSA9IFwiQ0xFQVJMT0dJTkVSUk9SXCI7XG59KShUeXBlcyA9IGV4cG9ydHMuVHlwZXMgfHwgKGV4cG9ydHMuVHlwZXMgPSB7fSkpO1xuZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVHlwZXMuTG9naW46XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHN0YXRlKSwgeyBsb2dpbjogdHJ1ZSwgZmFpbGVkTG9naW46IGZhbHNlIH0pO1xuICAgICAgICBjYXNlIFR5cGVzLkxvZ2luRmFpbHVyZTpcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUpLCB7IGxvZ2luOiBmYWxzZSwgZmFpbGVkTG9naW46IHRydWUgfSk7XG4gICAgICAgIGNhc2UgVHlwZXMuU2lnbk91dDpcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUpLCB7IGxvZ2luOiBmYWxzZSwgZmFpbGVkTG9naW46IGZhbHNlIH0pO1xuICAgICAgICBjYXNlIFR5cGVzLlJlZnJlc2hFeHBpcmVkOlxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgbG9naW46IGZhbHNlIH0pO1xuICAgICAgICBjYXNlIFR5cGVzLkNsZWFyTG9naW5FcnJvcjpcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUpLCB7IGZhaWxlZExvZ2luOiBmYWxzZSB9KTtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiBcIiArIGFjdGlvbi50eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnZhciBVc2VyU3RhdGVDb250ZXh0ID0gcmVhY3RfMS5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG52YXIgYXV0aERpc3BhdGNoQ29udGV4dCA9IHJlYWN0XzEuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xudmFyIEF1dGhQcm92aWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBfYiA9IHJlYWN0XzEudXNlUmVkdWNlcih1c2VyUmVkdWNlciwge1xuICAgICAgICBsb2dpbjogISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luXCIpLFxuICAgICAgICBmYWlsZWRMb2dpbjogZmFsc2UsXG4gICAgfSksIHN0YXRlID0gX2JbMF0sIGRpc3BhdGNoID0gX2JbMV07XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChVc2VyU3RhdGVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBzdGF0ZSB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBkaXNwYXRjaCB9LCBjaGlsZHJlbikpKTtcbn07XG5leHBvcnRzLkF1dGhQcm92aWRlciA9IEF1dGhQcm92aWRlcjtcbmZ1bmN0aW9uIHVzZUF1dGhTdGF0ZSgpIHtcbiAgICB2YXIgY29udGV4dCA9IHJlYWN0XzEudXNlQ29udGV4dChVc2VyU3RhdGVDb250ZXh0KTtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZVVzZXJTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVXNlclByb3ZpZGVyXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn1cbmV4cG9ydHMudXNlQXV0aFN0YXRlID0gdXNlQXV0aFN0YXRlO1xuZnVuY3Rpb24gdXNlQXV0aERpc3BhdGNoKCkge1xuICAgIHZhciBjb250ZXh0ID0gcmVhY3RfMS51c2VDb250ZXh0KGF1dGhEaXNwYXRjaENvbnRleHQpO1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aERpc3BhdGNoIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyUHJvdmlkZXJcIik7XG4gICAgfVxuICAgIHJldHVybiB7IGF1dGhEaXNwYXRjaDogY29udGV4dCB9O1xufVxuZXhwb3J0cy51c2VBdXRoRGlzcGF0Y2ggPSB1c2VBdXRoRGlzcGF0Y2g7XG5mdW5jdGlvbiBsb2dpblVzZXIoX2EpIHtcbiAgICB2YXIgYXV0aERpc3BhdGNoID0gX2EuYXV0aERpc3BhdGNoLCBsb2dpbiA9IF9hLmxvZ2luLCBwYXNzd29yZCA9IF9hLnBhc3N3b3JkLCBoaXN0b3J5ID0gX2EuaGlzdG9yeSwgc2V0SXNMb2FkaW5nID0gX2Euc2V0SXNMb2FkaW5nO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB2YXIgdXJsID0gXCIvYXV0aC9hdXRoZW50aWNhdGVcIjtcbiAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCYXNpYyBcIiArIGJhc2VfNjRfMS5lbmNvZGUobG9naW4gKyBcIjpcIiArIHBhc3N3b3JkKSxcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luXCIsIGxvZ2luKTtcbiAgICAgICAgICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6IFwiTE9HSU5fU1VDQ0VTU1wiIH0pO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9hcHAvZGFzaGJvYXJkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6IFwiTE9HSU5fRkFJTFVSRVwiIH0pO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gRXJyb3JcIik7XG4gICAgICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6IFwiTE9HSU5fRkFJTFVSRVwiIH0pO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2dpblVzZXIgPSBsb2dpblVzZXI7XG5mdW5jdGlvbiBzaWduT3V0KF9hKSB7XG4gICAgdmFyIGF1dGhEaXNwYXRjaCA9IF9hLmF1dGhEaXNwYXRjaCwgaGlzdG9yeSA9IF9hLmhpc3Rvcnk7XG4gICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGZldGNoKFwiL2F1dGgvbG9nb3V0XCIsIHJlcXVlc3RPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2dpblwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInBlcmlvZFwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImludGVydmFsXCIpO1xuICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6IFwiU0lHTl9PVVRfU1VDQ0VTU1wiIH0pO1xuICAgIGhpc3RvcnkucHVzaChcIi9sb2dpblwiKTtcbn1cbmV4cG9ydHMuc2lnbk91dCA9IHNpZ25PdXQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3M2UzYWFkNDI3NTlkMDRjOWQ4ZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==