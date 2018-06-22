module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CartButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CartButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/CartButton.js";


var CartButton = function CartButton(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "20px",
    height: "18px",
    viewBox: "0 0 20 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    transform: "translate(-1111.000000, -119.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    transform: "translate(1099.000000, 101.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    transform: "translate(14.000000, 20.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polyline", {
    id: "Path-367",
    stroke: "#FFFFFF",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "0 0 2.05128205 0 4.92307692 8.8 13.9487179 8.8 16 2.4 2.87179487 2.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-344570433"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("use", {
    fillOpacity: "0",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-344570433"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ellipse", {
    stroke: "#FFFFFF",
    strokeWidth: "2",
    cx: "6.97435897",
    cy: "13.2",
    rx: "1.82051282",
    ry: "1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-344570433"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: "jsx-344570433"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("use", {
    fillOpacity: "0",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-344570433"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ellipse", {
    stroke: "#FFFFFF",
    strokeWidth: "2",
    cx: "11.8974359",
    cy: "13.2",
    rx: "1.82051282",
    ry: "1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-344570433"
  }))))))), " ", "My cart"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    className: "jsx-344570433"
  }, "12"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "344570433",
    css: "span.jsx-344570433,button.jsx-344570433{display:inline-block;}button.jsx-344570433{background:#6364d8;border:none;border-top-left-radius:4px;border-bottom-left-radius:4px;color:#fff;padding:10px 17px;height:40px;}span.jsx-344570433{background:#393AB1;height:29px;border-top-right-radius:4px;border-bottom-right-radius:4px;padding:0 15px;color:#fff;padding-top:11px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FydEJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGdCLEFBSThCLEFBR0YsQUFTQSxtQkFSUCxBQVNBLEVBWmQsVUFJNkIsQUFTQywyQkFSRSxDQVNDLDZCQVJwQixFQVNJLFNBUkcsTUFTUCxXQUNNLENBVEwsWUFDZCxJQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FydEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb3JlL3dvcmsvY2hyaXMvbmV4dC1zaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENhcnRCdXR0b24gPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGJ1dHRvbj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMThweFwiIHZpZXdCb3g9XCIwIDAgMjAgMThcIj5cbiAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMTExLjAwMDAwMCwgLTExOS4wMDAwMDApXCI+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA5OS4wMDAwMDAsIDEwMS4wMDAwMDApXCI+XG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNC4wMDAwMDAsIDIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICA8cG9seWxpbmVcbiAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aC0zNjdcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgcG9pbnRzPVwiMCAwIDIuMDUxMjgyMDUgMCA0LjkyMzA3NjkyIDguOCAxMy45NDg3MTc5IDguOCAxNiAyLjQgMi44NzE3OTQ4NyAyLjRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICA8dXNlIGZpbGxPcGFjaXR5PVwiMFwiIGZpbGw9XCIjRkZGRkZGXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxlbGxpcHNlXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjYuOTc0MzU4OTdcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjEzLjJcIlxuICAgICAgICAgICAgICAgICAgICByeD1cIjEuODIwNTEyODJcIlxuICAgICAgICAgICAgICAgICAgICByeT1cIjEuOFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbE9wYWNpdHk9XCIwXCIgZmlsbD1cIiNGRkZGRkZcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgPGVsbGlwc2VcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTEuODk3NDM1OVwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTMuMlwiXG4gICAgICAgICAgICAgICAgICAgIHJ4PVwiMS44MjA1MTI4MlwiXG4gICAgICAgICAgICAgICAgICAgIHJ5PVwiMS44XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz57YCBgfVxuICAgICAgTXkgY2FydFxuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuPjEyPC9zcGFuPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNwYW4sXG4gICAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNjM2NGQ4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweCAxN3B4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzM5M0FCMTtcbiAgICAgICAgaGVpZ2h0OiAyOXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydEJ1dHRvbjtcbiJdfQ== */\n/*@ sourceURL=components/CartButton.js */"
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (CartButton);

/***/ }),

