import { dispatch } from 'd3-dispatch';
import { isoFormat, timeFormat } from 'd3-time-format';
import { json, text } from 'd3-fetch';
import { axisBottom, axisLeft, axisRight, axisTop } from 'd3-axis';
import { select, mouse, event } from 'd3-selection';
import { scaleLinear, scaleTime } from 'd3-scale';
import { format } from 'd3-format';
import { interpolateRound } from 'd3-interpolate';

var version = "1.1.1";

var apiStart = function apiStart(state) {
  return {
    start: function start() {
      var _timeout = state._timeout,
          _stop1 = state._stop1,
          _serverDelay = state._serverDelay,
          _clientDelay = state._clientDelay,
          _step = state._step,
          _event = state._event,
          _scale = state._scale,
          _size = state._size,
          _focus = state._focus;


      if (_timeout) clearTimeout(_timeout);
      var delay = +_stop1 + _serverDelay - Date.now();

      // If we're too late for the first prepare _event, skip it.
      if (delay < _clientDelay) delay += _step;

      var prepare = function prepare() {
        state._stop1 = new Date(Math.floor((Date.now() - _serverDelay) / _step) * _step);
        state._start1 = new Date(state._stop1 - _size * _step);
        _event.call('prepare', state, state._start1, state._stop1);

        setTimeout(function () {
          state.start0 = state._start1;
          state.stop0 = state._stop1;
          _scale.domain([state.start0, state.stop0]);
          _event.call('beforechange', state, state._start1, state._stop1);
          _event.call('change', state, state._start1, state._stop1);
          _event.call('focus', state, _focus);
        }, _clientDelay);

        state.timeout = setTimeout(prepare, _step);
      };

      state.timeout = setTimeout(prepare, delay);

      return state;
    }
  };
};

var apiStop = function apiStop(state) {
  return {
    stop: function stop() {
      state._timeout = clearTimeout(state._timeout);
      return state;
    }
  };
};

var apiOn = function apiOn(state) {
    return {
        on: function on(type) {
            var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var _event = state._event,
                _focus = state._focus,
                _start1 = state._start1,
                _stop1 = state._stop1,
                _start0 = state._start0,
                _stop0 = state._stop0;

            if (listener === null) return _event.on(type);

            _event.on(type, listener);

            // Notify the listener of the current start and stop time, as appropriate.
            // This way, metrics can make requests for data immediately,
            // and likewise the axis can display itself synchronously.
            if (/^prepare(\.|$)/.test(type)) listener(_start1, _stop1);
            if (/^beforechange(\.|$)/.test(type)) listener(_start0, _stop0);
            if (/^change(\.|$)/.test(type)) listener(_start0, _stop0);
            if (/^focus(\.|$)/.test(type)) listener(_focus);

            return state;
        }
    };
};

var apiFocus = function apiFocus(state) {
  return {
    focus: function focus(i) {
      var _event = state._event;

      _event.call('focus', state, state._focus = i);
      return state;
    }
  };
};

var update = function update(state) {
  var _step = state._step,
      _serverDelay = state._serverDelay,
      _clientDelay = state._clientDelay,
      _scale = state._scale,
      _size = state._size;

  var now = Date.now();
  state._stop0 = new Date(Math.floor((now - _serverDelay - _clientDelay) / _step) * _step);
  state._start0 = new Date(state._stop0 - _size * _step);
  state._stop1 = new Date(Math.floor((now - _serverDelay) / _step) * _step);
  state._start1 = new Date(state._stop1 - _size * _step);
  _scale.domain([state._start0, state._stop0]);
  return state;
};

// The client delay is the amount of additional time we wait to fetch those
// metrics from the server. The client and server delay combined represent the
// age of the most recent displayed metric. Defaults to 1 second.
var apiClientDelay = function apiClientDelay(state) {
  return {
    clientDelay: function clientDelay() {
      var _clientDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_clientDelay === null) return state._clientDelay;
      state._clientDelay = +_clientDelay;
      return update(state);
    }
  };
};

// The server delay is the amount of time we wait for the server to compute a
// metric. This delay may result from clock skew or from delays collecting
// metrics from various hosts. Defaults to 4 seconds.
var apiServerDelay = function apiServerDelay(state) {
  return {
    serverDelay: function serverDelay() {
      var _serverDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_serverDelay === null) return state._serverDelay;
      state._serverDelay = +_serverDelay;
      return update(state);
    }
  };
};

// Set or get the context size (the count of metric values).
// Defaults to 1440 (four hours at ten seconds).
var apiSize = function apiSize(state) {
  return {
    size: function size() {
      var _size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_size === null) return state._size;
      state._scale.range([0, state._size = +_size]);
      return update(state);
    }
  };
};

// Set or ge2t the step interval in milliseconds.
// Defaults to ten seconds.
var apiStep = function apiStep(state) {
  return {
    step: function step() {
      var _step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_step === null) return state._step;
      state._step = +_step;
      return update(state);
    }
  };
};

var apiAlias = function apiAlias(state) {
  return {
    alias: function alias(name) {
      state.toString = function () {
        return name;
      };
      return state;
    }
  };
};

var apiExtent = function apiExtent(state) {
  return {
    extent: function extent() {
      var _size = state._size,
          _values = state._values;

      var i = 0,
          value = void 0,
          min = Infinity,
          max = -Infinity;
      while (++i < _size) {
        value = _values[i];
        if (value < min) min = value;
        if (value > max) max = value;
      }
      return [min, max];
    }
  };
};

