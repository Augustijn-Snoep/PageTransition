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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/transition */ \"./src/js/modules/transition.js\");\n/* harmony import */ var _modules_firstVisit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/firstVisit */ \"./src/js/modules/firstVisit.js\");\n\n\nObject(_modules_firstVisit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_transition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/firstVisit.js":
/*!**************************************!*\
  !*** ./src/js/modules/firstVisit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst firstVisit = () => {\n  // If Body contains 'page--home' fire this function ->>\n  const bodyWrapper = document.querySelector('body'); // This function removes the pageloader when you switch from page\n\n  if (bodyWrapper.classList.contains('page--home')) {\n    if (sessionStorage.getItem('first') === null) {\n      const firstLoad = document.querySelector('.page--home__transition');\n      setTimeout(function () {\n        firstLoad.classList.add('page--home__transition--remove');\n      }, 2000);\n      setTimeout(function () {\n        const firstLoadTitle = document.querySelector('.page--home__transition--title');\n        firstLoadTitle.classList.add('show-title');\n      }, 1000);\n      setTimeout(function () {\n        const firstLoad = document.querySelector('.page--home__transition--remove');\n        firstLoad.parentNode.removeChild(firstLoad);\n      }, 3000);\n      sessionStorage.setItem('first', 'nope!');\n    } else {\n      const firstLoad = document.querySelector('.page--home__transition');\n      firstLoad.parentNode.removeChild(firstLoad);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firstVisit);\n\n//# sourceURL=webpack:///./src/js/modules/firstVisit.js?");

/***/ }),

/***/ "./src/js/modules/transition.js":
/*!**************************************!*\
  !*** ./src/js/modules/transition.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst transition = () => {\n  const navLinks = document.querySelectorAll('a');\n  const overlay = document.querySelector('.transition');\n\n  function transitionTitle() {\n    const title = document.querySelector('.transition__title'); // title.classList.add('transition__title--is-showing');\n  }\n\n  function pageTransition() {\n    overlay.classList.remove('moveout');\n    overlay.classList.add('movein');\n  }\n\n  function transitionController(e) {\n    e.preventDefault();\n    pageTransition();\n    const target = e.currentTarget;\n\n    const changeURL = () => {\n      console.log('animation ends');\n      window.location = target.href;\n      overlay.removeEventListener('animationend', changeURL);\n    };\n\n    overlay.addEventListener('animationend', changeURL);\n  }\n\n  document.addEventListener('DOMContentLoaded', () => {\n    navLinks.forEach(link => {\n      if (link.hostname !== window.location.hostname) return;\n      link.addEventListener('click', transitionController);\n    });\n  });\n  window.addEventListener('load', transitionTitle);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transition);\n\n//# sourceURL=webpack:///./src/js/modules/transition.js?");

/***/ })

/******/ });