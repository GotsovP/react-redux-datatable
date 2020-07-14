'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _airbnbPropTypes = require('airbnb-prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  start: _airbnbPropTypes.nonNegativeInteger.isRequired,
  to: _airbnbPropTypes.nonNegativeInteger.isRequired,
  total: _airbnbPropTypes.nonNegativeInteger.isRequired
});

var PaginationTotal = function PaginationTotal(_ref) {
  var start = _ref.start,
      to = _ref.to,
      total = _ref.total;
  return _react2.default.createElement(
    'div',
    { style: { float: 'right', fontSize: '10px', marginTop: '4px', marginRight: '-66px' } },
    'Showing ',
    start,
    ' to ',
    to,
    ' of ',
    total,
    ' Results'
  );
};

PaginationTotal.propTypes = propTypes;

exports.default = PaginationTotal;