module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0i/h":
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "3esu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("NluH");

var assertThisInitialized = __webpack_require__("oS/Z");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8jUH");


/***/ }),

/***/ "8jUH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JYC+");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("R3/3");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LkAs");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Moms");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bMj6");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("hZod");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tEuJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_LayoutBasic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("CXsl");
/* harmony import */ var _components_NegativeGraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("fo2d");













var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          session = _this$props.session,
          navMenu = _this$props.navMenu,
          data = _this$props.data;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LayoutBasic__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, this.props, {
        title: 'VEB - The Coca-Cola Company',
        description: 'The Coca-Cola Company',
        session: session,
        navMenu: true,
        signinBtn: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "Key figures Coca-Cola (NYSE:KO)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "The Coca-Cola Company is an American ...."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_NegativeGraph__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        data: data[0].calculated5Y
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, userAgent, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent; // get some data from graphql endpoint

                _context.next = 4;
                return fetch('https://vde-app4.app.veb.net/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    operationName: null,
                    variables: {},
                    query: "\n        {\n          security(id: \"xgfr4\") {\n            id\n            name\n            calculated5Y {\n              LY\n              SalesOrRevenueLY\n              SalesOrRevenueLYMin1\n              SalesOrRevenueLYMin2\n              DividendPayOutLY\n              DividendPayOutLYMin1\n              DividendPayOutLYMin2\n              NetoperatingCashFlowLY\n              NetoperatingCashFlowLYMin1\n              NetoperatingCashFlowLYMin2\n              NetoperatingCashFlowLYMin3\n              NetoperatingCashFlowLYMin4\n              NetFinancingCashFlowLY\n              NetFinancingCashFlowLYMin1\n              NetFinancingCashFlowLYMin2\n              NetFinancingCashFlowLYMin3\n              NetFinancingCashFlowLYMin4\n              NetchangeInCashLY\n              NetchangeInCashLYMin1\n              NetchangeInCashLYMin2\n              NetchangeInCashLYMin3\n              NetchangeInCashLYMin4\n              NetInvestingCashFlowLY\n              NetInvestingCashFlowLYMin1\n              NetInvestingCashFlowLYMin2\n              NetInvestingCashFlowLYMin3\n              NetInvestingCashFlowLYMin4\n              EbitdaLY\n              EbitdaLYMin1\n              EbitdaLYMin2\n              EbitdaLYMin3\n              EbitdaLYMin4\n              }\n          }\n        }"
                  })
                }).then(function (r) {
                  return r.json();
                }).then(function (r) {
                  console.log(r.data.security);
                  return [r.data.security];
                });

              case 4:
                data = _context.sent;
                return _context.abrupt("return", {
                  userAgent: userAgent,
                  data: data
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "8m4E":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("jDdP");

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("PL1w");

var _stringify = _interopRequireDefault(__webpack_require__("JYC+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("KBEF"));

var _createClass2 = _interopRequireDefault(__webpack_require__("J/q3"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("3esu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("8m4E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("Od8a"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "CXsl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Head.js


var defaultDescription = ''; // const defaultOGURL = ''
// const defaultOGImage = ''

var Head_Head = function Head(props) {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, props.title), external_react_default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico"
  }));
};

/* harmony default export */ var components_Head = (Head_Head);
// CONCATENATED MODULE: ./components/Footer.js

/* harmony default export */ var Footer = (function () {
  return external_react_default.a.createElement("footer", {
    className: "page-footer fz-14",
    style: {
      marginTop: '20px'
    }
  }, external_react_default.a.createElement("div", {
    className: "footer-top bg-gray"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "columns is-vcentered"
  }, external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("a", {
    href: "/",
    className: "footer-logo"
  }, external_react_default.a.createElement("img", {
    src: "/static/logo-white.png",
    alt: "",
    width: "116"
  })), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"
  }, "FAQ")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "/acties-menu/actieoverzichtspagina"
  }, "Juridische acties")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "/standaardcontent/privacy-statement"
  }, "Privacy Statement")))), external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "/lidmaatschap/soorten-lidmaatschappen-veb"
  }, "Lid worden")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "/adverteren"
  }, "Adverteren")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "/standaardcontent/disclaimer"
  }, "Disclaimer")))), external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("div", {
    className: "has-text-weight-bold is-uppercase fz-17"
  }, "CONTACT"), external_react_default.a.createElement("div", {
    className: "p-no-margin"
  }, external_react_default.a.createElement("p", null, "Tel: ", external_react_default.a.createElement("span", null, "070-313 00 00"), external_react_default.a.createElement("br", null), "Email: info@veb.net"))), external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("div", {
    className: "p-no-margin"
  }))))), external_react_default.a.createElement("div", {
    className: "footer-bottom bg-red"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "columns is-vcentered"
  }, external_react_default.a.createElement("div", {
    className: "column"
  }, "\xA9 2019 - Vereniging van Effectenbezitters"), external_react_default.a.createElement("div", {
    className: "column is-narrow"
  }, external_react_default.a.createElement("ul", {
    className: "list-inline"
  }))))));
});
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// CONCATENATED MODULE: ./components/UserMenu.js