// When the context changes, switch to the new data, ready-or-not!
var beforechange = function beforechange(state) {
  return function (start1, stop1) {
    var _step = state._step,
        _size = state._size;

    if (!isFinite(state._start)) state._start = start1;
    state._values.splice(0, Math.max(0, Math.min(_size, Math.round((start1 - state._start) / _step))));
    state._start = start1;
    state._stop = stop1;
  };
};

// Prefetch new data into a temporary array.
var prepare = function prepare(state, request) {
  return function (start1, stop) {
    var _start = state._start,
        _step = state._step,
        _fetching = state._fetching,
        _event = state._event,
        _size = state._size;

    var steps = Math.min(_size, Math.round((start1 - _start) / _step));
    if (!steps || _fetching) return; // already fetched, or fetching!
    state._fetching = true;
    state._steps = Math.min(_size, steps + 6);
    var start0 = new Date(stop - state._steps * _step);
    request(start0, stop, _step, function (error, data) {
      state._fetching = false;
      if (error) return console.warn(error);
      var i = isFinite(_start) ? Math.round((start0 - _start) / _step) : 0;
      for (var j = 0, m = data.length; j < m; ++j) {
        state._values[j + i] = data[j];
      }_event.call('change', _start, stop);
    });
  };
};

var apiOn$1 = function apiOn(state, request) {
  return {
    on: function on(type) {
      var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _event = state._event,
          _id = state._id,
          context = state.context,
          _start = state._start,
          _stop = state._stop;


      if (listener === null) return _event.on(type);

      // If there are no listeners, then stop listening to the context,
      // and avoid unnecessary fetches.
      if (listener == null) {
        if (_event.on(type) != null && --state._listening === 0) {
          context.on('prepare' + _id, null).on('beforechange' + _id, null);
        }
      } else {
        if (_event.on(type) == null && ++state._listening === 1) {
          context.on('prepare' + _id, prepare(state, request)).on('beforechange' + _id, beforechange(state));
        }
      }

      _event.on(type, listener);

      // Notify the listener of the current start and stop time, as appropriate.
      // This way, charts can display synchronous metrics immediately.
      if (listener != null) {
        if (/^change(\.|$)/.test(type)) listener(_start, _stop);
      }

      return state;
    }
  };
};

// Number of metric to refetch each period, in case of lag.
var MetricOverlap = 6;

// Prefetch new data into a temporary array.
var apiPrepare = function apiPrepare(state, request) {
  return {
    prepare: function prepare(start1, stop) {
      var _size = state._size,
          _start = state._start,
          _step = state._step,
          _fetching = state._fetching,
          _event = state._event;


      var steps = Math.min(_size, Math.round((start1 - _start) / _step));
      if (!steps || _fetching === true) return; // already fetched, or fetching!
      state._fetching = true;
      state._steps = Math.min(_size, steps + MetricOverlap);
      var start0 = new Date(stop - steps * _step);

      request(start0, stop, _step, function (error, data) {
        state._fetching = false;
        if (error) return console.warn(error);
        var i = isFinite(_start) ? Math.round((start0 - _start) / _step) : 0;
        for (var j = 0, m = data.length; j < m; ++j) {
          values[j + i] = data[j];
        }_event.call('change', state, _start, stop);
      });
    }
  };
};

// Wraps the specified request implementation, and shifts time by the given offset.
var metricShift = function metricShift(request, offset) {
  return function (start, stop, step, callback) {
    return request(new Date(+start + offset), new Date(+stop + offset), step, callback);
  };
};

var apiShift = function apiShift(state, request) {
  return {
    shift: function shift(offset) {
      var context = state.context;


      return context.metric(metricShift(request, +offset));
    }
  };
};

var apiValueAt = function apiValueAt(state) {
  return {
    valueAt: function valueAt(i) {
      return state._values[i];
    }
  };
};

var genericOperate = function genericOperate(name, operate) {
  return function (state, metric) {
    return Object.assign({}, state, {
      valueAt: function valueAt(i) {
        return operate(state.valueAt(i), metric.valueAt(i));
      },
      toString: function toString() {
        return state + ' ' + name + ' ' + metric;
      },
      on: function on(type) {
        var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (listener === null) return state.on(type);
        state.on(type, listener);
        metric.on(type, listener);
      }
    }, {
      shift: function shift(offset) {
        return genericOperate(name, operate)(state.shift(offset), metric.shift(offset));
      }
    });
  };
};

var apiOperator = function apiOperator(state) {
  return {
    add: function add(metric) {
      return genericOperate('+', function (a, b) {
        return a + b;
      })(state, metric);
    },
    subtract: function subtract(metric) {
      return genericOperate('-', function (a, b) {
        return a - b;
      })(state, metric);
    },
    multiply: function multiply(metric) {
      return genericOperate('*', function (a, b) {
        return a * b;
      })(state, metric);
    },
    divide: function divide(metric) {
      return genericOperate('/', function (a, b) {
        return a / b;
      })(state, metric);
    }
  };
};

var apiToString = function apiToString(name) {
  return {
    toString: function toString() {
      return name;
    }
  };
};

var apiMetric = function apiMetric(context) {
  return {
    metric: function metric(request, name) {
      var metricState = {
        context: context,
        _id: '.metric-' + ++context._id,
        _start: -Infinity,
        _stop: null,
        _step: context.step(),
        _size: context.size(),
        _values: [],
        _event: dispatch('change'),
        _listening: 0,
        _fetching: false
      };

      var metric = Object.assign(metricState, apiOn$1(metricState, request), apiPrepare(metricState, request), apiValueAt(metricState), apiAlias(metricState), apiShift(metricState, request), apiExtent(metricState), apiToString(name));

      return Object.assign(metric, apiOperator(metric));
    }
  };
};

