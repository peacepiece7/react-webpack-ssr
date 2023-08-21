"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-Post"],{

/***/ "./src/components/Post.tsx":
/*!*********************************!*\
  !*** ./src/components/Post.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ssr */ "./src/context/ssr.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// * 서버 컴포넌트로 사용한다면 useEffect, useState 등을 사용하면 self is not defined 에러가 발생한다.




function Post() {
  const data = (0,_context_ssr__WEBPACK_IMPORTED_MODULE_1__.useTestData)();
  console.log('DATA : ', data);
  if (data.isServer) {}
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: "POST!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      children: data.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: data.body
    })]
  });
}

/***/ }),

/***/ "./src/context/ssr.js":
/*!****************************!*\
  !*** ./src/context/ssr.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRProvider: () => (/* binding */ SSRProvider),
/* harmony export */   useTestData: () => (/* binding */ useTestData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const SSRContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function SSRProvider(_ref) {
  let {
    children,
    data
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SSRContext.Provider, {
    value: data,
    children: children
  });
}
const fakeData = {
  id: 1,
  userId: 2,
  title: 'Fake data',
  body: 'the lazy fox jumps over the brown quick dog'
};
function useTestData() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SSRContext);
  if (ctx !== null) {
    return ctx.data.read();
  }
  return fakeData;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy1Qb3N0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUI7QUFDbUI7QUFBQTtBQUFBO0FBUzdCLFNBQVNNLElBQUlBLENBQUEsRUFBRztFQUM3QixNQUFNQyxJQUFJLEdBQUdOLHlEQUFXLENBQUMsQ0FBQztFQUMxQk8sT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRixJQUFJLENBQUM7RUFDNUIsSUFBSUEsSUFBSSxDQUFDRyxRQUFRLEVBQUUsQ0FDbkI7RUFFQSxvQkFDRUwsdURBQUE7SUFBQU0sUUFBQSxnQkFDRVIsc0RBQUE7TUFBQVEsUUFBQSxFQUFJO0lBQUssQ0FBSSxDQUFDLGVBQ2RSLHNEQUFBO01BQUFRLFFBQUEsRUFBS0osSUFBSSxDQUFDSztJQUFLLENBQUssQ0FBQyxlQUNyQlQsc0RBQUE7TUFBQVEsUUFBQSxFQUFNSixJQUFJLENBQUNNO0lBQUksQ0FBTSxDQUFDO0VBQUEsQ0FDbkIsQ0FBQztBQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QndEO0FBQUE7QUFFeEQsTUFBTUcsVUFBVSxnQkFBR0Ysb0RBQWEsQ0FBQyxJQUFJLENBQUM7QUFFL0IsU0FBU0csV0FBV0EsQ0FBQUMsSUFBQSxFQUFxQjtFQUFBLElBQXBCO0lBQUVQLFFBQVE7SUFBRUo7RUFBSyxDQUFDLEdBQUFXLElBQUE7RUFDNUMsb0JBQU9mLHNEQUFBLENBQUNhLFVBQVUsQ0FBQ0csUUFBUTtJQUFDQyxLQUFLLEVBQUViLElBQUs7SUFBQUksUUFBQSxFQUFFQTtFQUFRLENBQXNCLENBQUM7QUFDM0U7QUFFQSxNQUFNVSxRQUFRLEdBQUc7RUFDZkMsRUFBRSxFQUFFLENBQUM7RUFDTEMsTUFBTSxFQUFFLENBQUM7RUFDVFgsS0FBSyxFQUFFLFdBQVc7RUFDbEJDLElBQUksRUFBRTtBQUNSLENBQUM7QUFFTSxTQUFTWixXQUFXQSxDQUFBLEVBQUc7RUFDNUIsTUFBTXVCLEdBQUcsR0FBR1QsaURBQVUsQ0FBQ0MsVUFBVSxDQUFDO0VBQ2xDLElBQUlRLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDaEIsT0FBT0EsR0FBRyxDQUFDakIsSUFBSSxDQUFDa0IsSUFBSSxDQUFDLENBQUM7RUFDeEI7RUFDQSxPQUFPSixRQUFRO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHQvc3NyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICog7ISc67KEIOy7tO2PrOuEjO2KuOuhnCDsgqzsmqntlZzri6TrqbQgdXNlRWZmZWN0LCB1c2VTdGF0ZSDrk7HsnYQg7IKs7Jqp7ZWY66m0IHNlbGYgaXMgbm90IGRlZmluZWQg7JeQ65+s6rCAIOuwnOyDne2VnOuLpC5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUZXN0RGF0YSB9IGZyb20gJy4uL2NvbnRleHQvc3NyJ1xyXG5cclxudHlwZSBQb3N0ID0ge1xyXG4gIGlkOiBudW1iZXJcclxuICB1c2VySWQ6IG51bWJlclxyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBib2R5OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlVGVzdERhdGEoKVxyXG4gIGNvbnNvbGUubG9nKCdEQVRBIDogJywgZGF0YSlcclxuICBpZiAoZGF0YS5pc1NlcnZlcikge1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5QT1NUITwvaDI+XHJcbiAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICA8ZGl2PntkYXRhLmJvZHl9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFNTUkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU1NSUHJvdmlkZXIoeyBjaGlsZHJlbiwgZGF0YSB9KSB7XHJcbiAgcmV0dXJuIDxTU1JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT57Y2hpbGRyZW59PC9TU1JDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG5jb25zdCBmYWtlRGF0YSA9IHtcclxuICBpZDogMSxcclxuICB1c2VySWQ6IDIsXHJcbiAgdGl0bGU6ICdGYWtlIGRhdGEnLFxyXG4gIGJvZHk6ICd0aGUgbGF6eSBmb3gganVtcHMgb3ZlciB0aGUgYnJvd24gcXVpY2sgZG9nJyxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRlc3REYXRhKCkge1xyXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoU1NSQ29udGV4dClcclxuICBpZiAoY3R4ICE9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gY3R4LmRhdGEucmVhZCgpXHJcbiAgfVxyXG4gIHJldHVybiBmYWtlRGF0YVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRlc3REYXRhIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIlBvc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlzU2VydmVyIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImJvZHkiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlNTUkNvbnRleHQiLCJTU1JQcm92aWRlciIsIl9yZWYiLCJQcm92aWRlciIsInZhbHVlIiwiZmFrZURhdGEiLCJpZCIsInVzZXJJZCIsImN0eCIsInJlYWQiXSwic291cmNlUm9vdCI6IiJ9