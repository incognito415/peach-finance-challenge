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
exports.id = "pages/api/tasks";
exports.ids = ["pages/api/tasks"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/tasks/index.ts":
/*!**********************************!*\
  !*** ./pages/api/tasks/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst handler = async (req, res)=>{\n    switch(req.method){\n        case \"GET\":\n            // ? GET /api/tasks\n            return res.status(200).send(await prisma.task.findMany({\n                where: {\n                    isDone: false,\n                    isTrash: false\n                }\n            }));\n        case \"POST\":\n            // ? POST /api/tasks\n            return res.status(200).send(await prisma.task.create({\n                data: req.body\n            }));\n        default:\n            return res.status(405).end();\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGFza3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzZDO0FBRTdDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWpDLE1BQU1FLE9BQU8sR0FBRyxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ25FLE9BQVFELEdBQUcsQ0FBQ0UsTUFBTTtRQUNoQixLQUFLLEtBQUs7WUFDUixtQkFBbUI7WUFDbkIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FDekIsTUFBTU4sTUFBTSxDQUFDTyxJQUFJLENBQUNDLFFBQVEsQ0FBQztnQkFDekJDLEtBQUssRUFBRTtvQkFBRUMsTUFBTSxFQUFFLEtBQUs7b0JBQUVDLE9BQU8sRUFBRSxLQUFLO2lCQUFFO2FBQ3pDLENBQUMsQ0FDSDtRQUNILEtBQUssTUFBTTtZQUNULG9CQUFvQjtZQUNwQixPQUFPUixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU1OLE1BQU0sQ0FBQ08sSUFBSSxDQUFDSyxNQUFNLENBQUM7Z0JBQUVDLElBQUksRUFBRVgsR0FBRyxDQUFDWSxJQUFJO2FBQUUsQ0FBQyxDQUFDO1FBQzNFO1lBQ0UsT0FBT1gsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNVLEdBQUcsRUFBRTtLQUMvQjtBQUNILENBQUM7QUFFRCxpRUFBZWQsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWNoYWxsZW5nZS8uL3BhZ2VzL2FwaS90YXNrcy9pbmRleC50cz8wNjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICAvLyA/IEdFVCAvYXBpL3Rhc2tzXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXG4gICAgICAgIGF3YWl0IHByaXNtYS50YXNrLmZpbmRNYW55KHtcbiAgICAgICAgICB3aGVyZTogeyBpc0RvbmU6IGZhbHNlLCBpc1RyYXNoOiBmYWxzZSB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICAvLyA/IFBPU1QgL2FwaS90YXNrc1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGF3YWl0IHByaXNtYS50YXNrLmNyZWF0ZSh7IGRhdGE6IHJlcS5ib2R5IH0pKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwidGFzayIsImZpbmRNYW55Iiwid2hlcmUiLCJpc0RvbmUiLCJpc1RyYXNoIiwiY3JlYXRlIiwiZGF0YSIsImJvZHkiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/tasks/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tasks/index.ts"));
module.exports = __webpack_exports__;

})();