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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3L/t");


/***/ }),

/***/ "3L/t":
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
/* harmony import */ var _components_AreaGraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("rMzG");













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
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "Key figures Coca-Cola (NYSE:KO)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "The Coca-Cola Company is an American ...."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AreaGraph__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        data: data[0].historyPrice100
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
                    query: "\n        {\n          security(id: \"bjo5t\") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }"
                  })
                }).then(function (r) {
                  return r.json();
                }).then(function (r) {
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

/***/ "azxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

/***/ "rMzG":
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

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__("0i/h");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// CONCATENATED MODULE: ./components/AreaGraph/ResponsiveWrapper.js








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
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// CONCATENATED MODULE: ./components/AreaGraph/AreaChart.js










var AreaChart_Chart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Chart, _Component);

  function Chart(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Chart);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Chart).call(this, props));
    _this.state = {
      margins: _this.props.margins,
      svgDimen: _this.props.svgDimen,
      partial: _this.props.partial
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Chart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        svgDimen: nextProps.svgDimen,
        margins: nextProps.margins,
        partial: nextProps.partial
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawGraph();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.drawGraph();
    }
  }, {
    key: "drawGraph",
    value: function drawGraph() {
      var _this$state = this.state,
          svgDimen = _this$state.svgDimen,
          margins = _this$state.margins,
          partial = _this$state.partial;
      var parseTime = external_d3_["timeParse"]('%Y-%m-%d');
      var data = partial.columns.slice(2).map(function (id) {
        return {
          id: id,
          values: partial.map(function (d) {
            return {
              date: d.Date,
              value: d[id]
            };
          })
        };
      });
      var area_data = data[0].values.map(function (d) {
        d.date = parseTime(d.date);
        d.value = +d.value;
        return d;
      });
      var min = 0,
          //d3.min(data[0].values, (d) => d.value),
      max = external_d3_["max"](area_data, function (d) {
        return d.value;
      });
      var partial_len = area_data.length;
      var x = external_d3_["scaleTime"]().range([margins.left, svgDimen.width - margins.right]).domain(external_d3_["extent"](area_data, function (d) {
        return d.date;
      })).clamp(true);
      var y = external_d3_["scaleLinear"]().range([svgDimen.height - margins.bottom, margins.top]).domain([min, max]);
      var area = external_d3_["area"]().curve(external_d3_["curveMonotoneX"]).x(function (d) {
        return x(d.date);
      }).y0(y(0)).y1(function (d) {
        return y(d.value);
      });
      var svg = external_d3_["select"](this.el);
      svg.selectAll('*').remove();
      var ticks_count = Math.floor(svgDimen.width / 120);
      svg.append('g').attr('transform', 'translate(0,' + (svgDimen.height - margins.bottom) + ')').call(external_d3_["axisBottom"](x).ticks(ticks_count).tickSize(3).tickFormat(external_d3_["timeFormat"]('%Y-%m-%d'))).selectAll('text').style('font-size', '10px').style('fill', 'black');
      svg.append('g').call(external_d3_["axisLeft"](y).tickSize(0)).select('.domain').style('opacity', 0);
      svg.selectAll('.area').data(data).enter().append('path').attr('d', function (d) {
        return area(d.values);
      }).style('fill', '#df072c');
      var tooltip = svg.append('g');
      var bisectDate = external_d3_["bisector"](function (d) {
        return d.date;
      }).left;
      svg.append('rect').attr('transform', 'translate(' + margins.left + ',' + margins.top + ')').attr('class', 'overlay').attr('width', svgDimen.width - margins.right).attr('height', svgDimen.height - margins.bottom).style('opacity', 0).on('mousemove', function () {
        var x0 = x.invert(external_d3_["mouse"](this)[0]),
            i = bisectDate(area_data, x0, 1),
            d0 = area_data[i - 1],
            d1 = area_data[i],
            d = x0 - d0.date > d1.date - x0 ? d1 : d0;
        tooltip.attr('transform', "translate(".concat(x(d.date), ",").concat(y(d.value), ")")).call(callout, d.value);
      });
      svg.on('mouseleave', function () {
        return tooltip.call(callout, null);
      });

      function callout(g, value) {
        if (!value) return g.style('display', 'none');
        g.style('display', null).style('pointer-events', 'none').style('font', '10px sans-serif');
        g.selectAll('circle').data([null]).join('circle').attr('r', 7).style('fill', 'grey').style('stroke', 'white').style('stroke-width', 3);
        var path = g.selectAll('path').data([null]).join('path').attr('fill', 'grey'); // .attr("stroke", "white");

        var text = g.selectAll('text').data([null]).join('text').call(function (text) {
          return text.selectAll('tspan').data((value + '').split(/\n/)).join('tspan').attr('x', 0).style('font-weight', 'bold').style('font-size', 14).style('fill', 'whredite').text(function (d) {
            return '€ ' + d;
          });
        });

        var _text$node$getBBox = text.node().getBBox(),
            x = _text$node$getBBox.x,
            y = _text$node$getBBox.y,
            w = _text$node$getBBox.width,
            h = _text$node$getBBox.height;

        text.attr('transform', "translate(".concat(-w / 2, ",").concat(15 - y, ")"));
        path.attr('d', "M".concat(-w / 2 - 10, ",5H-5l5,-5l5,5H").concat(w / 2 + 10, "v").concat(h + 10, "h-").concat(w + 20, "z")).attr('transform', "translate(0,5)"); // text.attr("transform", `translate(${-w / 2},${y + 45})`);
        // path.attr("d", `M0,5l-3,10h${-w / 2 - 10}v${h + 10}h${w + 26}v${-h - 10}L3,10L0,5z`);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var svgDimen = this.state.svgDimen;
      return external_react_default.a.createElement("svg", {
        className: "graphSvg",
        width: svgDimen.width,
        height: svgDimen.height,
        ref: function ref(el) {
          return _this2.el = el;
        }
      });
    }
  }]);

  return Chart;
}(external_react_["Component"]);

