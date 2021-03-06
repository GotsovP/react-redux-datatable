'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ColumnFilter2 = require('./ColumnFilter');

var _ColumnFilter3 = _interopRequireDefault(_ColumnFilter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberFilter = function (_ColumnFilter) {
  _inherits(NumberFilter, _ColumnFilter);

  function NumberFilter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NumberFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberFilter.__proto__ || Object.getPrototypeOf(NumberFilter)).call.apply(_ref, [this].concat(args))), _this), _this.resetDefault = function () {
      _this.column.defaultValue = {
        number: _this.getBaseDefault(),
        comparator: _this.column.defaultValue.comparator
      };
      return _this.column;
    }, _this.isDefaultNull = function () {
      return !_this.column.defaultValue.number;
    }, _this.hasEmptyValue = function (_ref2) {
      var number = _ref2.number;
      return !number || number === '';
    }, _this.returnBlankFilterItem = function () {
      return _this.returnFilterItem({
        comparator: _this.column.defaultValue.comparator
      });
    }, _this.generateColumnFilter = function (_ref3) {
      var comparator = _ref3.comparator,
          number = _ref3.number;

      var type = 'like';
      switch (comparator) {
        case '=':
          type = 'eq';
          break;
        case '>':
          type = 'gt';
          break;
        case '>=':
          type = 'gteq';
          break;
        case '<':
          type = 'lt';
          break;
        case '<=':
          type = 'lteq';
          break;
        case '!=':
          type = 'nteq';
          break;
        default:
      }
      return {
        key: _this.column.key,
        type: type,
        value: number
      };
    }, _this.getColumnFilterProps = function (defaultValue) {
      return {
        type: _this.column.filter,
        placeholder: ' ',
        comparators: ['=', '>', '>=', '<', '<=', '!=', '...'],
        withoutEmptyComparatorOption: true,
        defaultValue: defaultValue
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * Reset the default number value of the column filter to null
   *
   * @return {Object} The updated column object.
   */


  /**
   * Check if the current number filter default value is null
   *
   * @return {boolean} True if the default value is null.
   */


  /**
   * Check if the filter has an empty value
   *
   * @param {string} number The number value entered.
   * @return {boolean} True if the value is set.
   */


  /**
   * Return a blank number filter item
   *
   * @return {Object} A filter object item.
   */


  /**
   * Generate a column filter object
   *
   * @param {string} comparator The comparator symbol.
   * @param {number} value The numeric value of the filter.
   * @return {{key, type: string, value}} A column filter object.
   */


  /**
   * Get the column filter properties for displaying
   *
   * @param {*} defaultValue The default value of the column filter.
   * @return {{type: *, placeholder: string, comparators: string[], withoutEmptyComparatorOption: boolean, defaultValue: *}}
   */


  return NumberFilter;
}(_ColumnFilter3.default);

exports.default = NumberFilter;