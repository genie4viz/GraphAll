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
/******/ 	return __webpack_require__(__webpack_require__.s = "fd94");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0i/h":
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "0tNF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("8ET1");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("7X5e");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "1A0R":
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

// CONCATENATED MODULE: ./components/StockGraph/ResponsiveWrapper.js








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

// CONCATENATED MODULE: ./components/StockGraph/StockChart.js








var StockChart_Axis =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Axis, _React$Component);

  function Axis(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Axis);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Axis).call(this, props));
    var _this$props = _this.props,
        svgDimen = _this$props.svgDimen,
        top_margin = _this$props.top_margin,
        bottom_margin = _this$props.bottom_margin,
        data = _this$props.data;
    var formatTime = external_d3_["timeFormat"]('%Y');
    var max = external_d3_["max"](data.map(function (d) {
      return d.ConsolidatedNetIncome;
    }));
    var x = external_d3_["scaleBand"]().range([0, svgDimen.width - 60]).domain(data.map(function (d) {
      return formatTime(new Date(d.Date));
    })),
        y = external_d3_["scaleLinear"]().domain([0, max]).range([svgDimen.height - top_margin - bottom_margin, 0]);
    _this.state = {
      svgDimen: svgDimen,
      top_margin: top_margin,
      bottom_margin: bottom_margin,
      x: x,
      y: y,
      max: max,
      data: data
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Axis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderAxis();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderAxis();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var svgDimen = nextProps.svgDimen,
          top_margin = nextProps.top_margin,
          bottom_margin = nextProps.bottom_margin,
          data = nextProps.data;
      var max = external_d3_["max"](data.map(function (d) {
        return d.ConsolidatedNetIncome;
      }));
      var formatTime = external_d3_["timeFormat"]('%Y');
      var x = external_d3_["scaleBand"]().range([0, svgDimen.width - 60]).domain(data.map(function (d) {
        return formatTime(new Date(d.Date));
      })),
          y = external_d3_["scaleLinear"]().domain([0, max]).range([svgDimen.height - top_margin - bottom_margin, 0]);
      this.setState({
        svgDimen: svgDimen,
        top_margin: top_margin,
        bottom_margin: bottom_margin,
        x: x,
        y: y,
        max: max,
        data: data
      });
    }
  }, {
    key: "renderAxis",
    value: function renderAxis() {
      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y;
      var xAxis = external_d3_["axisBottom"](x).tickSize(0).tickPadding(15),
          yAxis = external_d3_["axisLeft"](y).tickSize(10).ticks(10);
      external_d3_["select"](this.xAxisElement).selectAll('*').remove();
      external_d3_["select"](this.yAxisElement).selectAll('*').remove();
      external_d3_["select"](this.xAxisElement).attr('class', 'x axis').call(xAxis).selectAll('text').style('font-size', 16);
      external_d3_["select"](this.yAxisElement).attr('class', 'y axis').call(yAxis); // d3.select(this.yAxisElement)
      //     .append('text')
      //     .attr('x', -20)
      //     .attr('y', -10)
      //     .style("text-anchor", "central")
      //     .style('fill', 'black')
      //     .text("%");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          svgDimen = _this$state2.svgDimen,
          top_margin = _this$state2.top_margin,
          bottom_margin = _this$state2.bottom_margin,
          data = _this$state2.data,
          x = _this$state2.x,
          max = _this$state2.max;
      var bar_height = svgDimen.height - top_margin - bottom_margin;
      return external_react_default.a.createElement("g", {
        className: "Axis"
      }, external_react_default.a.createElement("g", {
        className: "xAxis",
        transform: "translate(40,".concat(svgDimen.height - bottom_margin, ")"),
        ref: function ref(el) {
          return _this2.xAxisElement = el;
        }
      }), external_react_default.a.createElement("g", {
        className: "yAxis",
        transform: "translate(40,".concat(top_margin, ")"),
        ref: function ref(el) {
          return _this2.yAxisElement = el;
        }
      }), data.map(function (d, i) {
        return external_react_default.a.createElement("g", {
          key: i,
          className: "bar".concat(d.Date),
          transform: "translate(".concat(40 + x.bandwidth() * i + x.bandwidth() / 2, " ,").concat(svgDimen.height - bottom_margin, ")")
        }, external_react_default.a.createElement(StockChart_Bars, {
          key: i,
          data: d,
          max: max,
          bar_width: x.bandwidth(),
          bar_height: bar_height
        }));
      }));
    }
  }]);

  return Axis;
}(external_react_default.a.Component);

var StockChart_Bars =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Bars, _Component);

  function Bars(props) {
    var _this3;

    Object(classCallCheck["a" /* default */])(this, Bars);

    _this3 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Bars).call(this, props));
    var _this3$props = _this3.props,
        data = _this3$props.data,
        bar_width = _this3$props.bar_width,
        bar_height = _this3$props.bar_height,
        max = _this3$props.max;
    _this3.state = {
      data: data,
      bar_width: bar_width,
      bar_height: bar_height,
      max: max
    };
    return _this3;
  }

  Object(createClass["a" /* default */])(Bars, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawBar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.drawBar();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var bar_width = nextProps.bar_width,
          bar_height = nextProps.bar_height,
          data = nextProps.data,
          max = nextProps.max;
      this.setState({
        bar_height: bar_height,
        bar_width: bar_width,
        data: data,
        max: max
      });
    } // shouldComponentUpdate(nextProps, nextState){
    //     return this.props.data !== nextProps.data;
    // }

  }, {
    key: "drawBar",
    value: function drawBar() {
      var _this$state3 = this.state,
          bar_width = _this$state3.bar_width,
          bar_height = _this$state3.bar_height,
          data = _this$state3.data,
          max = _this$state3.max;
      var r_bar_width = 40,
          //bar_width * 0.3,
      rate = bar_height / max;
      if (data.DividendPayoutRatio > 100) data.DividendPayoutRatio = 100;
      var greybarHeight = data.ConsolidatedNetIncome / 100 * (100 - data.DividendPayoutRatio) * rate;
      var redbarHeight = data.ConsolidatedNetIncome / 100 * data.DividendPayoutRatio * rate;
      external_d3_["select"](this.el).selectAll('*').remove();
      external_d3_["select"](this.el).append('rect').attr('class', 'greybar').attr('x', -r_bar_width / 2).attr('y', -greybarHeight);
      external_d3_["select"](this.el).append('rect').attr('class', 'redbar').attr('x', -r_bar_width / 2).attr('y', -(greybarHeight + redbarHeight) + 5).attr('width', r_bar_width).attr('height', redbarHeight - 5).style('fill', '#df072c'); //round

      external_d3_["select"](this.el).append('rect').attr('rx', 5).attr('ry', 5).attr('x', -r_bar_width / 2).attr('y', -(greybarHeight + redbarHeight)).attr('width', r_bar_width).attr('height', redbarHeight).style('fill', '#df072c'); //for transition

      console.log(external_d3_["select"](".greybar"), "greybar");
      external_d3_["select"](".greybar").transition().delay(1000).attr('x', -r_bar_width / 2).attr('y', -greybarHeight).attr('width', r_bar_width).attr('height', greybarHeight).style('fill', '#bdbbbc');
      external_d3_["select"](this.el).append('line').style('stroke-width', 3).style('stroke', 'black').attr('x1', 0).attr('y1', -greybarHeight - 10).attr('x2', 0).attr('y2', -greybarHeight + 10);
      external_d3_["select"](this.el).append('line').style('stroke-width', 3).style('stroke', 'black').attr('x1', 0).attr('y1', -(greybarHeight + redbarHeight) - 10).attr('x2', 0).attr('y2', -(greybarHeight + redbarHeight) + 10);
      external_d3_["select"](this.el).append('text').attr('x', r_bar_width / 2 + 5).attr('y', -greybarHeight).attr('alignment-baseline', 'central').attr('text-anchor', 'start').style('font-size', 15).style('fill', '#bdbbbc').text(Math.floor(data.ConsolidatedNetIncome / 100 * (100 - data.DividendPayoutRatio)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return external_react_default.a.createElement("g", {
        ref: function ref(el) {
          return _this4.el = el;
        }
      });
    }
  }]);

  return Bars;
}(external_react_["Component"]);

