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
/* harmony export */   API_DELAY: () => (/* binding */ API_DELAY),
/* harmony export */   HOME_API_KEY: () => (/* binding */ HOME_API_KEY),
/* harmony export */   HOME_RPOMISE_API_KEY: () => (/* binding */ HOME_RPOMISE_API_KEY)
/* harmony export */ });
const API_DELAY = 1000;
const ABORT_DELAY = 10000;
const HOME_API_KEY = 'HOME';
const HOME_RPOMISE_API_KEY = 'HOME_PROMISE';

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
/* harmony import */ var _src_context_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/context/ssr */ "./src/context/ssr.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










async function renderHome(url, req, res) {
  res.socket?.on('error', error => console.error(error));
  let didError = false;
  const assets = {
    'main.js': '/main.js',
    'main.css': '/main.css'
  };

  // todo : RSC 전략 필요 (클라이언트에서 하이드레이션 막아야함..)
  const postPromise = new Promise(res => {
    setTimeout(() => {
      res(axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/posts/1`).then(_ref => {
        let {
          data
        } = _ref;
        return {
          ...data,
          isServer: true
        };
      }));
    }, 8000);
  });
  const homeData = await new Promise(res => {
    setTimeout(() => {
      const homeData = {
        title: 'Check the page source in your browser!',
        description: 'this code show you how to use react server side rendering',
        test: {
          foo: {
            bar: 'waldo'
          }
        }
      };
      return res(homeData);
    }, 100);
  });
  let serverSideData = {};
  serverSideData[_constants__WEBPACK_IMPORTED_MODULE_4__.HOME_API_KEY] = JSON.stringify(homeData);
  serverSideData[_constants__WEBPACK_IMPORTED_MODULE_4__.HOME_RPOMISE_API_KEY] = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.wrapPromise)(postPromise);

  // todo : crawler 처리
  let isCrawler = false;
  const stream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToPipeableStream)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_src_context_ssr__WEBPACK_IMPORTED_MODULE_7__.SSRProvider, {
    data: serverSideData,
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
        }), serverSideData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("script", {
          id: "__SERVER_DATA__",
          type: "application/json",
          children: JSON.stringify(serverSideData)
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
      path: "/",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {})
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
/* harmony import */ var _hooks_serverSide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/serverSide */ "./src/hooks/serverSide.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// * 서버 컴포넌트로 사용한다면 useEffect, useState 등을 사용하면 self is not defined 에러가 발생한다.




function Post() {
  const data = (0,_hooks_serverSide__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: data.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: data.body
    })]
  });
}

/***/ }),

/***/ "./src/components/SSRPost.tsx":
/*!************************************!*\
  !*** ./src/components/SSRPost.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SSRPost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _hooks_serverSideProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/serverSideProps */ "./src/hooks/serverSideProps.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function SSRPost() {
  let post = (0,_hooks_serverSideProps__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__.HOME_API_KEY);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      children: post.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: post.description
    })]
  });
}

/***/ }),

/***/ "./src/context/ssr.tsx":
/*!*****************************!*\
  !*** ./src/context/ssr.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRProvider: () => (/* binding */ SSRProvider),
/* harmony export */   ServerSideContext: () => (/* binding */ ServerSideContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ServerSideContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function SSRProvider(_ref) {
  let {
    children,
    data
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ServerSideContext.Provider, {
    value: data,
    children: children
  });
}

/***/ }),

/***/ "./src/hooks/serverSide.tsx":
/*!**********************************!*\
  !*** ./src/hooks/serverSide.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useServerSide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ssr */ "./src/context/ssr.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");



const dummyData = {
  title: 'dummy data',
  body: 'the lazy fox jumps over the brown quick dog'
};
function useServerSide() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_ssr__WEBPACK_IMPORTED_MODULE_1__.ServerSideContext);
  const serverData = ctx[_constants__WEBPACK_IMPORTED_MODULE_2__.HOME_RPOMISE_API_KEY];
  if (typeof document === 'undefined' && serverData) {
    serverData.read();
  }
  return dummyData;
}

/***/ }),

/***/ "./src/hooks/serverSideProps.tsx":
/*!***************************************!*\
  !*** ./src/hooks/serverSideProps.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ssr */ "./src/context/ssr.tsx");
/* harmony import */ var html_entities_decoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-entities-decoder */ "html-entities-decoder");
/* harmony import */ var html_entities_decoder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_entities_decoder__WEBPACK_IMPORTED_MODULE_2__);



function useServerSideProps(key) {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_ssr__WEBPACK_IMPORTED_MODULE_1__.ServerSideContext);
  if (ctx[key]) {
    return JSON.parse(ctx[key] || '');
  }
  const serverSideData = document.getElementById('__SERVER_DATA__')?.textContent || '';

  // ! 파싱을 두 번 해야합니다!
  const data = JSON.parse(html_entities_decoder__WEBPACK_IMPORTED_MODULE_2___default()(serverSideData));
  return JSON.parse(data[key]) || '';
}

/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Post */ "./src/components/Post.tsx");
/* harmony import */ var _components_SSRPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SSRPost */ "./src/components/SSRPost.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function Home() {
  const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
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
        children: "Server Side Rendering!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SSRPost__WEBPACK_IMPORTED_MODULE_2__["default"], {}, _constants__WEBPACK_IMPORTED_MODULE_3__.HOME_API_KEY)]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        className: "text-3xl",
        children: "Server Component"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-3xl text-rose-500",
          children: "\uD3EC\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uACE0 \uC788\uB294 \uC911\uC785\uB2C8\uB2E4..."
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      })]
    })]
  });
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
/* harmony export */   resolvablePromise: () => (/* binding */ resolvablePromise),
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
// ! is not yet integrated with real data fetching strategies. <== 부분 적용이면 직접 구현 해볼 순 없을까..? Next 13.4도 있는데..?
function createServerData() {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) return;
      if (promise) throw promise;
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

/**
 *
 * @description ref suspender 만들 때 참고하기 위한 코드
 * @example
 * initialStatePromiseRef.current.promise.resolve(initialData);
 * <Component initialData={initialStatePromiseRef.current.promise} />
 * @reference https://codesandbox.io/s/excalidraw-ehlz3?file=/src/App.tsx
 */
const resolvablePromise = () => {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
};

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

/***/ "html-entities-decoder":
/*!****************************************!*\
  !*** external "html-entities-decoder" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("html-entities-decoder");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnZHLE9BQU8sQ0FBQ3lGLEdBQUcsQ0FBRSxxQkFBb0JjLElBQUssRUFBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUNEekcsRUFBRSxDQUFDLE9BQU8sRUFBR0MsS0FBZ0MsSUFBSztFQUNqRCxNQUFNK0csTUFBTSxHQUFJQyxVQUEyQixJQUFLQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0YsVUFBVSxDQUFDO0VBQ3hFLE1BQU1HLElBQUksR0FBR0osTUFBTSxDQUFDUCxJQUFJLENBQUMsR0FBSSxRQUFPQSxJQUFLLEVBQUMsR0FBSSxRQUFPQSxJQUFLLEVBQUM7RUFDM0QsUUFBUXhHLEtBQUssQ0FBQ29ILElBQUk7SUFDaEI7SUFDQSxLQUFLLFFBQVE7TUFDWG5ILE9BQU8sQ0FBQ0QsS0FBSyxDQUFDbUgsSUFBSSxHQUFHLCtCQUErQixDQUFDO01BQ3JEVixPQUFPLENBQUNZLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakI7SUFDQSxLQUFLLFlBQVk7TUFDZnBILE9BQU8sQ0FBQ0QsS0FBSyxDQUFDbUgsSUFBSSxHQUFHLG9CQUFvQixDQUFDO01BQzFDVixPQUFPLENBQUNZLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakI7TUFDRSxNQUFNckgsS0FBSztFQUNmO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JlbmRlci9yZW5kZXJIb21lLnRzeCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGUvcm9vdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TU1JQb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9zc3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob29rcy9zZXJ2ZXJTaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3Mvc2VydmVyU2lkZVByb3BzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIGNvbW1vbmpzIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJodG1sLWVudGl0aWVzLWRlY29kZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3Qtcm91dGVyLWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfREVMQVkgPSAxMDAwXHJcbmV4cG9ydCBjb25zdCBBQk9SVF9ERUxBWSA9IDEwMDAwXHJcbmV4cG9ydCBjb25zdCBIT01FX0FQSV9LRVkgPSAnSE9NRSdcclxuZXhwb3J0IGNvbnN0IEhPTUVfUlBPTUlTRV9BUElfS0VZID0gJ0hPTUVfUFJPTUlTRSdcclxuIiwiaW1wb3J0IHR5cGUgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgcmVuZGVyVG9QaXBlYWJsZVN0cmVhbSwgcmVuZGVyVG9SZWFkYWJsZVN0cmVhbSB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20vc2VydmVyJ1xyXG5pbXBvcnQgeyBBQk9SVF9ERUxBWSwgSE9NRV9BUElfS0VZLCBIT01FX1JQT01JU0VfQVBJX0tFWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgd3JhcFByb21pc2UgfSBmcm9tICcuLi8uLi91dGlscydcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vc3JjL0FwcCdcclxuaW1wb3J0IHsgU1NSUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zcmMvY29udGV4dC9zc3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZW5kZXJIb21lKHVybDogc3RyaW5nLCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICByZXMuc29ja2V0Py5vbignZXJyb3InLCAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxyXG5cclxuICBsZXQgZGlkRXJyb3IgPSBmYWxzZVxyXG5cclxuICBjb25zdCBhc3NldHMgPSB7XHJcbiAgICAnbWFpbi5qcyc6ICcvbWFpbi5qcycsXHJcbiAgICAnbWFpbi5jc3MnOiAnL21haW4uY3NzJyxcclxuICB9XHJcblxyXG4gIC8vIHRvZG8gOiBSU0Mg7KCE6561IO2VhOyalCAo7YG065287J207Ja47Yq47JeQ7IScIO2VmOydtOuTnOugiOydtOyFmCDrp4nslYTslbztlaguLilcclxuICBjb25zdCBwb3N0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXMoXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMWApLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpc1NlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgfSwgODAwMClcclxuICB9KVxyXG5cclxuICBjb25zdCBob21lRGF0YTogeyB0aXRsZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgaG9tZURhdGEgPSB7XHJcbiAgICAgICAgdGl0bGU6ICdDaGVjayB0aGUgcGFnZSBzb3VyY2UgaW4geW91ciBicm93c2VyIScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0aGlzIGNvZGUgc2hvdyB5b3UgaG93IHRvIHVzZSByZWFjdCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcnLFxyXG4gICAgICAgIHRlc3Q6IHtcclxuICAgICAgICAgIGZvbzoge1xyXG4gICAgICAgICAgICBiYXI6ICd3YWxkbycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcyhob21lRGF0YSlcclxuICAgIH0sIDEwMClcclxuICB9KVxyXG4gIGxldCBzZXJ2ZXJTaWRlRGF0YToge1xyXG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxyXG4gIH0gPSB7fVxyXG4gIHNlcnZlclNpZGVEYXRhW0hPTUVfQVBJX0tFWV0gPSBKU09OLnN0cmluZ2lmeShob21lRGF0YSlcclxuICBzZXJ2ZXJTaWRlRGF0YVtIT01FX1JQT01JU0VfQVBJX0tFWV0gPSB3cmFwUHJvbWlzZShwb3N0UHJvbWlzZSlcclxuXHJcbiAgLy8gdG9kbyA6IGNyYXdsZXIg7LKY66asXHJcbiAgbGV0IGlzQ3Jhd2xlciA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IHN0cmVhbSA9IHJlbmRlclRvUGlwZWFibGVTdHJlYW0oXHJcbiAgICA8U1NSUHJvdmlkZXIgZGF0YT17c2VydmVyU2lkZURhdGF9PlxyXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8aGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXthc3NldHNbJ21haW4uY3NzJ119IC8+XHJcbiAgICAgICAgICA8dGl0bGU+e2B0ZXN0IGNvZGUhYH08L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YGNvZGUgZm9yIHRlc3QhYH0gLz5cclxuICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8bm9zY3JpcHRcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICBfX2h0bWw6IGA8Yj5FbmFibGUgSmF2YVNjcmlwdCB0byBydW4gdGhpcyBhcHAuPC9iPmAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgIF9faHRtbDogYGFzc2V0TWFuaWZlc3QgPSAke0pTT04uc3RyaW5naWZ5KGFzc2V0cyl9O2AsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeyhzZXJ2ZXJTaWRlRGF0YSBhcyBvYmplY3QpICYmIChcclxuICAgICAgICAgICAgPHNjcmlwdCBpZD1cIl9fU0VSVkVSX0RBVEFfX1wiIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCI+XHJcbiAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHNlcnZlclNpZGVEYXRhKX1cclxuICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPlxyXG4gICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17dXJsfT5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaHRtbD5cclxuICAgIDwvU1NSUHJvdmlkZXI+LFxyXG4gICAge1xyXG4gICAgICBib290c3RyYXBTY3JpcHRzOiBbYXNzZXRzWydtYWluLmpzJ11dLFxyXG4gICAgICBvblNoZWxsUmVhZHkoKSB7XHJcbiAgICAgICAgaWYgKGlzQ3Jhd2xlcikgcmV0dXJuXHJcbiAgICAgICAgLy8gU3RyZWFtaW5n7J20IOyLnOyekSDrkJjquLDsoIQg7JeQ65+s6rCAIOuwnOyDne2VnOuLpOuptCDsnbQg6rOz7JeQ7IScIGVycm9yIGNvZGXrpbwg7KCR6re87ZWp64uI64ukLlxyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gZGlkRXJyb3IgPyA1MDAgOiAyMDBcclxuICAgICAgICAvLyDtlZzquIDsnYQg7IKs7Jqp7ZWY6riwIOuWhOusuOyXkCB1dGYtOOuhnCBDb250ZW50LXR5cGXsnYQg7ISk7KCV7ZWp64uI64ukLlxyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICd0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOCcpXHJcbiAgICAgICAgc3RyZWFtLnBpcGUocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkFsbFJlYWR5KCkge1xyXG4gICAgICAgIGlmICghaXNDcmF3bGVyKSByZXR1cm5cclxuICAgICAgICAvLyBJZiB5b3UgZG9uJ3Qgd2FudCBzdHJlYW1pbmcsIHVzZSB0aGlzIGluc3RlYWQgb2Ygb25TaGVsbFJlYWR5LlxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBmaXJlIGFmdGVyIHRoZSBlbnRpcmUgcGFnZSBjb250ZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vIFlvdSBjYW4gdXNlIHRoaXMgZm9yIGNyYXdsZXJzIG9yIHN0YXRpYyBnZW5lcmF0aW9uLlxyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gZGlkRXJyb3IgPyA1MDAgOiAyMDBcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAndGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgnKVxyXG4gICAgICAgIHN0cmVhbS5waXBlKHJlcylcclxuICAgICAgfSxcclxuICAgICAgb25FcnJvcihlcnIpIHtcclxuICAgICAgICBkaWRFcnJvciA9IHRydWVcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgKVxyXG4gIC8vIOy2qeu2hO2VnCDsi5zqsITsnbQo7ZiE7KCcIDEw7LSIKSDsp4DrgpjrqbQgU1NS7J2EIO2PrOq4sO2VmOqzoCBDU1LsnLzroZwg7KCE7ZmY7ZWp64uI64ukLlxyXG4gIHNldFRpbWVvdXQoKCkgPT4gc3RyZWFtLmFib3J0KCksIEFCT1JUX0RFTEFZKVxyXG59XHJcblxyXG4vLyAqIEV4YW1wbGUgQVBJIFVSTFxyXG4vLyBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPSR7cG9zdE51bWJlcn1cclxuLy8gaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cG9zdE51bWJlcn1cclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi4vcmVuZGVyL3JlbmRlckhvbWUnXHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmV0dXJuIHJlbmRlckhvbWUocmVxLnVybCwgcmVxLCByZXMpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um91dGVzPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0+PC9Sb3V0ZT5cclxuICAgIDwvUm91dGVzPlxyXG4gIClcclxufVxyXG4iLCIvLyAqIOyEnOuyhCDsu7Ttj6zrhIztirjroZwg7IKs7Jqp7ZWc64uk66m0IHVzZUVmZmVjdCwgdXNlU3RhdGUg65Ox7J2EIOyCrOyaqe2VmOuptCBzZWxmIGlzIG5vdCBkZWZpbmVkIOyXkOufrOqwgCDrsJzsg53tlZzri6QuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVNlcnZlclNpZGUgZnJvbSAnLi4vaG9va3Mvc2VydmVyU2lkZSdcclxuXHJcbnR5cGUgUG9zdCA9IHtcclxuICBpZDogbnVtYmVyXHJcbiAgdXNlcklkOiBudW1iZXJcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgYm9keTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgY29uc3QgZGF0YToge1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG4gICAgYm9keTogc3RyaW5nXHJcbiAgICBpc1NlcnZlcj86IGJvb2xlYW5cclxuICB9ID0gdXNlU2VydmVyU2lkZSgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgPGRpdj57ZGF0YS5ib2R5fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSE9NRV9BUElfS0VZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgdXNlU2VydmVyU2lkZVByb3BzIGZyb20gJy4uL2hvb2tzL3NlcnZlclNpZGVQcm9wcydcclxuXHJcbnR5cGUgUG9zdCA9IHsgdGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNTUlBvc3QoKSB7XHJcbiAgbGV0IHBvc3QgPSB1c2VTZXJ2ZXJTaWRlUHJvcHMoSE9NRV9BUElfS0VZKSBhcyBQb3N0XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICA8cD57cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCB0eXBlIFN1c3BlbmRlciA9IHtcclxuICBba2V5OiBzdHJpbmddOiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2ZXJTaWRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3VzcGVuZGVyPih7fSlcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG4gIGRhdGE6IFN1c3BlbmRlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU1NSUHJvdmlkZXIoeyBjaGlsZHJlbiwgZGF0YSB9OiBQcm9wcykge1xyXG4gIHJldHVybiA8U2VydmVyU2lkZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RhdGF9PntjaGlsZHJlbn08L1NlcnZlclNpZGVDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNlcnZlclNpZGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zc3InXHJcbmltcG9ydCB7IEhPTUVfUlBPTUlTRV9BUElfS0VZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgZHVtbXlEYXRhID0ge1xyXG4gIHRpdGxlOiAnZHVtbXkgZGF0YScsXHJcbiAgYm9keTogJ3RoZSBsYXp5IGZveCBqdW1wcyBvdmVyIHRoZSBicm93biBxdWljayBkb2cnLFxyXG59XHJcblxyXG50eXBlIFBvc3RQcm9taXNlID0ge1xyXG4gIHJlYWQ6ICgpID0+IHVua25vd25cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2VydmVyU2lkZSgpIHtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFNlcnZlclNpZGVDb250ZXh0KVxyXG4gIGNvbnN0IHNlcnZlckRhdGEgPSBjdHhbSE9NRV9SUE9NSVNFX0FQSV9LRVldIGFzIFBvc3RQcm9taXNlXHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgJiYgc2VydmVyRGF0YSkge1xyXG4gICAgc2VydmVyRGF0YS5yZWFkKClcclxuICB9XHJcbiAgcmV0dXJuIGR1bW15RGF0YVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNlcnZlclNpZGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zc3InXHJcblxyXG5pbXBvcnQgaHRtbEVudGl0aWVzRGVjb2RlciBmcm9tICdodG1sLWVudGl0aWVzLWRlY29kZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZXJ2ZXJTaWRlUHJvcHMoa2V5OiBzdHJpbmcpIHtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFNlcnZlclNpZGVDb250ZXh0KVxyXG4gIGlmIChjdHhba2V5XSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoKGN0eFtrZXldIGFzIHN0cmluZykgfHwgJycpXHJcbiAgfVxyXG4gIGNvbnN0IHNlcnZlclNpZGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fU0VSVkVSX0RBVEFfXycpPy50ZXh0Q29udGVudCB8fCAnJ1xyXG5cclxuICAvLyAhIO2MjOyLseydhCDrkZAg67KIIO2VtOyVvO2VqeuLiOuLpCFcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShodG1sRW50aXRpZXNEZWNvZGVyKHNlcnZlclNpZGVEYXRhKSlcclxuICByZXR1cm4gSlNPTi5wYXJzZShkYXRhW2tleV0pIHx8ICcnXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCdcclxuaW1wb3J0IFNTUlBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TU1JQb3N0J1xyXG5pbXBvcnQgeyBIT01FX0FQSV9LRVkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNreS05MDBcIj5Db3VudCA6IHtjb3VudH08L2gxPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1yLTRcIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgocHJldikgPT4gKytwcmV2KX0+XHJcbiAgICAgICAgICAgIEluY3JlbWVudFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1yLTRcIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgocHJldikgPT4gLS1wcmV2KX0+XHJcbiAgICAgICAgICAgIERlY3JlbWVudFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5TZXJ2ZXIgU2lkZSBSZW5kZXJpbmchPC9oMT5cclxuICAgICAgICA8U1NSUG9zdCBrZXk9e0hPTUVfQVBJX0tFWX0gLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5TZXJ2ZXIgQ29tcG9uZW50PC9oMT5cclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1yb3NlLTUwMFwiPu2PrOyKpO2KuCDrjbDsnbTthLDrpbwg6rCA7KC47Jik6rOgIOyeiOuKlCDspJHsnoXri4jri6QuLi48L2Rpdj59PlxyXG4gICAgICAgICAgPFBvc3QgLz5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXHJcbmltcG9ydCB7IE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCB7IEFQSV9ERUxBWSB9IGZyb20gJy4uL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFcnJvcnMoZm46IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IFByb21pc2U8dW5rbm93bj4pIHtcclxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgZm4ocmVxLCByZXMpXHJcbiAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgIG5leHQoeClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0Rm9yV2VicGFjayhidWlsZEZpbGVQYXRoOiBzdHJpbmcpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVhZEZpbGVTeW5jKGJ1aWxkRmlsZVBhdGgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgZmluZCB3ZWJwYWNrIGJ1aWxkIG91dHB1dC4gV2lsbCByZXRyeSBpbiBhIHNlY29uZC4uLicpXHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU2ltdWxhdGUgYSBkZWxheSBjYXVzZWQgYnkgZGF0YSBmZXRjaGluZy5cclxuLy8gV2UgZmFrZSB0aGlzIGJlY2F1c2UgdGhlIHN0cmVhbWluZyBIVE1MIHJlbmRlcmVyXHJcbi8vICEgaXMgbm90IHlldCBpbnRlZ3JhdGVkIHdpdGggcmVhbCBkYXRhIGZldGNoaW5nIHN0cmF0ZWdpZXMuIDw9PSDrtoDrtoQg7KCB7Jqp7J2066m0IOyngeygkSDqtaztmIQg7ZW067O8IOyInCDsl4bsnYTquYwuLj8gTmV4dCAxMy4064+EIOyeiOuKlOuNsC4uP1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VydmVyRGF0YSgpIHtcclxuICBsZXQgZG9uZSA9IGZhbHNlXHJcbiAgbGV0IHByb21pc2U6IFByb21pc2U8dW5rbm93bj4gfCBudWxsID0gbnVsbFxyXG4gIHJldHVybiB7XHJcbiAgICByZWFkKCkge1xyXG4gICAgICBpZiAoZG9uZSkgcmV0dXJuXHJcbiAgICAgIGlmIChwcm9taXNlKSB0aHJvdyBwcm9taXNlXHJcbiAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZG9uZSA9IHRydWVcclxuICAgICAgICAgIHByb21pc2UgPSBudWxsXHJcbiAgICAgICAgICByZXNvbHZlKCcnKVxyXG4gICAgICAgIH0sIEFQSV9ERUxBWSlcclxuICAgICAgfSlcclxuICAgICAgdGhyb3cgcHJvbWlzZVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvbWlzZShwcm9taXNlOiBQcm9taXNlPHVua25vd24+KSB7XHJcbiAgbGV0IHN0YXR1czogJ3N1Y2Nlc3MnIHwgJ3BlbmRpbmcnIHwgJ2Vycm9yJyA9ICdwZW5kaW5nJ1xyXG4gIGxldCByZXNwb25zZTogdW5rbm93blxyXG5cclxuICBjb25zdCBzdXNwZW5kZXIgPSBwcm9taXNlLnRoZW4oXHJcbiAgICAocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTdXNwZW5kZXIgU3VjY2VzcyA6JylcclxuICAgICAgc3RhdHVzID0gJ3N1Y2Nlc3MnXHJcbiAgICAgIHJlc3BvbnNlID0gcmVzXHJcbiAgICB9LFxyXG4gICAgLy8gcmVqZWN0ZWQgY2FzZVxyXG4gICAgKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU3VzcGVuZGVyIFJlamVjdGVkIDonKVxyXG4gICAgICBzdGF0dXMgPSAnZXJyb3InXHJcbiAgICAgIHJlc3BvbnNlID0gZXJyXHJcbiAgICB9LFxyXG4gIClcclxuXHJcbiAgY29uc3QgcmVhZCA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgJ3BlbmRpbmcnOlxyXG4gICAgICAgIHRocm93IHN1c3BlbmRlclxyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgdGhyb3cgcmVzcG9uc2VcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IHJlYWQgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQGRlc2NyaXB0aW9uIHJlZiBzdXNwZW5kZXIg66eM65OkIOuVjCDssLjqs6DtlZjquLAg7JyE7ZWcIOy9lOuTnFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBpbml0aWFsU3RhdGVQcm9taXNlUmVmLmN1cnJlbnQucHJvbWlzZS5yZXNvbHZlKGluaXRpYWxEYXRhKTtcclxuICogPENvbXBvbmVudCBpbml0aWFsRGF0YT17aW5pdGlhbFN0YXRlUHJvbWlzZVJlZi5jdXJyZW50LnByb21pc2V9IC8+XHJcbiAqIEByZWZlcmVuY2UgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2V4Y2FsaWRyYXctZWhsejM/ZmlsZT0vc3JjL0FwcC50c3hcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNvbHZhYmxlUHJvbWlzZSA9ICgpID0+IHtcclxuICBsZXQgcmVzb2x2ZSE6IGFueVxyXG4gIGxldCByZWplY3QhOiBhbnlcclxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKF9yZXNvbHZlLCBfcmVqZWN0KSA9PiB7XHJcbiAgICByZXNvbHZlID0gX3Jlc29sdmVcclxuICAgIHJlamVjdCA9IF9yZWplY3RcclxuICB9KVxyXG4gIDsocHJvbWlzZSBhcyBhbnkpLnJlc29sdmUgPSByZXNvbHZlXHJcbiAgOyhwcm9taXNlIGFzIGFueSkucmVqZWN0ID0gcmVqZWN0XHJcbiAgcmV0dXJuIHByb21pc2VcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0bWwtZW50aXRpZXMtZGVjb2RlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBjb21wcmVzcyBmcm9tICdjb21wcmVzc2lvbidcclxuaW1wb3J0IHJvb3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZS9yb290J1xyXG5cclxuLy8gISDtj6ztirjrsojtmLgg7L2U65OcIHdlYnBhY2suY29uZmlnLmpz7JmAIOykkeuzteuQqCFcclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMFxyXG5jb25zdCBhcHAgPSBleHByZXNzKClcclxuXHJcbmFwcC51c2UoY29tcHJlc3MoKSlcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2Rpc3QnKSlcclxuXHJcbi8vICogSG9tZSDtjpjsnbTsp4DroZwg7J2064+Z7ZWp64uI64ukLlxyXG5hcHAudXNlKCcvJywgcm9vdFJvdXRlcilcclxuXHJcbmFwcFxyXG4gIC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7UE9SVH1gKVxyXG4gIH0pXHJcbiAgLm9uKCdlcnJvcicsIChlcnJvcjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNQaXBlID0gKHBvcnRPclBpcGU6IG51bWJlciB8IHN0cmluZykgPT4gTnVtYmVyLmlzTmFOKHBvcnRPclBpcGUpXHJcbiAgICBjb25zdCBiaW5kID0gaXNQaXBlKFBPUlQpID8gYFBpcGUgJHtQT1JUfWAgOiBgUG9ydCAke1BPUlR9YFxyXG4gICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XHJcbiAgICAgIC8vICog6raM7ZWc7J20IOyXhuuKlCDqsr3smrBcclxuICAgICAgY2FzZSAnRUFDQ0VTJzpcclxuICAgICAgICBjb25zb2xlLmVycm9yKGJpbmQgKyAnIHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXMnKVxyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxyXG4gICAgICAvLyAqIOydtOuvuCDsgqzsmqnspJHsnbgg7Y+s7Yq47J24IOqyveyasFxyXG4gICAgICBjYXNlICdFQUREUklOVVNFJzpcclxuICAgICAgICBjb25zb2xlLmVycm9yKGJpbmQgKyAnIGlzIGFscmVhZHkgaW4gdXNlJylcclxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG4gIH0pXHJcbiJdLCJuYW1lcyI6WyJBUElfREVMQVkiLCJBQk9SVF9ERUxBWSIsIkhPTUVfQVBJX0tFWSIsIkhPTUVfUlBPTUlTRV9BUElfS0VZIiwiYXhpb3MiLCJSZWFjdCIsInJlbmRlclRvUGlwZWFibGVTdHJlYW0iLCJTdGF0aWNSb3V0ZXIiLCJ3cmFwUHJvbWlzZSIsIkFwcCIsIlNTUlByb3ZpZGVyIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsInJlbmRlckhvbWUiLCJ1cmwiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJvbiIsImVycm9yIiwiY29uc29sZSIsImRpZEVycm9yIiwiYXNzZXRzIiwicG9zdFByb21pc2UiLCJQcm9taXNlIiwic2V0VGltZW91dCIsImdldCIsInRoZW4iLCJfcmVmIiwiZGF0YSIsImlzU2VydmVyIiwiaG9tZURhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVzdCIsImZvbyIsImJhciIsInNlcnZlclNpZGVEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzQ3Jhd2xlciIsInN0cmVhbSIsImNoaWxkcmVuIiwibGFuZyIsImNoYXJTZXQiLCJuYW1lIiwiY29udGVudCIsInJlbCIsInR5cGUiLCJocmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJpZCIsImxvY2F0aW9uIiwiYm9vdHN0cmFwU2NyaXB0cyIsIm9uU2hlbGxSZWFkeSIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJwaXBlIiwib25BbGxSZWFkeSIsIm9uRXJyb3IiLCJlcnIiLCJhYm9ydCIsImV4cHJlc3MiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWUiLCJwYXRoIiwiZWxlbWVudCIsInVzZVNlcnZlclNpZGUiLCJQb3N0IiwiYm9keSIsInVzZVNlcnZlclNpZGVQcm9wcyIsIlNTUlBvc3QiLCJwb3N0IiwiY3JlYXRlQ29udGV4dCIsIlNlcnZlclNpZGVDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbnRleHQiLCJkdW1teURhdGEiLCJjdHgiLCJzZXJ2ZXJEYXRhIiwiZG9jdW1lbnQiLCJyZWFkIiwiaHRtbEVudGl0aWVzRGVjb2RlciIsImtleSIsInBhcnNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsIlN1c3BlbnNlIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJjb3VudCIsInNldENvdW50IiwidXNlU3RhdGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHJldiIsImZhbGxiYWNrIiwicmVhZEZpbGVTeW5jIiwiaGFuZGxlRXJyb3JzIiwiZm4iLCJuZXh0IiwieCIsIndhaXRGb3JXZWJwYWNrIiwiYnVpbGRGaWxlUGF0aCIsImxvZyIsInJlc29sdmUiLCJjcmVhdGVTZXJ2ZXJEYXRhIiwiZG9uZSIsInByb21pc2UiLCJzdGF0dXMiLCJyZXNwb25zZSIsInN1c3BlbmRlciIsInJlc29sdmFibGVQcm9taXNlIiwicmVqZWN0IiwiX3Jlc29sdmUiLCJfcmVqZWN0IiwiY29tcHJlc3MiLCJyb290Um91dGVyIiwiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJhcHAiLCJ1c2UiLCJzdGF0aWMiLCJsaXN0ZW4iLCJpc1BpcGUiLCJwb3J0T3JQaXBlIiwiTnVtYmVyIiwiaXNOYU4iLCJiaW5kIiwiY29kZSIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9