var AreaChart_RangeHandle =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(RangeHandle, _React$Component);

  function RangeHandle(props) {
    var _this3;

    Object(classCallCheck["a" /* default */])(this, RangeHandle);

    _this3 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(RangeHandle).call(this, props));
    var _this3$props = _this3.props,
        svgDimen = _this3$props.svgDimen,
        margins = _this3$props.margins,
        rangeStart = _this3$props.rangeStart,
        rangeEnd = _this3$props.rangeEnd,
        xScale = _this3$props.xScale;
    _this3.state = {
      svgDimen: svgDimen,
      margins: margins,
      rangeStart: rangeStart,
      rangeEnd: rangeEnd,
      xScale: xScale,
      handle: ''
    };
    return _this3;
  }

  Object(createClass["a" /* default */])(RangeHandle, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var svgDimen = nextProps.svgDimen,
          margins = nextProps.margins,
          rangeStart = nextProps.rangeStart,
          rangeEnd = nextProps.rangeEnd,
          xScale = nextProps.xScale;
      this.setState({
        svgDimen: svgDimen,
        margins: margins,
        rangeStart: rangeStart,
        rangeEnd: rangeEnd,
        xScale: xScale,
        handle: ''
      });
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(e) {
      if (e.target.parentNode.className.baseVal == 'sliderBar') {
        this.setState({
          handle: ''
        });
      } else {
        this.setState({
          handle: e.target.parentNode.className.baseVal
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          svgDimen = _this$state2.svgDimen,
          margins = _this$state2.margins,
          rangeStart = _this$state2.rangeStart,
          rangeEnd = _this$state2.rangeEnd,
          xScale = _this$state2.xScale;
      var rectHandler = external_react_default.a.createElement("rect", {
        rx: "3",
        ry: "3",
        width: "10",
        height: svgDimen.height - margins.bottom,
        transform: "translate(-5, 0)",
        fill: "#777"
      });
      var rectFillBar = external_react_default.a.createElement("rect", {
        x: xScale(rangeStart),
        y: "0",
        width: xScale(rangeEnd) - xScale(rangeStart),
        height: svgDimen.height - margins.bottom,
        fill: "rgba(150, 150, 150, 0.65)"
      });
      return external_react_default.a.createElement("g", {
        className: "sliderBar",
        onMouseOver: this.onMouseOver.bind(this)
      }, rectFillBar, external_react_default.a.createElement("g", {
        className: "handleLeft",
        ref: function ref(el) {
          return _this4.handleLeft = el;
        },
        transform: "translate(".concat(xScale(rangeStart), ", 0)")
      }, rectHandler), external_react_default.a.createElement("g", {
        className: "handleRight",
        ref: function ref(el) {
          return _this4.handleRight = el;
        },
        transform: "translate(".concat(xScale(rangeEnd), ", 0)")
      }, rectHandler));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state3 = this.state,
          xScale = _this$state3.xScale,
          handle = _this$state3.handle;
      var changeHandlerValue = this.props.changeHandlerValue;
      var trueMouseValue,
          that = this;
      var drag;

      if (handle == '') {
        drag = external_d3_["drag"]().on('start', null).on('drag', null).on('end', null);
        external_d3_["select"]('.sliderBar').call(drag);
      } else {
        drag = external_d3_["drag"]().on('start', dragstart).on('drag', draged).on('end', dragend);
        external_d3_["select"]('.sliderBar').call(drag);
      }

      function dragstart() {
        trueMouseValue = getTrueMouseValue(external_d3_["mouse"](this)[0]);
      }

      function draged() {
        if (that.state.rangeEnd - that.state.rangeStart >= 5 * 24 * 3600 * 1000) {
          trueMouseValue = getTrueMouseValue(external_d3_["mouse"](this)[0]);
          external_d3_["select"]('.' + handle).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 0)');
          changeHandlerValue(handle, trueMouseValue);
        }
      }

      function dragend() {
        if (that.state.rangeEnd - that.state.rangeStart >= 5 * 24 * 3600 * 1000) {
          external_d3_["select"]('.' + handle).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 0)');
          changeHandlerValue(handle, trueMouseValue);
        } else {
          if (handle == 'handleLeft') {
            changeHandlerValue(handle, that.state.rangeStart - 24 * 3600 * 1000);
          } else {
            changeHandlerValue(handle, that.state.rangeEnd + 24 * 3600 * 1000);
          }
        }
      }

      function getTrueMouseValue(mouseValue) {
        return Math.round(xScale.invert(mouseValue));
      }
    }
  }]);

  return RangeHandle;
}(external_react_default.a.Component);