var StockChart_StockChart =
/*#__PURE__*/
function (_Component2) {
  Object(inherits["a" /* default */])(StockChart, _Component2);

  function StockChart(props) {
    var _this5;

    Object(classCallCheck["a" /* default */])(this, StockChart);

    _this5 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(StockChart).call(this, props));
    var _this5$props = _this5.props,
        width = _this5$props.width,
        height = _this5$props.height,
        data = _this5$props.data;
    var margin = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 60
    },
        svgDimen = {
      width: width - margin.left - margin.right,
      height: height - margin.top - margin.bottom
    };
    _this5.state = {
      svgDimen: svgDimen,
      margin: margin,
      data: data
    };
    return _this5;
  }

  Object(createClass["a" /* default */])(StockChart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var width = nextProps.width,
          height = nextProps.height,
          data = nextProps.data;
      var margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 60
      },
          svgDimen = {
        width: width - margin.left - margin.right,
        height: height - margin.top - margin.bottom
      };
      this.setState({
        svgDimen: svgDimen,
        margin: margin,
        data: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      //d3.select("text").node().getComputedTextLength()
      var _this$state4 = this.state,
          svgDimen = _this$state4.svgDimen,
          data = _this$state4.data;
      var real_width = svgDimen.width * 0.9,
          top_legend_height = svgDimen.height * 0.1,
          bottom_legend_height = svgDimen.height * 0.25;
      return external_react_default.a.createElement("svg", {
        width: svgDimen.width,
        transform: "translate(".concat((this.props.width - svgDimen.width) / 2, ", 0)"),
        height: svgDimen.height
      }, external_react_default.a.createElement("g", {
        className: "topLegend",
        transform: "translate(".concat(svgDimen.width / 2, ", 0)")
      }, external_react_default.a.createElement("text", {
        x: "0",
        y: "0",
        alignmentBaseline: "text-before-edge",
        textAnchor: "middle",
        style: {
          fontSize: 22,
          fill: '#bdbbbc',
          fontWeight: 'bold'
        }
      }, "*Net Income")), external_react_default.a.createElement(StockChart_Axis, {
        svgDimen: svgDimen,
        top_margin: top_legend_height + 10,
        bottom_margin: bottom_legend_height,
        data: data
      }), external_react_default.a.createElement("g", {
        className: "bottomLegend",
        transform: "translate(".concat((svgDimen.width - real_width) / 2, ", ").concat(svgDimen.height - bottom_legend_height, ")")
      }, external_react_default.a.createElement("g", {
        className: "leftLegend",
        transform: "translate(0, ".concat(bottom_legend_height / 2, ")")
      }, external_react_default.a.createElement("circle", {
        r: "5",
        cx: "5",
        cy: "0",
        fill: "#de0730"
      }), external_react_default.a.createElement("text", {
        x: "15",
        y: "0",
        alignmentBaseline: "central",
        textAnchor: "start",
        style: {
          fontSize: 16,
          fill: '#bdbbbc'
        }
      }, "Dividend")), external_react_default.a.createElement("g", {
        className: "centerLegend",
        transform: "translate(".concat(svgDimen.width / 3, ", ").concat(bottom_legend_height / 2, ")")
      }, external_react_default.a.createElement("circle", {
        r: "5",
        cx: "5",
        cy: "0",
        fill: "#bdbbbc"
      }), external_react_default.a.createElement("text", {
        x: "15",
        y: "0",
        alignmentBaseline: "central",
        textAnchor: "start",
        style: {
          fontSize: 16,
          fill: '#bdbbbc'
        }
      }, "Retained"), external_react_default.a.createElement("text", {
        x: "15",
        dy: "15",
        alignmentBaseline: "central",
        textAnchor: "start",
        style: {
          fontSize: 16,
          fill: '#bdbbbc'
        }
      }, "Earnings")), external_react_default.a.createElement("g", {
        className: "rightLegend",
        transform: "translate(".concat(svgDimen.width * 2 / 3, ", ").concat(bottom_legend_height / 2, ")")
      }, external_react_default.a.createElement("text", {
        x: "15",
        y: "0",
        alignmentBaseline: "central",
        textAnchor: "start",
        style: {
          fontSize: 16,
          fill: '#bdbbbc'
        }
      }, "% Pay-out"), external_react_default.a.createElement("text", {
        x: "40",
        dy: "15",
        alignmentBaseline: "central",
        textAnchor: "start",
        style: {
          fontSize: 16,
          fill: '#bdbbbc'
        }
      }, "ratio"))));
    }
  }]);

  return StockChart;
}(external_react_["Component"]);

/* harmony default export */ var StockGraph_StockChart = (StockChart_StockChart);
// CONCATENATED MODULE: ./components/StockGraph/index.js









var StockGraph_StockGraph =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(StockGraph, _Component);

  function StockGraph(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, StockGraph);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(StockGraph).call(this, props));
    var _this$props = _this.props,
        parentWidth = _this$props.parentWidth,
        parentHeight = _this$props.parentHeight,
        data = _this$props.data;
    console.log(data, 'from index');
    _this.state = {
      data: data,
      width: parentWidth > 600 ? 600 : Math.max(parentWidth, 400),
      height: Math.max(parentHeight, 400)
    };
    return _this;
  }

  Object(createClass["a" /* default */])(StockGraph, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var parentWidth = nextProps.parentWidth,
          parentHeight = nextProps.parentHeight,
          data = nextProps.data;
      this.setState({
        data: data,
        width: parentWidth > 600 ? 600 : Math.max(parentWidth, 400),
        height: Math.max(parentHeight, 400)
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.data.length == 0) {
        return external_react_default.a.createElement(external_react_["Fragment"], null, "No data");
      } else {
        return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(StockGraph_StockChart, {
          data: this.state.data,
          width: this.state.width,
          height: this.state.height
        }));
      }
    }
  }]);

  return StockGraph;
}(external_react_["Component"]);

/* harmony default export */ var components_StockGraph = __webpack_exports__["a"] = (ResponsiveWrapper(StockGraph_StockGraph));

/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

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

/***/ "7X5e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "8ET1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

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

/***/ "8yIF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CircularGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LHPp");



var SecurityCard = function SecurityCard(_ref) {
  var security = _ref.security;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "card-header",
    style: {
      flexGrow: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-header-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Security Name"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CircularGraph__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    security: security
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "card-footer",
    style: {
      marginTop: 'auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "card-footer-item"
  }, "View"), security.isIdea ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "card-footer-item"
  }, "Remove") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "card-footer-item"
  }, "Add to portfolio"))));
};

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SecurityCard));

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

/***/ "FdmI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

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

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

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

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "LHPp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("Rbzu");

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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/CircularGraph/D3blackbox.js








