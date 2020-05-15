webpackHotUpdate("static/development/pages/QuestionPage3.js",{

/***/ "./comps/Question3/index.js":
/*!**********************************!*\
  !*** ./comps/Question3/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question3_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question3.css */ "./comps/Question3/question3.css");
/* harmony import */ var _question3_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_question3_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questioncolor3_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questioncolor3.css */ "./comps/Question3/questioncolor3.css");
/* harmony import */ var _questioncolor3_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_questioncolor3_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/rina/GreenLife/comps/Question3/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var pic1 = __webpack_require__(/*! ./pic7.png */ "./comps/Question3/pic7.png");

var pic2 = __webpack_require__(/*! ./pic8.png */ "./comps/Question3/pic8.png");

var pic3 = __webpack_require__(/*! ./pic9.png */ "./comps/Question3/pic9.png");

var Question3 = function Question3(_ref) {
  var question = _ref.question,
      text1 = _ref.text1,
      text2 = _ref.text2,
      text3 = _ref.text3,
      onClick1 = _ref.onClick1,
      onClick2 = _ref.onClick2,
      onClick3 = _ref.onClick3;
  return __jsx("div", {
    id: "whole",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "questiontext",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, question), __jsx("div", {
    id: "picid3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "iconback first",
    onClick: onClick1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: pic1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, text1)), __jsx("div", {
    className: "iconback second",
    onClick: onClick2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: pic2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, text2)), __jsx("div", {
    className: "iconback third",
    onClick: onClick3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: pic3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, text3))));
};

function Reset() {
  document.querySelector(".first").style.backgroundColor = "rgb(253, 223, 179)";
  document.querySelector(".second").style.backgroundColor = "rgb(250, 196, 116)";
  document.querySelector(".third").style.backgroundColor = "rgb(250, 143, 56)";
}

function IconClick1() {
  Reset();
  document.querySelector(".first").style.backgroundColor = "rgb(233, 204, 160)";
}

function IconClick2() {
  Reset();
  document.querySelector(".second").style.backgroundColor = "rgb(230, 177, 97)";
}

function IconClick3() {
  Reset();
  document.querySelector(".third").style.backgroundColor = "rgb(228, 121, 33)";
}

Question3.defaultProps = {
  question: "Q3. What did you transport today?",
  text1: "1. Bicycle",
  text2: "2. Bus",
  text3: "3. Car",
  onClick1: IconClick1,
  onClick2: IconClick2,
  onClick3: IconClick3
};
/* harmony default export */ __webpack_exports__["default"] = (Question3);

/***/ })

})
//# sourceMappingURL=QuestionPage3.js.334182cd67c90992b06e.hot-update.js.map