var AreaChart_AreaChart =
/*#__PURE__*/
function (_Component2) {
  Object(inherits["a" /* default */])(AreaChart, _Component2);

  function AreaChart(props) {
    var _this5;

    Object(classCallCheck["a" /* default */])(this, AreaChart);

    _this5 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AreaChart).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this5)), "changeHandlerValue", function (handler, date) {
      var _this5$state = _this5.state,
          total = _this5$state.total,
          rangeStart = _this5$state.rangeStart,
          rangeEnd = _this5$state.rangeEnd;
      var parseTime = external_d3_["timeParse"]('%Y-%m-%d');
      var partialData = [];

      if (handler == 'handleLeft') {
        for (var i = 0; i < total.length; i++) {
          if (parseTime(total[i].Date) >= date && parseTime(total[i].Date) <= rangeEnd) {
            partialData.push(total[i]);
          }
        }

        partialData.columns = total.columns;

        _this5.setState({
          rangeStart: date,
          partial: partialData
        });
      } else {
        for (var _i = 0; _i < total.length; _i++) {
          if (parseTime(total[_i].Date) <= date && parseTime(total[_i].Date) >= rangeStart) {
            partialData.push(total[_i]);
          }
        }

        partialData.columns = total.columns;

        _this5.setState({
          rangeEnd: date,
          partial: partialData
        });
      }
    });

    var _this5$props = _this5.props,
        data = _this5$props.data,
        width = _this5$props.width,
        height = _this5$props.height;

    var _parseTime = external_d3_["timeParse"]('%Y-%m-%d');

    var sort_data = data.sort(function (x, y) {
      return external_d3_["ascending"](_parseTime(x.Date), _parseTime(y.Date));
    });
    var dates = sort_data.map(function (d) {
      return _parseTime(d.Date);
    });
    _this5.state = {
      total: sort_data,
      partial: sort_data,
      width: width,
      height: height,
      rangeStart: dates[0],
      rangeEnd: dates[dates.length - 1]
    };
    return _this5;
  }

  Object(createClass["a" /* default */])(AreaChart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.data,
          width = nextProps.width,
          height = nextProps.height;
      var parseTime = external_d3_["timeParse"]('%Y-%m-%d');
      var sort_data = data.sort(function (x, y) {
        return external_d3_["ascending"](parseTime(x.Date), parseTime(y.Date));
      });
      var dates = sort_data.map(function (d) {
        return parseTime(d.Date);
      });
      this.setState({
        total: sort_data,
        partial: sort_data,
        width: width,
        height: height,
        rangeStart: dates[0],
        rangeEnd: dates[dates.length - 1]
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderSliderGraph();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderSliderGraph();
    }
  }, {
    key: "renderSliderGraph",
    value: function renderSliderGraph() {
      var _this$state4 = this.state,
          width = _this$state4.width,
          height = _this$state4.height,
          total = _this$state4.total;
      var margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      },
          svgDimen = {
        width: width - margins.left - margins.right,
        height: height / 6
      };
      var parseTime = external_d3_["timeParse"]('%Y-%m-%d');
      var data = total.columns.slice(2).map(function (id) {
        return {
          id: id,
          values: total.map(function (d) {
            return {
              date: parseTime(d.Date),
              value: d[id]
            };
          })
        };
      });
      var min = 0,
          //d3.min(data[0].values, (d) => d.value),
      max = external_d3_["max"](data[0].values, function (d) {
        return d.value;
      });
      var dates = data[0].values.map(function (d) {
        return d.date;
      });
      var x = external_d3_["scaleTime"]().range([margins.left, svgDimen.width - margins.right]).domain([dates[0], dates[dates.length - 1]]);
      var y = external_d3_["scaleLinear"]().range([svgDimen.height - margins.bottom, margins.top]).domain([min, max]);
      var area = external_d3_["area"]().curve(external_d3_["curveMonotoneX"]).x(function (d) {
        return x(d.date);
      }).y0(y(0)).y1(function (d) {
        return y(d.value);
      });
      var graph = external_d3_["select"](this.GraphAxisElement);
      graph.selectAll('*').remove();
      graph.append('g').attr('transform', 'translate(0,' + (svgDimen.height - margins.bottom) + ')').call(external_d3_["axisBottom"](x).ticks(4).tickSize(3).tickFormat(external_d3_["timeFormat"]('%Y-%m-%d'))).selectAll('text').style('font-size', '10px').style('fill', 'black').select('.domain').style('opacity', 0); // .attr("transform", "rotate(-65)");

      graph.append('g').call(external_d3_["axisLeft"](y).tickSize(3)).select('.domain').style('opacity', 0);
      graph.selectAll('.area').data(data).enter().append('path').attr('d', function (d) {
        return area(d.values);
      }).style('fill', '#ddd');
    }
  }, {
    key: "getTextWidth",
    value: function getTextWidth(text, fontSize, fontFace) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      context.font = fontSize + 'px ' + fontFace;
      return context.measureText(text).width;
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state5 = this.state,
          width = _this$state5.width,
          height = _this$state5.height,
          total = _this$state5.total,
          partial = _this$state5.partial,
          rangeStart = _this$state5.rangeStart,
          rangeEnd = _this$state5.rangeEnd;
      var margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      },
          svgDimenSlider = {
        width: width - margins.left - margins.right,
        height: height / 6
      },
          svgDimenGraph = {
        width: width - margins.left - margins.right,
        height: height * 4 / 6
      },
          svgDimen = {
        width: width - margins.left - margins.right,
        height: height
      }; // parse the date / time

      var parseTime = external_d3_["timeParse"]('%Y-%m-%d');
      var dates = total.map(function (d) {
        return parseTime(d.Date);
      });
      var x = external_d3_["scaleTime"]().range([margins.left, svgDimen.width - margins.right]).domain([dates[0], dates[dates.length - 1]]).clamp(true);
      var legend_text1_len = this.getTextWidth('Coca-Cola Company', 16, 'Arial');
      var legend_text2_len = this.getTextWidth('Industry', 16, 'Arial');
      return external_react_default.a.createElement("svg", {
        className: "areaChartSvg",
        width: svgDimen.width,
        height: svgDimen.height
      }, external_react_default.a.createElement("g", {
        className: "TopPane",
        transform: "translate(".concat(margins.left, ", ").concat(height / 12, ")")
      }, external_react_default.a.createElement("circle", {
        r: "5",
        cx: svgDimen.width - margins.left - legend_text2_len - legend_text1_len - 60,
        cy: "0",
        fill: "#de0730"
      }), external_react_default.a.createElement("text", {
        x: svgDimen.width - margins.left - legend_text2_len - 40,
        y: "0",
        alignmentBaseline: "central",
        textAnchor: "end",
        style: {
          fontSize: 16,
          fill: '#bdbbbc'
        }
      }, "Coca-Cola Company"), external_react_default.a.createElement("circle", {
        r: "5",
        cx: svgDimen.width - margins.left - legend_text2_len - 20,
        cy: "0",
        fill: "#bdbbbc"
      }), external_react_default.a.createElement("text", {
        x: svgDimen.width - margins.left,
        y: "0",
        alignmentBaseline: "central",
        textAnchor: "end",
        style: {
          fontSize: 16,
          fill: '#bdbbbc'
        }
      }, "Industry")), external_react_default.a.createElement("g", {
        className: "Chart",
        transform: "translate(0, ".concat(height / 6, ")")
      }, external_react_default.a.createElement(AreaChart_Chart, {
        margins: margins,
        svgDimen: svgDimenGraph,
        partial: partial
      })), external_react_default.a.createElement("h3", null, "\xA0"), external_react_default.a.createElement("g", {
        className: "graphSliderGroup",
        transform: "translate(0, ".concat(height * 5 / 6, ")")
      }, external_react_default.a.createElement("g", {
        className: "graphSliderAxis",
        ref: function ref(el) {
          return _this6.GraphAxisElement = el;
        }
      }), external_react_default.a.createElement(AreaChart_RangeHandle, {
        className: "handleRange",
        changeHandlerValue: this.changeHandlerValue,
        rangeStart: rangeStart,
        rangeEnd: rangeEnd,
        svgDimen: svgDimenSlider,
        margins: margins,
        xScale: x
      })));
    }
  }]);

  return AreaChart;
}(external_react_["Component"]);

