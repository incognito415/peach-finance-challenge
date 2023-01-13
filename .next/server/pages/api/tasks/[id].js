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
exports.id = "pages/api/tasks/[id]";
exports.ids = ["pages/api/tasks/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/tasks/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/tasks/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst handler = async (req, res)=>{\n    const { id  } = req.query;\n    switch(req.method){\n        case \"PUT\":\n            // ? PUT /api/tasks/[id]\n            return res.status(200).send(await prisma.task.update({\n                where: {\n                    id: Number(id)\n                },\n                data: req.body\n            }));\n        case \"DELETE\":\n            // ? DELETE /api/tasks/[id]\n            return res.status(200).send(await prisma.task.update({\n                where: {\n                    id: Number(id)\n                },\n                data: {\n                    isTrash: true\n                }\n            }));\n        default:\n            return res.status(405).end();\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGFza3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNkM7QUFFN0MsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFakMsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbkUsTUFBTSxFQUFFQyxFQUFFLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQ3hCLE9BQVFILEdBQUcsQ0FBQ0ksTUFBTTtRQUNoQixLQUFLLEtBQUs7WUFDUix3QkFBd0I7WUFDeEIsT0FBT0gsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FDekIsTUFBTVIsTUFBTSxDQUFDUyxJQUFJLENBQUNDLE1BQU0sQ0FBQztnQkFDdkJDLEtBQUssRUFBRTtvQkFBRVAsRUFBRSxFQUFFUSxNQUFNLENBQUNSLEVBQUUsQ0FBQztpQkFBRTtnQkFDekJTLElBQUksRUFBRVgsR0FBRyxDQUFDWSxJQUFJO2FBQ2YsQ0FBQyxDQUNIO1FBQ0gsS0FBSyxRQUFRO1lBQ1gsMkJBQTJCO1lBQzNCLE9BQU9YLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQ3pCLE1BQU1SLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDQyxNQUFNLENBQUM7Z0JBQ3ZCQyxLQUFLLEVBQUU7b0JBQUVQLEVBQUUsRUFBRVEsTUFBTSxDQUFDUixFQUFFLENBQUM7aUJBQUU7Z0JBQ3pCUyxJQUFJLEVBQUU7b0JBQUVFLE9BQU8sRUFBRSxJQUFJO2lCQUFFO2FBQ3hCLENBQUMsQ0FDSDtRQUNIO1lBQ0UsT0FBT1osR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNTLEdBQUcsRUFBRTtLQUMvQjtBQUNILENBQUM7QUFFRCxpRUFBZWYsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWNoYWxsZW5nZS8uL3BhZ2VzL2FwaS90YXNrcy9baWRdLnRzPzZhMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ1BVVCc6XG4gICAgICAvLyA/IFBVVCAvYXBpL3Rhc2tzL1tpZF1cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChcbiAgICAgICAgYXdhaXQgcHJpc21hLnRhc2sudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkKSB9LFxuICAgICAgICAgIGRhdGE6IHJlcS5ib2R5XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIC8vID8gREVMRVRFIC9hcGkvdGFza3MvW2lkXVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFxuICAgICAgICBhd2FpdCBwcmlzbWEudGFzay51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWQpIH0sXG4gICAgICAgICAgZGF0YTogeyBpc1RyYXNoOiB0cnVlIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsIm1ldGhvZCIsInN0YXR1cyIsInNlbmQiLCJ0YXNrIiwidXBkYXRlIiwid2hlcmUiLCJOdW1iZXIiLCJkYXRhIiwiYm9keSIsImlzVHJhc2giLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/tasks/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tasks/[id].ts"));
module.exports = __webpack_exports__;

})();