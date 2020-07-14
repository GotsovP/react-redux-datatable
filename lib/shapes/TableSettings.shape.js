'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _TableColumns = require('./TableColumns.shape');

var _TableColumns2 = _interopRequireDefault(_TableColumns);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  keyField: _propTypes2.default.string.isRequired,
  tableColumns: _propTypes2.default.arrayOf(_TableColumns2.default).isRequired,
  tableID: _propTypes2.default.string.isRequired,
  customApiError: _propTypes2.default.func,
  customPaginationTotal: _propTypes2.default.func,
  defaultSearch: _propTypes2.default.string,
  defaultSort: _propTypes2.default.arrayOf(_propTypes2.default.string, _propTypes2.default.oneOf(_constants.SORT_TYPES)),
  displayTitle: _propTypes2.default.string,
  extraToolbarItems: _propTypes2.default.func,
  extraButtons: _propTypes2.default.func,
  headers: _propTypes2.default.object,
  minWidth: _airbnbPropTypes.nonNegativeInteger,
  noDataIndication: _propTypes2.default.node,
  useLocalStorage: _propTypes2.default.bool,
  wrapperType: _propTypes2.default.string
});