/***/ "./components/Column.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Column */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Column.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Column = function Column(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3275985237", [props.flexGrow || 1, props.width || 'auto', props.width || 'auto', props.debug && "\n          background: palevioletred;\n          border: 1px dashed #802342;\n          padding: 16px;\n        "]]]) + " " + (props.className != null && props.className || "")
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3275985237",
    css: ".__jsx-style-dynamic-selector{box-sizing:border-box;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:0.5rem;padding-left:0.5rem;-webkit-box-flex:".concat(props.flexGrow || 1, ";-webkit-flex-grow:").concat(props.flexGrow || 1, ";-ms-flex-positive:").concat(props.flexGrow || 1, ";flex-grow:").concat(props.flexGrow || 1, ";max-width:").concat(props.width || 'auto', ";-webkit-flex-basis:").concat(props.width || 'auto', ";-ms-flex-preferred-size:").concat(props.width || 'auto', ";flex-basis:").concat(props.width || 'auto', ";").concat(props.debug && "\n          background: palevioletred;\n          border: 1px dashed #802342;\n          padding: 16px;\n        ", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29sdW1uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUU2QixzQkFDUixzREFDTyxxQkFDRCxvQkFDbUIsbUxBQ0EsdUNBQ0MsNklBQ1osNkJBQzlCIiwiZmlsZSI6ImNvbXBvbmVudHMvQ29sdW1uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vcmUvd29yay9jaHJpcy9uZXh0LXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQ29sdW1uID0gcHJvcHMgPT4gKFxuICA8ZGl2IHsuLi5wcm9wc30+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93IHx8IDF9O1xuICAgICAgbWF4LXdpZHRoOiAke3Byb3BzLndpZHRoIHx8ICdhdXRvJ307XG4gICAgICBmbGV4LWJhc2lzOiAke3Byb3BzLndpZHRoIHx8ICdhdXRvJ307XG4gICAgICAke3Byb3BzLmRlYnVnICYmXG4gICAgICAgIGBcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldmlvbGV0cmVkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjODAyMzQyO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGB9O1xuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XG4iXX0= */\n/*@ sourceURL=components/Column.js */"),
    dynamic: [props.flexGrow || 1, props.width || 'auto', props.width || 'auto', props.debug && "\n          background: palevioletred;\n          border: 1px dashed #802342;\n          padding: 16px;\n        "]
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Column);

/***/ }),