var UserMenu_UserMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(UserMenu, _React$Component);

  function UserMenu() {
    Object(classCallCheck["a" /* default */])(this, UserMenu);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserMenu).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(UserMenu, [{
    key: "render",
    value: function render() {
      var session = this.props.session;

      if (session && session.user) {
        return external_react_default.a.createElement("ul", {
          className: "list-inline"
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
          href: "/profile"
        }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("b", null, session.user.name || session.user.email)))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("form", {
          id: "signout",
          method: "post",
          action: "/auth/signout",
          onSubmit: this.handleSignoutSubmit
        }, external_react_default.a.createElement("input", {
          name: "_csrf",
          type: "hidden",
          value: session.csrfToken
        }), external_react_default.a.createElement("button", {
          className: "button is-text",
          type: "submit",
          style: {
            textDecoration: 'none'
          }
        }, "Uitloggen"))));
      } else {
        return external_react_default.a.createElement("ul", {
          className: "list-inline"
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("button", {
          className: "button is-text",
          style: {
            textDecoration: 'none'
          },
          onClick: function onClick() {}
        }, "Inloggen")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "https://login.veb.net/identity/createuseraccount",
          className: "button is-danger"
        }, "Word nu lid!")));
      }
    }
  }]);

  return UserMenu;
}(external_react_default.a.Component); // UserMenu.propTypes = {
//   session: PropTypes.object.isRequired
// };


/* harmony default export */ var components_UserMenu = (UserMenu_UserMenu);
// CONCATENATED MODULE: ./components/Header.js





