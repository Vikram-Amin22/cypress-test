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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "(api)/./pages/api/subscribe.js":
/*!********************************!*\
  !*** ./pages/api/subscribe.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst subscribed = [\n    \"john@example.com\"\n];\nfunction handler(req, res) {\n    if (!req.rawHeaders.includes(\"application/json\")) {\n        res.status(400).json({\n            message: `Error: request must be sent as JSON`\n        });\n        return;\n    }\n    if (req.method === \"POST\" && req.body.email && !subscribed.includes(req.body.email)) {\n        res.status(200).json({\n            message: `Success: ${req.body.email} has been successfully subscribed`\n        });\n        return;\n    }\n    if (req.method === \"POST\" && req.body.email && subscribed.includes(req.body.email)) {\n        res.status(403).json({\n            message: `Error: ${req.body.email} already exists. Please use a different email address.`\n        });\n        return;\n    }\n    res.status(400).json({\n        message: \"Error: There was an error with your request. Please try again.\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUc7SUFBQyxrQkFBa0I7Q0FBQztBQUV4QixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxVQUFVLENBQUNDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ2hERixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUMvQyxDQUFDO1FBRUYsT0FBTTtJQUNSLENBQUM7SUFFRCxJQUNFTixHQUFHLENBQUNPLE1BQU0sS0FBSyxNQUFNLElBQ3JCUCxHQUFHLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxJQUNkLENBQUNYLFVBQVUsQ0FBQ0ssUUFBUSxDQUFDSCxHQUFHLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQ3BDO1FBQ0FSLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDbkJDLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRU4sR0FBRyxDQUFDUSxJQUFJLENBQUNDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztTQUN2RSxDQUFDO1FBRUYsT0FBTTtJQUNSLENBQUM7SUFFRCxJQUNFVCxHQUFHLENBQUNPLE1BQU0sS0FBSyxNQUFNLElBQ3JCUCxHQUFHLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxJQUNkWCxVQUFVLENBQUNLLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDUSxJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUNuQztRQUNBUixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDQyxLQUFLLENBQUMsc0RBQXNELENBQUM7U0FDMUYsQ0FBQztRQUVGLE9BQU07SUFDUixDQUFDO0lBRURSLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDbkJDLE9BQU8sRUFBRSxnRUFBZ0U7S0FDMUUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzPzMyMzIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3Vic2NyaWJlZCA9IFtcImpvaG5AZXhhbXBsZS5jb21cIl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAoIXJlcS5yYXdIZWFkZXJzLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IGBFcnJvcjogcmVxdWVzdCBtdXN0IGJlIHNlbnQgYXMgSlNPTmAsXG4gICAgfSlcblxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKFxuICAgIHJlcS5tZXRob2QgPT09IFwiUE9TVFwiICYmXG4gICAgcmVxLmJvZHkuZW1haWwgJiZcbiAgICAhc3Vic2NyaWJlZC5pbmNsdWRlcyhyZXEuYm9keS5lbWFpbClcbiAgKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgbWVzc2FnZTogYFN1Y2Nlc3M6ICR7cmVxLmJvZHkuZW1haWx9IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJzY3JpYmVkYCxcbiAgICB9KVxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoXG4gICAgcmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIgJiZcbiAgICByZXEuYm9keS5lbWFpbCAmJlxuICAgIHN1YnNjcmliZWQuaW5jbHVkZXMocmVxLmJvZHkuZW1haWwpXG4gICkge1xuICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IGBFcnJvcjogJHtyZXEuYm9keS5lbWFpbH0gYWxyZWFkeSBleGlzdHMuIFBsZWFzZSB1c2UgYSBkaWZmZXJlbnQgZW1haWwgYWRkcmVzcy5gLFxuICAgIH0pXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICBtZXNzYWdlOiBcIkVycm9yOiBUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gIH0pXG59XG4iXSwibmFtZXMiOlsic3Vic2NyaWJlZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyYXdIZWFkZXJzIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm1ldGhvZCIsImJvZHkiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscribe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subscribe.js"));
module.exports = __webpack_exports__;

})();