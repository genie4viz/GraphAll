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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rXUM");


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

/***/ "CjGY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("JYC+");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

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

// CONCATENATED MODULE: ./components/GaugeGraph/ResponsiveWrapper.js








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

// CONCATENATED MODULE: ./components/GaugeGraph/GaugeChart.js








var GaugeChart_GaugeChart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(GaugeChart, _Component);

  function GaugeChart(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GaugeChart);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(GaugeChart).call(this, props));
    var _this$props = _this.props,
        width = _this$props.width,
        height = _this$props.height,
        data = _this$props.data,
        dataRange = _this$props.dataRange;
    var margin = {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20
    },
        svgDimen = {
      width: width - margin.left - margin.right,
      height: height - margin.top - margin.bottom
    };
    if (data[0].value > dataRange.max) data[0].value = dataRange.max;else if (data[0].value < dataRange.min) data[0].value = dataRange.min;
    if (data[1].value > dataRange.max) data[1].value = dataRange.max;else if (data[1].value < dataRange.min) data[1].value = dataRange.min;
    if (data[2].value > dataRange.max) data[2].value = dataRange.max;else if (data[2].value < dataRange.min) data[2].value = dataRange.min;
    data[0].value = data[0].value - dataRange.min;
    data[1].value = data[1].value - dataRange.min;
    data[2].value = data[2].value - dataRange.min;
    _this.state = {
      svgDimen: svgDimen,
      data: data,
      dataRange: dataRange
    };
    return _this;
  }

  Object(createClass["a" /* default */])(GaugeChart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var width = nextProps.width,
          height = nextProps.height,
          data = nextProps.data,
          dataRange = nextProps.dataRange;
      var margin = {
        top: 0,
        right: 20,
        bottom: 0,
        left: 20
      },
          svgDimen = {
        width: width - margin.left - margin.right,
        height: height - margin.top - margin.bottom
      };
      if (data[0].value > dataRange.max) data[0].value = dataRange.max;else if (data[0].value < dataRange.min) data[0].value = dataRange.min;
      if (data[1].value > dataRange.max) data[1].value = dataRange.max;else if (data[1].value < dataRange.min) data[1].value = dataRange.min;
      if (data[2].value > dataRange.max) data[2].value = dataRange.max;else if (data[2].value < dataRange.min) data[2].value = dataRange.min;
      data[0].value = data[0].value - dataRange.min;
      data[1].value = data[1].value - dataRange.min;
      data[2].value = data[2].value - dataRange.min;
      if (data[1].value == data[2].value) this.setState({
        svgDimen: svgDimen,
        data: data,
        dataRange: dataRange
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.drawChart();
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this$state = this.state,
          svgDimen = _this$state.svgDimen,
          data = _this$state.data,
          dataRange = _this$state.dataRange;
      var n = 100,
          padding = {
        top: 40,
        right: 60,
        bottom: 40,
        left: 60
      },
          radius = Math.min((svgDimen.width * 0.9 - padding.left - padding.right) / 2, svgDimen.height / 2),
          needleRad = radius - radius * 2 / 5,
          needleCenterRad = radius * 0.15,
          pi = Math.PI,
          halfPi = pi / 2,
          endAngle = pi / 2,
          startAngle = -endAngle,
          field = external_d3_["range"](startAngle, endAngle, pi / n),
          scale = external_d3_["scaleLinear"]().domain([0, 100]).range([startAngle, endAngle]);
      var range = Math.abs(dataRange.max - dataRange.min),
          step = 100 / range,
          linearColor = external_d3_["scaleLinear"]().range(['#e2062a', '#ee7e00', '#66ad2b']).domain([0, range / 2, range]);
      if (dataRange.direction == 1) linearColor = external_d3_["scaleLinear"]().range(['#e2062a', '#ee7e00', '#66ad2b']).domain([0, range / 2, range]);else linearColor = external_d3_["scaleLinear"]().range(['#66ad2b', '#ee7e00', '#e2062a']).domain([0, range / 2, range]);
      external_d3_["select"](this.el).selectAll('*').remove();
      var arc = external_d3_["arc"]().innerRadius(radius - radius / 5).outerRadius(radius).startAngle(function (d, i) {
        return scale(i);
      }).endAngle(function (d, i) {
        return scale(i + 1);
      });
      external_d3_["select"](this.el).append('g').selectAll('path').data(field).enter().append('path').attr('stroke', function (d, i) {
        return i + 1 <= data[0].value * step ? linearColor(data[0].value) : '#e4e7ec';
      }).attr('fill', function (d, i) {
        return i + 1 <= data[0].value * step ? linearColor(data[0].value) : '#e4e7ec';
      }).attr('d', arc); //draw needle

      external_d3_["select"](this.el).append('path').attr('class', 'needle').attr('d', function (d) {
        var _in = scale(data[0].value * step + 0.1) - halfPi,
            _im = _in - halfPi,
            _ip = _in + halfPi;

        var topX = needleRad * Math.cos(_in),
            topY = needleRad * Math.sin(_in);
        var leftX = needleCenterRad * Math.cos(_im),
            leftY = needleCenterRad * Math.sin(_im);
        var rightX = needleCenterRad * Math.cos(_ip),
            rightY = needleCenterRad * Math.sin(_ip);
        return 'M ' + topX + ' ' + topY + ' L ' + leftX + ' ' + leftY + ' A ' + leftX + ' ' + leftX + ' 1 0 0 ' + rightX + ' ' + rightY + ' Z';
      }).attr('fill', linearColor(data[0].value)); // add branche, market label

      var ticks = scale.ticks(100);
      external_d3_["select"](this.el).append('g').attr('class', 'label').selectAll('text.label').data(ticks).enter().append('text').attr('transform', function (d) {
        var _in = scale(d) - halfPi;

        var topX = (radius + 10) * Math.cos(_in),
            topY = (radius + 10) * Math.sin(_in);
        return 'translate(' + topX + ',' + topY + ')';
      }).style('text-anchor', function (d) {
        return d < 50 ? 'end' : 'start';
      }).style('font-size', svgDimen.width * 0.045).attr('fill', '#929292').text(function (d) {
        if (d === Math.floor(data[1].value * step)) {
          return 'Branche';
        }

        if (d === Math.floor(data[2].value * step)) {
          return 'Market';
        }

        return '';
      }); // add marker

      external_d3_["select"](this.el).append('g').attr('class', 'marker').selectAll('path.marker').data(ticks).enter().append('path').style('stroke', '#929292').style('stroke-width', function (d) {
        if (d === Math.floor(data[1].value * step)) {
          return 6;
        }

        if (d === Math.floor(data[2].value * step)) {
          return 6;
        }

        return 0;
      }).attr('d', function (d) {
        var _in = scale(d) - halfPi;

        var farX = (radius + 5) * Math.cos(_in),
            farY = (radius + 5) * Math.sin(_in),
            nearX = (radius * 4 / 5 - 5) * Math.cos(_in),
            nearY = (radius * 4 / 5 - 5) * Math.sin(_in);
        return 'M ' + farX + ' ' + farY + ' L ' + nearX + ' ' + nearY + ' Z';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          svgDimen = _this$state2.svgDimen,
          data = _this$state2.data,
          dataRange = _this$state2.dataRange;
      var range = Math.abs(dataRange.max - dataRange.min),
          step = 100 / range;
      return external_react_default.a.createElement("svg", {
        width: svgDimen.width,
        height: svgDimen.height
      }, external_react_default.a.createElement("g", {
        width: svgDimen.width,
        className: "gaugeChart",
        transform: "translate(".concat(svgDimen.width / 2, ", ").concat(svgDimen.height * 0.6, ")"),
        ref: function ref(el) {
          return _this2.el = el;
        }
      }), external_react_default.a.createElement("g", {
        className: "legendBottom",
        transform: "translate(".concat(svgDimen.width / 2, ", ").concat(svgDimen.height * 7 / 8, ")")
      }, external_react_default.a.createElement("text", {
        x: "0",
        y: "0",
        alignmentBaseline: "baseline",
        textAnchor: "middle",
        style: {
          fontSize: svgDimen.width * 0.06,
          fill: '#929292'
        }
      }, data[0].value * step === 0 ? data[0].value * step : (data[0].value * step).toFixed(2), "%"), external_react_default.a.createElement("text", {
        x: "0",
        y: "20",
        alignmentBaseline: "hanging",
        textAnchor: "middle",
        style: {
          fontSize: svgDimen.width * 0.05,
          fill: '#929292'
        }
      }, dataRange.title)));
    }
  }]);

  return GaugeChart;
}(external_react_["Component"]);