var Header_Header = function Header(_ref) {
  var pathname = _ref.router.pathname,
      session = _ref.session,
      signinBtn = _ref.signinBtn;
  return external_react_default.a.createElement("nav", {
    className: "navbar is-transparent"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "navbar-brand"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
    src: "/static/logo.png",
    alt: "",
    className: "logo",
    width: "170"
  })), external_react_default.a.createElement("div", {
    className: "navbar-burger burger",
    "data-target": "navbarExampleTransparentExample"
  }, external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null))), external_react_default.a.createElement("div", {
    id: "navbarExampleTransparentExample",
    className: "navbar-menu"
  }, external_react_default.a.createElement("div", {
    className: "navbar-center"
  }, external_react_default.a.createElement("div", {
    className: "navbar-item"
  }, external_react_default.a.createElement("div", {
    className: "field has-addons"
  }, external_react_default.a.createElement("div", {
    className: "control input-wrap"
  }, external_react_default.a.createElement("input", {
    type: "text",
    className: "input search-field ng-pristine ng-valid",
    placeholder: "Zoek naar nieuws, aandelen of een specifiek dossier"
  }), external_react_default.a.createElement("div", {
    className: "navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"
  })), external_react_default.a.createElement("div", {
    className: "control"
  }, external_react_default.a.createElement("button", {
    className: "button is-dark"
  }, external_react_default.a.createElement("img", {
    src: "/static/svg/search.svg",
    alt: "",
    width: "16",
    height: "16"
  })))))), external_react_default.a.createElement("div", {
    className: "navbar-2"
  }, external_react_default.a.createElement("div", {
    className: "navbar-item"
  }, external_react_default.a.createElement("ul", {
    className: "list-contacts fz-12"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
    src: "/static/svg/icon-phone.svg",
    alt: "",
    width: "20"
  }), external_react_default.a.createElement("a", {
    href: "tel:070-313 00 00"
  }, "070-313 00 00")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("img", {
    src: "/static/svg/icon-mail.svg",
    alt: "",
    width: "17"
  }), external_react_default.a.createElement("a", {
    href: "mailto:info@veb.net",
    className: "underline"
  }, "info@veb.net"))))), external_react_default.a.createElement("div", {
    className: "navbar-start"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item is-active"
  }, "Home"), external_react_default.a.createElement("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-link"
  }, "VEB-acties"), external_react_default.a.createElement("div", {
    className: "navbar-dropdown is-boxed"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Overview"), external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Modifiers"))), external_react_default.a.createElement("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-link"
  }, "Beurs"), external_react_default.a.createElement("div", {
    className: "navbar-dropdown is-boxed"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Overview"), external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Modifiers"))), external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Begin met beleggen"), external_react_default.a.createElement("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-link"
  }, "Dossiers"), external_react_default.a.createElement("div", {
    className: "navbar-dropdown is-boxed"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Overview"), external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Modifiers"))), external_react_default.a.createElement("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-link"
  }, "Tools"), external_react_default.a.createElement("div", {
    className: "navbar-dropdown is-boxed"
  }, external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Overview"), external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Modifiers"))), external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Voor Professionals"), external_react_default.a.createElement("a", {
    href: "#!",
    className: "navbar-item"
  }, "Over de VEB")), external_react_default.a.createElement("div", {
    className: "navbar-end"
  }, external_react_default.a.createElement("div", {
    className: "navbar-item"
  }, external_react_default.a.createElement(components_UserMenu, {
    session: session,
    signinBtn: signinBtn
  }))))));
};

/* harmony default export */ var components_Header = (Object(router_["withRouter"])(Header_Header));
// EXTERNAL MODULE: ./styles/main.sass
var main = __webpack_require__("aieD");

// CONCATENATED MODULE: ./components/LayoutBasic.js






var LayoutBasic_LayoutBasic = function LayoutBasic(_ref) {
  var title = _ref.title,
      description = _ref.description,
      session = _ref.session,
      children = _ref.children,
      navMenu = _ref.navMenu,
      signinBtn = _ref.signinBtn;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, navMenu && external_react_default.a.createElement(components_Head, {
    title: title,
    description: description
  }), navMenu && external_react_default.a.createElement(components_Header, {
    session: session,
    signinBtn: signinBtn
  }), navMenu && external_react_default.a.createElement("section", {
    className: "section-home",
    style: {
      marginBottom: '20px'
    }
  }, external_react_default.a.createElement("h1", {
    className: "container has-text-centered has-text-weight-bold text-gray fz-26"
  }, description.toUpperCase())), external_react_default.a.createElement("div", {
    className: "container",
    style: {
      minHeight: '505px'
    }
  }, children), navMenu && external_react_default.a.createElement(Footer, null));
};

/* harmony default export */ var components_LayoutBasic = __webpack_exports__["a"] = (LayoutBasic_LayoutBasic);

/***/ }),

/***/ "J/q3":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hHgk");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "JYC+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "KBEF":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "LkAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "Moms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "NluH":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("t+lh");

var _Symbol = __webpack_require__("XzKa");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "OKNm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "Od8a":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("6Ndq");

var setPrototypeOf = __webpack_require__("g9SA");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "R3/3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZOIa");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UrUy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "YKN3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aieD":
/***/ (function(module, exports) {



/***/ }),

/***/ "bMj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("t+lh");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("XzKa");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fo2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// CONCATENATED MODULE: ./components/NegativeGraph/ResponsiveWrapper.js