var apiCube = function apiCube(context) {
  return {
    cube: function cube() {
      var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return {
        toString: function toString() {
          return host;
        },
        metric: function metric(expression) {
          return context.metric(function (start, stop, step, callback) {
            json(host + '/1.0/metric' + '?expression=' + encodeURIComponent(expression) + '&start=' + isoFormat(start) + '&stop=' + isoFormat(stop) + '&step=' + step).then(function (data) {
              if (!data) return callback(new Error('unable to load data'));
              callback(null, data.map(function (d) {
                return d.value;
              }));
            });
          }, expression += '');
        }
      };
    }
  };
};

var formatSeconds = timeFormat('%I:%M:%S %p');
var formatMinutes = timeFormat('%I:%M %p');
var formatDays = timeFormat('%B %d');
var formatDefault = function formatDefault(context) {
  return context.step() < 6e4 ? formatSeconds : context.step() < 864e5 ? formatMinutes : formatDays;
};

var apiRemove = function apiRemove(axisState) {
  return {
    remove: function remove(selection) {
      var context = axisState.context;

      selection.selectAll('svg').each(function (d) {
        context.on('change.axis-' + d.id, null);
        context.on('focus.axis-' + d.id, null);
      }).remove();
    }
  };
};

var apiFocusFormat = function apiFocusFormat(axisState) {
  return {
    focusFormat: function focusFormat() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return axisState.format === formatDefault(axisState.context) ? null : _;
      axisState.format = _ == null ? formatDefault(context) : _;
      return axisState;
    }
  };
};

var apiRender = function apiRender(context, state) {
  return {
    render: function render(selection) {
      var _axis = state._axis,
          scale = state.scale,
          format$$1 = state.format,
          id = state.id,
          size = state.size;

      var tick = null;

      var g = selection.append('svg').datum({ id: id }).attr('width', size).attr('height', Math.max(28, -_axis.tickSize())).append('g').attr('transform', 'translate(0,' + 4 + ')').call(_axis);

      context.on('change.axis-' + id, function () {
        g.call(_axis);
        if (!tick) tick = select(g.node().appendChild(g.selectAll('text').node().cloneNode(true))).style('display', 'none').text(null);
      });

      context.on('focus.axis-' + id, function (i) {
        if (tick) {
          if (i == null) {
            tick.style('display', 'none');
            g.selectAll('text').style('fill-opacity', null);
          } else {
            tick.style('display', null).attr('x', i).text(format$$1(scale.invert(i)));
            var dx = tick.node().getComputedTextLength() + 6;
            g.selectAll('text').style('fill-opacity', function (d) {
              return Math.abs(scale(d) - i) < dx ? 0 : 1;
            });
          }
        }
      });
    }
  };
};

var apiTicks = function apiTicks(axisState) {
  return {
    ticks: function ticks() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      axisState._axis.ticks(args);
      return axisState;
    }
  };
};

var apiOrient = function apiOrient(axisSate) {
  return {
    orient: function orient(_orient) {
      var context = axisSate.context;

      switch (_orient) {
        case 'top':
          axisSate._axis = axisTop().scale(context._scale);
          break;
        case 'bottom':
          axisSate._axis = axisBottom().scale(context._scale);
          break;
        case 'left':
          axisSate._axis = axisLeft().scale(context._scale);
          break;
        case 'right':
          axisSate._axis = axisRight().scale(context._scale);
          break;
        case 'default':
          console.warn('orient shall be one of bottom|top|left|right');
          break;
        default:
          console.warn('orient shall be one of bottom|top|left|right');
          break;
      }

      return axisSate;
    }
  };
};

var apiAxis = function apiAxis(context) {
  return {
    axis: function axis() {
      var axisState = {
        context: context,
        size: context._size,
        scale: context._scale,
        _axis: axisBottom().scale(context._scale),
        format: formatDefault(context),
        id: ++context._id
      };

      return Object.assign(axisState, apiRemove(axisState), apiFocusFormat(axisState), apiTicks(axisState), apiOrient(axisState), apiRender(context, axisState));
    }
  };
};

var apiRemove$1 = function apiRemove(ruleState, selection) {
  return {
    remove: function remove() {
      var _context = ruleState._context;


      selection.selectAll('.line').each(function (d) {
        return _context.on('focus.rule-' + d.id, null);
      }).remove();
    }
  };
};

var apiMetric$1 = function apiMetric(ruleState) {
  return {
    metric: function metric() {
      var _metric2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_metric2 === null) return ruleState._metric;
      ruleState._metric = _metric2;
      return ruleState;
    }
  };
};

var apiRender$1 = function apiRender(state) {
  return {
    render: function render(selection) {
      var _context = state._context,
          _metric = state._metric;

      var id = ++_context._id;

      var line = selection.append('div').datum({ id: id }).attr('class', 'line').style('position', 'absolute').style('top', 0).style('bottom', 0).style('width', '1px').style('pointer-events', 'none');

      selection.each(function (d, i) {
        var metric_ = typeof _metric === 'function' ? _metric(d, i) : _metric;
        if (!metric_) return;

        var change = function change(start, stop) {
          var values = [];

          for (var _i = 0, n = _context.size(); _i < n; ++_i) {
            if (metric_.valueAt(_i)) {
              values.push(_i);
            }
          }

          var lines = selection.selectAll('.metric').data(values);
          lines.exit().remove();
          lines.enter().append('div').attr('class', 'metric line').style('position', 'absolute').style('top', 0).style('bottom', 0).style('width', '1px').style('pointer-events', 'none');

          lines.style('left', function (i) {
            return i + 'px';
          });
        };

        _context.on('change.rule-' + id, change);
        metric_.on('change.rule-' + id, change);
      });

      _context.on('focus.rule-' + id, function (i) {
        line
        // .datum(i)
        .style('display', i == null ? 'none' : null).style('left', i == null ? null : i +20+ 'px');
      });
    }
  };
};

