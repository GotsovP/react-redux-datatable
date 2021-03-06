'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ColumnFilter2 = require('./ColumnFilter');

var _ColumnFilter3 = _interopRequireDefault(_ColumnFilter2);

var _CustomDateRangeFilter = require('./CustomDateRangeFilter/CustomDateRangeFilter');

var _CustomDateRangeFilter2 = _interopRequireDefault(_CustomDateRangeFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Custom Date Range Filter
 *
 * A class providing supporting operations to a custom date
 * range filter, extending the column filter base class.
 */
var CustomDateRangeFilter = function (_ColumnFilter) {
  _inherits(CustomDateRangeFilter, _ColumnFilter);

  function CustomDateRangeFilter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomDateRangeFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomDateRangeFilter.__proto__ || Object.getPrototypeOf(CustomDateRangeFilter)).call.apply(_ref, [this].concat(args))), _this), _this.getBaseDefault = function () {}, _this.setDefault = function (value) {
      if (value.values) {
        var from = new Date(value.values.from);
        var to = new Date(value.values.to);
        _this.column.defaultValue = {
          from: from,
          to: to
        };
      } else {
        _this.column.defaultValue = _this.getBaseDefault();
      }
      return _this.column;
    }, _this.returnFilterItem = function (values) {
      return {
        type: 'CustomFilter',
        value: {
          key: 'value',
          type: 'between',
          values: values
        }
      };
    }, _this.returnBlankFilterItem = function () {
      return {
        type: 'CustomFilter',
        value: ''
      };
    }, _this.generateColumnFilter = function (value) {
      return {
        key: _this.column.key,
        type: 'between',
        value: value
      };
    }, _this.getCustomFilter = function (filterHandler, filterOptions) {
      return _react2.default.createElement(_CustomDateRangeFilter2.default, {
        onFilter: filterHandler,
        columnKey: filterOptions.columnKey,
        defaultValue: filterOptions.defaultValue,
        getFilter: filterOptions.getFilter
      });
    }, _this.getColumnFilterProps = function (defaultValue) {
      return {
        type: 'CustomFilter',
        getElement: _this.getCustomFilter,
        columnKey: _this.column.key,
        defaultValue: defaultValue
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * Retrieve the base default value
   *
   * @return {object}
   */


  /**
   * Set the default value of the column filter
   *
   * @param {{values: {to: date, from: date}}|*} value An object containing from and to values.
   * @return {Object} The updated column object.
   */


  /**
   * Return a between values filter item
   *
   * @param {*} values The values of the filter.
   * @return {{type: string, value: {key: string, type: string, values: *}}} A filter object item.
   */


  /**
   * Return a blank custom filter item
   *
   * @return {{type: string, value: string}} A filter object item.
   */


  /**
   * Generate a column filter object
   *
   * @param {Object} value The value of the custom filter.
   * @return {{key, type: string, value: *}} A column filter object.
   */


  /**
   * Return a Date Range Filter
   *
   * @param {Function} filterHandler React-bootstrap-table filter handler.
   * @param {Object} filterOptions Filter options.
   * @return {jsx} The Date Range Filter component.
   */


  /**
   * Get the column filter properties for displaying
   *
   * @param {object} defaultValue The default value of the column filter.
   * @return {Object} React-bootstrap-table column filter properties.
   */


  return CustomDateRangeFilter;
}(_ColumnFilter3.default);

exports.default = CustomDateRangeFilter;