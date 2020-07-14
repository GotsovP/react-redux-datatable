'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  text: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  page: _airbnbPropTypes.nonNegativeInteger.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired
});

var SizePerPageOption = function SizePerPageOption(_ref) {
  var text = _ref.text,
      page = _ref.page,
      onSizePerPageChange = _ref.onSizePerPageChange;
  return _react2.default.createElement(
    'li',
    { key: text, role: 'presentation', className: 'dropdown-item' },
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        role: 'menuitem',
        'data-page': page,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          onSizePerPageChange(page);
        }
      },
      text
    )
  );
};

SizePerPageOption.propTypes = propTypes;

exports.default = SizePerPageOption;