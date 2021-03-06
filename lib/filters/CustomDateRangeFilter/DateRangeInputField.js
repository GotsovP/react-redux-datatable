'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _SelectDayPicker = require('./SelectDayPicker/SelectDayPicker');

var _SelectDayPicker2 = _interopRequireDefault(_SelectDayPicker);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateRangeText = function dateRangeText(dayType) {
  return _react2.default.createElement(
    'div',
    { className: 'dateRangeText' },
    'Please select the ',
    _react2.default.createElement(
      'strong',
      null,
      dayType + ' day'
    ),
    '.'
  );
};

/**
 * Date range input field - This is a date range picker component.
 *
 * @param {function} handleDayClick - A function to handle day clicks.
 * @param {Date] from - The from date (start of the range).
 * @param {Date} to - The to date (end of the range).
 * @returns {jsx} The date range input component.
 */
var DateRangeInputField = function DateRangeInputField(_ref) {
  var handleDayClick = _ref.handleDayClick,
      from = _ref.from,
      to = _ref.to;
  return _react2.default.createElement(
    'div',
    { style: { display: 'inline-block' } },
    !from && !to && dateRangeText('first'),
    from && !to && dateRangeText('last'),
    from && to && _react2.default.createElement(
      'div',
      { className: 'dateRangeText' },
      'You chose from ',
      (0, _moment2.default)(from) <= (0, _moment2.default)(to) && (0, _moment2.default)(from).format(_constants.DISPLAY_DATE_FORMAT) + ' to ',
      (0, _moment2.default)(to).format(_constants.DISPLAY_DATE_FORMAT),
      (0, _moment2.default)(from) > (0, _moment2.default)(to) && ' to ' + (0, _moment2.default)(from).format(_constants.DISPLAY_DATE_FORMAT),
      '.'
    ),
    _react2.default.createElement(_SelectDayPicker2.default, { handleDayClick: handleDayClick, from: from, to: to })
  );
};

DateRangeInputField.propTypes = {
  handleDayClick: _propTypes2.default.func.isRequired,
  from: _propTypes2.default.instanceOf(Date),
  to: _propTypes2.default.instanceOf(Date)
};

DateRangeInputField.defaultProps = {
  from: null,
  to: null
};

exports.default = DateRangeInputField;