/***/ "./components/Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Container */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Container.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Container = function Container(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3191208870", [props.width || '80%']]]) + " " + (props.className != null && props.className || "")
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3191208870",
    css: ".__jsx-style-dynamic-selector{margin-left:auto;margin-right:auto;width:".concat(props.width || '80%', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUUwQixpQkFDQyxrQkFDaUIsbUNBQ3ZDIiwiZmlsZSI6ImNvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vcmUvd29yay9jaHJpcy9uZXh0LXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gcHJvcHMgPT4gKFxuICA8c2VjdGlvbiB7Li4ucHJvcHN9PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAke3Byb3BzLndpZHRoIHx8ICc4MCUnfTtcbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=components/Container.js */"),
    dynamic: [props.width || '80%']
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./components/H1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export H1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/H1.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var H1 = function H1(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1523020199", [props.isbrand && '#FFFFFF']]]) + " " + (props.className != null && props.className || "")
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1523020199",
    css: ".__jsx-style-dynamic-selector{font-size:2rem;line-height:1.2;font-weight:400;margin-top:0;color:".concat(props.isbrand && '#FFFFFF', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBRXNCLGVBQ0MsZ0JBQ0EsZ0JBQ0gsYUFDc0IsbUNBQ3JDIiwiZmlsZSI6ImNvbXBvbmVudHMvSDEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29yZS93b3JrL2NocmlzL25leHQtc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBIMSA9IHByb3BzID0+IChcbiAgPGgxIHsuLi5wcm9wc30+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIGNvbG9yOiAke3Byb3BzLmlzYnJhbmQgJiYgJyNGRkZGRkYnfTtcbiAgICBgfTwvc3R5bGU+XG4gIDwvaDE+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIMTtcbiJdfQ== */\n/*@ sourceURL=components/H1.js */"),
    dynamic: [props.isbrand && '#FFFFFF']
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (H1);

/***/ }),

/***/ "./components/H3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export H3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/H3.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var H3 = function H3(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-323590098" + " " + (props.className != null && props.className || "")
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "323590098",
    css: ".jsx-323590098{font-size:2rem;line-height:1.2;font-weight:400;-webkit-letter-spacing:-0.1rem;-moz-letter-spacing:-0.1rem;-ms-letter-spacing:-0.1rem;letter-spacing:-0.1rem;margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSDMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBRXNCLGVBQ0MsZ0JBQ0EsZ0JBQ08sNkdBQ1YsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL0gzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vcmUvd29yay9jaHJpcy9uZXh0LXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgSDMgPSBwcm9wcyA9PiAoXG4gIDxoMyB7Li4ucHJvcHN9PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICBgfTwvc3R5bGU+XG4gIDwvaDM+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIMztcbiJdfQ== */\n/*@ sourceURL=components/H3.js */"
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (H3);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Layout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Layout.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Raleway:200,400,500",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/base.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Link */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Link.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Link = function Link(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-668885348"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-668885348" + " " + "link"
  }, props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "668885348",
    css: ".link.jsx-668885348{color:#474747;font-size:12px;-webkit-text-decoration:none;text-decoration:none;}.link.jsx-668885348:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0IsQUFHdUIsQUFLWSxjQUpYLGVBQ00sK0JBSXZCLG1CQUhBIiwiZmlsZSI6ImNvbXBvbmVudHMvTGluay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb3JlL3dvcmsvY2hyaXMvbmV4dC1zaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHByb3BzID0+IChcbiAgPHNwYW4+XG4gICAgPE5leHRMaW5rIHsuLi5wcm9wc30+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+e3Byb3BzLmNoaWxkcmVufTwvYT5cbiAgICA8L05leHRMaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saW5rIHtcbiAgICAgICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0= */\n/*@ sourceURL=components/Link.js */"
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Nav */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Auth__ = __webpack_require__("./services/Auth.js");
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Nav.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var auth = new __WEBPACK_IMPORTED_MODULE_3__services_Auth__["a" /* default */]();
var Nav = function Nav(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3384355531"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3384355531" + " " + (props.className != null && props.className || "")
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["c" /* Container */], {
    width: "95%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["j" /* Row */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* Column */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["d" /* H1 */], {
    isbrand: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Universal Shop")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* Column */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["j" /* Row */], {
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* Column */], {
    width: "60px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["g" /* Link */], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Sign up")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* Column */], {
    width: "60px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    onClick: function onClick() {
      return auth.login();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-3384355531"
  }, "Log in"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["j" /* Row */], {
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* Column */], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["k" /* Search */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* Column */], {
    width: "20%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CartButton */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3384355531",
    css: "nav.jsx-3384355531{padding:2rem;margin-bottom:5rem;background:#F8CB00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDZ0IsQUFHc0IsYUFDTSxtQkFDQSxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29yZS93b3JrL2NocmlzL25leHQtc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIENvbHVtbiwgUm93LCBMaW5rLCBIMSwgU2VhcmNoLCBDYXJ0QnV0dG9uIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgQXV0aCBmcm9tICcuLi9zZXJ2aWNlcy9BdXRoJztcblxuY29uc3QgYXV0aCA9IG5ldyBBdXRoKCk7XG5leHBvcnQgY29uc3QgTmF2ID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxuYXYgey4uLnByb3BzfT5cbiAgICAgIDxDb250YWluZXIgd2lkdGg9XCI5NSVcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPEgxIGlzYnJhbmQ9XCJ0cnVlXCI+VW5pdmVyc2FsIFNob3A8L0gxPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8Um93IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjYwcHhcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlNpZ24gdXA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiNjBweFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGF1dGgubG9naW4oKX0+TG9nIGluPC9zcGFuPlxuICAgICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjUwJVwiPlxuICAgICAgICAgIDxTZWFyY2g+PC9TZWFyY2g+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjIwJVwiPlxuICAgICAgICAgIDxDYXJ0QnV0dG9uPjwvQ2FydEJ1dHRvbj5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L25hdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhDQjAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7Il19 */\n/*@ sourceURL=components/Nav.js */"
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./components/Product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Column__ = __webpack_require__("./components/Column.js");
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Product.js";



var ProductComponent = function ProductComponent(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Column__["a" /* default */], {
    width: "25%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-580585316" + " " + "product"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-580585316" + " " + "img"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: props.product.imgUrl,
    alt: props.product.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-580585316"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-580585316" + " " + "name"
  }, props.product.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-580585316" + " " + "price"
  }, "$", props.product.price), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-580585316"
  }, "Add to cart")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "580585316",
    css: ".product.jsx-580585316{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;margin-bottom:20px;background:#FFFFFF;border:1px solid #E4E4E4;box-shadow:0 4px 14px 7px rgba(121,121,121,0.05);border-radius:4px;height:350px;padding:15px 20px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}button.jsx-580585316{margin:-15px -20px;height:40px;background:#6364D8;color:#fff;font-weight:200;border:none;}p.price.jsx-580585316{color:#F8CB00;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHc0IsQUFhTSxBQVFMLGNBQ0MsS0FSSixVQVNiLEVBUnFCLG1CQUNSLFdBQ0ssYUFoQk0sR0FpQlYsWUFDZCwrREFqQm9CLGtCQUNDLG1CQUNBLG1CQUNNLHlCQUN3QixpREFDL0Isa0JBQ0wsYUFDSyxrQkFDWSxtSEFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vcmUvd29yay9jaHJpcy9uZXh0LXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vQ29sdW1uJztcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RDb21wb25lbnQgPSBwcm9wcyA9PiAoXG4gIDxDb2x1bW4gd2lkdGg9XCIyNSVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICA8aW1nIHNyYz17cHJvcHMucHJvZHVjdC5pbWdVcmx9IGFsdD17cHJvcHMucHJvZHVjdC5uYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+e3Byb3BzLnByb2R1Y3QubmFtZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPiR7cHJvcHMucHJvZHVjdC5wcmljZX08L3A+XG4gICAgICA8YnV0dG9uPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnByb2R1Y3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggN3B4IHJnYmEoMTIxLDEyMSwxMjEsMC4wNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IC0xNXB4IC0yMHB4O1xuICAgICAgICBoZWlnaHQgNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzYzNjREODtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICAgIHAucHJpY2Uge1xuICAgICAgICBjb2xvcjogI0Y4Q0IwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9Db2x1bW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29tcG9uZW50O1xuIl19 */\n/*@ sourceURL=components/Product.js */"
  }));
};
/* unused harmony default export */ var _unused_webpack_default_export = (ProductComponent);