/* harmony default export */ var AreaGraph_AreaChart = (AreaChart_AreaChart);
// CONCATENATED MODULE: ./components/AreaGraph/index.js










var AreaGraph_AreaGraph =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(AreaGraph, _Component);

  function AreaGraph(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AreaGraph);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AreaGraph).call(this, props));
    var _this$props = _this.props,
        parentWidth = _this$props.parentWidth,
        parentHeight = _this$props.parentHeight,
        data = _this$props.data;
    data.columns = _this.getColumns(data);
    _this.state = {
      width: parentWidth > 1100 ? 1100 : Math.max(parentWidth, 300),
      height: 400,
      data: data
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AreaGraph, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var parentWidth = nextProps.parentWidth,
          parentHeight = nextProps.parentHeight,
          data = nextProps.data;
      data.columns = this.getColumns(data);
      this.setState({
        width: parentWidth > 1100 ? 1100 : Math.max(parentWidth, 300),
        height: 400,
        data: data
      });
    }
  }, {
    key: "getColumns",
    value: function getColumns(data) {
      var columns = [];

      for (var key in data[0]) {
        columns.push(key);
      }

      return columns;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.data.length == 0) {
        return external_react_default.a.createElement(external_react_["Fragment"], null, "No data");
      } else {
        return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(AreaGraph_AreaChart, {
          data: this.state.data,
          width: this.state.width,
          height: this.state.height
        }));
      }
    }
  }]);

  return AreaGraph;
}(external_react_["Component"]);

/* harmony default export */ var components_AreaGraph = __webpack_exports__["a"] = (ResponsiveWrapper(AreaGraph_AreaGraph));

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