"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tasks/done";
exports.ids = ["pages/api/tasks/done"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/tasks/done.ts":
/*!*********************************!*\
  !*** ./pages/api/tasks/done.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst handler = async (req, res)=>{\n    switch(req.method){\n        case \"GET\":\n            // ? GET /api/tasks/done\n            return res.status(200).send(await prisma.task.findMany({\n                where: {\n                    isDone: true,\n                    isTrash: false\n                }\n            }));\n        default:\n            return res.status(405).end();\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGFza3MvZG9uZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNkM7QUFFN0MsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFakMsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbkUsT0FBUUQsR0FBRyxDQUFDRSxNQUFNO1FBQ2hCLEtBQUssS0FBSztZQUNSLHdCQUF3QjtZQUN4QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUN6QixNQUFNTixNQUFNLENBQUNPLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUN6QkMsS0FBSyxFQUFFO29CQUFFQyxNQUFNLEVBQUUsSUFBSTtvQkFBRUMsT0FBTyxFQUFFLEtBQUs7aUJBQUU7YUFDeEMsQ0FBQyxDQUNIO1FBQ0g7WUFDRSxPQUFPUixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ08sR0FBRyxFQUFFO0tBQy9CO0FBQ0gsQ0FBQztBQUVELGlFQUFlWCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtY2hhbGxlbmdlLy4vcGFnZXMvYXBpL3Rhc2tzL2RvbmUudHM/OWRkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgLy8gPyBHRVQgL2FwaS90YXNrcy9kb25lXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXG4gICAgICAgIGF3YWl0IHByaXNtYS50YXNrLmZpbmRNYW55KHtcbiAgICAgICAgICB3aGVyZTogeyBpc0RvbmU6IHRydWUsIGlzVHJhc2g6IGZhbHNlIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsInRhc2siLCJmaW5kTWFueSIsIndoZXJlIiwiaXNEb25lIiwiaXNUcmFzaCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/tasks/done.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tasks/done.ts"));
module.exports = __webpack_exports__;

})();