/* harmony default export */ var ResponsiveWrapper = (function (ChartComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(inherits["a" /* default */])(ResponsiveChart, _Component);

      function ResponsiveChart(props) {
        var _this;

        Object(classCallCheck["a" /* default */])(this, ResponsiveChart);

        _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ResponsiveChart).call(this, props));
        _this.state = {
          containerWidth: null,
          containerHeight: null
        };
        _this.fitParentContainer = _this.fitParentContainer.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
        return _this;
      }

      Object(createClass["a" /* default */])(ResponsiveChart, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.fitParentContainer();
          window.addEventListener('resize', this.fitParentContainer);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.fitParentContainer);
        }
      }, {
        key: "fitParentContainer",
        value: function fitParentContainer() {
          var containerWidth = this.state.containerWidth;
          var currentContainerWidth = this.chartContainer.getBoundingClientRect().width;
          var currentContainerHeight = this.chartContainer.getBoundingClientRect().height;
          var shouldResize = containerWidth !== currentContainerWidth;

          if (shouldResize) {
            this.setState(function () {
              return {
                containerWidth: currentContainerWidth,
                containerHeight: currentContainerHeight
              };
            });
          }
        }
      }, {
        key: "renderChart",
        value: function renderChart() {
          var parentWidth = this.state.containerWidth;
          var parentHeight = this.state.containerHeight;
          return external_react_default.a.createElement(ChartComponent, Object(esm_extends["a" /* default */])({}, this.props, {
            parentWidth: parentWidth,
            parentHeight: parentHeight
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var containerWidth = this.state.containerWidth;
          var shouldRenderChart = containerWidth !== null;
          return external_react_default.a.createElement("div", {
            style: {
              width: '100%',
              height: '100%',
              minWidth: '384px',
              minHeight: '281px'
            },
            ref: function ref(el) {
              _this2.chartContainer = el;
            },
            className: "Responsive-wrapper"
          }, shouldRenderChart && this.renderChart());
        }
      }]);

      return ResponsiveChart;
    }(external_react_["Component"])
  );
});
// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__("0i/h");

// CONCATENATED MODULE: ./components/NegativeGraph/NegativeChart.js








var NegativeChart_BarGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(BarGroup, _React$Component);

  function BarGroup(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BarGroup);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BarGroup).call(this, props));
    var _this$props = _this.props,
        data = _this$props.data,
        bandwidth = _this$props.bandwidth,
        xScale = _this$props.xScale,
        step_data = _this$props.step_data;
    _this.state = {
      data: data,
      bandwidth: bandwidth,
      xScale: xScale,
      step_data: step_data
    };
    return _this;
  }

  Object(createClass["a" /* default */])(BarGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawBars();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.drawBars();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.data,
          xScale = nextProps.xScale,
          bandwidth = nextProps.bandwidth,
          step_data = nextProps.step_data;
      this.setState({
        data: data,
        bandwidth: bandwidth,
        xScale: xScale,
        step_data: step_data
      });
    }
  }, {
    key: "drawBars",
    value: function drawBars() {
      var _this$state = this.state,
          data = _this$state.data,
          xScale = _this$state.xScale,
          bandwidth = _this$state.bandwidth,
          step_data = _this$state.step_data;
      var yScale = external_d3_["scaleBand"]().domain(data.values.slice(0, 4).map(function (d) {
        return d.label;
      })).rangeRound([0, bandwidth]);
      var step = 100 / step_data.range;
      var bar_data = data.values.slice(0, 4).map(function (d) {
        d.label = d.label;
        d.value = +d.value;
        return d;
      });
      var ebitdas = data.values.slice(4, 5).map(function (d) {
        d.label = d.label;
        d.value = +d.value;
        return d;
      });
      var color = external_d3_["scaleOrdinal"]().range(['#bdbbbc', '#63ae2d', '#929292', '#000700']);
      external_d3_["select"](this.el).selectAll('*').remove();
      external_d3_["select"](this.el).selectAll('rect').data(bar_data).enter().append('rect').attr('rx', 5).attr('ry', 5).attr('x', function (d) {
        return d.value > 0 ? xScale(0) : xScale(d.value * step);
      }).attr('width', function (d) {
        return d.value > 0 ? xScale(d.value * step - 100) : xScale(0) - xScale(d.value * step);
      }).attr('height', yScale.bandwidth()).attr('y', function (d) {
        return yScale(d.label);
      }).style('fill', function (d) {
        return color(d.label);
      }).style('opacity', function (d) {
        return d.label.includes('Ebitda') ? 0 : 1;
      }); // // //add EBITDA

      external_d3_["select"](this.el).selectAll('path').data(ebitdas).enter().append('path').attr('d', function (d) {
        return 'M' + xScale(d.value * step) + ' -1 L' + xScale(d.value * step) + ' ' + (yScale.bandwidth() + 2) + ' Z';
      }).style('stroke', '#de0730').style('stroke-width', 3); //.style("opacity", d =>  d.label.includes("bitda")==true ? 0 : 1);
      // //add percent

      external_d3_["select"](this.el).selectAll('text').data(bar_data).enter().append('text').attr('x', function (d) {
        return d.value > 0 ? xScale(d.value * step) : xScale(d.value * step);
      }).attr('y', function (d) {
        return d.label.includes('Ebitda') == false ? yScale(d.label) + yScale.bandwidth() / 2 + 5 : 0;
      }).attr('dx', function (d) {
        return d.value > 0 ? 5 : -5;
      }).text(function (d) {
        return d.value == 0 ? '' : d.value.toFixed(0) + '';
      }).attr('text-anchor', function (d) {
        return d.value > 0 ? 'start' : 'end';
      }).attr('alignment-baseline', 'central').style('font-size', 12).style('fill', 'grey');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("g", {
        ref: function ref(el) {
          return _this2.el = el;
        }
      });
    }
  }]);

  return BarGroup;
}(external_react_default.a.Component);

