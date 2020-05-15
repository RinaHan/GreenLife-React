webpackHotUpdate("static/development/pages/QuestionPage1.js",{

/***/ "./comps/BackButton/index.js":
/*!***********************************!*\
  !*** ./comps/BackButton/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backbutton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backbutton.css */ "./comps/BackButton/backbutton.css");
/* harmony import */ var _backbutton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backbutton_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/rina/GreenLife/comps/BackButton/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var icon1 = __webpack_require__(/*! ./icon2.png */ "./comps/BackButton/icon2.png");

var BackButton = function BackButton(_ref) {
  var onClick = _ref.onClick;
  return __jsx("div", {
    id: "backicon",
    onClick: onClick,
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

function ButtonClick() {
  document.querySelector("#backicon img").style.opacity = "100%";
}

BackButton.defaultProps = {
  onClick: ButtonClick
};
/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ })

})
//# sourceMappingURL=QuestionPage1.js.0c8051f2ceed9e4c495d.hot-update.js.map