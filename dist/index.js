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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLEdBQUcsRUFBRUwsbURBQVUsQ0FBQztBQUV4QkksR0FBRyxDQUNBRyxNQUFNLENBQUNOLElBQUksRUFBRSxNQUFNO0VBQ2xCdkcsT0FBTyxDQUFDSyxHQUFHLENBQUUscUJBQW9Ca0csSUFBSyxFQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLENBQ0R6RyxFQUFFLENBQUMsT0FBTyxFQUFHQyxLQUFnQyxJQUFLO0VBQ2pELE1BQU0rRyxNQUFNLEdBQUlDLFVBQTJCLElBQUtDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDRixVQUFVLENBQUM7RUFDeEUsTUFBTUcsSUFBSSxHQUFHSixNQUFNLENBQUNQLElBQUksQ0FBQyxHQUFJLFFBQU9BLElBQUssRUFBQyxHQUFJLFFBQU9BLElBQUssRUFBQztFQUMzRCxRQUFReEcsS0FBSyxDQUFDb0gsSUFBSTtJQUNoQjtJQUNBLEtBQUssUUFBUTtNQUNYbkgsT0FBTyxDQUFDRCxLQUFLLENBQUNtSCxJQUFJLEdBQUcsK0JBQStCLENBQUM7TUFDckRWLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqQjtJQUNBLEtBQUssWUFBWTtNQUNmcEgsT0FBTyxDQUFDRCxLQUFLLENBQUNtSCxJQUFJLEdBQUcsb0JBQW9CLENBQUM7TUFDMUNWLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqQjtNQUNFLE1BQU1ySCxLQUFLO0VBQ2Y7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcmVuZGVyL3JlbmRlckhvbWUudHN4Iiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZS9yb290LnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Bvc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NTUlBvc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L3Nzci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3NlcnZlclNpZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob29rcy9zZXJ2ZXJTaWRlUHJvcHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcImh0bWwtZW50aXRpZXMtZGVjb2RlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1yb3V0ZXItZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0L2pzeC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9ERUxBWSA9IDEwMDBcclxuZXhwb3J0IGNvbnN0IEFCT1JUX0RFTEFZID0gMTAwMDBcclxuZXhwb3J0IGNvbnN0IEhPTUVfQVBJX0tFWSA9ICdIT01FJ1xyXG5leHBvcnQgY29uc3QgSE9NRV9SUE9NSVNFX0FQSV9LRVkgPSAnSE9NRV9QUk9NSVNFJ1xyXG4iLCJpbXBvcnQgdHlwZSB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyByZW5kZXJUb1BpcGVhYmxlU3RyZWFtLCByZW5kZXJUb1JlYWRhYmxlU3RyZWFtIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbS9zZXJ2ZXInXHJcbmltcG9ydCB7IEFCT1JUX0RFTEFZLCBIT01FX0FQSV9LRVksIEhPTUVfUlBPTUlTRV9BUElfS0VZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyB3cmFwUHJvbWlzZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9zcmMvQXBwJ1xyXG5pbXBvcnQgeyBTU1JQcm92aWRlciB9IGZyb20gJy4uLy4uL3NyYy9jb250ZXh0L3NzcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlckhvbWUodXJsOiBzdHJpbmcsIHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIHJlcy5zb2NrZXQ/Lm9uKCdlcnJvcicsIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXHJcblxyXG4gIGxldCBkaWRFcnJvciA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IGFzc2V0cyA9IHtcclxuICAgICdtYWluLmpzJzogJy9tYWluLmpzJyxcclxuICAgICdtYWluLmNzcyc6ICcvbWFpbi5jc3MnLFxyXG4gIH1cclxuXHJcbiAgLy8gdG9kbyA6IFJTQyDsoITrnrUg7ZWE7JqUICjtgbTrnbzsnbTslrjtirjsl5DshJwg7ZWY7J2065Oc66CI7J207IWYIOunieyVhOyVvO2VqC4uKVxyXG4gIGNvbnN0IHBvc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0hPTUUgUEFHRSA6IDPstIgg65KkIEFQSeulvCDsmpTssq3tlanri4jri6QuJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXMoXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMWApLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSE9NRSBQQUdFIDog642w7J207YSw66W8IOuwmO2ZmO2VqeuLiOuLpC4gU3VzcGVuc2XqsIAgUmVzb2x2ZeuQqeuLiOuLpC4nKVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaXNTZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgIH0sIDgwMDApXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaG9tZURhdGE6IHsgdGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhvbWVEYXRhID0ge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hlY2sgdGhlIHBhZ2Ugc291cmNlIGluIHlvdXIgYnJvd3NlciEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGhpcyBjb2RlIHNob3cgeW91IGhvdyB0byB1c2UgcmVhY3Qgc2VydmVyIHNpZGUgcmVuZGVyaW5nJyxcclxuICAgICAgICB0ZXN0OiB7XHJcbiAgICAgICAgICBmb286IHtcclxuICAgICAgICAgICAgYmFyOiAnd2FsZG8nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMoaG9tZURhdGEpXHJcbiAgICB9LCAxMDApXHJcbiAgfSlcclxuICBsZXQgc2VydmVyU2lkZURhdGE6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHVua25vd25cclxuICB9ID0ge31cclxuICBzZXJ2ZXJTaWRlRGF0YVtIT01FX0FQSV9LRVldID0gSlNPTi5zdHJpbmdpZnkoaG9tZURhdGEpXHJcbiAgc2VydmVyU2lkZURhdGFbSE9NRV9SUE9NSVNFX0FQSV9LRVldID0gd3JhcFByb21pc2UocG9zdFByb21pc2UpXHJcblxyXG4gIC8vIHRvZG8gOiBjcmF3bGVyIOyymOumrFxyXG4gIGxldCBpc0NyYXdsZXIgPSBmYWxzZVxyXG5cclxuICBjb25zdCBzdHJlYW0gPSByZW5kZXJUb1BpcGVhYmxlU3RyZWFtKFxyXG4gICAgPFNTUlByb3ZpZGVyIGRhdGE9e3NlcnZlclNpZGVEYXRhfT5cclxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YXNzZXRzWydtYWluLmNzcyddfSAvPlxyXG4gICAgICAgICAgPHRpdGxlPntgdGVzdCBjb2RlIWB9PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Bjb2RlIGZvciB0ZXN0IWB9IC8+XHJcbiAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPG5vc2NyaXB0XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgX19odG1sOiBgPGI+RW5hYmxlIEphdmFTY3JpcHQgdG8gcnVuIHRoaXMgYXBwLjwvYj5gLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICBfX2h0bWw6IGBhc3NldE1hbmlmZXN0ID0gJHtKU09OLnN0cmluZ2lmeShhc3NldHMpfTtgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsoc2VydmVyU2lkZURhdGEgYXMgb2JqZWN0KSAmJiAoXHJcbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJfX1NFUlZFUl9EQVRBX19cIiB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiPlxyXG4gICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShzZXJ2ZXJTaWRlRGF0YSl9XHJcbiAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgPGRpdiBpZD1cInJvb3RcIj5cclxuICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3VybH0+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2h0bWw+XHJcbiAgICA8L1NTUlByb3ZpZGVyPixcclxuICAgIHtcclxuICAgICAgYm9vdHN0cmFwU2NyaXB0czogW2Fzc2V0c1snbWFpbi5qcyddXSxcclxuICAgICAgb25TaGVsbFJlYWR5KCkge1xyXG4gICAgICAgIGlmIChpc0NyYXdsZXIpIHJldHVyblxyXG4gICAgICAgIC8vIFN0cmVhbWluZ+ydtCDsi5zsnpEg65CY6riw7KCEIOyXkOufrOqwgCDrsJzsg53tlZzri6TrqbQg7J20IOqzs+yXkOyEnCBlcnJvciBjb2Rl66W8IOygkeq3vO2VqeuLiOuLpC5cclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IGRpZEVycm9yID8gNTAwIDogMjAwXHJcbiAgICAgICAgLy8g7ZWc6riA7J2EIOyCrOyaqe2VmOq4sCDrloTrrLjsl5AgdXRmLTjroZwgQ29udGVudC10eXBl7J2EIOyEpOygle2VqeuLiOuLpC5cclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAndGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgnKVxyXG4gICAgICAgIHN0cmVhbS5waXBlKHJlcylcclxuICAgICAgfSxcclxuICAgICAgb25BbGxSZWFkeSgpIHtcclxuICAgICAgICBpZiAoIWlzQ3Jhd2xlcikgcmV0dXJuXHJcbiAgICAgICAgLy8gSWYgeW91IGRvbid0IHdhbnQgc3RyZWFtaW5nLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIG9uU2hlbGxSZWFkeS5cclxuICAgICAgICAvLyBUaGlzIHdpbGwgZmlyZSBhZnRlciB0aGUgZW50aXJlIHBhZ2UgY29udGVudCBpcyByZWFkeS5cclxuICAgICAgICAvLyBZb3UgY2FuIHVzZSB0aGlzIGZvciBjcmF3bGVycyBvciBzdGF0aWMgZ2VuZXJhdGlvbi5cclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IGRpZEVycm9yID8gNTAwIDogMjAwXHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC10eXBlJywgJ3RleHQvaHRtbDtjaGFyc2V0PVVURi04JylcclxuICAgICAgICBzdHJlYW0ucGlwZShyZXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRXJyb3IoZXJyKSB7XHJcbiAgICAgICAgZGlkRXJyb3IgPSB0cnVlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIClcclxuICAvLyDstqnrtoTtlZwg7Iuc6rCE7J20KO2YhOygnCAxMOy0iCkg7KeA64KY66m0IFNTUuydhCDtj6zquLDtlZjqs6AgQ1NS7Jy866GcIOyghO2ZmO2VqeuLiOuLpC5cclxuICBzZXRUaW1lb3V0KCgpID0+IHN0cmVhbS5hYm9ydCgpLCBBQk9SVF9ERUxBWSlcclxufVxyXG5cclxuLy8gKiBFeGFtcGxlIEFQSSBVUkxcclxuLy8gaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzP3Bvc3RJZD0ke3Bvc3ROdW1iZXJ9XHJcbi8vIGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke3Bvc3ROdW1iZXJ9XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCByZW5kZXJIb21lIGZyb20gJy4uL3JlbmRlci9yZW5kZXJIb21lJ1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJldHVybiByZW5kZXJIb21lKHJlcS51cmwsIHJlcSwgcmVzKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlcz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59PjwvUm91dGU+XHJcbiAgICA8L1JvdXRlcz5cclxuICApXHJcbn1cclxuIiwiLy8gKiDshJzrsoQg7Lu07Y+s64SM7Yq466GcIOyCrOyaqe2VnOuLpOuptCB1c2VFZmZlY3QsIHVzZVN0YXRlIOuTseydhCDsgqzsmqntlZjrqbQgc2VsZiBpcyBub3QgZGVmaW5lZCDsl5Drn6zqsIAg67Cc7IOd7ZWc64ukLlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VTZXJ2ZXJTaWRlIGZyb20gJy4uL2hvb2tzL3NlcnZlclNpZGUnXHJcblxyXG50eXBlIFBvc3QgPSB7XHJcbiAgaWQ6IG51bWJlclxyXG4gIHVzZXJJZDogbnVtYmVyXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIGJvZHk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCkge1xyXG4gIGNvbnN0IGRhdGE6IHtcclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIGJvZHk6IHN0cmluZ1xyXG4gICAgaXNTZXJ2ZXI/OiBib29sZWFuXHJcbiAgfSA9IHVzZVNlcnZlclNpZGUoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgIDxkaXY+e2RhdGEuYm9keX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEhPTUVfQVBJX0tFWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHVzZVNlcnZlclNpZGVQcm9wcyBmcm9tICcuLi9ob29rcy9zZXJ2ZXJTaWRlUHJvcHMnXHJcblxyXG50eXBlIFBvc3QgPSB7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTU1JQb3N0KCkge1xyXG4gIGxldCBwb3N0ID0gdXNlU2VydmVyU2lkZVByb3BzKEhPTUVfQVBJX0tFWSkgYXMgUG9zdFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPHA+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgdHlwZSBTdXNwZW5kZXIgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogdW5rbm93blxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmVyU2lkZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN1c3BlbmRlcj4oe30pXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICBkYXRhOiBTdXNwZW5kZXJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNTUlByb3ZpZGVyKHsgY2hpbGRyZW4sIGRhdGEgfTogUHJvcHMpIHtcclxuICByZXR1cm4gPFNlcnZlclNpZGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT57Y2hpbGRyZW59PC9TZXJ2ZXJTaWRlQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZXJ2ZXJTaWRlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3NyJ1xyXG5pbXBvcnQgeyBIT01FX1JQT01JU0VfQVBJX0tFWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IGR1bW15RGF0YSA9IHtcclxuICB0aXRsZTogJ2R1bW15IGRhdGEnLFxyXG4gIGJvZHk6ICd0aGUgbGF6eSBmb3gganVtcHMgb3ZlciB0aGUgYnJvd24gcXVpY2sgZG9nJyxcclxufVxyXG5cclxudHlwZSBQb3N0UHJvbWlzZSA9IHtcclxuICByZWFkOiAoKSA9PiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNlcnZlclNpZGUoKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTZXJ2ZXJTaWRlQ29udGV4dClcclxuICBjb25zdCBzZXJ2ZXJEYXRhID0gY3R4W0hPTUVfUlBPTUlTRV9BUElfS0VZXSBhcyBQb3N0UHJvbWlzZVxyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnICYmIHNlcnZlckRhdGEpIHtcclxuICAgIHNlcnZlckRhdGEucmVhZCgpXHJcbiAgfVxyXG4gIHJldHVybiBkdW1teURhdGFcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZXJ2ZXJTaWRlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3NyJ1xyXG5cclxuaW1wb3J0IGh0bWxFbnRpdGllc0RlY29kZXIgZnJvbSAnaHRtbC1lbnRpdGllcy1kZWNvZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2VydmVyU2lkZVByb3BzKGtleTogc3RyaW5nKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTZXJ2ZXJTaWRlQ29udGV4dClcclxuICBpZiAoY3R4W2tleV0pIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKChjdHhba2V5XSBhcyBzdHJpbmcpIHx8ICcnKVxyXG4gIH1cclxuICBjb25zdCBzZXJ2ZXJTaWRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX1NFUlZFUl9EQVRBX18nKT8udGV4dENvbnRlbnQgfHwgJydcclxuXHJcbiAgLy8gISDtjIzsi7HsnYQg65GQIOuyiCDtlbTslbztlanri4jri6QhXHJcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoaHRtbEVudGl0aWVzRGVjb2RlcihzZXJ2ZXJTaWRlRGF0YSkpXHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YVtrZXldKSB8fCAnJ1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QnXHJcbmltcG9ydCBTU1JQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvU1NSUG9zdCdcclxuaW1wb3J0IHsgSE9NRV9BUElfS0VZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1za3ktOTAwXCI+Q291bnQgOiB7Y291bnR9PC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXYpID0+ICsrcHJldil9PlxyXG4gICAgICAgICAgICBJbmNyZW1lbnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXYpID0+IC0tcHJldil9PlxyXG4gICAgICAgICAgICBEZWNyZW1lbnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+U2VydmVyIFNpZGUgUmVuZGVyaW5nITwvaDE+XHJcbiAgICAgICAgPFNTUlBvc3Qga2V5PXtIT01FX0FQSV9LRVl9IC8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+U2VydmVyIENvbXBvbmVudDwvaDE+XHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtcm9zZS01MDBcIj7tj6zsiqTtirgg642w7J207YSw66W8IOqwgOyguOyYpOqzoCDsnojripQg7KSR7J6F64uI64ukLi4uPC9kaXY+fT5cclxuICAgICAgICAgIDxQb3N0IC8+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xyXG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyBBUElfREVMQVkgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3JzKGZuOiAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiBQcm9taXNlPHVua25vd24+KSB7XHJcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGZuKHJlcSwgcmVzKVxyXG4gICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICBuZXh0KHgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdEZvcldlYnBhY2soYnVpbGRGaWxlUGF0aDogc3RyaW5nKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlYWRGaWxlU3luYyhidWlsZEZpbGVQYXRoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgd2VicGFjayBidWlsZCBvdXRwdXQuIFdpbGwgcmV0cnkgaW4gYSBzZWNvbmQuLi4nKVxyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNpbXVsYXRlIGEgZGVsYXkgY2F1c2VkIGJ5IGRhdGEgZmV0Y2hpbmcuXHJcbi8vIFdlIGZha2UgdGhpcyBiZWNhdXNlIHRoZSBzdHJlYW1pbmcgSFRNTCByZW5kZXJlclxyXG4vLyAhIGlzIG5vdCB5ZXQgaW50ZWdyYXRlZCB3aXRoIHJlYWwgZGF0YSBmZXRjaGluZyBzdHJhdGVnaWVzLiA8PT0g67aA67aEIOyggeyaqeydtOuptCDsp4HsoJEg6rWs7ZiEIO2VtOuzvCDsiJwg7JeG7J2E6rmMLi4/IE5leHQgMTMuNOuPhCDsnojripTrjbAuLj9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlcnZlckRhdGEoKSB7XHJcbiAgbGV0IGRvbmUgPSBmYWxzZVxyXG4gIGxldCBwcm9taXNlOiBQcm9taXNlPHVua25vd24+IHwgbnVsbCA9IG51bGxcclxuICByZXR1cm4ge1xyXG4gICAgcmVhZCgpIHtcclxuICAgICAgaWYgKGRvbmUpIHJldHVyblxyXG4gICAgICBpZiAocHJvbWlzZSkgdGhyb3cgcHJvbWlzZVxyXG4gICAgICBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRvbmUgPSB0cnVlXHJcbiAgICAgICAgICBwcm9taXNlID0gbnVsbFxyXG4gICAgICAgICAgcmVzb2x2ZSgnJylcclxuICAgICAgICB9LCBBUElfREVMQVkpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRocm93IHByb21pc2VcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFByb21pc2UocHJvbWlzZTogUHJvbWlzZTx1bmtub3duPikge1xyXG4gIGxldCBzdGF0dXM6ICdzdWNjZXNzJyB8ICdwZW5kaW5nJyB8ICdlcnJvcicgPSAncGVuZGluZydcclxuICBsZXQgcmVzcG9uc2U6IHVua25vd25cclxuXHJcbiAgY29uc3Qgc3VzcGVuZGVyID0gcHJvbWlzZS50aGVuKFxyXG4gICAgKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU3VzcGVuZGVyIFN1Y2Nlc3MgOicpXHJcbiAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJ1xyXG4gICAgICByZXNwb25zZSA9IHJlc1xyXG4gICAgfSxcclxuICAgIC8vIHJlamVjdGVkIGNhc2VcclxuICAgIChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1N1c3BlbmRlciBSZWplY3RlZCA6JylcclxuICAgICAgc3RhdHVzID0gJ2Vycm9yJ1xyXG4gICAgICByZXNwb25zZSA9IGVyclxyXG4gICAgfSxcclxuICApXHJcblxyXG4gIGNvbnN0IHJlYWQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlICdwZW5kaW5nJzpcclxuICAgICAgICB0aHJvdyBzdXNwZW5kZXJcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHRocm93IHJlc3BvbnNlXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyByZWFkIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvbiByZWYgc3VzcGVuZGVyIOunjOuTpCDrlYwg7LC46rOg7ZWY6riwIOychO2VnCDsvZTrk5xcclxuICogQGV4YW1wbGVcclxuICogaW5pdGlhbFN0YXRlUHJvbWlzZVJlZi5jdXJyZW50LnByb21pc2UucmVzb2x2ZShpbml0aWFsRGF0YSk7XHJcbiAqIDxDb21wb25lbnQgaW5pdGlhbERhdGE9e2luaXRpYWxTdGF0ZVByb21pc2VSZWYuY3VycmVudC5wcm9taXNlfSAvPlxyXG4gKiBAcmVmZXJlbmNlIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9leGNhbGlkcmF3LWVobHozP2ZpbGU9L3NyYy9BcHAudHN4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVzb2x2YWJsZVByb21pc2UgPSAoKSA9PiB7XHJcbiAgbGV0IHJlc29sdmUhOiBhbnlcclxuICBsZXQgcmVqZWN0ITogYW55XHJcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xyXG4gICAgcmVzb2x2ZSA9IF9yZXNvbHZlXHJcbiAgICByZWplY3QgPSBfcmVqZWN0XHJcbiAgfSlcclxuICA7KHByb21pc2UgYXMgYW55KS5yZXNvbHZlID0gcmVzb2x2ZVxyXG4gIDsocHJvbWlzZSBhcyBhbnkpLnJlamVjdCA9IHJlamVjdFxyXG4gIHJldHVybiBwcm9taXNlXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLWVudGl0aWVzLWRlY29kZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnY29tcHJlc3Npb24nXHJcbmltcG9ydCByb290Um91dGVyIGZyb20gJy4vcm91dGUvcm9vdCdcclxuXHJcbi8vICEg7Y+s7Yq467KI7Zi4IOy9lOuTnCB3ZWJwYWNrLmNvbmZpZy5qc+yZgCDspJHrs7XrkKghXHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDBcclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcblxyXG5hcHAudXNlKGNvbXByZXNzKCkpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdkaXN0JykpXHJcblxyXG4vLyAqIEhvbWUg7Y6Y7J207KeA66GcIOydtOuPme2VqeuLiOuLpC5cclxuYXBwLnVzZSgnLycsIHJvb3RSb3V0ZXIpXHJcblxyXG5hcHBcclxuICAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9YClcclxuICB9KVxyXG4gIC5vbignZXJyb3InLCAoZXJyb3I6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IGlzUGlwZSA9IChwb3J0T3JQaXBlOiBudW1iZXIgfCBzdHJpbmcpID0+IE51bWJlci5pc05hTihwb3J0T3JQaXBlKVxyXG4gICAgY29uc3QgYmluZCA9IGlzUGlwZShQT1JUKSA/IGBQaXBlICR7UE9SVH1gIDogYFBvcnQgJHtQT1JUfWBcclxuICAgIHN3aXRjaCAoZXJyb3IuY29kZSkge1xyXG4gICAgICAvLyAqIOq2jO2VnOydtCDsl4bripQg6rK97JqwXHJcbiAgICAgIGNhc2UgJ0VBQ0NFUyc6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzJylcclxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcclxuICAgICAgLy8gKiDsnbTrr7gg7IKs7Jqp7KSR7J24IO2PrO2KuOyduCDqsr3smrBcclxuICAgICAgY2FzZSAnRUFERFJJTlVTRSc6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyBpcyBhbHJlYWR5IGluIHVzZScpXHJcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuICB9KVxyXG4iXSwibmFtZXMiOlsiQVBJX0RFTEFZIiwiQUJPUlRfREVMQVkiLCJIT01FX0FQSV9LRVkiLCJIT01FX1JQT01JU0VfQVBJX0tFWSIsImF4aW9zIiwiUmVhY3QiLCJyZW5kZXJUb1BpcGVhYmxlU3RyZWFtIiwiU3RhdGljUm91dGVyIiwid3JhcFByb21pc2UiLCJBcHAiLCJTU1JQcm92aWRlciIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJyZW5kZXJIb21lIiwidXJsIiwicmVxIiwicmVzIiwic29ja2V0Iiwib24iLCJlcnJvciIsImNvbnNvbGUiLCJkaWRFcnJvciIsImFzc2V0cyIsInBvc3RQcm9taXNlIiwiUHJvbWlzZSIsImxvZyIsInNldFRpbWVvdXQiLCJnZXQiLCJ0aGVuIiwiX3JlZiIsImRhdGEiLCJpc1NlcnZlciIsImhvbWVEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRlc3QiLCJmb28iLCJiYXIiLCJzZXJ2ZXJTaWRlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc0NyYXdsZXIiLCJzdHJlYW0iLCJjaGlsZHJlbiIsImxhbmciLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJyZWwiLCJ0eXBlIiwiaHJlZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaWQiLCJsb2NhdGlvbiIsImJvb3RzdHJhcFNjcmlwdHMiLCJvblNoZWxsUmVhZHkiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwicGlwZSIsIm9uQWxsUmVhZHkiLCJvbkVycm9yIiwiZXJyIiwiYWJvcnQiLCJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwicGF0aCIsImVsZW1lbnQiLCJ1c2VTZXJ2ZXJTaWRlIiwiUG9zdCIsImJvZHkiLCJ1c2VTZXJ2ZXJTaWRlUHJvcHMiLCJTU1JQb3N0IiwicG9zdCIsImNyZWF0ZUNvbnRleHQiLCJTZXJ2ZXJTaWRlQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb250ZXh0IiwiZHVtbXlEYXRhIiwiY3R4Iiwic2VydmVyRGF0YSIsImRvY3VtZW50IiwicmVhZCIsImh0bWxFbnRpdGllc0RlY29kZXIiLCJrZXkiLCJwYXJzZSIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJTdXNwZW5zZSIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiY291bnQiLCJzZXRDb3VudCIsInVzZVN0YXRlIiwiY2xhc3NOYW1lIiwib25DbGljayIsInByZXYiLCJmYWxsYmFjayIsInJlYWRGaWxlU3luYyIsImhhbmRsZUVycm9ycyIsImZuIiwibmV4dCIsIngiLCJ3YWl0Rm9yV2VicGFjayIsImJ1aWxkRmlsZVBhdGgiLCJyZXNvbHZlIiwiY3JlYXRlU2VydmVyRGF0YSIsImRvbmUiLCJwcm9taXNlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzdXNwZW5kZXIiLCJyZXNvbHZhYmxlUHJvbWlzZSIsInJlamVjdCIsIl9yZXNvbHZlIiwiX3JlamVjdCIsImNvbXByZXNzIiwicm9vdFJvdXRlciIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiYXBwIiwidXNlIiwic3RhdGljIiwibGlzdGVuIiwiaXNQaXBlIiwicG9ydE9yUGlwZSIsIk51bWJlciIsImlzTmFOIiwiYmluZCIsImNvZGUiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==