var NegativeChart_Axis =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(Axis, _React$Component2);

  function Axis(props) {
    var _this3;

    Object(classCallCheck["a" /* default */])(this, Axis);

    _this3 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Axis).call(this, props));
    var _this3$props = _this3.props,
        svgDimen = _this3$props.svgDimen,
        margins = _this3$props.margins,
        data = _this3$props.data;
    var xScale = external_d3_["scaleLinear"]().range([0, svgDimen.width - margins.left - margins.right - 50]).domain([-100, 100]);
    var y0Scale = external_d3_["scaleBand"]().rangeRound([svgDimen.height - margins.bottom, 0]).padding(0.01).domain(data.map(function (d) {
      return d.year;
    }));
    _this3.state = {
      svgDimen: svgDimen,
      margins: margins,
      xScale: xScale,
      y0Scale: y0Scale,
      data: data,
      bandwidth: y0Scale.bandwidth(),
      step_data: _this3.getRange(data)
    };
    return _this3;
  }

  Object(createClass["a" /* default */])(Axis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderAxis();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var svgDimen = nextProps.svgDimen,
          margins = nextProps.margins,
          data = nextProps.data;
      var xScale = external_d3_["scaleLinear"]().range([0, svgDimen.width - margins.left - margins.right - 50]).domain([-100, 100]);
      var y0Scale = external_d3_["scaleBand"]().rangeRound([svgDimen.height - margins.bottom, 0]).padding(0.01).domain(data.map(function (d) {
        return d.year;
      }));
      this.setState({
        svgDimen: svgDimen,
        margins: margins,
        xScale: xScale,
        y0Scale: y0Scale,
        data: data,
        bandwidth: y0Scale.bandwidth(),
        step_data: this.getRange(data)
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderAxis();
    }
  }, {
    key: "renderAxis",
    value: function renderAxis() {
      var _this$state2 = this.state,
          xScale = _this$state2.xScale,
          y0Scale = _this$state2.y0Scale,
          svgDimen = _this$state2.svgDimen,
          margins = _this$state2.margins;
      var xAxis = external_d3_["axisBottom"](xScale).tickSize(svgDimen.height - margins.bottom).ticks(10);
      var yAxis = external_d3_["axisLeft"](y0Scale).tickSize(0);
      external_d3_["select"](this.xAxisElement).selectAll('*').remove();
      external_d3_["select"](this.yAxisElement).selectAll('*').remove();
      external_d3_["select"](this.xAxisElement).attr('class', 'x axis').call(xAxis).select('.domain').remove();
      external_d3_["select"](this.xAxisElement).selectAll('.tick line').attr('stroke', '#777').attr('stroke-dasharray', '2,2');
      external_d3_["select"](this.yAxisElement).attr('class', 'y axis').call(yAxis).select('.domain').remove();
      external_d3_["select"](this.yAxisElement).append('text').attr('x', 0).attr('y', 0).style('text-anchor', 'middle').style('fill', 'black');
    }
  }, {
    key: "getRange",
    value: function getRange(data) {
      var arr = [];
      var cnv_data = data.map(function (d) {
        d.year = d.year;
        d.values = d.values;
        return d;
      });

      for (var i = 0; i < cnv_data.length; i++) {
        for (var j = 0; j < cnv_data[i].values.length; j++) {
          if (!cnv_data[i].values[j].value) cnv_data[i].values[j].value = 0;
          arr.push(cnv_data[i].values[j].value);
        }
      }

      var min = external_d3_["min"](external_d3_["values"](arr)),
          max = external_d3_["max"](external_d3_["values"](arr)),
          range = Math.abs(max - min);
      return {
        min: min,
        max: max,
        range: range
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          data = _this$state3.data,
          xScale = _this$state3.xScale,
          y0Scale = _this$state3.y0Scale,
          step_data = _this$state3.step_data,
          bandwidth = _this$state3.bandwidth;
      return external_react_default.a.createElement("g", {
        className: "Axis"
      }, external_react_default.a.createElement("g", {
        className: "xAxis",
        transform: "translate(50,0)",
        ref: function ref(el) {
          return _this4.xAxisElement = el;
        }
      }), external_react_default.a.createElement("g", {
        className: "yAxis",
        transform: "translate(40,0)",
        ref: function ref(el) {
          return _this4.yAxisElement = el;
        }
      }), data.map(function (d, i) {
        return external_react_default.a.createElement("g", {
          key: i,
          className: "bar-group".concat(d.year),
          transform: "translate(50, ".concat(y0Scale(d.year), ")")
        }, external_react_default.a.createElement(NegativeChart_BarGroup, {
          key: i,
          data: d,
          xScale: xScale,
          bandwidth: bandwidth,
          step_data: step_data
        }));
      }));
    }
  }]);

  return Axis;
}(external_react_default.a.Component);