var apiRule = function apiRule(context) {
  return {
    rule: function rule() {
      var state = {
        _context: context,
        _metric: function _metric(d) {
          return d;
        }
      };

      return Object.assign(state, apiRemove$1(state), apiMetric$1(state), apiRender$1(state));
    }
  };
};

var apiRender$2 = function apiRender(context, state) {
  return {
    render: function render(selection) {
      selection.append('div').attr('a', 'b');
      var _width = state._width,
          _height = state._height,
          _title = state._title,
          _metric = state._metric,
          _colors = state._colors,
          _extent = state._extent,
          _scale = state._scale,
          _buffer = state._buffer,
          _mode = state._mode,
          _format = state._format;


      selection.on('mousemove.horizon', function () {
        // todo: why directly importing mouse doesn't work here?
        const i = Math.round(mouse(this)[0]);
        context.focus(i);
      }).on('mouseout.horizon', function () {
        return context.focus(null);
      });

      selection.append('canvas').attr('width', _width).attr('height', _height);

      selection.append('span').attr('class', 'title').text(_title);

      selection.append('span').attr('class', 'value');

      selection.each(function (d, i) {
        var id = ++context._id,
            metric_ = typeof _metric === 'function' ? _metric(d, i) : _metric,
            colors_ = typeof _colors === 'function' ? _colors(d, i) : _colors,
            extent_ = typeof _extent === 'function' ? _extent(d, i) : _extent,
            step = context.step(),
            canvas = select(this).select('canvas'),
            span = select(this).select('.value'),
            m = colors_.length >> 1;

        var start = -Infinity,
            max_ = void 0,
            ready = void 0;

        canvas.datum({ id: id, metric: metric_ });
        var ctx = canvas.node().getContext('2d');

        function change(start1, stop) {
          ctx.save();

          // compute the new extent and ready flag
          var extent = metric_.extent();
          ready = extent.every(isFinite);
          if (extent_ != null) extent = extent_;

          // if this is an update (with no extent change), copy old values!
          var i0 = 0,
              max = Math.max(-extent[0], extent[1]);
          if (this === context) {
            if (max === max_) {
              i0 = _width - 6;
              var dx = (start1 - start) / step;
              if (dx < _width) {
                var canvas0 = _buffer.getContext('2d');
                canvas0.clearRect(0, 0, _width, _height);
                canvas0.drawImage(ctx.canvas, dx, 0, _width - dx, _height, 0, 0, _width - dx, _height);
                ctx.clearRect(0, 0, _width, _height);
                ctx.drawImage(canvas0.canvas, 0, 0);
              }
            }
            start = start1;
          }

          // update the domain
          _scale.domain([0, max_ = max]);

          // clear for the new data
          ctx.clearRect(i0, 0, _width - i0, _height);

          // record whether there are negative values to display
          var negative = void 0;

          // positive bands
          for (var j = 0; j < m; ++j) {
            ctx.fillStyle = colors_[m + j];

            // Adjust the range based on the current band index.
            var y0 = (j - m + 1) * _height;
            _scale.range([m * _height + y0, y0]);
            y0 = _scale(0);

            for (var _i = i0, n = _width, _y; _i < n; ++_i) {
              _y = metric_.valueAt(_i);
              if (_y <= 0) {
                negative = true;
                continue;
              }
              if (_y === undefined) continue;
              ctx.fillRect(_i, _y = _scale(_y), 1, y0 - _y);
            }
          }

          if (negative) {
            // enable offset mode
            if (_mode === 'offset') {
              ctx.translate(0, _height);
              ctx.scale(1, -1);
            }

            // negative bands
            for (var _j = 0; _j < m; ++_j) {
              ctx.fillStyle = colors_[m - 1 - _j];

              // Adjust the range based on the current band index.
              var _y2 = (_j - m + 1) * _height;
              _scale.range([m * _height + _y2, _y2]);
              _y2 = _scale(0);

              for (var _i2 = i0, _n = _width, _y3; _i2 < _n; ++_i2) {
                _y3 = metric_.valueAt(_i2);
                if (_y3 >= 0) continue;
                ctx.fillRect(_i2, _scale(-_y3), 1, _y2 - _scale(-_y3));
              }
            }
          }

          ctx.restore();
        }

        var focus = function focus(i) {
          if (i == null) i = _width - 1;
          var value = metric_.valueAt(i);
          span.datum(value).text(isNaN(value) ? null : _format);
        };

        // Update the chart when the context changes.
        context.on('change.horizon-' + id, change);
        context.on('focus.horizon-' + id, focus);

        // Display the first metric change immediately,
        // but defer subsequent updates to the canvas change.
        // Note that someone still needs to listen to the metric,
        // so that it continues to update automatically.
        metric_.on('change.horizon-' + id, function (start, stop) {
          change(start, stop), focus();
          if (ready) metric_.on('change.horizon-' + id, function (d) {
            return d;
          });
        });
      });
    }
  };
};

var apiMisc = function apiMisc(state) {
  return {
    mode: function mode() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._mode;
      state._mode = _ + '';
      return state;
    },

    height: function height() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._height;
      state._height = +_;
      state._buffer.height = +_;
      return state;
    },

    metric: function metric() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._metric;
      state._metric = _;
      return state;
    },

    scale: function scale() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._scale;
      state._scale = _;
      return state;
    },

    extent: function extent() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._extent;
      state._extent = _;
      return state;
    },

    title: function title() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._title;
      state._title = _;
      return state;
    },

    format: function format$$1() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._format;
      state._format = _;
      return state;
    },
    colors: function colors() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._colors;
      state._colors = _;
      return state;
    }
  };
};

