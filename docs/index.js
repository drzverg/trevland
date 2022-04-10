/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/Star.svg";

/***/ }),

/***/ 11:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/arrow_left.svg";

/***/ }),

/***/ 962:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/arrow_right.svg";

/***/ }),

/***/ 75:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/dsv1.jpg";

/***/ }),

/***/ 459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/dsv2.jpg";

/***/ }),

/***/ 360:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/dsv3.jpg";

/***/ }),

/***/ 815:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/facebook_ico.svg";

/***/ }),

/***/ 571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/google_ico.svg";

/***/ }),

/***/ 315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/great-wall-1.jpg";

/***/ }),

/***/ 824:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/hiroshima-1.jpg";

/***/ }),

/***/ 331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/instagram_ico.svg";

/***/ }),

/***/ 361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/istanbul.jpg";

/***/ }),

/***/ 449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kl.jpg";

/***/ }),

/***/ 30:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/main-background-min.jpg";

/***/ }),

/***/ 464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/naltar-lake-1.jpg";

/***/ }),

/***/ 436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/new-york-1.jpg";

/***/ }),

/***/ 116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/niagara-falls-1.jpg";

/***/ }),

/***/ 696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/place.svg";

/***/ }),

/***/ 795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/seoul.jpg";

/***/ }),

/***/ 647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/twitter_ico.svg";

/***/ }),

/***/ 76:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/varanasi-1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _src_assets_img_main_background_min_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _src_assets_img_istanbul_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(361);
/* harmony import */ var _src_assets_img_kl_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(449);
/* harmony import */ var _src_assets_img_seoul_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(795);
/* harmony import */ var _src_assets_img_dsv1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var _src_assets_img_dsv2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(459);
/* harmony import */ var _src_assets_img_dsv3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(360);
/* harmony import */ var _src_assets_img_great_wall_1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(315);
/* harmony import */ var _src_assets_img_new_york_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(436);
/* harmony import */ var _src_assets_img_niagara_falls_1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(116);
/* harmony import */ var _src_assets_img_hiroshima_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(824);
/* harmony import */ var _src_assets_img_varanasi_1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76);
/* harmony import */ var _src_assets_img_naltar_lake_1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(464);
/* harmony import */ var _src_assets_img_Star_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(392);
/* harmony import */ var _src_assets_img_arrow_right_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(962);
/* harmony import */ var _src_assets_img_arrow_left_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11);
/* harmony import */ var _src_assets_img_place_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(696);
/* harmony import */ var _src_assets_img_facebook_ico_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(815);
/* harmony import */ var _src_assets_img_google_ico_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(571);
/* harmony import */ var _src_assets_img_instagram_ico_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(331);
/* harmony import */ var _src_assets_img_twitter_ico_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(647);
// Import Styles =========================


// Import images =========================

// Main


// Popular




// Special






// Blog&news





// Icons





// Socials





})();

/******/ })()
;