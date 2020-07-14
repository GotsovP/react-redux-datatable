'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SORT_TYPES = exports.ISO_8601_DATETIME_FORMAT = exports.ISO_8601_DATE_FORMAT = exports.DISPLAY_DATE_FORMAT = exports.DEFAULT_ERROR = exports.REQUEST_HEADERS = exports.NO_DATA_INDICATOR = exports.SIZE_PER_PAGE = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Defaults
var SIZE_PER_PAGE = exports.SIZE_PER_PAGE = 10;
var NO_DATA_INDICATOR = exports.NO_DATA_INDICATOR = 'There is no data to display';
var REQUEST_HEADERS = exports.REQUEST_HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
};
var DEFAULT_ERROR = exports.DEFAULT_ERROR = function DEFAULT_ERROR() {
  return _react2.default.createElement(
    'div',
    { className: 'status_message offline' },
    _react2.default.createElement(
      'p',
      null,
      'The table failed to initialise. Please check you are connected to the internet and try again.'
    )
  );
};

// Dates
var DISPLAY_DATE_FORMAT = exports.DISPLAY_DATE_FORMAT = 'DD/MM/YYYY';
var ISO_8601_DATE_FORMAT = exports.ISO_8601_DATE_FORMAT = 'YYYY-MM-DD';
var ISO_8601_DATETIME_FORMAT = exports.ISO_8601_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

// Sorting
var SORT_ASC = 'asc';
var SORT_DESC = 'desc';
var SORT_TYPES = exports.SORT_TYPES = [SORT_ASC, SORT_DESC];