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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_14a/acordion.js":
/*!************************************!*\
  !*** ./src/lesson_14a/acordion.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var section = [{
  title: "section-1",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
}, {
  title: "section-2",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
}, {
  title: "section-3",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
}, {
  title: "section-3",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
}]; // function render(moun) {
//   const container = document.createElement("div");
//   container.classList.add("container");
//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   container.appendChild(btn);
//   const containerTex = document.createElement("div");
//   containerTex.classList.add("conteiner-text");
//   container.appendChild(containerTex);
//   const text = document.createElement("p");
//   text.classList.add("text");
//   containerTex.appendChild(text);
//   moun.appendChild(container);
// }
// const body = document.querySelector("body");
// render(body);

function render(mount) {
  var container = document.createElement("div");
  container.classList.add("container");
  mount.appendChild(container);

  for (var i = 0; i < section.length; i++) {
    var loght = section[i];
    var btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = loght.title;
    container.appendChild(btn);
    var text = document.createElement("p");
    text.classList.add("text");
    text.textContent = loght.content;
    container.appendChild(text);
  }
}

var body = document.querySelector(".wrap");
render(body);
console.log(section[0].title);

/***/ }),

/***/ "./src/lesson_14a/lesson_14a.js":
/*!**************************************!*\
  !*** ./src/lesson_14a/lesson_14a.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_14a_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_14a.scss */ "./src/lesson_14a/lesson_14a.scss");
/* harmony import */ var _lesson_14a_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_14a_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _acordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acordion */ "./src/lesson_14a/acordion.js");
/* harmony import */ var _acordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_acordion__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/lesson_14a/lesson_14a.scss":
/*!****************************************!*\
  !*** ./src/lesson_14a/lesson_14a.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8:
/*!********************************************!*\
  !*** multi ./src/lesson_14a/lesson_14a.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_14a/lesson_14a.js */"./src/lesson_14a/lesson_14a.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_14a.js.map