var NegativeChart_NegativeChart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NegativeChart, _Component);

  function NegativeChart(props) {
    var _this5;

    Object(classCallCheck["a" /* default */])(this, NegativeChart);

    _this5 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NegativeChart).call(this, props));
    var _this5$props = _this5.props,
        width = _this5$props.width,
        height = _this5$props.height,
        data = _this5$props.data;
    var margins = {
      top: 20,
      right: 5,
      bottom: 20,
      left: 20
    },
        svgDimen = {
      width: width - margins.left - margins.right,
      height: height - margins.top - margins.bottom
    };
    _this5.state = {
      margins: margins,
      svgDimen: svgDimen,
      data: data
    };
    return _this5;
  }

  Object(createClass["a" /* default */])(NegativeChart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var width = nextProps.width,
          height = nextProps.height,
          data = nextProps.data;
      var margins = {
        top: 20,
        right: 5,
        bottom: 20,
        left: 20
      },
          svgDimen = {
        width: width - margins.left - margins.right,
        height: height - margins.top - margins.bottom
      };
      this.setState({
        margins: margins,
        svgDimen: svgDimen,
        data: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          svgDimen = _this$state4.svgDimen,
          margins = _this$state4.margins,
          data = _this$state4.data;
      return external_react_default.a.createElement("svg", {
        className: "graphSvg",
        width: svgDimen.width,
        height: svgDimen.height,
        transform: "translate(".concat((this.props.width - svgDimen.width) / 2, ", 0)")
      }, external_react_default.a.createElement(NegativeChart_Axis, {
        svgDimen: svgDimen,
        margins: margins,
        data: data
      }));
    }
  }]);

  return NegativeChart;
}(external_react_["Component"]);

/* harmony default export */ var NegativeGraph_NegativeChart = (NegativeChart_NegativeChart);
// CONCATENATED MODULE: ./components/NegativeGraph/index.js