var apiRemove$2 = function apiRemove(context) {
  return {
    remove: function remove(selection) {
      selection.on('mousemove.horizon', null).on('mouseout.horizon', null);

      var remove = function remove(d) {
        d.metric.on('change.horizon-' + d.id, null);
        context.on('change.horizon-' + d.id, null);
        context.on('focus.horizon-' + d.id, null);
      };

      selection.selectAll('canvas').each(remove).remove();

      selection.selectAll('._title,.value').remove();
    }
  };
};

var apiHorizon = function apiHorizon(context) {
  return {
    horizon: function horizon() {
      var buffer = document.createElement('canvas');
      buffer.width = context.size();
      buffer.height = 30;

      var state = {
        _mode: 'offset',
        _buffer: buffer,
        _width: buffer.width,
        _height: buffer.height,
        _scale: scaleLinear().interpolate(interpolateRound),
        _metric: function _metric(d) {
          return d;
        },
        _extent: null,
        _title: function _title(d) {
          return d;
        },
        _format: format('.2s'),
        _colors: ['#08519c', '#3182bd', '#6baed6', '#bdd7e7', '#bae4b3', '#74c476', '#31a354', '#006d2c']
      };

      return Object.assign(state, apiRemove$2(state), apiMisc(state), apiRender$2(context, state));
    }
  };
};

var apiGangliaWeb = function apiGangliaWeb(context) {
  return {
    gangliaWeb: function gangliaWeb(config) {
      var host = config.host || '';
      var uriPathPrefix = config.uriPathPrefix || '/ganglia2/';

      /* Add leading and trailing slashes, as appropriate. */
      if (uriPathPrefix[0] !== '/') {
        uriPathPrefix = '/' + uriPathPrefix;
      }

      if (uriPathPrefix[uriPathPrefix.length - 1] !== '/') {
        uriPathPrefix += '/';
      }

      return {
        toString: function toString() {
          return host + uriPathPrefix;
        },
        metric: function metric(metricInfo) {
          /* Store the members from metricInfo into local variables. */
          var clusterName = metricInfo.clusterName,
              metricName = metricInfo.metricName,
              hostName = metricInfo.hostName,
              onChangeCallback = metricInfo.onChangeCallback;

          var isReport = metricInfo.isReport === undefined ? false : metricInfo.isReport;
          /* Reasonable (not necessarily pretty) default for titleGenerator. */
          var defaultTitleGenerator = function defaultTitleGenerator(unusedMetricInfo) {
            return 'clusterName:' + clusterName + ' metricName:' + metricName + ' hostName:' + hostName;
          };
          var titleGenerator = metricInfo.titleGenerator || defaultTitleGenerator;

          /* Default to plain, simple metrics. */
          var metricKeyName = isReport ? 'g' : 'm';

          var metricFn = function metricFn(start, stop, step, callback) {
            var constructGangliaWebRequestQueryParams = function constructGangliaWebRequestQueryParams() {
              return 'c=' + clusterName + '&' + metricKeyName + '=' + metricName + '&h=' + hostName + '&cs=' + start / 1000 + '&ce=' + stop / 1000 + '&step=' + step / 1000 + '&graphlot=1';
            };

            json(host + uriPathPrefix + 'graph.php?' + constructGangliaWebRequestQueryParams()).then(function (result) {
              if (result === undefined || result === null) {
                return callback(new Error('Unable to fetch GangliaWeb data'));
              }

              callback(null, result[0].data);
            }).catch(function (e) {
              return callback(new Error('Unable to fetch GangliaWeb data: Error ' + e));
            });
          };
          titleGenerator(metricInfo);

          var gangliaWebMetric = context.metric(metricFn);

          gangliaWebMetric.toString = function () {
            return titleGenerator(metricInfo);
          };

          /* Allow users to run their custom code each time a gangliaWebMetric changes.
           *
           * TODO Consider abstracting away the naked Cubism call, and instead exposing
           * a callback that takes in the values array (maybe alongwith the original
           * start and stop 'naked' parameters), since it's handy to have the entire
           * dataset at your disposal (and users will likely implement onChangeCallback
           * primarily to get at this dataset).
           */
          if (onChangeCallback) {
            gangliaWebMetric.on('change', onChangeCallback);
          }

          return gangliaWebMetric;
        }
      };
    }
  };
};

/*
 * We are most likely not going to get the same number of measurements
 * cubism expects for a particular context: We have to perform down/up
 * sampling
 */
var downUpSampling = function downUpSampling(isdate, iedate, step, librato_mm) {
  var av = [];

  for (var i = isdate; i <= iedate; i += step) {
    var int_mes = [];
    while (librato_mm.length && librato_mm[0].measure_time <= i) {
      int_mes.push(librato_mm.shift().value);
    }

    var v = void 0;
    if (int_mes.length) {
      /* Compute the average */
      v = int_mes.reduce(function (a, b) {
        return a + b;
      }) / int_mes.length;
    } else {
      /* No librato values on interval */
      v = av.length ? av[av.length - 1] : 0;
    }
    av.push(v);
  }

  return av;
};

/* Given a step, find the best librato resolution to use.
         *
         * Example:
         *
         * (s) : cubism step
         *
         * avail_rsts   1 --------------- 60 --------------- 900 ---------------- 3600
         *                                |    (s)            |
         *                                |                   |
         *                              [low_res             top_res]
         *
         * return: low_res (60)
         */
