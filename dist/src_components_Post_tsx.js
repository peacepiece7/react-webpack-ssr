"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["src_components_Post_tsx"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfUG9zdF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5QjtBQUNtQjtBQUFBO0FBQUE7QUFTN0IsU0FBU00sSUFBSUEsQ0FBQSxFQUFHO0VBQzdCLE1BQU1DLElBQUksR0FBR04seURBQVcsQ0FBQyxDQUFDO0VBQzFCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVGLElBQUksQ0FBQztFQUM1QixJQUFJQSxJQUFJLENBQUNHLFFBQVEsRUFBRSxDQUNuQjtFQUVBLG9CQUNFTCx1REFBQTtJQUFBTSxRQUFBLGdCQUNFUixzREFBQTtNQUFBUSxRQUFBLEVBQUk7SUFBSyxDQUFJLENBQUMsZUFDZFIsc0RBQUE7TUFBQVEsUUFBQSxFQUFLSixJQUFJLENBQUNLO0lBQUssQ0FBSyxDQUFDLGVBQ3JCVCxzREFBQTtNQUFBUSxRQUFBLEVBQU1KLElBQUksQ0FBQ007SUFBSSxDQUFNLENBQUM7RUFBQSxDQUNuQixDQUFDO0FBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCd0Q7QUFBQTtBQUV4RCxNQUFNRyxVQUFVLGdCQUFHRixvREFBYSxDQUFDLElBQUksQ0FBQztBQUUvQixTQUFTRyxXQUFXQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBcEI7SUFBRVAsUUFBUTtJQUFFSjtFQUFLLENBQUMsR0FBQVcsSUFBQTtFQUM1QyxvQkFBT2Ysc0RBQUEsQ0FBQ2EsVUFBVSxDQUFDRyxRQUFRO0lBQUNDLEtBQUssRUFBRWIsSUFBSztJQUFBSSxRQUFBLEVBQUVBO0VBQVEsQ0FBc0IsQ0FBQztBQUMzRTtBQUVBLE1BQU1VLFFBQVEsR0FBRztFQUNmQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxNQUFNLEVBQUUsQ0FBQztFQUNUWCxLQUFLLEVBQUUsV0FBVztFQUNsQkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQztBQUVNLFNBQVNaLFdBQVdBLENBQUEsRUFBRztFQUM1QixNQUFNdUIsR0FBRyxHQUFHVCxpREFBVSxDQUFDQyxVQUFVLENBQUM7RUFDbEMsSUFBSVEsR0FBRyxLQUFLLElBQUksRUFBRTtJQUNoQixPQUFPQSxHQUFHLENBQUNqQixJQUFJLENBQUNrQixJQUFJLENBQUMsQ0FBQztFQUN4QjtFQUNBLE9BQU9KLFFBQVE7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9zc3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gKiDshJzrsoQg7Lu07Y+s64SM7Yq466GcIOyCrOyaqe2VnOuLpOuptCB1c2VFZmZlY3QsIHVzZVN0YXRlIOuTseydhCDsgqzsmqntlZjrqbQgc2VsZiBpcyBub3QgZGVmaW5lZCDsl5Drn6zqsIAg67Cc7IOd7ZWc64ukLlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVRlc3REYXRhIH0gZnJvbSAnLi4vY29udGV4dC9zc3InXHJcblxyXG50eXBlIFBvc3QgPSB7XHJcbiAgaWQ6IG51bWJlclxyXG4gIHVzZXJJZDogbnVtYmVyXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIGJvZHk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VUZXN0RGF0YSgpXHJcbiAgY29uc29sZS5sb2coJ0RBVEEgOiAnLCBkYXRhKVxyXG4gIGlmIChkYXRhLmlzU2VydmVyKSB7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPlBPU1QhPC9oMj5cclxuICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgIDxkaXY+e2RhdGEuYm9keX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU1NSQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTU1JQcm92aWRlcih7IGNoaWxkcmVuLCBkYXRhIH0pIHtcclxuICByZXR1cm4gPFNTUkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RhdGF9PntjaGlsZHJlbn08L1NTUkNvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmNvbnN0IGZha2VEYXRhID0ge1xyXG4gIGlkOiAxLFxyXG4gIHVzZXJJZDogMixcclxuICB0aXRsZTogJ0Zha2UgZGF0YScsXHJcbiAgYm9keTogJ3RoZSBsYXp5IGZveCBqdW1wcyBvdmVyIHRoZSBicm93biBxdWljayBkb2cnLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGVzdERhdGEoKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTU1JDb250ZXh0KVxyXG4gIGlmIChjdHggIT09IG51bGwpIHtcclxuICAgIHJldHVybiBjdHguZGF0YS5yZWFkKClcclxuICB9XHJcbiAgcmV0dXJuIGZha2VEYXRhXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVGVzdERhdGEiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaXNTZXJ2ZXIiLCJjaGlsZHJlbiIsInRpdGxlIiwiYm9keSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU1NSQ29udGV4dCIsIlNTUlByb3ZpZGVyIiwiX3JlZiIsIlByb3ZpZGVyIiwidmFsdWUiLCJmYWtlRGF0YSIsImlkIiwidXNlcklkIiwiY3R4IiwicmVhZCJdLCJzb3VyY2VSb290IjoiIn0=