webpackHotUpdate("static/development/pages/TipPage1.js",{

/***/ "./comps/BackButton/icon2.png":
/*!************************************!*\
  !*** ./comps/BackButton/icon2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon2-7c5833eae5ae4644bd54ffe80c8431b9.png";

/***/ }),

/***/ "./comps/BackButton/index.js":
/*!***********************************!*\
  !*** ./comps/BackButton/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _backbutton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backbutton.css */ "./comps/BackButton/backbutton.css");
/* harmony import */ var _backbutton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backbutton_css__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/Users/rina/GreenLife/comps/BackButton/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var icon1 = __webpack_require__(/*! ./icon2.png */ "./comps/BackButton/icon2.png");

var BackButton = function BackButton(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx("div", {
    id: "backicon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: icon1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./pages/TipPage1/index.js":
/*!*********************************!*\
  !*** ./pages/TipPage1/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../comps/Header */ "./comps/Header/index.js");
/* harmony import */ var _comps_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../comps/Button */ "./comps/Button/index.js");
/* harmony import */ var _comps_BackButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../comps/BackButton */ "./comps/BackButton/index.js");
/* harmony import */ var _comps_ResultTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../comps/ResultTitle */ "./comps/ResultTitle/index.js");
/* harmony import */ var _comps_TipsIcons1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comps/TipsIcons1 */ "./comps/TipsIcons1/index.js");
/* harmony import */ var _HomePage_page1_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../HomePage/page1.css */ "./pages/HomePage/page1.css");
/* harmony import */ var _HomePage_page1_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_HomePage_page1_css__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
    _jsxFileName = "/Users/rina/GreenLife/pages/TipPage1/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import HomeLogo from '../../comps/HomeLogo';
// import HomeText from '../../comps/HomeText';








var TipPage1 = function TipPage1(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx("div", {
    id: "tipapp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_comps_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "backbutton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_comps_BackButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "tiptitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_comps_ResultTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: "Choose Tips!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(_comps_TipsIcons1__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ResultPage1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "tipbutton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_comps_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "220px",
    text: "< Back",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TipPage1);

/***/ })

})
//# sourceMappingURL=TipPage1.js.2a562bcf0c576c7da0c7.hot-update.js.map