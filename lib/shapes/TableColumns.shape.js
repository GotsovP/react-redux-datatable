'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  key: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  dataFormat: _propTypes2.default.func,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  export: _propTypes2.default.bool,
  filter: _propTypes2.default.string,
  filterOptions: _propTypes2.default.object,
  formatExtraData: _propTypes2.default.any,
  hidden: _propTypes2.default.bool,
  searchable: _propTypes2.default.bool,
  sortable: _propTypes2.default.bool,
  width: _airbnbPropTypes.nonNegativeInteger
});