function D3blackbox(D3render) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(inherits["a" /* default */])(Blackbox, _Component);

      function Blackbox() {
        var _getPrototypeOf2;

        var _this;

        Object(classCallCheck["a" /* default */])(this, Blackbox);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Blackbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

        Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "anchor", external_react_default.a.createRef());

        return _this;
      }

      Object(createClass["a" /* default */])(Blackbox, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          D3render(this.anchor, this.props, this.state);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          D3render(this.anchor, this.props, this.state);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              x = _this$props.x,
              y = _this$props.y;
          var Component = this.props.component || 'g';
          return external_react_default.a.createElement(Component, {
            transform: "translate(".concat(x, ", ").concat(y, ")"),
            ref: this.anchor
          });
        }
      }]);

      return Blackbox;
    }(external_react_["Component"])
  );
}
var D3blackbox_useD3 = function useD3(render) {
  var refAnchor = external_react_default.a.useRef(null);
  external_react_default.a.useEffect(function () {
    render(refAnchor.current);
  });
  return refAnchor;
};
// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__("0i/h");

// CONCATENATED MODULE: ./components/CircularGraph/CircularGraph.js
//Better circula graph from swizec
//
// https://codesandbox.io/s/x970vx8x8q
//import React from "react";


var CircularGraph = D3blackbox(function (anchor, props, state) {
  var width = props.width,
      height = props.height,
      security = props.security,
      t = props.t,
      d = props.d,
      b = props.b,
      g = props.g,
      v = props.v;
  var colors = {
    red: '#f45b63',
    orange: '#f49d73',
    green: '#72c14a'
  };

  var setColor = function setColor(total) {
    return total <= 50 ? colors.red : total >= 70 ? colors.green : colors.orange;
  };

  var setFontSize = function setFontSize(radius) {
    return radius <= 120 ? 11 : radius >= 180 ? 14 : 12;
  };

  var radius = Math.min(width, height) / 1.9,
      spacing = 0.09;
  var dataUpdated = [{
    index: 0.7,
    text: 'Dividend',
    value: d / 100,
    allValues: [d, 25, 50, 75]
  }, {
    index: 0.6,
    text: 'Balans',
    value: b / 100,
    allValues: [b, 25, 50, 75]
  }, {
    index: 0.5,
    text: 'Growth',
    value: g / 100,
    allValues: [g, 25, 50, 75]
  }, {
    index: 0.4,
    text: 'Valuation',
    value: v / 100,
    allValues: [v, 25, 50, 75]
  }];
  var tooltip = external_d3_["select"](".tooltip-".concat(security.id));
  external_d3_["select"](anchor.current).select('g').remove();
  var arcBody = external_d3_["arc"]().startAngle(0).endAngle(function (d) {
    return d.value * 2 * Math.PI;
  }).innerRadius(function (d) {
    return d.index * radius;
  }).outerRadius(function (d) {
    return (d.index + spacing) * radius;
  }).cornerRadius(2);
  /** sparkline */

  function sparkline(elemId, data) {
    var width = 150;
    var height = 30;
    var x = external_d3_["scaleLinear"]().range([0, width]);
    var y = external_d3_["scaleLinear"]().range([height, 0]);
    x.domain([0, 4]);
    y.domain([0, 100]);
    var line = external_d3_["line"]().x(function (d, i) {
      return x(i);
    }).y(function (d, i) {
      return y(d);
    });
    var sparklineSvg = external_d3_["select"](elemId).append('svg').attr('width', width).attr('class', 'sparkline-wrapper-svg').attr('height', height).append('g').attr('transform', 'translate(0, 2)');
    sparklineSvg.append('path').datum(data).attr('class', 'sparkline').attr('id', 'current-path-' + elemId.replace('#', '')).attr('d', line);
  }
  /** sparkline */


  var svg = external_d3_["select"](anchor.current).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
  svg.append('text').attr('class', 'center-text').style('font-weight', 'bold').style('alignment-baseline', 'middle').style('text-anchor', 'middle').style('font-size', 20).style('fill', setColor(t)).text(t + '%');
  var field = svg.selectAll('g').data(dataUpdated, function (d) {
    return d.value;
  }).enter().append('g');
  var arcs = field.append('path').attr('class', 'arc-body').style('fill', function (d) {
    return setColor(t);
  });
  field.append('text').attr('dy', '-.15em').attr('dx', '-0.75em').style('text-anchor', 'middle').attr('transform', function (d) {
    return 'translate(' + [0, -d.index * radius] + ')';
  }).style('font-size', function () {
    return setFontSize(radius);
  }).style('font-weight', 'bold').style('fill', setColor(t)).text(function (d) {
    return d.text.split('')[0];
  });
  arcs.style('stroke', '#fff').style('stroke-width', 2).on('mouseover', function (d) {
    var position = anchor.current.getBoundingClientRect();
    external_d3_["select"](this).style('stroke-width', 0);
    tooltip.html("<b>".concat(d.text, "</b><br/>\n          <div class='sparkGraph sparkGraph-").concat(security.id, "'></div>\n          ").concat(d.allValues.join(' - '), "\n          ")) // .style("left", `${d3.event.pageX - 160}px`)
    // .style("top", `${d3.event.pageY - 80}px`)
    .style('left', "".concat(position.x + position.width / 2 - 140, "px")).style('top', "".concat(position.y + position.height / 2 - 40, "px")).transition().duration(200).style('opacity', 0.9);
    sparkline(".sparkGraph-".concat(security.id), d.allValues);
  }).on('mouseout', function (d) {
    tooltip.transition().duration(500).style('opacity', 0);
    external_d3_["select"](this).style('stroke-width', 2);
  }).transition().duration(750).attrTween('d', arcTween(arcBody));

  function arcTween(arc) {
    return function (d) {
      var i = external_d3_["interpolateNumber"](0, d.value);
      return function (t) {
        d.value = i(t);
        return arc(d);
      };
    };
  }
});
/* harmony default export */ var CircularGraph_CircularGraph = (CircularGraph);
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// CONCATENATED MODULE: ./components/CircularGraph/ResponsiveWrapper.js








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
              minWidth: '254px',
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
// CONCATENATED MODULE: ./components/CircularGraph/index.js












var CircularGraph_Graph =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Graph, _Component);

  function Graph() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Graph);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Graph)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "state", {
      svgDimensions: null,
      width: null,
      height: null
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Graph, [{
    key: "render",
    value: function render() {
      var svgDimensions = this.state.svgDimensions;
      var _this$props = this.props,
          security = _this$props.security,
          data = _this$props.data,
          year = _this$props.year;
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("svg", {
        width: svgDimensions.width,
        height: svgDimensions.height
      }, external_react_default.a.createElement(CircularGraph_CircularGraph, {
        x: 0,
        y: 0,
        width: svgDimensions.width,
        height: svgDimensions.height,
        t: security.t,
        d: security.d,
        b: security.b,
        g: security.g,
        v: security.v,
        security: security
      })), external_react_default.a.createElement("div", {
        className: "tooltip tooltip-".concat(security.id),
        style: {
          height: '75px'
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var parentWidth = nextProps.parentWidth,
          parentHeight = nextProps.parentHeight;
      var svgDimensions = {
        width: Math.max(parentWidth, 200),
        height: 350
      };
      var width = svgDimensions.width;
      var height = svgDimensions.height;
      prevState = Object(objectSpread["a" /* default */])({}, prevState, {
        svgDimensions: svgDimensions,
        width: width,
        height: height
      });
      return prevState;
    }
  }]);

  return Graph;
}(external_react_["Component"]);

/* harmony default export */ var components_CircularGraph = __webpack_exports__["a"] = (ResponsiveWrapper(CircularGraph_Graph));

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

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "Rbzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tvLF");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s4hn");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1qCV");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("azxR");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "SY1S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tan1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JYC+");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("R3/3");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0tNF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LkAs");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Moms");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bMj6");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hZod");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tEuJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_LayoutBasic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("CXsl");
/* harmony import */ var _components_GaugeGraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("CjGY");
/* harmony import */ var _components_SecurityCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("8yIF");
/* harmony import */ var _components_CircularGraph__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("LHPp");
/* harmony import */ var _components_AreaGraph__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("rMzG");
/* harmony import */ var _components_HorizonChart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("yOu0");
/* harmony import */ var _components_StockGraph__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("1A0R");
/* harmony import */ var _components_NegativeGraph__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("fo2d");
/* harmony import */ var _components_BalanceGraph__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("d4dL");






