/***/ }),

/***/ "./components/ProductList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Product__ = __webpack_require__("./components/Product.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Row__ = __webpack_require__("./components/Row.js");
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/ProductList.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  # 2\n  query AllProductsQuery {\n    allProducts {\n      id\n      name\n      imgUrl\n      price\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ProductList = function ProductList(props) {
  // 1
  if (props.allProductsQuery && props.allProductsQuery.loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, "Loading");
  } // 2


  if (props.allProductsQuery && props.allProductsQuery.error) {
    console.log(props.allProductsQuery.error);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, "Error");
  } // 3


  var productsToRender = props.allProductsQuery.allProducts;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Row__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, productsToRender.map(function (product) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Product__["a" /* ProductComponent */], {
      product: product,
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  }));
}; // 1

var ALL_PRODUCTS_QUERY = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject); // 3

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(ALL_PRODUCTS_QUERY, {
  name: 'allProductsQuery'
})(ProductList));

/***/ }),

/***/ "./components/Row.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Row.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Row = function Row(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["8401064", [props.justifyContent || 'flex-start', props.alignItems || 'stretch']]]) + " " + (props.className != null && props.className || "row")
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "8401064",
    css: ".__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-0.5rem;margin-left:-0.5rem;-webkit-box-pack:".concat(props.justifyContent || 'flex-start', ";-webkit-justify-content:").concat(props.justifyContent || 'flex-start', ";-ms-flex-pack:").concat(props.justifyContent || 'flex-start', ";justify-content:").concat(props.justifyContent || 'flex-start', ";-webkit-align-items:").concat(props.alignItems || 'stretch', ";-webkit-box-align:").concat(props.alignItems || 'stretch', ";-ms-flex-align:").concat(props.alignItems || 'stretch', ";align-items:").concat(props.alignItems || 'stretch', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUU2QixzQkFDVCwwRUFDQyxzREFDQyx5REFDTSxxQkFDRCxvQkFDeUIsMkxBQ0oscUxBQzNDIiwiZmlsZSI6ImNvbXBvbmVudHMvUm93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vcmUvd29yay9jaHJpcy9uZXh0LXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUm93ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHsuLi5wcm9wc30+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudCB8fCAnZmxleC1zdGFydCd9O1xuICAgICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25JdGVtcyB8fCAnc3RyZXRjaCd9O1xuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iXX0= */\n/*@ sourceURL=components/Row.js */"),
    dynamic: [props.justifyContent || 'flex-start', props.alignItems || 'stretch']
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),

