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
exports.id = "pages/api/trash";
exports.ids = ["pages/api/trash"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/trash.ts":
/*!****************************!*\
  !*** ./pages/api/trash.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst handler = async (req, res)=>{\n    switch(req.method){\n        case \"GET\":\n            // ? GET /api/trash\n            return res.status(200).send(await prisma.task.findMany({\n                where: {\n                    isTrash: true\n                }\n            }));\n        case \"DELETE\":\n            // ? DELETE /api/trash\n            await prisma.task.deleteMany({\n                where: {\n                    isTrash: true\n                }\n            });\n            return res.status(200).end();\n        default:\n            return res.status(405).end();\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhc2gudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzZDO0FBRTdDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWpDLE1BQU1FLE9BQU8sR0FBRyxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ25FLE9BQVFELEdBQUcsQ0FBQ0UsTUFBTTtRQUNoQixLQUFLLEtBQUs7WUFDUixtQkFBbUI7WUFDbkIsT0FBT0QsR0FBRyxDQUNQRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ1hDLElBQUksQ0FBQyxNQUFNTixNQUFNLENBQUNPLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUFFQyxLQUFLLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO2lCQUFFO2FBQUUsQ0FBQyxDQUFDO1FBQ25FLEtBQUssUUFBUTtZQUNYLHNCQUFzQjtZQUN0QixNQUFNVixNQUFNLENBQUNPLElBQUksQ0FBQ0ksVUFBVSxDQUFDO2dCQUFFRixLQUFLLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO2lCQUFFO2FBQUUsQ0FBQztZQUMxRCxPQUFPUCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ08sR0FBRyxFQUFFO1FBQzlCO1lBQ0UsT0FBT1QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNPLEdBQUcsRUFBRTtLQUMvQjtBQUNILENBQUM7QUFFRCxpRUFBZVgsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWNoYWxsZW5nZS8uL3BhZ2VzL2FwaS90cmFzaC50cz9iZTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICAvLyA/IEdFVCAvYXBpL3RyYXNoXG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAuc2VuZChhd2FpdCBwcmlzbWEudGFzay5maW5kTWFueSh7IHdoZXJlOiB7IGlzVHJhc2g6IHRydWUgfSB9KSlcbiAgICBjYXNlICdERUxFVEUnOlxuICAgICAgLy8gPyBERUxFVEUgL2FwaS90cmFzaFxuICAgICAgYXdhaXQgcHJpc21hLnRhc2suZGVsZXRlTWFueSh7IHdoZXJlOiB7IGlzVHJhc2g6IHRydWUgfSB9KVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwidGFzayIsImZpbmRNYW55Iiwid2hlcmUiLCJpc1RyYXNoIiwiZGVsZXRlTWFueSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/trash.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/trash.ts"));
module.exports = __webpack_exports__;

})();