/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABORT_DELAY: () => (/* binding */ ABORT_DELAY),
/* harmony export */   API_DELAY: () => (/* binding */ API_DELAY)
/* harmony export */ });
const API_DELAY = 1000;
const ABORT_DELAY = 10000;

/***/ }),

/***/ "./server/render/renderHome.tsx":
/*!**************************************!*\
  !*** ./server/render/renderHome.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/App */ "./src/App.tsx");
/* harmony import */ var _src_context_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/context/ssr */ "./src/context/ssr.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










async function renderHome(url, req, res) {
  res.socket?.on('error', error => console.error(error));
  let didError = false;
  const assets = {
    'main.js': '/main.js',
    'main.css': '/main.css'
  };
  const postPromise = new Promise(res => {
    console.log('HOME PAGE : 3초 뒤 API를 요청합니다.');
    setTimeout(() => {
      res(axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/posts/1`).then(_ref => {
        let {
          data
        } = _ref;
        console.log('HOME PAGE : 데이터를 반환합니다. Suspense가 Resolve됩니다.');
        return {
          ...data,
          isServer: true
        };
      }));
    }, 8000);
  });
  const data = {
    data: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.wrapPromise)(postPromise)
  };
  let isCrawler = false;
  const stream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToPipeableStream)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_src_context_ssr__WEBPACK_IMPORTED_MODULE_7__.SSRProvider, {
    data: data,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("html", {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("head", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("link", {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("link", {
          rel: "stylesheet",
          href: assets['main.css']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("title", {
          children: `test code!`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
          name: "description",
          content: `code for test!`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("body", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("noscript", {
          dangerouslySetInnerHTML: {
            __html: `<b>Enable JavaScript to run this app.</b>`
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("script", {
          dangerouslySetInnerHTML: {
            __html: `assetManifest = ${JSON.stringify(assets)};`
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        id: "root",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
          location: url,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_src_App__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })
      })]
    })
  }), {
    bootstrapScripts: [assets['main.js']],
    onShellReady() {
      if (isCrawler) return;
      // Streaming이 시작 되기전 에러가 발생한다면 이 곳에서 error code를 접근합니다.
      res.statusCode = didError ? 500 : 200;
      // 한글을 사용하기 떄문에 utf-8로 Content-type을 설정합니다.
      res.setHeader('Content-type', 'text/html;charset=UTF-8');
      stream.pipe(res);
    },
    onAllReady() {
      if (!isCrawler) return;
      // If you don't want streaming, use this instead of onShellReady.
      // This will fire after the entire page content is ready.
      // You can use this for crawlers or static generation.
      res.statusCode = didError ? 500 : 200;
      res.setHeader('Content-type', 'text/html;charset=UTF-8');
      stream.pipe(res);
    },
    onError(err) {
      didError = true;
      console.error(err);
    }
  });
  // 충분한 시간이(현제 10초) 지나면 SSR을 포기하고 CSR으로 전환합니다.
  setTimeout(() => stream.abort(), _constants__WEBPACK_IMPORTED_MODULE_4__.ABORT_DELAY);
}

// * Example API URL
// https://jsonplaceholder.typicode.com/comments?postId=${postNumber}
// https://jsonplaceholder.typicode.com/posts/${postNumber}

/***/ }),

/***/ "./server/route/root.ts":
/*!******************************!*\
  !*** ./server/route/root.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _render_renderHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/renderHome */ "./server/render/renderHome.tsx");


const router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.get('/', (req, res) => {
  return (0,_render_renderHome__WEBPACK_IMPORTED_MODULE_1__["default"])(req.url, req, res);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SideBar */ "./src/components/SideBar.tsx");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Post */ "./src/components/Post.tsx");
/* harmony import */ var _components_Odd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Odd */ "./src/components/Odd.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function App() {
  const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SideBar__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
        className: "text-sky-900",
        children: ["Count : ", count]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "mr-4",
          onClick: () => setCount(prev => ++prev),
          children: "Increment"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "mr-4",
          onClick: () => setCount(prev => --prev),
          children: "Decrement"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        className: "text-3xl",
        children: "POST"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-3xl text-rose-500",
          children: "\uD3EC\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uACE0 \uC788\uB294 \uC911\uC785\uB2C8\uB2E4..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-3xl text-rose-500",
          children: "\uC774\uC0C1\uD55C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uACE0 \uC788\uB294 \uC911\uC785\uB2C8\uB2E4..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Odd__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/Odd.tsx":
/*!********************************!*\
  !*** ./src/components/Odd.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Odd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Odd() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: " test!"
    })
  });
}

/***/ }),

/***/ "./src/components/Post.tsx":
/*!*********************************!*\
  !*** ./src/components/Post.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ssr */ "./src/context/ssr.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
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

/***/ "./src/components/SideBar.tsx":
/*!************************************!*\
  !*** ./src/components/SideBar.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Sidebar() {
  const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
      children: ["SIDE BAR! : ", count]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "mr-4",
        onClick: () => setCount(prev => ++prev),
        children: "Increment"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "mr-4",
        onClick: () => setCount(prev => --prev),
        children: "Decrement"
      })]
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


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

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createServerData: () => (/* binding */ createServerData),
/* harmony export */   handleErrors: () => (/* binding */ handleErrors),
/* harmony export */   waitForWebpack: () => (/* binding */ waitForWebpack),
/* harmony export */   wrapPromise: () => (/* binding */ wrapPromise)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");


function handleErrors(fn) {
  return async function (req, res, next) {
    try {
      return await fn(req, res);
    } catch (x) {
      next(x);
    }
  };
}
async function waitForWebpack(buildFilePath) {
  while (true) {
    try {
      (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(buildFilePath);
      return;
    } catch (err) {
      console.log('Could not find webpack build output. Will retry in a second...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

// Simulate a delay caused by data fetching.
// We fake this because the streaming HTML renderer
// is not yet integrated with real data fetching strategies.
function createServerData() {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise(resolve => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve('');
        }, _constants__WEBPACK_IMPORTED_MODULE_1__.API_DELAY);
      });
      throw promise;
    }
  };
}
function wrapPromise(promise) {
  let status = 'pending';
  let response;
  const suspender = promise.then(res => {
    console.log('Suspender Success :');
    status = 'success';
    response = res;
  },
  // rejected case
  err => {
    console.log('Suspender Rejected :');
    status = 'error';
    response = err;
  });
  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };
  return {
    read
  };
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _route_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route/root */ "./server/route/root.ts");




// ! 포트번호 코드 webpack.config.js와 중복됨!
const PORT = process.env.PORT || 4000;
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]('public'));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]('dist'));

// * Home 페이지로 이동합니다.
app.use('/', _route_root__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
}).on('error', error => {
  const isPipe = portOrPipe => Number.isNaN(portOrPipe);
  const bind = isPipe(PORT) ? `Pipe ${PORT}` : `Port ${PORT}`;
  switch (error.code) {
    // * 권한이 없는 경우
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    // * 이미 사용중인 포트인 경우
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUNGLFVBQVUsQ0FBQztFQUN4RSxNQUFNRyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDLEdBQUksUUFBT0EsSUFBSyxFQUFDLEdBQUksUUFBT0EsSUFBSyxFQUFDO0VBQzNELFFBQVFqRixLQUFLLENBQUM2RixJQUFJO0lBQ2hCO0lBQ0EsS0FBSyxRQUFRO01BQ1g1RixPQUFPLENBQUNELEtBQUssQ0FBQzRGLElBQUksR0FBRywrQkFBK0IsQ0FBQztNQUNyRFYsT0FBTyxDQUFDWSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pCO0lBQ0EsS0FBSyxZQUFZO01BQ2Y3RixPQUFPLENBQUNELEtBQUssQ0FBQzRGLElBQUksR0FBRyxvQkFBb0IsQ0FBQztNQUMxQ1YsT0FBTyxDQUFDWSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pCO01BQ0UsTUFBTTlGLEtBQUs7RUFDZjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yZW5kZXIvcmVuZGVySG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlL3Jvb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT2RkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9zc3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIGNvbW1vbmpzIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1yb3V0ZXItZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0L2pzeC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9ERUxBWSA9IDEwMDBcclxuZXhwb3J0IGNvbnN0IEFCT1JUX0RFTEFZID0gMTAwMDBcclxuIiwiaW1wb3J0IHR5cGUgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgcmVuZGVyVG9QaXBlYWJsZVN0cmVhbSwgcmVuZGVyVG9SZWFkYWJsZVN0cmVhbSB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20vc2VydmVyJ1xyXG5pbXBvcnQgeyBBQk9SVF9ERUxBWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgd3JhcFByb21pc2UgfSBmcm9tICcuLi8uLi91dGlscydcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vc3JjL0FwcCdcclxuaW1wb3J0IHsgU1NSUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zcmMvY29udGV4dC9zc3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZW5kZXJIb21lKHVybDogc3RyaW5nLCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICByZXMuc29ja2V0Py5vbignZXJyb3InLCAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxyXG5cclxuICBsZXQgZGlkRXJyb3IgPSBmYWxzZVxyXG5cclxuICBjb25zdCBhc3NldHMgPSB7XHJcbiAgICAnbWFpbi5qcyc6ICcvbWFpbi5qcycsXHJcbiAgICAnbWFpbi5jc3MnOiAnL21haW4uY3NzJyxcclxuICB9XHJcblxyXG4gIGNvbnN0IHBvc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0hPTUUgUEFHRSA6IDPstIgg65KkIEFQSeulvCDsmpTssq3tlanri4jri6QuJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXMoXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMWApLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSE9NRSBQQUdFIDog642w7J207YSw66W8IOuwmO2ZmO2VqeuLiOuLpC4gU3VzcGVuc2XqsIAgUmVzb2x2ZeuQqeuLiOuLpC4nKVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaXNTZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgIH0sIDgwMDApXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGRhdGE6IHdyYXBQcm9taXNlKHBvc3RQcm9taXNlKSxcclxuICB9XHJcblxyXG4gIGxldCBpc0NyYXdsZXIgPSBmYWxzZVxyXG5cclxuICBjb25zdCBzdHJlYW0gPSByZW5kZXJUb1BpcGVhYmxlU3RyZWFtKFxyXG4gICAgPFNTUlByb3ZpZGVyIGRhdGE9e2RhdGF9PlxyXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8aGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXthc3NldHNbJ21haW4uY3NzJ119IC8+XHJcbiAgICAgICAgICA8dGl0bGU+e2B0ZXN0IGNvZGUhYH08L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YGNvZGUgZm9yIHRlc3QhYH0gLz5cclxuICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8bm9zY3JpcHRcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICBfX2h0bWw6IGA8Yj5FbmFibGUgSmF2YVNjcmlwdCB0byBydW4gdGhpcyBhcHAuPC9iPmAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgIF9faHRtbDogYGFzc2V0TWFuaWZlc3QgPSAke0pTT04uc3RyaW5naWZ5KGFzc2V0cyl9O2AsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPlxyXG4gICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17dXJsfT5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaHRtbD5cclxuICAgIDwvU1NSUHJvdmlkZXI+LFxyXG4gICAge1xyXG4gICAgICBib290c3RyYXBTY3JpcHRzOiBbYXNzZXRzWydtYWluLmpzJ11dLFxyXG4gICAgICBvblNoZWxsUmVhZHkoKSB7XHJcbiAgICAgICAgaWYgKGlzQ3Jhd2xlcikgcmV0dXJuXHJcbiAgICAgICAgLy8gU3RyZWFtaW5n7J20IOyLnOyekSDrkJjquLDsoIQg7JeQ65+s6rCAIOuwnOyDne2VnOuLpOuptCDsnbQg6rOz7JeQ7IScIGVycm9yIGNvZGXrpbwg7KCR6re87ZWp64uI64ukLlxyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gZGlkRXJyb3IgPyA1MDAgOiAyMDBcclxuICAgICAgICAvLyDtlZzquIDsnYQg7IKs7Jqp7ZWY6riwIOuWhOusuOyXkCB1dGYtOOuhnCBDb250ZW50LXR5cGXsnYQg7ISk7KCV7ZWp64uI64ukLlxyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICd0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOCcpXHJcbiAgICAgICAgc3RyZWFtLnBpcGUocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkFsbFJlYWR5KCkge1xyXG4gICAgICAgIGlmICghaXNDcmF3bGVyKSByZXR1cm5cclxuICAgICAgICAvLyBJZiB5b3UgZG9uJ3Qgd2FudCBzdHJlYW1pbmcsIHVzZSB0aGlzIGluc3RlYWQgb2Ygb25TaGVsbFJlYWR5LlxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBmaXJlIGFmdGVyIHRoZSBlbnRpcmUgcGFnZSBjb250ZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vIFlvdSBjYW4gdXNlIHRoaXMgZm9yIGNyYXdsZXJzIG9yIHN0YXRpYyBnZW5lcmF0aW9uLlxyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gZGlkRXJyb3IgPyA1MDAgOiAyMDBcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAndGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgnKVxyXG4gICAgICAgIHN0cmVhbS5waXBlKHJlcylcclxuICAgICAgfSxcclxuICAgICAgb25FcnJvcihlcnIpIHtcclxuICAgICAgICBkaWRFcnJvciA9IHRydWVcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgKVxyXG4gIC8vIOy2qeu2hO2VnCDsi5zqsITsnbQo7ZiE7KCcIDEw7LSIKSDsp4DrgpjrqbQgU1NS7J2EIO2PrOq4sO2VmOqzoCBDU1LsnLzroZwg7KCE7ZmY7ZWp64uI64ukLlxyXG4gIHNldFRpbWVvdXQoKCkgPT4gc3RyZWFtLmFib3J0KCksIEFCT1JUX0RFTEFZKVxyXG59XHJcblxyXG4vLyAqIEV4YW1wbGUgQVBJIFVSTFxyXG4vLyBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPSR7cG9zdE51bWJlcn1cclxuLy8gaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cG9zdE51bWJlcn1cclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi4vcmVuZGVyL3JlbmRlckhvbWUnXHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmV0dXJuIHJlbmRlckhvbWUocmVxLnVybCwgcmVxLCByZXMpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCBsYXp5IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9TaWRlQmFyJ1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL2NvbXBvbmVudHMvUG9zdCdcclxuaW1wb3J0IE9kZCBmcm9tICcuL2NvbXBvbmVudHMvT2RkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIHsvKiA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1yb3NlLTUwMFwiPuyCrOydtOuTnOuwlCDrjbDsnbTthLDrpbwg6rCA7KC47Jik6rOgIOyeiOuKlCDspJHsnoXri4jri6QuLi48L2Rpdj59PiAqL31cclxuICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgIHsvKiA8L1N1c3BlbnNlPiAqL31cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1za3ktOTAwXCI+Q291bnQgOiB7Y291bnR9PC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXYpID0+ICsrcHJldil9PlxyXG4gICAgICAgICAgICBJbmNyZW1lbnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXYpID0+IC0tcHJldil9PlxyXG4gICAgICAgICAgICBEZWNyZW1lbnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+UE9TVDwvaDE+XHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtcm9zZS01MDBcIj7tj6zsiqTtirgg642w7J207YSw66W8IOqwgOyguOyYpOqzoCDsnojripQg7KSR7J6F64uI64ukLi4uPC9kaXY+fT5cclxuICAgICAgICAgIDxQb3N0IC8+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1yb3NlLTUwMFwiPuydtOyDge2VnCDrjbDsnbTthLDrpbwg6rCA7KC47Jik6rOgIOyeiOuKlCDspJHsnoXri4jri6QuLi48L2Rpdj59PlxyXG4gICAgICAgICAgPE9kZD48L09kZD5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdyYXBQcm9taXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZGQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT4gdGVzdCE8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIi8vICog7ISc67KEIOy7tO2PrOuEjO2KuOuhnCDsgqzsmqntlZzri6TrqbQgdXNlRWZmZWN0LCB1c2VTdGF0ZSDrk7HsnYQg7IKs7Jqp7ZWY66m0IHNlbGYgaXMgbm90IGRlZmluZWQg7JeQ65+s6rCAIOuwnOyDne2VnOuLpC5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUZXN0RGF0YSB9IGZyb20gJy4uL2NvbnRleHQvc3NyJ1xyXG5cclxudHlwZSBQb3N0ID0ge1xyXG4gIGlkOiBudW1iZXJcclxuICB1c2VySWQ6IG51bWJlclxyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBib2R5OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlVGVzdERhdGEoKVxyXG4gIGNvbnNvbGUubG9nKCdEQVRBIDogJywgZGF0YSlcclxuICBpZiAoZGF0YS5pc1NlcnZlcikge1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5QT1NUITwvaDI+XHJcbiAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICA8ZGl2PntkYXRhLmJvZHl9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+U0lERSBCQVIhIDoge2NvdW50fTwvaDI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXYpID0+ICsrcHJldil9PlxyXG4gICAgICAgICAgSW5jcmVtZW50XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXYpID0+IC0tcHJldil9PlxyXG4gICAgICAgICAgRGVjcmVtZW50XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTU1JDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNTUlByb3ZpZGVyKHsgY2hpbGRyZW4sIGRhdGEgfSkge1xyXG4gIHJldHVybiA8U1NSQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGF0YX0+e2NoaWxkcmVufTwvU1NSQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG5cclxuY29uc3QgZmFrZURhdGEgPSB7XHJcbiAgaWQ6IDEsXHJcbiAgdXNlcklkOiAyLFxyXG4gIHRpdGxlOiAnRmFrZSBkYXRhJyxcclxuICBib2R5OiAndGhlIGxhenkgZm94IGp1bXBzIG92ZXIgdGhlIGJyb3duIHF1aWNrIGRvZycsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUZXN0RGF0YSgpIHtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFNTUkNvbnRleHQpXHJcbiAgaWYgKGN0eCAhPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGN0eC5kYXRhLnJlYWQoKVxyXG4gIH1cclxuICByZXR1cm4gZmFrZURhdGFcclxufVxyXG4iLCJpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcydcclxuaW1wb3J0IHsgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHsgQVBJX0RFTEFZIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9ycyhmbjogKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4gUHJvbWlzZTx1bmtub3duPikge1xyXG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBmbihyZXEsIHJlcylcclxuICAgIH0gY2F0Y2ggKHgpIHtcclxuICAgICAgbmV4dCh4KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JXZWJwYWNrKGJ1aWxkRmlsZVBhdGg6IHN0cmluZykge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZWFkRmlsZVN5bmMoYnVpbGRGaWxlUGF0aClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBmaW5kIHdlYnBhY2sgYnVpbGQgb3V0cHV0LiBXaWxsIHJldHJ5IGluIGEgc2Vjb25kLi4uJylcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTaW11bGF0ZSBhIGRlbGF5IGNhdXNlZCBieSBkYXRhIGZldGNoaW5nLlxyXG4vLyBXZSBmYWtlIHRoaXMgYmVjYXVzZSB0aGUgc3RyZWFtaW5nIEhUTUwgcmVuZGVyZXJcclxuLy8gaXMgbm90IHlldCBpbnRlZ3JhdGVkIHdpdGggcmVhbCBkYXRhIGZldGNoaW5nIHN0cmF0ZWdpZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXJEYXRhKCkge1xyXG4gIGxldCBkb25lID0gZmFsc2VcclxuICBsZXQgcHJvbWlzZTogUHJvbWlzZTx1bmtub3duPiB8IG51bGwgPSBudWxsXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlYWQoKSB7XHJcbiAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgICB0aHJvdyBwcm9taXNlXHJcbiAgICAgIH1cclxuICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkb25lID0gdHJ1ZVxyXG4gICAgICAgICAgcHJvbWlzZSA9IG51bGxcclxuICAgICAgICAgIHJlc29sdmUoJycpXHJcbiAgICAgICAgfSwgQVBJX0RFTEFZKVxyXG4gICAgICB9KVxyXG4gICAgICB0aHJvdyBwcm9taXNlXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9taXNlKHByb21pc2U6IFByb21pc2U8dW5rbm93bj4pIHtcclxuICBsZXQgc3RhdHVzOiAnc3VjY2VzcycgfCAncGVuZGluZycgfCAnZXJyb3InID0gJ3BlbmRpbmcnXHJcbiAgbGV0IHJlc3BvbnNlOiB1bmtub3duXHJcblxyXG4gIGNvbnN0IHN1c3BlbmRlciA9IHByb21pc2UudGhlbihcclxuICAgIChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1N1c3BlbmRlciBTdWNjZXNzIDonKVxyXG4gICAgICBzdGF0dXMgPSAnc3VjY2VzcydcclxuICAgICAgcmVzcG9uc2UgPSByZXNcclxuICAgIH0sXHJcbiAgICAvLyByZWplY3RlZCBjYXNlXHJcbiAgICAoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTdXNwZW5kZXIgUmVqZWN0ZWQgOicpXHJcbiAgICAgIHN0YXR1cyA9ICdlcnJvcidcclxuICAgICAgcmVzcG9uc2UgPSBlcnJcclxuICAgIH0sXHJcbiAgKVxyXG5cclxuICBjb25zdCByZWFkID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAncGVuZGluZyc6XHJcbiAgICAgICAgdGhyb3cgc3VzcGVuZGVyXHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICB0aHJvdyByZXNwb25zZVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcmVhZCB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnY29tcHJlc3Npb24nXHJcbmltcG9ydCByb290Um91dGVyIGZyb20gJy4vcm91dGUvcm9vdCdcclxuXHJcbi8vICEg7Y+s7Yq467KI7Zi4IOy9lOuTnCB3ZWJwYWNrLmNvbmZpZy5qc+yZgCDspJHrs7XrkKghXHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDBcclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcblxyXG5hcHAudXNlKGNvbXByZXNzKCkpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdkaXN0JykpXHJcblxyXG4vLyAqIEhvbWUg7Y6Y7J207KeA66GcIOydtOuPme2VqeuLiOuLpC5cclxuYXBwLnVzZSgnLycsIHJvb3RSb3V0ZXIpXHJcblxyXG5hcHBcclxuICAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9YClcclxuICB9KVxyXG4gIC5vbignZXJyb3InLCAoZXJyb3I6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IGlzUGlwZSA9IChwb3J0T3JQaXBlOiBudW1iZXIgfCBzdHJpbmcpID0+IE51bWJlci5pc05hTihwb3J0T3JQaXBlKVxyXG4gICAgY29uc3QgYmluZCA9IGlzUGlwZShQT1JUKSA/IGBQaXBlICR7UE9SVH1gIDogYFBvcnQgJHtQT1JUfWBcclxuICAgIHN3aXRjaCAoZXJyb3IuY29kZSkge1xyXG4gICAgICAvLyAqIOq2jO2VnOydtCDsl4bripQg6rK97JqwXHJcbiAgICAgIGNhc2UgJ0VBQ0NFUyc6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzJylcclxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcclxuICAgICAgLy8gKiDsnbTrr7gg7IKs7Jqp7KSR7J24IO2PrO2KuOyduCDqsr3smrBcclxuICAgICAgY2FzZSAnRUFERFJJTlVTRSc6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyBpcyBhbHJlYWR5IGluIHVzZScpXHJcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuICB9KVxyXG4iXSwibmFtZXMiOlsiQVBJX0RFTEFZIiwiQUJPUlRfREVMQVkiLCJheGlvcyIsIlJlYWN0IiwicmVuZGVyVG9QaXBlYWJsZVN0cmVhbSIsIlN0YXRpY1JvdXRlciIsIndyYXBQcm9taXNlIiwiQXBwIiwiU1NSUHJvdmlkZXIiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwicmVuZGVySG9tZSIsInVybCIsInJlcSIsInJlcyIsInNvY2tldCIsIm9uIiwiZXJyb3IiLCJjb25zb2xlIiwiZGlkRXJyb3IiLCJhc3NldHMiLCJwb3N0UHJvbWlzZSIsIlByb21pc2UiLCJsb2ciLCJzZXRUaW1lb3V0IiwiZ2V0IiwidGhlbiIsIl9yZWYiLCJkYXRhIiwiaXNTZXJ2ZXIiLCJpc0NyYXdsZXIiLCJzdHJlYW0iLCJjaGlsZHJlbiIsImxhbmciLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJyZWwiLCJ0eXBlIiwiaHJlZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwibG9jYXRpb24iLCJib290c3RyYXBTY3JpcHRzIiwib25TaGVsbFJlYWR5Iiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsInBpcGUiLCJvbkFsbFJlYWR5Iiwib25FcnJvciIsImVyciIsImFib3J0IiwiZXhwcmVzcyIsInJvdXRlciIsIlJvdXRlciIsIlN1c3BlbnNlIiwiU2lkZUJhciIsIlBvc3QiLCJPZGQiLCJjb3VudCIsInNldENvdW50IiwidXNlU3RhdGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHJldiIsImZhbGxiYWNrIiwidXNlVGVzdERhdGEiLCJ0aXRsZSIsImJvZHkiLCJTaWRlYmFyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJTU1JDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImZha2VEYXRhIiwidXNlcklkIiwiY3R4IiwicmVhZCIsInJlYWRGaWxlU3luYyIsImhhbmRsZUVycm9ycyIsImZuIiwibmV4dCIsIngiLCJ3YWl0Rm9yV2VicGFjayIsImJ1aWxkRmlsZVBhdGgiLCJyZXNvbHZlIiwiY3JlYXRlU2VydmVyRGF0YSIsImRvbmUiLCJwcm9taXNlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzdXNwZW5kZXIiLCJjb21wcmVzcyIsInJvb3RSb3V0ZXIiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsImFwcCIsInVzZSIsInN0YXRpYyIsImxpc3RlbiIsImlzUGlwZSIsInBvcnRPclBpcGUiLCJOdW1iZXIiLCJpc05hTiIsImJpbmQiLCJjb2RlIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=