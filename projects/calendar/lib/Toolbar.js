"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _constants = require("./utils/constants");

var Toolbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Toolbar, _React$Component);

  function Toolbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.navigate = function (action) {
      _this.props.onNavigate(action);
    };

    _this.view = function (view) {
      _this.props.onView(view);
    };

    _this.viewNamesGroup = function (messages) {
      var viewNames = _this.props.views;
      var view = _this.props.view;

      if (viewNames.length > 1) {
        return _react.default.createElement("select", {
          value: view,
          onChange: function onChange(e) {
            _this.view(e.target.value);
          },
          style: {
            borderWidth: '2px',
            borderColor: '#909090',
            borderRadius: '4px',
            padding: '8px'
          }
        }, viewNames.map(function (name) {
          return _react.default.createElement("option", {
            type: "button",
            value: name,
            key: name,
            className: (0, _clsx.default)({
              'rbc-active': view === name
            }),
            onClick: function onClick() {
              return _this.view(name);
            }
          }, messages[name]);
        }));
      }
    };

    return _this;
  }

  var _proto = Toolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label;
    var processedLabel = this.props.view === 'month' ? label.split(' ')[1] + ", " + label.split(' ')[0] : label;
    return _react.default.createElement("div", {
      style: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
      }
    }, _react.default.createElement("span", {
      className: "rbc-btn-group"
    }, _react.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }
    }, _react.default.createElement("div", {
      style: {
        marginRight: 21,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4
      },
      onClick: this.navigate.bind(null, _constants.navigate.PREVIOUS)
    }, _react.default.createElement(LeftArrow, null)), _react.default.createElement("div", {
      style: styles.labelStyle
    }, processedLabel), _react.default.createElement("div", {
      style: {
        marginLeft: 21,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4
      },
      type: "button",
      onClick: this.navigate.bind(null, _constants.navigate.NEXT)
    }, _react.default.createElement(RightArrow, null)))), _react.default.createElement("span", {
      className: "rbc-btn-group"
    }, this.viewNamesGroup(messages)));
  };

  return Toolbar;
}(_react.default.Component);

Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  view: _propTypes.default.string.isRequired,
  views: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  label: _propTypes.default.node.isRequired,
  localizer: _propTypes.default.object,
  onNavigate: _propTypes.default.func.isRequired,
  onView: _propTypes.default.func.isRequired
} : {};
var _default = Toolbar;
exports.default = _default;
var styles = {
  labelStyle: {
    fontFamily: 'Circular Std Medium',
    fontSize: '16px',
    color: '#262626'
  }
};

var LeftArrow = function LeftArrow() {
  return _react.default.createElement("svg", {
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M8 15L1 8L8 1",
    stroke: "#272727",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};

var RightArrow = function RightArrow() {
  return _react.default.createElement("svg", {
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M1 15L8 8L1 1",
    stroke: "#272727",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};

module.exports = exports["default"];