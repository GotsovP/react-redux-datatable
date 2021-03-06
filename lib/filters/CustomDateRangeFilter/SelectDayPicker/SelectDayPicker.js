'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectDayPicker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint jsx-a11y/no-onchange: 0 */

var currentYear = new Date().getFullYear();
var currentDate = new Date();

var YearMonthForm = function YearMonthForm(_ref) {
  var date = _ref.date,
      fromMonth = _ref.fromMonth,
      toMonth = _ref.toMonth,
      localeUtils = _ref.localeUtils,
      onChange = _ref.onChange;

  var months = localeUtils.getMonths();

  var years = [];
  for (var i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  var handleChange = function handleChange(e) {
    var _e$target$form = e.target.form,
        year = _e$target$form.year,
        month = _e$target$form.month;

    onChange(new Date(year.value, month.value));
  };

  return _react2.default.createElement(
    'form',
    { className: 'DayPicker-Caption' },
    _react2.default.createElement(
      'select',
      { name: 'month', onChange: handleChange, value: date.getMonth() },
      months.map(function (month, i) {
        return _react2.default.createElement(
          'option',
          { key: month, value: i },
          month
        );
      })
    ),
    _react2.default.createElement(
      'select',
      { name: 'year', onChange: handleChange, value: date.getFullYear() },
      years.map(function (year) {
        return _react2.default.createElement(
          'option',
          { key: year, value: year },
          year
        );
      })
    )
  );
};

YearMonthForm.propTypes = {
  date: _propTypes2.default.instanceOf(Date).isRequired,
  fromMonth: _propTypes2.default.instanceOf(Date).isRequired,
  toMonth: _propTypes2.default.instanceOf(Date).isRequired,
  localeUtils: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired
};

var SelectDayPicker = exports.SelectDayPicker = function (_React$Component) {
  _inherits(SelectDayPicker, _React$Component);

  function SelectDayPicker() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectDayPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SelectDayPicker.__proto__ || Object.getPrototypeOf(SelectDayPicker)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      fromMonth: new Date(currentYear - 5, 0),
      toMonth: new Date(currentYear + 5, 11),
      month: currentDate
    }, _this.handleYearMonthChange = function (month) {
      var updatedYear = month.getFullYear();
      _this.setState({
        month: month,
        fromMonth: new Date(updatedYear - 5, 0),
        toMonth: new Date(updatedYear + 5, 11)
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectDayPicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          handleDayClick = _props.handleDayClick,
          from = _props.from,
          to = _props.to;
      var _state = this.state,
          fromMonth = _state.fromMonth,
          toMonth = _state.toMonth,
          month = _state.month;

      return _react2.default.createElement(
        'div',
        { className: 'YearNavigation' },
        _react2.default.createElement(_reactDayPicker2.default, {
          onDayClick: handleDayClick,
          selectedDays: [from, { from: from, to: to }],
          month: month,
          fromMonth: fromMonth,
          toMonth: toMonth,
          captionElement: function captionElement(_ref3) {
            var date = _ref3.date,
                localeUtils = _ref3.localeUtils;
            return _react2.default.createElement(YearMonthForm, {
              date: date,
              fromMonth: fromMonth,
              toMonth: toMonth,
              localeUtils: localeUtils,
              onChange: _this2.handleYearMonthChange
            });
          }
        })
      );
    }
  }]);

  return SelectDayPicker;
}(_react2.default.Component);

SelectDayPicker.propTypes = {
  handleDayClick: _propTypes2.default.func.isRequired,
  from: _propTypes2.default.instanceOf(Date),
  to: _propTypes2.default.instanceOf(Date)
};

SelectDayPicker.defaultProps = {
  from: null,
  to: null
};

exports.default = SelectDayPicker;