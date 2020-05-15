webpackHotUpdate("static/development/pages/QuestionPage2.js",{

/***/ "./comps/Question2/index.js":
/*!**********************************!*\
  !*** ./comps/Question2/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question2.css */ "./comps/Question2/question2.css");
/* harmony import */ var _question2_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_question2_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questioncolor2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questioncolor2.css */ "./comps/Question2/questioncolor2.css");
/* harmony import */ var _questioncolor2_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_questioncolor2_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/rina/GreenLife/comps/Question2/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var pic1 = __webpack_require__(/*! ./pic4.png */ "./comps/Question2/pic4.png");

var pic2 = __webpack_require__(/*! ./pic5.png */ "./comps/Question2/pic5.png");

var pic3 = __webpack_require__(/*! ./pic6.png */ "./comps/Question2/pic6.png");

var Question2 = function Question2(_ref) {
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
    id: "picid2",
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
    id: "small",
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
    id: "small",
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
  document.querySelector(".first").style.backgroundColor = "rgb(187, 247, 255)";
  document.querySelector(".second").style.backgroundColor = "rgb(125, 240, 248)";
  document.querySelector(".third").style.backgroundColor = "rgb(45, 215, 245)";
}

function IconClick1() {
  Reset();
  document.querySelector(".first").style.backgroundColor = "rgb(122, 219, 223)";
}

function IconClick2() {
  Reset();
  document.querySelector(".second").style.backgroundColor = "rgb(79, 218, 223)";
}

function IconClick3() {
  Reset();
  document.querySelector(".third").style.backgroundColor = "rgb(31, 193, 221)";
}

Question2.defaultProps = {
  onClick1: IconClick1,
  onClick2: IconClick2,
  onClick3: IconClick3
};
/* harmony default export */ __webpack_exports__["default"] = (Question2);

/***/ })

})
//# sourceMappingURL=QuestionPage2.js.d70f04c2558158a8a51c.hot-update.js.map