"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[14].use[4]!./src/styles/globals.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[14].use[4]!./src/styles/globals.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=Open+Sans:wght@300&family=Young+Serif&display=swap\\\");\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  background-color: white;\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n}\\n\\n.special-header {\\n  background-color: red;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.special-header img {\\n  height: 60px;\\n  width: 1140px;\\n}\\n\\n.header {\\n  display: flex;\\n  gap: 120px;\\n  justify-content: center;\\n}\\n.header .titles {\\n  display: flex;\\n  gap: 15px;\\n}\\n.header .titles .title {\\n  font-size: 12px;\\n  font-weight: bold;\\n}\\n.header .support-items {\\n  display: flex;\\n  gap: 15px;\\n}\\n.header .support-items .support-item {\\n  display: flex;\\n  gap: 5px;\\n}\\n.header .support-items .support-item img {\\n  height: 25px;\\n  width: 25px;\\n}\\n.header .support-items .support-item .title {\\n  font-size: 12px;\\n  font-weight: 700;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.scss\",\"webpack://../../../../../../../Ata%20Bayraktar/Desktop/Belgeler/Projects/Personal/myFirstRepository/Project/src/styles/globals.scss\"],\"names\":[],\"mappings\":\"AAMQ,4IAAA;AANR;EACE,SAAA;EACA,UAAA;EACA,uBAAA;EACA,oCAAA;ACEF;;ADCA;EACE,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACEF;ADDE;EACE,YAAA;EACA,aAAA;ACGJ;;ADAA;EACE,aAAA;EACA,UAAA;EACA,uBAAA;ACGF;ADFE;EACE,aAAA;EACA,SAAA;ACIJ;ADHI;EACE,eAAA;EACA,iBAAA;ACKN;ADFE;EACE,aAAA;EACA,SAAA;ACIJ;ADHI;EACE,aAAA;EACA,QAAA;ACKN;ADJM;EACE,YAAA;EACA,WAAA;ACMR;ADJM;EACE,eAAA;EACA,gBAAA;ACMR\",\"sourcesContent\":[\"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: white;\\r\\n  font-family: \\\"Open Sans\\\", sans-serif;\\r\\n}\\r\\n@import url(\\\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=Open+Sans:wght@300&family=Young+Serif&display=swap\\\");\\r\\n.special-header {\\r\\n  background-color: red;\\r\\n  display: flex; //orta sağ sol için kounmlandırmaya yarıyor yan yana getiriyor içindekileri\\r\\n  justify-content: center; //y ekseninde konumlandırma orta: center başlangıç: flex-start son: flex-end\\r\\n  align-items: center; //x ekseninde konumlandırma orta: center başlangıç: flex-start son: flex-end\\r\\n  img {\\r\\n    height: 60px;\\r\\n    width: 1140px;\\r\\n  }\\r\\n}\\r\\n.header {\\r\\n  display: flex;\\r\\n  gap: 120px; // itemlar (çocuklar) arasındaki gap/uzaklık\\r\\n  justify-content: center;\\r\\n  .titles {\\r\\n    display: flex;\\r\\n    gap: 15px;\\r\\n    .title {\\r\\n      font-size: 12px;\\r\\n      font-weight: bold;\\r\\n    }\\r\\n  }\\r\\n  .support-items {\\r\\n    display: flex;\\r\\n    gap: 15px;\\r\\n    .support-item {\\r\\n      display: flex;\\r\\n      gap: 5px;\\r\\n      img {\\r\\n        height: 25px;\\r\\n        width: 25px;\\r\\n      }\\r\\n      .title {\\r\\n        font-size: 12px;\\r\\n        font-weight: 700;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\",\"@import url(\\\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=Open+Sans:wght@300&family=Young+Serif&display=swap\\\");\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  background-color: white;\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n}\\n\\n.special-header {\\n  background-color: red;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.special-header img {\\n  height: 60px;\\n  width: 1140px;\\n}\\n\\n.header {\\n  display: flex;\\n  gap: 120px;\\n  justify-content: center;\\n}\\n.header .titles {\\n  display: flex;\\n  gap: 15px;\\n}\\n.header .titles .title {\\n  font-size: 12px;\\n  font-weight: bold;\\n}\\n.header .support-items {\\n  display: flex;\\n  gap: 15px;\\n}\\n.header .support-items .support-item {\\n  display: flex;\\n  gap: 5px;\\n}\\n.header .support-items .support-item img {\\n  height: 25px;\\n  width: 25px;\\n}\\n.header .support-items .support-item .title {\\n  font-size: 12px;\\n  font-weight: 700;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzE0XS51c2VbNF0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuc2NzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0Esd0hBQXdILGlFQUFpRSxRQUFRLGNBQWMsZUFBZSw0QkFBNEIsMkNBQTJDLEdBQUcscUJBQXFCLDBCQUEwQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1QixpQkFBaUIsa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsZUFBZSw0QkFBNEIsR0FBRyxtQkFBbUIsa0JBQWtCLGNBQWMsR0FBRywwQkFBMEIsb0JBQW9CLHNCQUFzQixHQUFHLDBCQUEwQixrQkFBa0IsY0FBYyxHQUFHLHdDQUF3QyxrQkFBa0IsYUFBYSxHQUFHLDRDQUE0QyxpQkFBaUIsZ0JBQWdCLEdBQUcsK0NBQStDLG9CQUFvQixxQkFBcUIsR0FBRyxPQUFPLG9PQUFvTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsK0JBQStCLGdCQUFnQixpQkFBaUIsOEJBQThCLDZDQUE2QyxLQUFLLGtGQUFrRixpRUFBaUUscUJBQXFCLDRCQUE0QixxQkFBcUIsMEdBQTBHLHVHQUF1Ryx1RkFBdUYscUJBQXFCLHNCQUFzQixPQUFPLEtBQUssYUFBYSxvQkFBb0Isa0JBQWtCLDBFQUEwRSxlQUFlLHNCQUFzQixrQkFBa0IsZ0JBQWdCLDBCQUEwQiw0QkFBNEIsU0FBUyxPQUFPLHNCQUFzQixzQkFBc0Isa0JBQWtCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGVBQWUseUJBQXlCLHdCQUF3QixXQUFXLGtCQUFrQiw0QkFBNEIsNkJBQTZCLFdBQVcsU0FBUyxPQUFPLEtBQUsscUZBQXFGLGlFQUFpRSxRQUFRLGNBQWMsZUFBZSw0QkFBNEIsMkNBQTJDLEdBQUcscUJBQXFCLDBCQUEwQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1QixpQkFBaUIsa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsZUFBZSw0QkFBNEIsR0FBRyxtQkFBbUIsa0JBQWtCLGNBQWMsR0FBRywwQkFBMEIsb0JBQW9CLHNCQUFzQixHQUFHLDBCQUEwQixrQkFBa0IsY0FBYyxHQUFHLHdDQUF3QyxrQkFBa0IsYUFBYSxHQUFHLDRDQUE0QyxpQkFBaUIsZ0JBQWdCLEdBQUcsK0NBQStDLG9CQUFvQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDeHZIO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3M/MzU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrTW9ubzp3Z2h0QDMwMDs0MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZmYW1pbHk9WW91bmcrU2VyaWYmZGlzcGxheT1zd2FwXFxcIik7XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcGVjaWFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3BlY2lhbC1oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiAxMTQwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAudGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcbi5oZWFkZXIgLnRpdGxlcyAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXIgLnN1cHBvcnQtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuLmhlYWRlciAuc3VwcG9ydC1pdGVtcyAuc3VwcG9ydC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuLmhlYWRlciAuc3VwcG9ydC1pdGVtcyAuc3VwcG9ydC1pdGVtIGltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuLmhlYWRlciAuc3VwcG9ydC1pdGVtcyAuc3VwcG9ydC1pdGVtIC50aXRsZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BdGElMjBCYXlyYWt0YXIvRGVza3RvcC9CZWxnZWxlci9Qcm9qZWN0cy9QZXJzb25hbC9teUZpcnN0UmVwb3NpdG9yeS9Qcm9qZWN0L3NyYy9zdHlsZXMvZ2xvYmFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1RLDRJQUFBO0FBTlI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNHSjs7QURBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNHRjtBREZFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUNJSjtBREhJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDS047QURGRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDSUo7QURISTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FDS047QURKTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDTVI7QURKTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ01SXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOndnaHRAMzAwOzQwMCZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmZhbWlseT1Zb3VuZytTZXJpZiZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4uc3BlY2lhbC1oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgZGlzcGxheTogZmxleDsgLy9vcnRhIHNhxJ8gc29sIGnDp2luIGtvdW5tbGFuZMSxcm1heWEgeWFyxLF5b3IgeWFuIHlhbmEgZ2V0aXJpeW9yIGnDp2luZGVraWxlcmlcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvL3kgZWtzZW5pbmRlIGtvbnVtbGFuZMSxcm1hIG9ydGE6IGNlbnRlciBiYcWfbGFuZ8Sxw6c6IGZsZXgtc3RhcnQgc29uOiBmbGV4LWVuZFxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy94IGVrc2VuaW5kZSBrb251bWxhbmTEsXJtYSBvcnRhOiBjZW50ZXIgYmHFn2xhbmfEscOnOiBmbGV4LXN0YXJ0IHNvbjogZmxleC1lbmRcXHJcXG4gIGltZyB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDExNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMjBweDsgLy8gaXRlbWxhciAow6dvY3VrbGFyKSBhcmFzxLFuZGFraSBnYXAvdXpha2zEsWtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLnRpdGxlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5zdXBwb3J0LWl0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICAuc3VwcG9ydC1pdGVtIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgIGltZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrTW9ubzp3Z2h0QDMwMDs0MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZmYW1pbHk9WW91bmcrU2VyaWYmZGlzcGxheT1zd2FwXFxcIik7XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcGVjaWFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3BlY2lhbC1oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiAxMTQwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAudGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcbi5oZWFkZXIgLnRpdGxlcyAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXIgLnN1cHBvcnQtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuLmhlYWRlciAuc3VwcG9ydC1pdGVtcyAuc3VwcG9ydC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuLmhlYWRlciAuc3VwcG9ydC1pdGVtcyAuc3VwcG9ydC1pdGVtIGltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuLmhlYWRlciAuc3VwcG9ydC1pdGVtcyAuc3VwcG9ydC1pdGVtIC50aXRsZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[8].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[8].oneOf[14].use[4]!./src/styles/globals.scss\n"));

/***/ })

});