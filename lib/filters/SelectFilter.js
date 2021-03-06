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

/**
 * Select Filter
 *
 * A class providing supporting operations to a select
 * filter, extending the column filter base class.
 */
var SelectFilter = function (_ColumnFilter) {
  _inherits(SelectFilter, _ColumnFilter);

  /**
   * Constructor
   *
   * Call the parent construct and set the default filter type.
   */
  function SelectFilter(column) {
    _classCallCheck(this, SelectFilter);

    var _this = _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).call(this, column));

    _this.getColumnFilterProps = function (defaultValue) {
      return {
        type: _this.column.filter,
        options: _this.column.filterOptions,
        defaultValue: defaultValue
      };
    };

    _this.type = 'eq';
    return _this;
  }

  /**
   * Get the column filter properties for displaying
   *
   * @param {*} defaultValue The default value of the column filter.
   * @return {Object} React-bootstrap-table column filter properties.
   */


  return SelectFilter;
}(_ColumnFilter3.default);

exports.default = SelectFilter;