/* harmony default export */ var GaugeGraph_GaugeChart = (GaugeChart_GaugeChart);
// CONCATENATED MODULE: ./components/GaugeGraph/index.js










var GaugeGraph_dataRange = [{
  title: 'PE-ratio',
  min: 0,
  max: 40,
  direction: 0
}, {
  title: 'ROIC',
  min: 0,
  max: 0.5,
  direction: 1
}, {
  title: 'Return on equity',
  min: 0,
  max: 0.5,
  direction: 1
}, {
  title: 'Revenue Growth',
  min: -30,
  max: 60,
  direction: 1
}, {
  title: 'N.t.b',
  min: 0,
  max: 4,
  direction: 0
}, {
  title: 'N.t.b',
  min: 0,
  max: 4,
  direction: 1
}];

var GaugeGraph_GaugeGraph =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(GaugeGraph, _Component);

  function GaugeGraph(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GaugeGraph);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(GaugeGraph).call(this, props));
    var _this$props = _this.props,
        parentWidth = _this$props.parentWidth,
        parentHeight = _this$props.parentHeight,
        data = _this$props.data;
    _this.state = {
      data: data,
      dataRange: GaugeGraph_dataRange,
      width: 350,
      height: 300
    };
    return _this;
  }

  Object(createClass["a" /* default */])(GaugeGraph, [{
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
        dataRange: GaugeGraph_dataRange,
        width: 350,
        height: 300
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.data.length == 0) {
        return external_react_default.a.createElement(external_react_["Fragment"], null, "No Data");
      } else {
        var data = this.state.data;
        var jarr = [],
            tarr = [],
            i = 1;
        JSON.parse(stringify_default()(data), function (key, value) {
          jarr.push({
            label: key,
            value: value
          });

          if (i % 3 == 0) {
            tarr.push(jarr);
            jarr = [];
          }

          i++;
        });
        return external_react_default.a.createElement(external_react_["Fragment"], null, tarr.map(function (d, i) {
          return external_react_default.a.createElement(GaugeGraph_GaugeChart, {
            key: i,
            data: d,
            dataRange: GaugeGraph_dataRange[i],
            width: _this2.state.width,
            height: _this2.state.height
          });
        }));
      }
    }
  }]);

  return GaugeGraph;
}(external_react_["Component"]);

