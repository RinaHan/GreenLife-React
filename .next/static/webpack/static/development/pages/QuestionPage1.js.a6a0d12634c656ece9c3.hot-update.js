webpackHotUpdate("static/development/pages/QuestionPage1.js",{

/***/ "./comps/Question1/index.js":
/*!**********************************!*\
  !*** ./comps/Question1/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question1.css */ "./comps/Question1/question1.css");
/* harmony import */ var _question1_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_question1_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questioncolor1_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questioncolor1.css */ "./comps/Question1/questioncolor1.css");
/* harmony import */ var _questioncolor1_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_questioncolor1_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/rina/GreenLife/comps/Question1/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var pic1 = __webpack_require__(/*! ./pic1.png */ "./comps/Question1/pic1.png");

var pic2 = __webpack_require__(/*! ./pic2.png */ "./comps/Question1/pic2.png");

var pic3 = __webpack_require__(/*! ./pic3.png */ "./comps/Question1/pic3.png");

var Question1 = function Question1(_ref) {
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
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "questiontext",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, question), __jsx("div", {
    id: "picid1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "iconback first",
    onClick: onClick1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: pic1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, text1)), __jsx("div", {
    className: "iconback second",
    onClick: onClick2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: pic2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, text2)), __jsx("div", {
    className: "iconback third",
    onClick: onClick3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: pic3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, text3))));
};

function Reset() {
  document.querySelector(".first").style.backgroundColor = "rgb(252, 223, 59)";
  document.querySelector(".second").style.backgroundColor = "rgb(252, 175, 59)";
  document.querySelector(".third").style.backgroundColor = "rgb(252, 130, 59)";
}

function IconClick1() {
  Reset();
  document.querySelector(".first").style.backgroundColor = "rgb(224, 197, 43)";
}

function IconClick2() {
  Reset();
  document.querySelector(".second").style.backgroundColor = "rgb(207, 138, 34)";
}

function IconClick3() {
  Reset();
  document.querySelector(".third").style.backgroundColor = "rgb(216, 97, 41)";
}

Question1.defaultProps = {
  question: "What are you wearing today?",
  text1: "1.Recycled",
  text2: "2.Cotton",
  text3: "3.Polyester",
  onClick1: IconClick1,
  onClick2: IconClick2,
  onClick3: IconClick3
};
/* harmony default export */ __webpack_exports__["default"] = (Question1);

/***/ })

})
//# sourceMappingURL=QuestionPage1.js.a6a0d12634c656ece9c3.hot-update.js.map