var findIdealLibratoRFesolution = function findIdealLibratoRFesolution(step) {
  var avail_rsts = [1, 60, 900, 3600];
  var highest_res = avail_rsts[0],
      lowest_res = avail_rsts[avail_rsts.length]; // high and lowest available resolution from librato

  /* If step is outside the highest or lowest librato resolution, pick them and we are done */
  if (step >= lowest_res) return lowest_res;

  if (step <= highest_res) return highest_res;

  /* If not, find in what resolution interval the step lands. */
  var iof = void 0,
      top_res = void 0,
      i = void 0;
  for (i = step; i <= lowest_res; i++) {
    iof = avail_rsts.indexOf(i);
    if (iof > -1) {
      top_res = avail_rsts[iof];
      break;
    }
  }

  var low_res = void 0;
  for (i = step; i >= highest_res; i--) {
    iof = avail_rsts.indexOf(i);
    if (iof > -1) {
      low_res = avail_rsts[iof];
      break;
    }
  }

  /* What's the closest librato resolution given the step ? */
  return top_res - step < step - low_res ? top_res : low_res;
};

var findLibratoResolution = function findLibratoResolution(sdate, edate, step) {
  var i_size = edate - sdate,
      // interval size
  month = 2419200,
      week = 604800,
      two_days = 172800;

  if (i_size > month) return 3600;

  var ideal_res = findIdealLibratoRFesolution(step);

  /*
     * Now we have the ideal resolution, but due to the retention policies at librato, maybe we have
     * to use a higher resolution.
     * http://support.metrics.librato.com/knowledgebase/articles/66838-understanding-metrics-roll-ups-retention-and-grap
     */
  if (i_size > week && ideal_res < 900) return 900;else if (i_size > two_days && ideal_res < 60) return 60;else return ideal_res;
};

var make_url = function make_url(sdate, edate, step, composite) {
  var url_prefix = 'https://metrics-api.librato.com/v1/metrics';
  var params = 'compose=' + composite + '&start_time=' + sdate + '&end_time=' + edate + '&resolution=' + findLibratoResolution(sdate, edate, step);
  return url_prefix + '?' + params;
};

/* All the logic to query the librato API is here */
var request = function request(composite, user, token) {
  return {
    fire: function fire(isdate, iedate, step, callback_done) {
      var a_values = []; /* Store partial values from librato */
      var full_url = make_url(isdate, iedate, step, composite);
      var auth_string = 'Basic ' + btoa(user + ':' + token);

      /*
           * Librato has a limit in the number of measurements we get back in a request (100).
           * We recursively perform requests to the API to ensure we have all the data points
           * for the interval we are working on.
           */
      json(full_url).header('X-Requested-With', 'XMLHttpRequest').header('Authorization', auth_string).header('Librato-User-Agent', 'cubism/' + cubism.version).then(function (data) {
        if (data.measurements.length === 0) {
          return;
        }
        data.measurements[0].series.forEach(function (o) {
          a_values.push(o);
        });

        var still_more_values = 'query' in data && 'next_time' in data.query;
        if (still_more_values) {
          request(make_url(data.query.next_time, iedate, step));
        } else {
          var a_adjusted = downUpSampling(isdate, iedate, step, a_values);
          callback_done(a_adjusted);
        }
      }).catch(function (error) {
        return console.error(error);
      });
    }
  };
};

/* librato (http://dev.librato.com/v1/post/metrics) source
 * If you want to see an example of how to use this source, check: https://gist.github.com/drio/5792680
 */

var DateFormatter = function DateFormatter(time) {
  return Math.floor(time / 1000);
};

var apiLibrato = function apiLibrato(context) {
  return {
    librato: function librato(user, token) {
      return {
        toString: function toString() {
          return 'librato';
        },
        metric: function metric(m_composite) {
          return context.metric(function (start, stop, step, callback) {
            /* All the librato logic is here; .fire() retrieves the metrics' data */
            request(m_composite, user, token).fire(DateFormatter(start), DateFormatter(stop), DateFormatter(step), function (a_values) {
              return callback(null, a_values);
            });
          }, m_composite += '');
        }
      };
    }
  };
};

// Helper method for parsing graphite's raw format.
var parseGraphite = function parseGraphite(text$$1) {
  var i = text$$1.indexOf('|'),
      meta = text$$1.substring(0, i),
      c = meta.lastIndexOf(','),
      b = meta.lastIndexOf(',', c - 1),
      a = meta.lastIndexOf(',', b - 1),
      start = meta.substring(a + 1, b) * 1000,
      step = meta.substring(c + 1) * 1000;
  return text$$1.substring(i + 1).split(',').slice(1) // the first value is always None?
  .map(function (d) {
    return +d;
  });
};

var DateFormatter$1 = function DateFormatter(time) {
  return Math.floor(time / 1000);
};