var NegativeGraph_NegativeGraph =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NegativeGraph, _Component);

  function NegativeGraph(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NegativeGraph);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NegativeGraph).call(this, props));
    var _this$props = _this.props,
        parentWidth = _this$props.parentWidth,
        parentHeight = _this$props.parentHeight,
        data = _this$props.data;
    _this.state = {
      data: data,
      width: parentWidth > 850 ? 850 : Math.max(parentWidth, 450),
      height: 430
    };
    return _this;
  }

  Object(createClass["a" /* default */])(NegativeGraph, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var parentWidth = nextProps.parentWidth,
          parentHeight = nextProps.parentHeight,
          data = nextProps.data;
      this.setState({
        data: data,
        width: parentWidth > 850 ? 850 : Math.max(parentWidth, 450),
        height: 430
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.data.length == 0) {
        external_react_default.a.createElement(external_react_["Fragment"], null, "No data");
      } else {
        var data = this.state.data;
        var cap_data = [{
          year: '2019',
          values: [{
            label: 'NetoperatingCashFlowLY',
            value: data.NetoperatingCashFlowLY
          }, {
            label: 'NetInvestingCashFlowLY',
            value: data.NetInvestingCashFlowLYMin
          }, {
            label: 'NetchangeInCashLY',
            value: data.NetchangeInCashLY
          }, {
            label: 'NetFinancingCashFlowLY',
            value: data.NetFinancingCashFlowLY
          }, {
            label: 'EbitdaLY',
            value: data.EbitdaLY
          }]
        }, {
          year: '2018',
          values: [{
            label: 'NetoperatingCashFlowLYMin1',
            value: data.NetoperatingCashFlowLYMin1
          }, {
            label: 'NetInvestingCashFlowLYMin1',
            value: data.NetInvestingCashFlowLYMin1
          }, {
            label: 'NetchangeInCashLYMin1',
            value: data.NetchangeInCashLYMin1
          }, {
            label: 'NetFinancingCashFlowLYMin1',
            value: data.NetFinancingCashFlowLYMin1
          }, {
            label: 'EbitdaLYMin1',
            value: data.EbitdaLYMin1
          }]
        }, {
          year: '2017',
          values: [{
            label: 'NetoperatingCashFlowLYMin2',
            value: data.NetoperatingCashFlowLYMin2
          }, {
            label: 'NetInvestingCashFlowLYMin2',
            value: data.NetInvestingCashFlowLYMin2
          }, {
            label: 'NetchangeInCashLYMin2',
            value: data.NetchangeInCashLYMin2
          }, {
            label: 'NetFinancingCashFlowLYMin2',
            value: data.NetFinancingCashFlowLYMin2
          }, {
            label: 'EbitdaLYMin2',
            value: data.EbitdaLYMin2
          }]
        }, {
          year: '2016',
          values: [{
            label: 'NetoperatingCashFlowLYMin3',
            value: data.NetoperatingCashFlowLYMin3
          }, {
            label: 'NetInvestingCashFlowLYMin3',
            value: data.NetInvestingCashFlowLYMin3
          }, {
            label: 'NetchangeInCashLYMin3',
            value: data.NetchangeInCashLYMin3
          }, {
            label: 'NetFinancingCashFlowLYMin3',
            value: data.NetFinancingCashFlowLYMin3
          }, {
            label: 'EbitdaLYMin3',
            value: data.EbitdaLYMin3
          }]
        }, {
          year: '2015',
          values: [{
            label: 'NetoperatingCashFlowLYMin4',
            value: data.NetoperatingCashFlowLYMin4
          }, {
            label: 'NetInvestingCashFlowLYMin4',
            value: data.NetInvestingCashFlowLYMin4
          }, {
            label: 'NetchangeInCashLYMin4',
            value: data.NetchangeInCashLYMin4
          }, {
            label: 'NetFinancingCashFlowLYMin4',
            value: data.NetFinancingCashFlowLYMin4
          }, {
            label: 'EbitdaLYMin4',
            value: data.EbitdaLYMin4
          }]
        }];
        return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(NegativeGraph_NegativeChart, {
          data: cap_data,
          width: this.state.width,
          height: this.state.height
        }));
      }
    }
  }]);

  return NegativeGraph;
}(external_react_["Component"]);

/* harmony default export */ var components_NegativeGraph = __webpack_exports__["a"] = (ResponsiveWrapper(NegativeGraph_NegativeGraph));

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g9SA":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hZod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jDdP");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OKNm");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "jDdP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oS/Z":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "tEuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("6Ndq");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("OKNm");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z3IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8Yc");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ });