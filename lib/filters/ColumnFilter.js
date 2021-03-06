'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Column Filter Base Class
 *
 * This base class provides column filter operations and defaults
 * for setting up react-bootstrap-table defaultValues, and converting
 * filter values to local storage, api input and display properties.
 */
var ColumnFilter =
/**
 * Constructor
 *
 * Set the column object and default filter type.
 */
function ColumnFilter(column) {
  var _this = this;

  _classCallCheck(this, ColumnFilter);

  this.setDefault = function (value) {
    _this.column.defaultValue = value;
    return _this.column;
  };

  this.getBaseDefault = function () {
    return '';
  };

  this.getDefault = function () {
    return _this.column.defaultValue;
  };

  this.resetDefault = function () {
    _this.column.defaultValue = _this.getBaseDefault();
    return _this.column;
  };

  this.isDefaultNull = function () {
    return !_this.column.defaultValue;
  };

  this.hasEmptyValue = function (value) {
    return !value || value === '';
  };

  this.returnFilterItem = function (value) {
    return {
      type: _this.column.filter ? _this.column.filter : 'TextFilter',
      value: value
    };
  };

  this.toFilterItem = function () {
    if (_this.isDefaultNull()) {
      return null;
    }
    return _this.returnFilterItem(_this.column.defaultValue);
  };

  this.returnBlankFilterItem = function () {
    return _this.returnFilterItem('');
  };

  this.generateColumnFilter = function (value) {
    return {
      key: _this.column.key,
      type: _this.type,
      value: value
    };
  };

  this.getColumnFilterProps = function (defaultValue) {
    return {
      type: _this.column.filter ? _this.column.filter : 'TextFilter',
      placeholder: ' ',
      defaultValue: defaultValue
    };
  };

  this.column = _extends({}, column);
  this.type = 'like';
}

/**
 * Set the default value of the column filter
 *
 * @param {*} value The value to be set as default.
 * @return {Object} The updated column object.
 */


/**
 * Retrieve the base default value
 *
 * @return {string}
 */


/**
 * Retrieve the default column values
 *
 * @return {*|null}
 */


/**
 * Reset the default value of the column filter to null
 *
 * @return {Object} The updated column object.
 */


/**
 * Check if the current column filter default value is null
 *
 * @return {boolean} True if the default value is null.
 */


/**
 * Check if the filter has an empty value
 *
 * @param {string} value The value entered.
 * @return {boolean} True if the value is set.
 */


/**
 * Return a filter item
 *
 * @param {*} value The value of the filter.
 * @return {{type: string, value: *}} A filter object item.
 */


/**
 * Convert a filter column to a filter item
 *
 * Return the filter type and value if set, else null.
 *
 * @return {{type: string, value: *}|null} A filter object item, or null.
 */


/**
 * Return a blank filter item
 *
 * @return {{type: string, value: *}} A filter object item.
 */


/**
 * Generate a column filter object
 *
 * @param {*} value The value of the filter.
 * @return {{key, type: string, value: *}} A column filter object.
 */


/**
 * Get the column filter properties for displaying
 *
 * @param {*} defaultValue The default value of the column filter.
 * @return {Object} React-bootstrap-table column filter properties.
 */
;

exports.default = ColumnFilter;