var apiGraphite = function apiGraphite(context) {
  return {
    graphite: function graphite() {
      var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return {
        toString: function toString() {
          return host;
        }, // Returns the graphite host.
        find: function find(pattern, callback) {
          json(host + '/metrics/find?format=completer' + '&query=' + encodeURIComponent(pattern)).then(function (result) {
            if (!result) return callback(new Error('unable to find metrics'));
            callback(null, result.metrics.map(function (d) {
              return d.path;
            }));
          });
        },
        metric: function metric(expression) {
          var sum = 'sum';

          var metric = context.metric(function (start, stop, step, callback) {
            var target = expression;

            // Apply the summarize, if necessary.
            if (step !== 1e4) target = 'summarize(' + target + ",'" + (!(step % 36e5) ? step / 36e5 + 'hour' : !(step % 6e4) ? step / 6e4 + 'min' : step / 1e3 + 'sec') + "','" + sum + "')";

            text(host + '/render?format=raw' + '&target=' + encodeURIComponent('alias(' + target + ",'')") + '&from=' + DateFormatter$1(start - 2 * step) + // off-by-two?
            '&until=' + DateFormatter$1(stop - 1000)).then(function (text$$1) {
              if (!text$$1) return callback(new Error('unable to load data'));
              callback(null, parseGraphite(text$$1));
            });
          }, expression += '');

          metric.summarize = function (_sum) {
            sum = _sum;
            return metric;
          };

          return metric;
        }
      };
    }
  };
};

var apiRemove$3 = function apiRemove(state) {
  return {
    remove: function remove(selection) {
      var context = state.context;

      var _remove = function _remove(d) {
        d.primary.on('change.comparison-' + d.id, null);
        d.secondary.on('change.comparison-' + d.id, null);
        context.on('change.comparison-' + d.id, null);
        context.on('focus.comparison-' + d.id, null);
      };

      selection.on('mousemove.comparison', null).on('mouseout.comparison', null);
      selection.selectAll('canvas').each(_remove).remove();

      selection.selectAll('.title,.value').remove();
    }
  };
};

var apiMisc$1 = function apiMisc(state) {
  return {
    height: function height() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._height;
      state._height = +_;
      return state;
    },
    primary: function (_primary) {
      function primary() {
        return _primary.apply(this, arguments);
      }

      primary.toString = function () {
        return _primary.toString();
      };

      return primary;
    }(function () {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._primary;
      state._primary = primary;
      return state;
    }),
    secondary: function secondary() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._secondary;
      state._secondary = _;
      return state;
    },
    extent: function extent() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._extent;
      state._extent = _;
      return state;
    },
    scale: function scale() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._scale;
      state._scale = _;
      return state;
    },
    title: function title() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._title;
      state._title = _;
      return state;
    },
    formatPrimary: function formatPrimary() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._formatPrimary;
      state._formatPrimary = _;
      return state;
    },
    formatChange: function formatChange() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._formatChange;
      state._formatChange = _;
      return state;
    },
    colors: function colors() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._colors;
      state._colorscolors = _;
      return state;
    },
    strokeWidth: function strokeWidth() {
      var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_ === null) return state._strokeWidth;
      state._strokeWidth = _;
      return state;
    }
  };
};

var s4 = function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var uuid = function uuid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

var roundEven = function roundEven(i) {
  return i & 0xfffffe;
};
var roundOdd = function roundOdd(i) {
  return (i + 1 & 0xfffffe) - 1;
};

var apiRender$3 = function apiRender(state) {
  return {
    render: function render(selection) {
      var context = state.context,
          _width = state._width,
          _height = state._height,
          _scale = state._scale,
          _primary = state._primary,
          _secondary = state._secondary,
          _extent = state._extent,
          _title = state._title,
          _formatPrimary = state._formatPrimary,
          _formatChange = state._formatChange,
          _colors = state._colors,
          _strokeWidth = state._strokeWidth;


      selection.on('mousemove.comparison', function () {
        context.focus(Math.round(mouse(this)[0]));
      }).on('mouseout.comparison', function () {
        return context.focus(null);
      });

      selection.append('canvas').attr('width', _width).attr('height', _height);

      selection.append('span').attr('class', 'title').text(_title);

      selection.append('span').attr('class', 'value primary');
      selection.append('span').attr('class', 'value change');

      selection.each(function (d, i) {
        var id = uuid(),
            primary_ = typeof _primary === 'function' ? _primary.call(this, d, i) : _primary,
            secondary_ = typeof _secondary === 'function' ? _secondary.call(this, d, i) : _secondary,
            extent_ = typeof _extent === 'function' ? _extent.call(this, d, i) : _extent,
            div = select(this),
            canvas = div.select('canvas'),
            spanPrimary = div.select('.value.primary'),
            spanChange = div.select('.value.change');

        var ready = null;

        canvas.datum({ id: id, primary: primary_, secondary: secondary_ });
        var canvasContext = canvas.node().getContext('2d');

        function change(start, stop) {
          canvasContext.save();
          canvasContext.clearRect(0, 0, _width, _height);

          // update the scale
          var primaryExtent = primary_.extent(),
              secondaryExtent = secondary_.extent(),
              extent = extent_ == null ? primaryExtent : extent_;
          _scale.domain(extent).range([_height, 0]);
          ready = primaryExtent.concat(secondaryExtent).every(isFinite);

          // consistent overplotting
          var round = start / context.step() & 1 ? roundOdd : roundEven;

          // positive changes
          canvasContext.fillStyle = _colors[2];
          for (var _i = 0, n = _width; _i < n; ++_i) {
            var y0 = _scale(primary_.valueAt(_i)),
                y1 = _scale(secondary_.valueAt(_i));
            if (y0 < y1) canvasContext.fillRect(round(_i), y0, 1, y1 - y0);
          }

          // negative changes
          canvasContext.fillStyle = _colors[0];
          for (var _i2 = 0, _n = _width; _i2 < _n; ++_i2) {
            var _y = _scale(primary_.valueAt(_i2)),
                _y2 = _scale(secondary_.valueAt(_i2));
            if (_y > _y2) canvasContext.fillRect(round(_i2), _y2, 1, _y - _y2);
          }

          // positive values
          canvasContext.fillStyle = _colors[3];
          for (var _i3 = 0, _n2 = _width; _i3 < _n2; ++_i3) {
            var _y3 = _scale(primary_.valueAt(_i3)),
                _y4 = _scale(secondary_.valueAt(_i3));
            if (_y3 <= _y4) canvasContext.fillRect(round(_i3), _y3, 1, _strokeWidth);
          }

          // negative values
          canvasContext.fillStyle = _colors[1];
          for (var _i4 = 0, _n3 = _width; _i4 < _n3; ++_i4) {
            var _y5 = _scale(primary_.valueAt(_i4)),
                _y6 = _scale(secondary_.valueAt(_i4));
            if (_y5 > _y6) canvasContext.fillRect(round(_i4), _y5 - _strokeWidth, 1, _strokeWidth);
          }

          canvasContext.restore();
        }

        var focus = function focus() {
          var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _width - 1;

          var valuePrimary = primary_.valueAt(i),
              valueSecondary = secondary_.valueAt(i),
              valueChange = (valuePrimary - valueSecondary) / valueSecondary;

          spanPrimary.datum(valuePrimary).text(isNaN(valuePrimary) ? null : _formatPrimary);

          spanChange.datum(valueChange).text(isNaN(valueChange) ? null : _formatChange).attr('class', 'value change ' + (valueChange > 0 ? 'positive' : valueChange < 0 ? 'negative' : ''));
        };

        var firstChange = function firstChange(start, stop) {
          change(start, stop);
          focus();
          if (ready) {
            primary_.on('change.comparison-' + id, function (d) {
              return d;
            });
            secondary_.on('change.comparison-' + id, function (d) {
              return d;
            });
          }
        };

        // Display the first primary change immediately,
        // but defer subsequent updates to the context change.
        // Note this someone still needs to listen to the metric,
        // so this it continues to update automatically.
        primary_.on('change.comparison-' + id, firstChange);
        secondary_.on('change.comparison-' + id, firstChange);

        // Update the chart when the context changes.
        context.on('change.comparison-' + id, change);
        context.on('focus.comparison-' + id, focus);
      });
    }
  };
};