/* harmony default export */ var components_GaugeGraph = __webpack_exports__["a"] = (ResponsiveWrapper(GaugeGraph_GaugeGraph));

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

/***/ "rXUM":
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
/* harmony import */ var _components_GaugeGraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("CjGY");













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
      console.log(data[0].calculated);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LayoutBasic__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, this.props, {
        title: 'VEB - The Coca-Cola Company',
        description: 'The Coca-Cola Company',
        session: session,
        navMenu: true,
        signinBtn: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "Key figures Coca-Cola (NYSE:KO)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "The Coca-Cola Company is an American ...."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_GaugeGraph__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        data: data[0].calculated
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
                    query: "\n        {\n          security(id: \"xgfr4\") {\n            id\n            name\n            calculated {\n              PERatioCompany\n              PERatioBranche\n              PERatioMarket\n              ROICCompany\n              ROICBranche\n              ROICMarket\n              ROECompany\n              ROEBranche\n              ROEMarket\n              RevenueGrowthCompany\n              RevenueGrowthBranche\n              RevenueGrowthMarket\n              DebtRatioCompany\n              DebtRatioBranche\n              DebtRatioMarket\n              NettDEBTEBITDACompany\n              NettDEBTEBITDABranche\n              NettDEBTEBITDAMarket\n              }\n          }\n        }"
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