/***/ "./components/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Search */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ore/work/chris/next-shop/components/Search.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Search = function Search(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-688699971"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-688699971" + " " + "search"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-688699971"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 25 25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-688699971"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    transform: "translate(-224.000000, -396.000000)",
    fill: "#767676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-688699971"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    transform: "translate(203.000000, 165.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-688699971"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    transform: "translate(0.000000, 207.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-688699971"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M45.7890625,47.2109375 C45.9296882,47.3515632 46,47.5273427 46,47.7382812 C46,47.9492198 45.9296882,48.1249993 45.7890625,48.265625 C45.6328117,48.4218758 45.453126,48.5 45.25,48.5 C45.046874,48.5 44.8671883,48.4218758 44.7109375,48.265625 L37.4453125,40.953125 C36.6171834,41.6718786 35.6796927,42.234373 34.6328125,42.640625 C33.5859323,43.046877 32.4765684,43.25 31.3046875,43.25 C30.007806,43.25 28.7890682,43.0039087 27.6484375,42.5117188 C26.5078068,42.0195288 25.511723,41.3515667 24.6601562,40.5078125 C23.8085895,39.6640583 23.1406274,38.6718807 22.65625,37.53125 C22.1718726,36.3906193 21.9296875,35.1718815 21.9296875,33.875 C21.9296875,32.5781185 22.1718726,31.3593807 22.65625,30.21875 C23.1406274,29.0781193 23.8085895,28.0859417 24.6601562,27.2421875 C25.511723,26.3984333 26.5078068,25.7304712 27.6484375,25.2382812 C28.7890682,24.7460913 30.007806,24.5 31.3046875,24.5 C32.5859439,24.5 33.7968693,24.7460913 34.9375,25.2382812 C36.0781307,25.7304712 37.0742145,26.3984333 37.9257812,27.2421875 C38.777348,28.0859417 39.4492163,29.0781193 39.9414062,30.21875 C40.4335962,31.3593807 40.6796875,32.5781185 40.6796875,33.875 C40.6796875,35.0156307 40.484377,36.0976511 40.09375,37.1210938 C39.703123,38.1445364 39.1718784,39.0624959 38.5,39.875 L45.7890625,47.2109375 Z M31.3046875,41.7734375 C32.3828179,41.7734375 33.4023389,41.5664083 34.3632812,41.1523438 C35.3242236,40.7382792 36.1601527,40.1718786 36.8710938,39.453125 C37.5820348,38.7343714 38.1445292,37.8984423 38.5585938,36.9453125 C38.9726583,35.9921827 39.1796875,34.9687555 39.1796875,33.875 C39.1796875,32.7812445 38.9726583,31.7578173 38.5585938,30.8046875 C38.1445292,29.8515577 37.5820348,29.0156286 36.8710938,28.296875 C36.1601527,27.5781214 35.3242236,27.0117208 34.3632812,26.5976562 C33.4023389,26.1835917 32.3828179,25.9765625 31.3046875,25.9765625 C30.210932,25.9765625 29.1835986,26.1835917 28.2226562,26.5976562 C27.2617139,27.0117208 26.4257848,27.5781214 25.7148438,28.296875 C25.0039027,29.0156286 24.4414083,29.8515577 24.0273438,30.8046875 C23.6132792,31.7578173 23.40625,32.7812445 23.40625,33.875 C23.40625,34.9687555 23.6132792,35.9921827 24.0273438,36.9453125 C24.4414083,37.8984423 25.0039027,38.7343714 25.7148438,39.453125 C26.4257848,40.1718786 27.2617139,40.7382792 28.2226562,41.1523438 C29.1835986,41.5664083 30.210932,41.7734375 31.3046875,41.7734375 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-688699971"
  })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", _extends({
    type: "text",
    placeholder: "Search"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-688699971" + " " + (props.className != null && props.className || "")
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "688699971",
    css: "input.jsx-688699971{height:40px;padding-top:6px;padding-bottom:6px;padding-left:40px;padding-right:120px;background-color:#fff;box-shadow:none;box-sizing:border-box;width:100%;border:none;border-radius:4px;}input.jsx-688699971:focus{border:1px solid #6364D8;outline:0;}span.jsx-688699971{display:inline-block;margin-right:-20px;top:5px;left:10px;z-index:999;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFLcUIsQUFhYSxBQUlKLFlBaEJMLFNBaUJHLElBSlQsR0FaUyxPQWFyQixLQUlVLE9BaEJVLENBaUJSLFVBQ0UsT0FqQlEsS0FrQkYsZUFqQkksR0FrQnhCLG1CQWpCa0IsZ0JBQ00sc0JBQ1gsV0FDQyxZQUNNLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb3JlL3dvcmsvY2hyaXMvbmV4dC1zaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNlYXJjaCA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIj5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIyNC4wMDAwMDAsIC0zOTYuMDAwMDAwKVwiIGZpbGw9XCIjNzY3Njc2XCI+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjAzLjAwMDAwMCwgMTY1LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAyMDcuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDUuNzg5MDYyNSw0Ny4yMTA5Mzc1IEM0NS45Mjk2ODgyLDQ3LjM1MTU2MzIgNDYsNDcuNTI3MzQyNyA0Niw0Ny43MzgyODEyIEM0Niw0Ny45NDkyMTk4IDQ1LjkyOTY4ODIsNDguMTI0OTk5MyA0NS43ODkwNjI1LDQ4LjI2NTYyNSBDNDUuNjMyODExNyw0OC40MjE4NzU4IDQ1LjQ1MzEyNiw0OC41IDQ1LjI1LDQ4LjUgQzQ1LjA0Njg3NCw0OC41IDQ0Ljg2NzE4ODMsNDguNDIxODc1OCA0NC43MTA5Mzc1LDQ4LjI2NTYyNSBMMzcuNDQ1MzEyNSw0MC45NTMxMjUgQzM2LjYxNzE4MzQsNDEuNjcxODc4NiAzNS42Nzk2OTI3LDQyLjIzNDM3MyAzNC42MzI4MTI1LDQyLjY0MDYyNSBDMzMuNTg1OTMyMyw0My4wNDY4NzcgMzIuNDc2NTY4NCw0My4yNSAzMS4zMDQ2ODc1LDQzLjI1IEMzMC4wMDc4MDYsNDMuMjUgMjguNzg5MDY4Miw0My4wMDM5MDg3IDI3LjY0ODQzNzUsNDIuNTExNzE4OCBDMjYuNTA3ODA2OCw0Mi4wMTk1Mjg4IDI1LjUxMTcyMyw0MS4zNTE1NjY3IDI0LjY2MDE1NjIsNDAuNTA3ODEyNSBDMjMuODA4NTg5NSwzOS42NjQwNTgzIDIzLjE0MDYyNzQsMzguNjcxODgwNyAyMi42NTYyNSwzNy41MzEyNSBDMjIuMTcxODcyNiwzNi4zOTA2MTkzIDIxLjkyOTY4NzUsMzUuMTcxODgxNSAyMS45Mjk2ODc1LDMzLjg3NSBDMjEuOTI5Njg3NSwzMi41NzgxMTg1IDIyLjE3MTg3MjYsMzEuMzU5MzgwNyAyMi42NTYyNSwzMC4yMTg3NSBDMjMuMTQwNjI3NCwyOS4wNzgxMTkzIDIzLjgwODU4OTUsMjguMDg1OTQxNyAyNC42NjAxNTYyLDI3LjI0MjE4NzUgQzI1LjUxMTcyMywyNi4zOTg0MzMzIDI2LjUwNzgwNjgsMjUuNzMwNDcxMiAyNy42NDg0Mzc1LDI1LjIzODI4MTIgQzI4Ljc4OTA2ODIsMjQuNzQ2MDkxMyAzMC4wMDc4MDYsMjQuNSAzMS4zMDQ2ODc1LDI0LjUgQzMyLjU4NTk0MzksMjQuNSAzMy43OTY4NjkzLDI0Ljc0NjA5MTMgMzQuOTM3NSwyNS4yMzgyODEyIEMzNi4wNzgxMzA3LDI1LjczMDQ3MTIgMzcuMDc0MjE0NSwyNi4zOTg0MzMzIDM3LjkyNTc4MTIsMjcuMjQyMTg3NSBDMzguNzc3MzQ4LDI4LjA4NTk0MTcgMzkuNDQ5MjE2MywyOS4wNzgxMTkzIDM5Ljk0MTQwNjIsMzAuMjE4NzUgQzQwLjQzMzU5NjIsMzEuMzU5MzgwNyA0MC42Nzk2ODc1LDMyLjU3ODExODUgNDAuNjc5Njg3NSwzMy44NzUgQzQwLjY3OTY4NzUsMzUuMDE1NjMwNyA0MC40ODQzNzcsMzYuMDk3NjUxMSA0MC4wOTM3NSwzNy4xMjEwOTM4IEMzOS43MDMxMjMsMzguMTQ0NTM2NCAzOS4xNzE4Nzg0LDM5LjA2MjQ5NTkgMzguNSwzOS44NzUgTDQ1Ljc4OTA2MjUsNDcuMjEwOTM3NSBaIE0zMS4zMDQ2ODc1LDQxLjc3MzQzNzUgQzMyLjM4MjgxNzksNDEuNzczNDM3NSAzMy40MDIzMzg5LDQxLjU2NjQwODMgMzQuMzYzMjgxMiw0MS4xNTIzNDM4IEMzNS4zMjQyMjM2LDQwLjczODI3OTIgMzYuMTYwMTUyNyw0MC4xNzE4Nzg2IDM2Ljg3MTA5MzgsMzkuNDUzMTI1IEMzNy41ODIwMzQ4LDM4LjczNDM3MTQgMzguMTQ0NTI5MiwzNy44OTg0NDIzIDM4LjU1ODU5MzgsMzYuOTQ1MzEyNSBDMzguOTcyNjU4MywzNS45OTIxODI3IDM5LjE3OTY4NzUsMzQuOTY4NzU1NSAzOS4xNzk2ODc1LDMzLjg3NSBDMzkuMTc5Njg3NSwzMi43ODEyNDQ1IDM4Ljk3MjY1ODMsMzEuNzU3ODE3MyAzOC41NTg1OTM4LDMwLjgwNDY4NzUgQzM4LjE0NDUyOTIsMjkuODUxNTU3NyAzNy41ODIwMzQ4LDI5LjAxNTYyODYgMzYuODcxMDkzOCwyOC4yOTY4NzUgQzM2LjE2MDE1MjcsMjcuNTc4MTIxNCAzNS4zMjQyMjM2LDI3LjAxMTcyMDggMzQuMzYzMjgxMiwyNi41OTc2NTYyIEMzMy40MDIzMzg5LDI2LjE4MzU5MTcgMzIuMzgyODE3OSwyNS45NzY1NjI1IDMxLjMwNDY4NzUsMjUuOTc2NTYyNSBDMzAuMjEwOTMyLDI1Ljk3NjU2MjUgMjkuMTgzNTk4NiwyNi4xODM1OTE3IDI4LjIyMjY1NjIsMjYuNTk3NjU2MiBDMjcuMjYxNzEzOSwyNy4wMTE3MjA4IDI2LjQyNTc4NDgsMjcuNTc4MTIxNCAyNS43MTQ4NDM4LDI4LjI5Njg3NSBDMjUuMDAzOTAyNywyOS4wMTU2Mjg2IDI0LjQ0MTQwODMsMjkuODUxNTU3NyAyNC4wMjczNDM4LDMwLjgwNDY4NzUgQzIzLjYxMzI3OTIsMzEuNzU3ODE3MyAyMy40MDYyNSwzMi43ODEyNDQ1IDIzLjQwNjI1LDMzLjg3NSBDMjMuNDA2MjUsMzQuOTY4NzU1NSAyMy42MTMyNzkyLDM1Ljk5MjE4MjcgMjQuMDI3MzQzOCwzNi45NDUzMTI1IEMyNC40NDE0MDgzLDM3Ljg5ODQ0MjMgMjUuMDAzOTAyNywzOC43MzQzNzE0IDI1LjcxNDg0MzgsMzkuNDUzMTI1IEMyNi40MjU3ODQ4LDQwLjE3MTg3ODYgMjcuMjYxNzEzOSw0MC43MzgyNzkyIDI4LjIyMjY1NjIsNDEuMTUyMzQzOCBDMjkuMTgzNTk4Niw0MS41NjY0MDgzIDMwLjIxMDkzMiw0MS43NzM0Mzc1IDMxLjMwNDY4NzUsNDEuNzczNDM3NSBaXCIgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2VhcmNoIHtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MzY0RDg7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdfQ== */\n/*@ sourceURL=components/Search.js */"
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "./components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Column__ = __webpack_require__("./components/Column.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__("./components/Container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Row__ = __webpack_require__("./components/Row.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__("./components/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__H1__ = __webpack_require__("./components/H1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__H3__ = __webpack_require__("./components/H3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Search__ = __webpack_require__("./components/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CartButton__ = __webpack_require__("./components/CartButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ProductList__ = __webpack_require__("./components/ProductList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Product__ = __webpack_require__("./components/Product.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Column__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Container__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__Layout__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__Row__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__Link__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__Nav__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__H1__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__H3__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__Search__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__CartButton__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__ProductList__["a"]; });
/* unused harmony reexport ProductComponent */














/***/ }),

/***/ "./lib/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);




var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

function create(initialState) {
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({
      uri: ' https://api.graph.cool/simple/v1/cjbybqj371erj0126784988vd',
      // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initApollo__ = __webpack_require__("./lib/initApollo.js");

var _jsxFileName = "/Users/ore/work/chris/next-shop/lib/withData.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





 // Gets the display name of a JSX component for dev tools

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Initial serverState with apollo (empty)
                  serverState = {
                    apollo: {
                      data: {}
                    } // Evaluate the composed component's getInitialProps()

                  };
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 17;
                    break;
                  }

                  apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])();
                  _context.prev = 8;
                  _context.next = 11;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
                    client: apollo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    }
                  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    }
                  }))), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    }
                  });

                case 11:
                  _context.next = 15;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](8);

                case 15:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  __WEBPACK_IMPORTED_MODULE_4_next_head___default.a.rewind(); // Extract query data from the Apollo store

                  serverState = {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  };

                case 17:
                  return _context.abrupt("return", _objectSpread({
                    serverState: serverState
                  }, composedInitialProps));

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function WithData(props) {
      var _this;

      _classCallCheck(this, WithData);

      _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));
      _this.apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])(_this.props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
          client: this.apollo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        })));
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "WithData(".concat(getComponentDisplayName(ComposedComponent), ")")
  }), Object.defineProperty(_class, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      serverState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
    }
  }), _temp;
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__("./components/index.js");
var _jsxFileName = "/Users/ore/work/chris/next-shop/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      console.log(this.props.url.asPath);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1732077524"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components__["f" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components__["h" /* Nav */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components__["c" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components__["c" /* Container */], {
        width: "80%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-1732077524" + " " + "items"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components__["e" /* H3 */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Creams and Gels"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components__["i" /* ProductList */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1732077524",
        css: ".items.jsx-1732077524{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHNkIsZ0JBQ2xCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vcmUvd29yay9jaHJpcy9uZXh0LXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQ29sdW1uLFxuICBMYXlvdXQsXG4gIFJvdyxcbiAgTGluayxcbiAgTmF2LFxuICBIMSxcbiAgSDMsXG4gIFByb2R1Y3RMaXN0XG59IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXJsLmFzUGF0aClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPENvbnRhaW5lciB3aWR0aD1cIjgwJVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cbiAgICAgICAgICAgIDxIMz5DcmVhbXMgYW5kIEdlbHM8L0gzPlxuICAgICAgICAgICAgPFByb2R1Y3RMaXN0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLml0ZW1zIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4vLyBjb25zdCBJbmRleCA9IHByb3BzID0+IChcbi8vICAgPGRpdj5cbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgPE5hdiAvPlxuLy8gICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgXG4vLyAgICAgICA8L0NvbnRhaW5lcj5cbi8vICAgICA8L0xheW91dD5cbi8vICAgICA8Q29udGFpbmVyIHdpZHRoPVwiODAlXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XG4vLyAgICAgICAgIDxIMz5DcmVhbXMgYW5kIEdlbHM8L0gzPlxuLy8gICAgICAgICA8UHJvZHVjdExpc3QgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvQ29udGFpbmVyPlxuLy8gICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgIC5pdGVtcyB7XG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4vLyAgICAgICB9XG4vLyAgICAgYH08L3N0eWxlPlxuLy8gICA8L2Rpdj5cbi8vICk7XG5jb25zb2xlLmxvZyh3aXRoRGF0YShJbmRleCkpXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShJbmRleCk7XG4iXX0= */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component); // const Index = props => (
//   <div>
//     <Layout>
//       <Nav />
//       <Container>
//       </Container>
//     </Layout>
//     <Container width="80%">
//       <div className="items">
//         <H3>Creams and Gels</H3>
//         <ProductList />
//       </div>
//     </Container>
//     <style jsx>{`
//       .items {
//         margin-top: 30px;
//       }
//     `}</style>
//   </div>
// );


console.log(Object(__WEBPACK_IMPORTED_MODULE_3__lib_withData__["a" /* default */])(Index));
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__lib_withData__["a" /* default */])(Index));

/***/ }),

/***/ "./services/Auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auth0_js__ = __webpack_require__("auth0-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_auth0_js__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);

    Object.defineProperty(this, "auth0", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: new __WEBPACK_IMPORTED_MODULE_0_auth0_js___default.a.WebAuth({
        domain: 'chris92.auth0.com',
        clientID: '5NSAZYKiZYRRrPvT0T0v6PdjyxM3rhXF',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://chris92.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile email'
      })
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  _createClass(Auth, [{
    key: "handleAuthentication",
    value: function handleAuthentication(cb) {
      var _this = this;

      // const hash = process.browser ? window.location.hash : context.asPath;
      this.auth0.parseHash({
        hash: window.location.hash
      }, function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            _this.storeAuth0Cred(authResult, profile);

            cb(false, _objectSpread({}, authResult, profile));
          });
        } else if (err) {
          console.log(err);
          cb(true, err);
        }
      });
    }
  }, {
    key: "storeAuth0Cred",
    value: function storeAuth0Cred(authResult, profile) {
      // Set the time that the access token will expire at
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('next_shop_access_token', authResult.accessToken);
      localStorage.setItem('next_shop_id_token', authResult.idToken);
      localStorage.setItem('next_shop_expires_at', expiresAt);
      localStorage.setItem('next_shop_profile', JSON.stringify(profile)); // navigate to the home route
      // history.replace('/dashboard');
    }
  }, {
    key: "storeGraphCoolCred",
    value: function storeGraphCoolCred(authResult) {
      localStorage.setItem('next_shop_gcool_token', authResult.token);
      localStorage.setItem('next_shop_gcool_id', authResult.id);
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "logout",
    value: function logout() {
      // Clear access token and ID token from local storage
      localStorage.removeItem('next_shop_access_token');
      localStorage.removeItem('next_shop_id_token');
      localStorage.removeItem('next_shop_expires_at');
      localStorage.removeItem('next_shop_profile'); // navigate to the home route

      history.replace('/');
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = JSON.parse(localStorage.getItem('next_shop_expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }, {
    key: "getProfile",
    value: function getProfile() {
      return JSON.parse(localStorage.getItem('next_shop_profile'));
    }
  }]);

  return Auth;
}();



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "auth0-js":
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map