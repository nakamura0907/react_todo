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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/electron/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/electron/index.js":
/*!*******************************!*\
  !*** ./src/electron/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on(\"ready\", (e) => {\n  const template = [\n    {\n      label: \"編集\",\n      submenu: [\n        {\n          label: \"戻る\",\n          accelerator: \"Ctrl+Z\",\n          role: \"undo\",\n        },\n        {\n          label: \"進む\",\n          accelerator: \"Ctrl+Y\",\n          role: \"redo\",\n        },\n        {\n          label: \"コピー\",\n          accelerator: \"Ctrl+C\",\n          role: \"copy\",\n        },\n        {\n          label: \"貼り付け\",\n          accelerator: \"Ctrl+V\",\n          role: \"paste\",\n        },\n      ],\n    }, // 編集\n    {\n      label: \"表示\",\n      submenu: [\n        {\n          label: \"ウィンドウ最小化\",\n          role: \"minimize\",\n        },\n        {\n          label: \"ウィンドウを閉じる\",\n          role: \"close\",\n        },\n        {\n          label: \"フルスクリーン\",\n          role: \"togglefullscreen\",\n        },\n        {\n          label: \"再読み込み\",\n          accelerator: \"F5\",\n          role: \"reload\",\n        },\n      ],\n    },\n  ];\n\n  const menu = electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].buildFromTemplate(template);\n  electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].setApplicationMenu(menu);\n\n  const windSetting = { window: 800, height: 600 };\n  const mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"](windSetting);\n  mainWindow.loadFile(\"public/index.html\");\n});\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on(\"window-all-closed\", () => {\n  if (process.platform !== \"darwin\") {\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n  }\n});\n\n\n//# sourceURL=webpack:///./src/electron/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ })

/******/ });