var securityTemp = {
  b: 70,
  currency: 'EUR',
  d: 4,
  g: 3,
  id: 'bjo5t',
  isIdea: true,
  liveData: {
    changePercent: -1.0183,
    cumulativeVolume: 33,
    dateTime: '2019-03-11T15:22:07.766Z',
    dayHigh: 0.972,
    dayLow: 0.972,
    last: 0.972,
    netChange: -0.01,
    open: 0.972,
    totalTurnoverCurrency: 32.076
  },
  name: '11 88 0 Solutions',
  sector: 'CommercialServices',
  t: 12,
  ticker: 'TGT',
  v: 70
};

var Security =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Security, _Component);

  function Security() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Security);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Security).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Security, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          session = _this$props.session,
          navMenu = _this$props.navMenu,
          security = _this$props.data.security;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_LayoutBasic__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, this.props, {
        title: "VEB - ".concat(security.name),
        description: security.name,
        session: session,
        navMenu: true,
        signinBtn: true
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns is-desktop",
        class: "has-background-white-ter"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("figure", {
        className: "image is-128x128"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://bulma.io/images/placeholders/128x128.png"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://bulma.io/images/placeholders/128x128.png"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://bulma.io/images/placeholders/128x128.png"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://bulma.io/images/placeholders/128x128.png"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-10"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Key figures ".concat(security.name, " (").concat(security.ticker, ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-7"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content",
        style: {
          height: '455px',
          overflowY: 'scroll'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "button is-danger"
      }, "+ Add to portfolio"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, security.longBusinessDescription), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "has-text-danger"
      }, "Important notes"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda delectus, doloremque eligendi hic suscipit!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, provident?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum id ipsam provident soluta tenetur veniam vitae. Eos esse harum labore quisquam soluta tenetur velit?")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-5"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_CircularGraph__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        security: securityTemp
      }))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "\xA0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box  has-text-grey"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        class: "subtitle is-5 has-text-weight-bold has-text-grey",
        style: {
          height: '10px'
        }
      }, "Price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-4"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        className: "table is-striped is-narrow is-hoverable is-fullwidth "
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Date"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "5/2/2019")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Time"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "10:57")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "27,91")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Difference"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "0,33")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Difference (%)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "1,20")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Previous opening price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "27,75")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Previous closing price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "27,58")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Lowest price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "27,75")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Highest price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "27,92")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Volume"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "678.322")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Currency"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "EUR")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "Market"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "XAMS"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-8"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_AreaGraph__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        data: security.historyPrice100
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box  has-text-grey"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "Historic performance"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_HorizonChart__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        data: [security].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(security.top5IndustryHistory.map(function (t) {
          return t.security;
        })))
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box  has-text-grey"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        class: "subtitle is-5 has-text-weight-bold has-text-grey",
        style: {
          height: '10px'
        }
      }, "Price basics ", security.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_GaugeGraph__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        data: security.calculated
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "200"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam, consequuntur dolor dolorum eveniet ipsum molestiae nobis nostrum nulla numquam optio pariatur quae quisquam reiciendis tempore velit voluptas. Aliquid, ullam.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "150"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi architecto aspernatur at dolores, mollitia necessitatibus numquam officiis perspiciatis quasi repellat sequi, tempore tenetur? At consectetur deserunt dolorum error ipsam!")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns is-desktop"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-mobile is-tablet is-two-third-desktop is-two-thirds-widescreen is-two-thirds-fullhd"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box  has-text-grey"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        class: "subtitle is-5 has-text-weight-bold has-text-grey",
        style: {
          height: '10px'
        }
      }, "Profit distribution"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-5"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "In millions \u20AC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        className: "table is-striped"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "2018")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "2017")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "2016"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Revenue")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "2,492"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "2,492"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "2,492")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Gross profit")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "1,196"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "1,196"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "1,196")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Operating income")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "333,1"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "315"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "243")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Net income")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "267,9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "267,9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "267,9")))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-7"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_StockGraph__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
        data: security.last3YearsDividend
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-mobile is-tablet is-one-thirds-desktop is-one-thirds-widescreen is-one-thirds-fullhd"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box  has-text-grey"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        class: "subtitle is-5 has-text-weight-bold has-text-grey",
        style: {
          height: '10px'
        }
      }, "Dividend"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns is-mobile",
        style: {
          height: '40px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-one-two-mobile is-one-two-tablet has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "subtitle is-3 has-text-weight-bold has-text-grey"
      }, "3.25%")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-one-two-mobile is-one-two-tablet has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "subtitle is-3 has-text-weight-bold has-text-grey"
      }, "\u20AC2,25"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns is-mobile",
        style: {
          height: '72px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-one-two-mobile is-one-two-tablet has-text-centered"
      }, "Dividend Rate"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-one-two-mobile is-one-two-tablet has-text-centered"
      }, "Dividend Price")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: '255px',
          overflowY: 'scroll'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Explanation"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reiciendis, voluptates? Earum ex, harum laudantium maxime molestias odio ratione ut! Dolore earum fugiat pariatur repudiandae veritatis. Culpa debitis pariatur vel.50"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque expedita libero magnam minima perspiciatis suscipit tempore? Ab atque iste optio!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis excepturi minima molestias neque perspiciatis, quas?"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box  has-text-grey"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        class: "subtitle is-5 has-text-weight-bold has-text-grey",
        style: {
          height: '10px'
        }
      }, "Cashflow"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-1"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        class: "icon is-small is-right"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        class: "fa fa-info-circle"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        class: "fas fa-check"
      }), "EBITDA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-2"
      }, "Cashflow from Operating activities"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-2"
      }, "Cashflow from Investing activites"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-2"
      }, "Cashflow from Financing activites"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-2"
      }, "Change in Cash"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-1"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_NegativeGraph__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        data: security.calculated5Y
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content",
        style: {
          height: '380px',
          overflowY: 'scroll'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "has-text-danger"
      }, "Important!: "), " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at delectus dolor doloremque facilis iste non quam sapiente tempora totam! A accusantium, aliquid architecto consequuntur dolore ducimus, esse est ex explicabo facilis fugit id illum nisi nulla odio quidem quisquam, repellendus ut vel voluptatum! Assumenda dolorum eaque iste neque! Dicta esse facere, laudantium, minus nam nihil non nostrum officia perspiciatis, praesentium quos repudiandae. Aspernatur dolorum eum harum odio perspiciatis porro provident quasi recusandae repellendus reprehenderit! Blanditiis cupiditate dolorum iusto repellat tenetur! Ab eaque et facere maiores mollitia neque quod repellat reprehenderit similique? Ad aliquam autem beatae cupiditate doloribus, dolorum eius ipsa laboriosam modi nulla odit, quasi temporibus unde! Ab cum dolore maxime optio quae quo, suscipit totam! Beatae delectus deleniti doloremque eaque eius esse explicabo facere harum."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Explanation"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!")))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "box  has-text-grey"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        class: "subtitle is-5 has-text-weight-bold has-text-grey",
        style: {
          height: '10px'
        }
      }, "Balance"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_BalanceGraph__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
        data: security.last5AnnualTotals
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "content",
        style: {
          height: '400px',
          overflowY: 'scroll'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "has-text-danger"
      }, "Important!: "), " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at delectus dolor doloremque facilis iste non quam sapiente tempora totam! A accusantium, aliquid architecto consequuntur dolore ducimus, esse est ex explicabo facilis fugit id illum nisi nulla odio quidem quisquam, repellendus ut vel voluptatum! Assumenda dolorum eaque iste neque! Dicta esse facere, laudantium, minus nam nihil non nostrum officia perspiciatis, praesentium quos repudiandae. Aspernatur dolorum eum harum odio perspiciatis porro provident quasi recusandae repellendus reprehenderit! Blanditiis cupiditate dolorum iusto repellat tenetur! Ab eaque et facere maiores mollitia neque quod repellat reprehenderit similique? Ad aliquam autem beatae cupiditate doloribus, dolorum eius ipsa laboriosam modi nulla odit, quasi temporibus unde! Ab cum dolore maxime optio quae quo, suscipit totam! Beatae delectus deleniti doloremque eaque eius esse explicabo facere harum."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Explanation"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query, userAgent, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent; // get some data from graphql endpoint

                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()('https://vde-app4.app.veb.net/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    operationName: null,
                    variables: {},
                    query: "\n        {\n          security(id: \"".concat(query.id, "\") {\n            id\n            name\n            longBusinessDescription\n            ticker\n            globalQuotes {\n              date\n              close\n            }\n            calculated {\n              PERatioCompany\n              PERatioBranche\n              PERatioMarket\n              ROICCompany\n              ROICBranche\n              ROICMarket\n              ROECompany\n              ROEBranche\n              ROEMarket\n              RevenueGrowthCompany\n              RevenueGrowthBranche\n              RevenueGrowthMarket\n              DebtRatioCompany\n              DebtRatioBranche\n              DebtRatioMarket\n              NettDEBTEBITDACompany\n              NettDEBTEBITDABranche\n              NettDEBTEBITDAMarket\n            }\n            calculated5Y {\n              LY\n              SalesOrRevenueLY\n              SalesOrRevenueLYMin1\n              SalesOrRevenueLYMin2\n              DividendPayOutLY\n              DividendPayOutLYMin1\n              DividendPayOutLYMin2\n              NetoperatingCashFlowLY\n              NetoperatingCashFlowLYMin1\n              NetoperatingCashFlowLYMin2\n              NetoperatingCashFlowLYMin3\n              NetoperatingCashFlowLYMin4\n              NetFinancingCashFlowLY\n              NetFinancingCashFlowLYMin1\n              NetFinancingCashFlowLYMin2\n              NetFinancingCashFlowLYMin3\n              NetFinancingCashFlowLYMin4\n              NetchangeInCashLY\n              NetchangeInCashLYMin1\n              NetchangeInCashLYMin2\n              NetchangeInCashLYMin3\n              NetchangeInCashLYMin4\n              NetInvestingCashFlowLY\n              NetInvestingCashFlowLYMin1\n              NetInvestingCashFlowLYMin2\n              NetInvestingCashFlowLYMin3\n              NetInvestingCashFlowLYMin4\n              EbitdaLY\n              EbitdaLYMin1\n              EbitdaLYMin2\n              EbitdaLYMin3\n              EbitdaLYMin4\n            }\n            historyPrice100 {\n              Date\n              Volume\n              Close\n            }\n            top5IndustryHistory {\n              security {\n                id\n                name\n                ticker\n                globalQuotes {\n                  date\n                  close\n                }\n              }\n            }\n            globalQuotes {\n              date\n              close\n            }\n            last3YearsDividend {\n              Date\n              ConsolidatedNetIncome\n              ConsolidatedNetIncomeEUR\n              DividendPayoutRatio\n              RetainedEarningsEUR\n              Currency\n              RateEUR\n            }\n            last5AnnualTotals {\n              Date\n              TotalLiabilitiesStockholdersEquity\n              TotalEquity\n              TotalLiabilities\n              TotalCash\n              NonCurrentAssetsNoGoodwill\n              CurrentAssetsNoCash\n              Goodwill\n            } \n          }\n        }\n        ")
                  })
                }).then(function (r) {
                  return r.json();
                }).then(function (r) {
                  return r.data;
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

  return Security;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Security);

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "d4dL":
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

// CONCATENATED MODULE: ./components/BalanceGraph/ResponsiveWrapper.js








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
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("FdmI");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__("0i/h");

// CONCATENATED MODULE: ./components/BalanceGraph/BalanceChart.js











var BalanceChart_Chart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Chart, _Component);

  function Chart(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Chart);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Chart).call(this, props));
    var _this$props = _this.props,
        data = _this$props.data,
        width = _this$props.width,
        height = _this$props.height;
    _this.state = {
      data: data,
      width: width,
      height: height
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Chart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var width = nextProps.width,
          height = nextProps.height,
          data = nextProps.data;
      this.setState({
        width: width,
        height: height,
        data: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          width = _this$state.width,
          height = _this$state.height,
          data = _this$state.data;
      var margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 0
      },
          svgDimen = {
        width: width - margins.left - margins.right,
        height: height - margins.bottom - margins.top
      },
          o_imgW = 514,
          o_imgH = 64,
          s_imgW = svgDimen.width * 0.6,
          s_imgH = s_imgW / o_imgW * o_imgH,
          top_legend_height = svgDimen.width * 0.03,
          legend_label_height = svgDimen.width * 0.03;
      var left_data = [data.TotalCash, data.NonCurrentAssetsNoGoodwill, data.CurrentAssetsNoCash, data.Goodwill];
      var right_data = [data.TotalEquity, 0, 0, data.TotalLiabilities];
      return external_react_default.a.createElement("svg", {
        width: svgDimen.width,
        height: svgDimen.height + 10
      }, external_react_default.a.createElement("g", {
        width: svgDimen.width,
        height: svgDimen.height,
        transform: "translate(".concat(margins.left, ", 0)")
      }, external_react_default.a.createElement("g", {
        className: "chartBase",
        transform: "translate(".concat(svgDimen.width / 2, " , 0)")
      }, external_react_default.a.createElement("g", {
        className: "topLegend",
        transform: "translate(0 , ".concat(top_legend_height - 10, ")")
      }, external_react_default.a.createElement("text", {
        x: -s_imgW / 4,
        y: 0,
        alignmentBaseline: "hanging",
        textAnchor: "middle",
        style: {
          fontSize: 16,
          fill: '#bdbbbc',
          fontWeight: 'bold'
        }
      }, "Assets"), external_react_default.a.createElement("text", {
        x: s_imgW / 4,
        y: 0,
        alignmentBaseline: "hanging",
        textAnchor: "middle",
        style: {
          fontSize: 16,
          fill: '#bdbbbc',
          fontWeight: 'bold'
        }
      }, "Total Liabilities")), external_react_default.a.createElement("g", {
        className: "leftLegend",
        transform: "translate(".concat(-svgDimen.width / 2, " , ").concat(top_legend_height + legend_label_height, ")")
      }, external_react_default.a.createElement("circle", {
        r: "5",
        cx: "35",
        cy: "0",
        fill: "#63ae2d"
      }), external_react_default.a.createElement("text", {
        x: "50",
        y: "2",
        textAnchor: "start",
        alignmentBaseline: "middle",
        style: {
          fontSize: 14,
          fill: '#bdbbbc'
        }
      }, "Cash"), external_react_default.a.createElement("circle", {
        r: "5",
        cx: "35",
        cy: legend_label_height,
        fill: "#a6ae2d"
      }), external_react_default.a.createElement("text", {
        x: "50",
        y: legend_label_height + 2,
        textAnchor: "start",
        alignmentBaseline: "middle",
        style: {
          fontSize: 14,
          fill: '#bdbbbc'
        }
      }, "Fixed"), external_react_default.a.createElement("circle", {
        r: "5",
        cx: "35",
        cy: legend_label_height * 2,
        fill: "#ef7d00"
      }), external_react_default.a.createElement("text", {
        x: "50",
        y: legend_label_height * 2 + 2,
        textAnchor: "start",
        alignmentBaseline: "middle",
        style: {
          fontSize: 14,
          fill: '#bdbbbc'
        }
      }, "Current"), external_react_default.a.createElement("circle", {
        r: "5",
        cx: "35",
        cy: legend_label_height * 3,
        fill: "#de0730"
      }), external_react_default.a.createElement("text", {
        x: "50",
        y: legend_label_height * 3 + 2,
        textAnchor: "start",
        alignmentBaseline: "middle",
        style: {
          fontSize: 14,
          fill: '#bdbbbc'
        }
      }, "Goodwill")), external_react_default.a.createElement("g", {
        className: "rightLegend",
        transform: "translate(".concat(svgDimen.width * 0.3, " , ").concat(top_legend_height + legend_label_height, ")")
      }, external_react_default.a.createElement("circle", {
        r: "5",
        cx: "10",
        cy: "0",
        fill: "#63ae2d"
      }), external_react_default.a.createElement("text", {
        x: "30",
        y: "2",
        textAnchor: "start",
        alignmentBaseline: "middle",
        style: {
          fontSize: 14,
          fill: '#bdbbbc'
        }
      }, "Equity"), external_react_default.a.createElement("circle", {
        r: "5",
        cx: "10",
        cy: legend_label_height,
        fill: "#de0730"
      }), external_react_default.a.createElement("text", {
        x: "30",
        y: legend_label_height + 2,
        textAnchor: "start",
        alignmentBaseline: "middle",
        style: {
          fontSize: 14,
          fill: '#bdbbbc'
        }
      }, "Debt")), external_react_default.a.createElement("g", {
        className: "chartBoard",
        transform: "translate(0 , ".concat(svgDimen.height - s_imgH - legend_label_height, ")")
      }, external_react_default.a.createElement(BalanceChart_Bar, {
        transX: -s_imgW / 4,
        svgDimen: svgDimen,
        bar_height: svgDimen.height - s_imgH - top_legend_height - legend_label_height,
        data: left_data
      }), external_react_default.a.createElement(BalanceChart_Bar, {
        transX: s_imgW / 4,
        svgDimen: svgDimen,
        bar_height: svgDimen.height - s_imgH - top_legend_height - legend_label_height,
        data: right_data
      })), external_react_default.a.createElement("image", {
        href: "/static/balance.png",
        width: s_imgW,
        height: s_imgH,
        x: -s_imgW / 2,
        y: svgDimen.height - s_imgH - legend_label_height
      }), external_react_default.a.createElement("g", {
        className: "bottomLegend",
        transform: "translate(0 , ".concat(svgDimen.height - legend_label_height + 10, ")")
      }, external_react_default.a.createElement("text", {
        alignmentBaseline: "hanging",
        textAnchor: "middle",
        style: {
          fontSize: 16,
          fill: '#bdbbbc',
          fontWeight: 'bold'
        }
      }, "\u20AC ", (data.TotalLiabilitiesStockholdersEquity / 100).toFixed(2), " mld")))));
    }
  }]);

  return Chart;
}(external_react_["Component"]);

var BalanceChart_Bar =
/*#__PURE__*/
function (_Component2) {
  Object(inherits["a" /* default */])(Bar, _Component2);

  function Bar(props) {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, Bar);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Bar).call(this, props));
    var _this2$props = _this2.props,
        transX = _this2$props.transX,
        bar_height = _this2$props.bar_height,
        svgDimen = _this2$props.svgDimen,
        data = _this2$props.data;
    _this2.state = {
      transX: transX,
      bar_height: bar_height,
      svgDimen: svgDimen,
      data: data
    };
    return _this2;
  }

  Object(createClass["a" /* default */])(Bar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawBar();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var transX = nextProps.transX,
          svgDimen = nextProps.svgDimen,
          bar_height = nextProps.bar_height,
          data = nextProps.data;
      this.setState({
        transX: transX,
        bar_height: bar_height,
        svgDimen: svgDimen,
        data: data
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.drawBar();
    }
  }, {
    key: "drawBar",
    value: function drawBar() {
      var _this$state2 = this.state,
          svgDimen = _this$state2.svgDimen,
          bar_height = _this$state2.bar_height,
          data = _this$state2.data;
      var bar_width = svgDimen.width * 0.25,
          rate = bar_height / 100;
      var step = 0;
      var barArea = external_d3_["select"](this.el);
      var colors = ['#63ae2d', '#a6ae2d', '#ef7d00', '#de0730'];
      barArea.selectAll('*').remove();
      var t_height = 0;

      for (var p = 0; p < data.length; p++) {
        step += data[p];
      }

      step = 100 / step;

      for (var _p = 0; _p < data.length; _p++) {
        data[_p] = data[_p] * step;
        t_height += data[_p] * rate;
      }

      var _loop = function _loop(i) {
        barArea.append('rect').attr('x', -bar_width / 2).attr('y', function () {
          var sh = 0;

          for (var k = 0; k < i; k++) {
            sh += data[k] * rate;
          }

          return -(t_height - sh);
        }).attr('width', bar_width).attr('height', data[i] * rate).style('fill', colors[i]);
        barArea.append('text').attr('x', 0).attr('y', function () {
          var sh = 0;

          for (var k = 0; k < i; k++) {
            sh += data[k] * rate;
          }

          return -(t_height - sh - data[i] * rate / 2);
        }).attr('alignment-baseline', 'central').style('fill', 'white').style('opacity', function () {
          if (data[i] == 0) {
            return 0;
          } else {
            return 1;
          }
        }).style('text-anchor', 'middle').style('font-size', 16).text(data[i] > 10 ? data[i].toFixed(2) + '%' : '');
      };

      for (var i = 0; i < data.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          transX = _this$state3.transX,
          svgDimen = _this$state3.svgDimen;
      var img_diff = svgDimen.width * 0.017;
      return external_react_default.a.createElement("g", {
        className: "Bar",
        transform: "translate(".concat(transX, " , ").concat(img_diff, ")"),
        ref: function ref(el) {
          return _this3.el = el;
        }
      });
    }
  }]);

  return Bar;
}(external_react_["Component"]);

var BalanceChart_Handle =
/*#__PURE__*/
function (_Component3) {
  Object(inherits["a" /* default */])(Handle, _Component3);

  function Handle(props) {
    var _this4;

    Object(classCallCheck["a" /* default */])(this, Handle);

    _this4 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Handle).call(this, props));
    var _this4$props = _this4.props,
        margins = _this4$props.margins,
        years = _this4$props.years,
        svgDimen = _this4$props.svgDimen,
        initialValue = _this4$props.initialValue,
        xScale = _this4$props.xScale;
    _this4.state = {
      svgDimen: svgDimen,
      years: years,
      margins: margins,
      initialValue: initialValue,
      xScale: xScale
    };
    return _this4;
  }

  Object(createClass["a" /* default */])(Handle, [{
    key: "onMouseOver",
    value: function onMouseOver() {
      this.setState({
        handle: this.props.handle
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var initialValue = nextProps.initialValue,
          years = nextProps.years,
          margins = nextProps.margins,
          svgDimen = nextProps.svgDimen,
          xScale = nextProps.xScale;
      this.setState({
        initialValue: initialValue,
        years: years,
        margins: margins,
        svgDimen: svgDimen,
        xScale: xScale
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          initialValue = _this$state4.initialValue,
          xScale = _this$state4.xScale;
      var handle = this.props.handle;
      var circle = external_react_default.a.createElement("circle", {
        r: "10px",
        fill: "#de0730"
      });
      var text = external_react_default.a.createElement("text", {
        style: {
          opacity: 1,
          fontSize: 14,
          fill: '#de0730'
        }
      });
      return external_react_default.a.createElement("g", {
        className: handle,
        transform: "translate(".concat(xScale(initialValue), ", 20)"),
        onMouseOver: this.onMouseOver.bind(this)
      }, text, circle);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$state5 = this.state,
          margins = _this$state5.margins,
          svgDimen = _this$state5.svgDimen,
          xScale = _this$state5.xScale,
          initialValue = _this$state5.initialValue;
      var _this$props2 = this.props,
          onChangeYear = _this$props2.onChangeYear,
          handle = _this$props2.handle;
      var mouseValue, trueMouseValue;

      if (prevProps.svgDimen.width != this.state.svgDimen.width || prevProps.years != this.state.years) {
        external_d3_["select"]('.' + handle).attr('transform', 'translate(' + xScale(initialValue) + ', 20)');
        external_d3_["select"]('.' + handle).select('text').attr('alignment-baseline', 'middle').attr('dy', -15).style('text-anchor', 'middle').text(initialValue);
      } else {
        var dragstart = function dragstart() {
          mouseValue = external_d3_["mouse"](this)[0];
          trueMouseValue = getTrueMouseValue(mouseValue);
          external_d3_["select"]('.' + handle).attr('transform', 'translate(' + mouseValue + ', 20)');
          external_d3_["select"]('.' + handle).select('text').attr('alignment-baseline', 'middle').attr('dy', -15).style('text-anchor', 'middle').text(trueMouseValue);
        };

        var dragged = function dragged() {
          mouseValue = external_d3_["mouse"](this)[0];
          trueMouseValue = getTrueMouseValue(mouseValue);

          if (mouseValue > margins.left && mouseValue < svgDimen.width - margins.right) {
            external_d3_["select"]('.' + handle).attr('transform', 'translate(' + mouseValue + ', 20)');
            external_d3_["select"]('.' + handle).select('text').attr('alignment-baseline', 'middle').attr('dy', -15).style('text-anchor', 'middle').text(trueMouseValue);
          }
        };

        var dragend = function dragend() {
          external_d3_["select"]('.' + handle).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 20)');
          onChangeYear(trueMouseValue);
        };

        var getTrueMouseValue = function getTrueMouseValue(mouseValue) {
          return Math.round(xScale.invert(mouseValue));
        };

        var drag = external_d3_["drag"]().on('start', dragstart).on('drag', dragged).on('end', dragend);
        external_d3_["select"]('.rangeSliderGroup').call(drag);
      }
    }
  }]);

  return Handle;
}(external_react_["Component"]);

var BalanceChart_Axis =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Axis, _React$Component);

  function Axis(props) {
    var _this5;

    Object(classCallCheck["a" /* default */])(this, Axis);

    _this5 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Axis).call(this, props));
    var _this5$props = _this5.props,
        years = _this5$props.years,
        xScale = _this5$props.xScale;
    _this5.state = {
      years: years,
      xScale: xScale
    };
    return _this5;
  }

  Object(createClass["a" /* default */])(Axis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderAxis();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderAxis();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var years = nextProps.years,
          xScale = nextProps.xScale;
      this.setState({
        years: years,
        xScale: xScale
      });
    }
  }, {
    key: "renderAxis",
    value: function renderAxis() {
      var _this$state6 = this.state,
          years = _this$state6.years,
          xScale = _this$state6.xScale;
      var first = years[0];
      var last = years[years.length - 1];
      external_d3_["select"](this.axisElement).call(external_d3_["axisBottom"]().scale(xScale).ticks(years.length).tickFormat(external_d3_["format"](''))).selectAll('text').style('opacity', function (d) {
        return d == first || d == last ? 1 : 0;
      }).style('font-size', '14px').style('fill', 'black');
      external_d3_["select"](this.axisElement).selectAll('line').attr('stroke', 'white'); //set black when shows axis

      external_d3_["select"](this.axisElement).select('path').style('d', 'none');
      external_d3_["select"](this.axisElement).select('path').style('stroke', 'white');
      external_d3_["select"](this.axisElement).select('path').style('opacity', '0');
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return external_react_default.a.createElement("g", {
        className: "sliderAxis",
        transform: "translate(0,30)",
        ref: function ref(el) {
          return _this6.axisElement = el;
        }
      });
    }
  }]);

  return Axis;
}(external_react_default.a.Component);

var BalanceChart_RangeSlider =
/*#__PURE__*/
function (_Component4) {
  Object(inherits["a" /* default */])(RangeSlider, _Component4);

  function RangeSlider(props) {
    var _this7;

    Object(classCallCheck["a" /* default */])(this, RangeSlider);

    _this7 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(RangeSlider).call(this, props));
    _this7.state = {
      width: _this7.props.width,
      height: _this7.props.height,
      years: _this7.props.years
    };
    return _this7;
  }

  Object(createClass["a" /* default */])(RangeSlider, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var width = nextProps.width,
          height = nextProps.height,
          years = nextProps.years;
      this.setState({
        width: width,
        height: height,
        years: years
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state7 = this.state,
          width = _this$state7.width,
          height = _this$state7.height,
          years = _this$state7.years;
      var onChangeYear = this.props.onChangeYear;
      var margins = {
        top: 20,
        right: 50,
        bottom: 20,
        left: 40
      },
          svgDimen = {
        width: width - margins.left - margins.right,
        height: height
      };
      var RangeBar = external_react_default.a.createElement("rect", {
        rx: "5",
        ry: "5",
        y: "15",
        width: svgDimen.width - margins.left - margins.right,
        transform: "translate(".concat(margins.left, ", 0)"),
        height: "10",
        fill: "grey"
      });
      var first = years[0];
      var last = years[years.length - 1];
      var xScale = external_d3_["scaleLinear"]().domain([first, last]).range([margins.left, svgDimen.width - margins.right]).clamp(true);
      return external_react_default.a.createElement("svg", {
        className: "rangeSliderSvg",
        width: svgDimen.width + 60,
        height: svgDimen.height
      }, external_react_default.a.createElement("g", {
        className: "rangeSliderSvg",
        width: svgDimen.width,
        height: svgDimen.height,
        transform: "translate(".concat(margins.left, ", 0)")
      }, external_react_default.a.createElement("g", {
        className: "rangeSliderGroup",
        transform: "translate(0, ".concat(svgDimen.height - margins.bottom - 40, ")")
      }, RangeBar, external_react_default.a.createElement(BalanceChart_Axis, {
        years: years,
        xScale: xScale
      }), external_react_default.a.createElement(BalanceChart_Handle, {
        onChangeYear: onChangeYear,
        handle: "handle",
        initialValue: first,
        years: years,
        margins: margins,
        svgDimen: svgDimen,
        xScale: xScale
      }))));
    }
  }]);

  return RangeSlider;
}(external_react_["Component"]);