var initState = function initState(context) {
  return {
    context: context,
    _width: context.size(),
    _height: 120,
    _scale: scaleLinear().interpolate(interpolateRound),
    _primary: function _primary(d) {
      return d[0];
    },
    _secondary: function _secondary(d) {
      return d[1];
    },
    _extent: null,
    _title: function _title(d) {
      return d;
    },
    _formatPrimary: format('.2s'),
    _formatChange: format('+.0%'),
    _colors: ['#9ecae1', '#225b84', '#a1d99b', '#22723a'],
    _strokeWidth: 1.5
  };
};

var apiComparison = function apiComparison(context) {
  return {
    comparison: function comparison() {
      var state = initState(context);

      return Object.assign(state, apiRemove$3(state), apiMisc$1(state), apiRender$3(state));
    }
  };
};

var config = {
  id: 1,
  step: 1e4, // ten seconds, in milliseconds
  size: 1440, // ten seconds, in milliseconds
  serverDelay: 5e3,
  clientDelay: 5e3,
  event: dispatch('prepare', 'beforechange', 'change', 'focus'),
  start0: null,
  stop0: null, // the start and stop for the previous change event
  start1: null,
  stop1: null, // the start and stop for the next prepare event
  timeout: null,
  focus: null,
  scale: scaleTime().range([0, 1440])
};

var context$1 = function context() {
  var state = {
    _id: 1,
    _step: 1e4, // ten seconds, in milliseconds
    _size: 1440, // ten seconds, in milliseconds
    _serverDelay: 5e3,
    _clientDelay: 5e3,
    _event: dispatch('prepare', 'beforechange', 'change', 'focus'),
    _start0: null,
    _stop0: null, // the start and stop for the previous change event
    _start1: null,
    _stop1: null, // the start and stop for the next prepare event
    _timeout: null,
    _focus: null,
    _scale: scaleTime().range([0, 1440])
  };

  var _context = Object.assign(state, apiAxis(state), apiComparison(state), apiCube(state), apiClientDelay(state), apiFocus(state), apiMetric(state), apiOn(state), apiRule(state), apiServerDelay(state), apiSize(state), apiStart(state), apiStop(state), apiStep(state));

  state._timeout = setTimeout(_context.start, 10);

  var focus = _context.focus;


  select(window).on('keydown.context-' + ++_context._id, function () {
    switch (!event.metaKey && event.keyCode) {
      case 37:
        // left
        if (focus == null) _context.focus = size - 1;
        if (focus > 0) _context.focus(--_context.focus);
        break;
      case 39:
        // right
        if (focus == null) _context.focus = size - 2;
        if (focus < size - 1) _context.focus(++_context.focus);
        break;
      default:
        return;
    }

    event.preventDefault();
  });

  var cubismContext = update(_context);

  return Object.assign(cubismContext, apiHorizon(cubismContext), apiGangliaWeb(cubismContext), apiLibrato(cubismContext), apiGraphite(cubismContext));
};

var _arguments = arguments;
var options = function options(name, defaultValues) {
  var options = location.search.substring(1).split('&'),
      values = [],
      n = options.length;

  var i = -1,
      o = void 0;
  while (++i < n) {
    if ((o = options[i].split('='))[0] === name) {
      values.push(decodeURIComponent(o[1]));
    }
  }
  return values.length || _arguments.length < 2 ? values : defaultValues;
};

var option = function option(name, defaultValue) {
  var values = options(name);
  return values.length ? values[0] : defaultValue;
};

export { version, context$1 as context, options, option };
//# sourceMappingURL=cubism-es.esm.js.map
