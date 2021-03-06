'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColumnFilters = exports.getDefaultFilterValues = exports.getFilterValues = exports.getDefaultFilteredColumns = exports.setStorageFilters = exports.setDefaultFilters = exports.setupTableColumns = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _TextFilter = require('./filters/TextFilter');

var _TextFilter2 = _interopRequireDefault(_TextFilter);

var _SelectFilter = require('./filters/SelectFilter');

var _SelectFilter2 = _interopRequireDefault(_SelectFilter);

var _NumberFilter = require('./filters/NumberFilter');

var _NumberFilter2 = _interopRequireDefault(_NumberFilter);

var _CustomDateRangeFilter = require('./filters/CustomDateRangeFilter');

var _CustomDateRangeFilter2 = _interopRequireDefault(_CustomDateRangeFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */
/**
 * Setup Data Table Column Filters
 *
 * This function converts each table column setting into a column filter object.
 *
 * @param {Array} tableSettingsColumns The data table table column settings.
 * @return {Object} An object containing key: value column filter objects.
 */
var setupTableColumns = exports.setupTableColumns = function setupTableColumns(tableSettingsColumns) {
  return tableSettingsColumns.reduce(function (object, column) {
    switch (column.filter) {
      case 'SelectFilter':
        {
          object[column.key] = new _SelectFilter2.default(column);
          break;
        }
      case 'NumberFilter':
        {
          object[column.key] = new _NumberFilter2.default(column);
          break;
        }
      case 'CustomDateRangeFilter':
        {
          object[column.key] = new _CustomDateRangeFilter2.default(column);
          break;
        }
      default:
        {
          object[column.key] = new _TextFilter2.default(column);
          break;
        }
    }
    return object;
  }, {});
};
/* eslint-enable no-param-reassign */

/**
 * Set the table column default filter values
 *
 * @param {Object} tableColumns An object containing key: value column filter objects.
 * @param {Object} filters An object containing filter type and value pairs.
 */
var setDefaultFilters = exports.setDefaultFilters = function setDefaultFilters(tableColumns, filters) {
  return Object.entries(tableColumns).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        filter = _ref2[1];

    if (filters && filters[filter.column.key]) {
      filter.setDefault(filters[key].value);
    }
  });
};

/**
 * Set Local Storage filters
 *
 * This function takes the column filters, removes any non-searchable columns
 * and creates amended objects {key: { type: 'filterType', value: 'value' },..}.
 * Blank filters will be stored also to override defaults.
 *
 * @param {Object} tableColumns An object containing key: value column filter objects.
 * @param {Object} filters An object containing filter type and value pairs.
 * @return {Object} An object containing amended filter type and value pairs.
 */
var setStorageFilters = exports.setStorageFilters = function setStorageFilters(tableColumns, filters) {
  return Object.values(tableColumns).filter(function (filter) {
    return typeof filter.column.searchable === 'undefined' || filter.column.searchable !== false;
  }).reduce(function (object, filter) {
    if (typeof filters[filter.column.key] === 'undefined') {
      return _extends({}, object, _defineProperty({}, filter.column.key, filter.returnBlankFilterItem()));
    }
    if (!filters[filter.column.key].values) {
      return _extends({}, object, _defineProperty({}, filter.column.key, filter.returnFilterItem(filters[filter.column.key])));
    }
    return _extends({}, object, _defineProperty({}, filter.column.key, filter.returnFilterItem(filters[filter.column.key].values)));
  }, {});
};

/**
 * Get all filtered columns where the default is not null
 *
 * @param {Object} tableColumns An object containing key: value column filter objects.
 * @return {Object} An object containing column filters where the default is not null.
 */
var getDefaultFilteredColumns = exports.getDefaultFilteredColumns = function getDefaultFilteredColumns(tableColumns) {
  return Object.values(tableColumns).filter(function (filter) {
    return !filter.isDefaultNull();
  });
};

/**
 * Get all filter values where they are not empty
 *
 * @param {Object} tableColumns An object containing key: value column filter objects.
 * @param {Object} filters Filter objects matching react-bootstrap-table2.
 * @return {Object} Filter value objects where the value is set.
 */
var getFilterValues = exports.getFilterValues = function getFilterValues(tableColumns, filters) {
  return Object.keys(filters).reduce(function (object, filter) {
    if (tableColumns[filter].hasEmptyValue(filters[filter].filterVal)) {
      return object;
    }
    return _extends({}, object, _defineProperty({}, filter, filters[filter].filterVal));
  }, {});
};

/**
 * Get all default filter values where they are not empty
 *
 * @param {Object} tableColumns An object containing key: value column filter objects.
 * @return {Object} Filter value objects where the value is set.
 */
var getDefaultFilterValues = exports.getDefaultFilterValues = function getDefaultFilterValues(tableColumns) {
  return Object.keys(tableColumns).reduce(function (object, filter) {
    if (tableColumns[filter].hasEmptyValue(tableColumns[filter].getDefault())) {
      return object;
    }
    return _extends({}, object, _defineProperty({}, filter, tableColumns[filter].getDefault()));
  }, {});
};

/**
 * Generate column filters
 *
 * This function converts the table column filters in combination
 * with the react-bootstrap-table filter object to a column filter
 * array for fetching table data from an api.
 *
 * @param {Object} tableColumns An object containing key: value column filter objects.
 * @param {Object} filters A filter object matching react-bootstrap-table.
 * @return {({key, type, value}|*)[]} An array of column filters.
 */
var generateColumnFilters = exports.generateColumnFilters = function generateColumnFilters(tableColumns, filters) {
  return Object.entries(filters).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        filter = _ref4[1];

    return tableColumns[key].generateColumnFilter(filter);
  });
};