var BalanceChart_BalanceChart =
/*#__PURE__*/
function (_Component5) {
  Object(inherits["a" /* default */])(BalanceChart, _Component5);

  function BalanceChart(props) {
    var _this8;

    Object(classCallCheck["a" /* default */])(this, BalanceChart);

    _this8 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BalanceChart).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this8)), "handleChangeYear", function (curYear) {
      var data = _this8.state.data;
      var years = data.map(function (d) {
        return parse_int_default()(d.Date.split('-')[0]);
      });

      for (var i = 0; i < data.length; i++) {
        if (years[i] == curYear) {
          _this8.setState({
            balanceChartData: data[i]
          });

          break;
        }
      }
    });

    var _this8$props = _this8.props,
        _data = _this8$props.data,
        width = _this8$props.width,
        height = _this8$props.height;

    var sort_data = _data.sort(function (x, y) {
      return external_d3_["ascending"](x.Date, y.Date);
    });

    _this8.state = {
      data: sort_data,
      sliderData: _this8.parseYear(sort_data),
      balanceChartData: sort_data[0],
      width: width,
      height: height
    };
    return _this8;
  }

  Object(createClass["a" /* default */])(BalanceChart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.data,
          width = nextProps.width,
          height = nextProps.height;
      var sort_data = data.sort(function (x, y) {
        return external_d3_["ascending"](x.Date, y.Date);
      });
      this.setState({
        sliderData: this.parseYear(sort_data),
        balanceChartData: sort_data[0],
        data: sort_data,
        width: width,
        height: height
      });
    }
  }, {
    key: "parseYear",
    value: function parseYear(data) {
      return data.map(function (d) {
        return parse_int_default()(d.Date.split('-')[0]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "timeslidercharts",
        width: this.state.width
      }, external_react_default.a.createElement("div", {
        className: "rangeSlider"
      }, external_react_default.a.createElement(BalanceChart_RangeSlider, {
        onChangeYear: this.handleChangeYear,
        width: this.state.width,
        height: this.state.height / 6,
        years: this.state.sliderData
      })), external_react_default.a.createElement("div", {
        className: "balanceChart"
      }, external_react_default.a.createElement(BalanceChart_Chart, {
        width: this.state.width,
        height: this.state.height * 5 / 6,
        data: this.state.balanceChartData
      })));
    }
  }]);

  return BalanceChart;
}(external_react_["Component"]);

/* harmony default export */ var BalanceGraph_BalanceChart = (BalanceChart_BalanceChart);
// CONCATENATED MODULE: ./components/BalanceGraph/index.js









var BalanceGraph_BalanceGraph =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BalanceGraph, _Component);

  function BalanceGraph(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BalanceGraph);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BalanceGraph).call(this, props));
    var _this$props = _this.props,
        parentWidth = _this$props.parentWidth,
        parentHeight = _this$props.parentHeight,
        data = _this$props.data;
    _this.state = {
      data: data,
      width: parentWidth > 650 ? 650 : Math.max(parentWidth, 500),
      height: 400
    };
    return _this;
  }

  Object(createClass["a" /* default */])(BalanceGraph, [{
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
        width: parentWidth > 650 ? 650 : Math.max(parentWidth, 500),
        height: 400
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.data.length == 0) {
        return external_react_default.a.createElement(external_react_["Fragment"], null, "No Data");
      } else {
        return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(BalanceGraph_BalanceChart, {
          data: this.state.data,
          width: this.state.width,
          height: this.state.height
        }));
      }
    }
  }]);

  return BalanceGraph;
}(external_react_["Component"]);

/* harmony default export */ var components_BalanceGraph = __webpack_exports__["a"] = (ResponsiveWrapper(BalanceGraph_BalanceGraph));

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fd94":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Tan1");


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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yOu0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("U8Yc");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("8ET1");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("SY1S");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__("0i/h");

// CONCATENATED MODULE: ./components/HorizonChart/index.js






function HorizonChart(_ref) {
  var data = _ref.data;
  var svgRef = Object(external_react_["useRef"])(null);
  var xAxisRef = Object(external_react_["useRef"])(null);
  var width = 1344;
  var height = data.length * 50;
  var step = 39;
  var overlap = 5;
  var margin = {
    top: 30,
    right: 10,
    bottom: 0,
    left: 10
  };
  var mirror = true; //if (data.globalQuotes === undefined) {
  //  return null;
  // }
  //if (data.globalQuotes.length === 0) {
  //  return null;
  // }

  var max = external_d3_["max"](data, function (d) {
    return external_d3_["max"](d.globalQuotes, function (d) {
      return Math.abs(d.close);
    });
  });
  var minDate = Date.parse(data[0].globalQuotes[0].date);
  var maxDate = Date.parse(data[0].globalQuotes[data[0].globalQuotes.length - 1].date);

  var color = function color(i) {
    return external_d3_["schemePiYG"][overlap * 2 + 1][i + (i >= 0) + overlap];
  };

  var x = external_d3_["scaleTime"]().domain([minDate, maxDate]).range([0, width]);
  var y = external_d3_["scaleLinear"]().domain([-max, +max]).range([overlap * step, -overlap * step]);
  var xAxis = external_d3_["axisTop"](x).ticks(width / 80).tickSizeOuter(0);
  var area = external_d3_["area"]().curve(external_d3_["curveStep"]).defined(function (d) {
    return !isNaN(d.close);
  }).x(function (d) {
    return x(Date.parse(d.date));
  }).y0(0).y1(function (d) {
    return y(d.close);
  });

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var mouseOver = function mouseOver(x) {
    setSelected(x);
  };

  var mouseOut = function mouseOut() {
    setSelected(null);
  };

  Object(external_react_["useEffect"])(function () {
    external_d3_["select"](xAxisRef.current).call(xAxis);
    external_d3_["select"](svgRef.current).on('mouseover', function (d) {
      mouseOver(external_d3_["event"].layerX);
    });
    external_d3_["select"](svgRef.current).on('mouseout', function (d) {
      mouseOut();
    });
  });
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", null, "X position: ", selected), external_react_default.a.createElement("svg", {
    width: width,
    height: height,
    ref: svgRef
  }, external_react_default.a.createElement("g", null, data.map(function (d, i) {
    var arrayFrom = from_default()({
      length: overlap * 2
    }, function (_, i) {
      return assign_default()({
        index: i < overlap ? -i - 1 : i - overlap
      }, d);
    });

    return external_react_default.a.createElement("g", {
      key: i,
      transform: "translate(0,".concat(i * (step + 1) + margin.top, ")")
    }, external_react_default.a.createElement("clipPath", {
      id: "clip".concat(i)
    }, external_react_default.a.createElement("rect", {
      width: width,
      height: step
    })), external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
      id: 'path' + i,
      d: area(d.globalQuotes)
    })), external_react_default.a.createElement("g", {
      clipPath: "url(#clip".concat(i, ")")
    }, arrayFrom.map(function (d, i2) {
      return external_react_default.a.createElement("use", {
        key: i2,
        fill: color(d.index),
        transform: mirror && d.index < 0 ? "scale(1,-1) translate(0,".concat(d.index * step, ")") : "translate(0,".concat((d.index + 1) * step, ")"),
        xlinkHref: "#path".concat(i)
      });
    })), external_react_default.a.createElement("text", {
      x: 4,
      y: step / 2,
      dy: '0.35em'
    }, "".concat(d.name, " (").concat(d.ticker, ")")));
  }), external_react_default.a.createElement("g", {
    ref: xAxisRef,
    transform: "translate(0,".concat(margin.top, ")")
  })), selected && external_react_default.a.createElement("g", null, external_react_default.a.createElement("line", {
    x1: selected,
    y1: "0",
    x2: selected,
    y2: height,
    style: {
      stroke: 'rgb(0,0,0)',
      strokeWidth: 1
    }
  }))));
}

/* harmony default export */ var components_HorizonChart = __webpack_exports__["a"] = (HorizonChart);

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