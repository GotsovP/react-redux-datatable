'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrapTableNext = require('react-bootstrap-table-next');

var _reactBootstrapTableNext2 = _interopRequireDefault(_reactBootstrapTableNext);

var _reactBootstrapTable2Filter = require('react-bootstrap-table2-filter');

var _reactBootstrapTable2Filter2 = _interopRequireDefault(_reactBootstrapTable2Filter);

var _airbnbPropTypes = require('airbnb-prop-types');

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  dataTotalSize: _airbnbPropTypes.nonNegativeInteger.isRequired,
  clearFilters: _propTypes2.default.func.isRequired,
  currentPage: _airbnbPropTypes.nonNegativeInteger.isRequired,
  keyField: _propTypes2.default.string.isRequired,
  onExportToCSV: _propTypes2.default.func.isRequired,
  onSearchChange: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  onTableChange: _propTypes2.default.func.isRequired,
  refreshTable: _propTypes2.default.func.isRequired,
  sizePerPage: _airbnbPropTypes.nonNegativeInteger.isRequired,
  startClearingFilters: _propTypes2.default.func.isRequired,
  tableColumns: _propTypes2.default.object.isRequired,
  defaultSort: _propTypes2.default.array,
  extraButtons: _propTypes2.default.func,
  isFiltered: _propTypes2.default.bool,
  noDataIndication: _propTypes2.default.any,
  paginationTotal: _propTypes2.default.func,
  searchValue: _propTypes2.default.string,
  tableData: _propTypes2.default.any
});

var defaultProps = {
  defaultSort: null,
  extraButtons: null,
  isFiltered: false,
  noDataIndication: _constants.NO_DATA_INDICATOR,
  paginationTotal: undefined,
  searchValue: undefined,
  tableData: null
};

var DataTable = function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable(props) {
    _classCallCheck(this, DataTable);

    var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

    _this.menuButtonClass = function () {
      return {
        className: 'table-button table-button-menu-item'
      };
    };

    _this.startClearingAllFilters = function () {
      _this.props.startClearingFilters();
      _this.setState({
        clearFilters: true
      });
    };

    _this.clearAllFilters = function () {
      Object.values(_this.props.tableColumns).filter(function (filter) {
        return filter.column.searchable !== false;
      }).forEach(function (filter) {
        filter.resetDefault();
        _this.colRef[filter.column.key](filter.getDefault());
      });
      _this.setState({
        clearFilters: false
      });
      _this.props.clearFilters();
    };

    _this.toggleFilters = function () {
      _this.setState(function (prevState) {
        return { showFilters: !prevState.showFilters };
      });
    };

    _this.renderExportCSVButton = function () {
      return _react2.default.createElement(
        'button',
        _extends({
          'aria-label': 'export to csv',
          type: 'button'
        }, _this.menuButtonClass(), {
          onClick: function onClick() {
            return _this.props.onExportToCSV();
          }
        }),
        _react2.default.createElement(
          'span',
          { className: 'export-icon' },
          _react2.default.createElement('b', null)
        ),
        'Export'
      );
    };

    _this.hasColumnFilters = function () {
      return Object.values(_this.props.tableColumns).filter(function (filter) {
        return filter.column.searchable !== false;
      }).length > 0;
    };

    _this.hasColumnToExport = function () {
      return Object.values(_this.props.tableColumns).filter(function (filter) {
        return filter.column.export !== false;
      }).length > 0;
    };

    _this.renderCustomButtonGroup = function () {
      var filtersType = 'hidden';
      var hasColumnFilters = _this.hasColumnFilters();
      if (_this.state.showFilters) {
        if (_this.props.isFiltered) {
          filtersType = 'filtered';
        } else {
          filtersType = 'shown';
        }
      }
      return _react2.default.createElement(
        'div',
        { className: 'table-button-menu' },
        _react2.default.createElement(
          'button',
          _extends({
            'aria-label': 'refresh',
            type: 'button'
          }, _this.menuButtonClass(), {
            onClick: function onClick() {
              return _this.props.refreshTable();
            }
          }),
          _react2.default.createElement(
            'span',
            { className: 'refresh-icon' },
            _react2.default.createElement('b', null)
          )
        ),
        hasColumnFilters && filtersType === 'shown' && _react2.default.createElement(
          'button',
          _extends({
            'aria-label': 'hide filters',
            'aria-haspopup': 'true',
            type: 'button'
          }, _this.menuButtonClass(), {
            onClick: function onClick() {
              return _this.toggleFilters();
            }
          }),
          _react2.default.createElement(
            'span',
            { className: 'filter-icon filter-icon-shown' },
            _react2.default.createElement('b', null)
          ),
          'Filter'
        ),
        hasColumnFilters && filtersType === 'filtered' && _react2.default.createElement(
          'button',
          _extends({
            'aria-label': 'clear filters',
            type: 'button'
          }, _this.menuButtonClass(), {
            onClick: function onClick() {
              return _this.startClearingAllFilters();
            }
          }),
          _react2.default.createElement(
            'span',
            { className: 'filter-icon filter-icon-clear' },
            _react2.default.createElement('b', null)
          ),
          'Clear Filters'
        ),
        hasColumnFilters && filtersType === 'hidden' && _react2.default.createElement(
          'button',
          _extends({
            'aria-label': 'show filters',
            type: 'button'
          }, _this.menuButtonClass(), {
            onClick: function onClick() {
              return _this.toggleFilters();
            }
          }),
          _react2.default.createElement(
            'span',
            { className: 'filter-icon' },
            _react2.default.createElement('b', null)
          ),
          'Filter'
        ),
        _this.hasColumnToExport() && _this.renderExportCSVButton(),
        _this.props.extraButtons && _this.props.extraButtons()
      );
    };

    _this.renderSearchBox = function () {
      return _react2.default.createElement(
        'div',
        { className: 'form-group form-group-sm react-bs-table-search-form' },
        _react2.default.createElement('input', {
          type: 'text',
          defaultValue: _this.props.searchValue,
          placeholder: 'Search',
          onKeyUp: _this.props.onSearchChange
        }),
        _react2.default.createElement('span', { className: 'input-group-btn' })
      );
    };

    _this.renderToolBar = function () {
      return _react2.default.createElement(
        'div',
        { className: 'react-bs-table-tool-bar' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-8' },
            _this.renderCustomButtonGroup()
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-4' },
            _this.hasColumnFilters() && _this.renderSearchBox()
          )
        )
      );
    };

    _this.state = {
      showFilters: _this.props.isFiltered,
      clearFilters: false
    };
    _this.colRef = {};
    return _this;
  }

  _createClass(DataTable, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.clearFilters) this.clearAllFilters();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          keyField = _props.keyField,
          noDataIndication = _props.noDataIndication,
          defaultSort = _props.defaultSort,
          tableColumns = _props.tableColumns,
          tableData = _props.tableData,
          dataTotalSize = _props.dataTotalSize,
          onTableChange = _props.onTableChange,
          onSizePerPageChange = _props.onSizePerPageChange,
          currentPage = _props.currentPage,
          sizePerPage = _props.sizePerPage,
          paginationTotal = _props.paginationTotal;

      // Add sort options

      var defaultSortOptions = null;
      if (defaultSort) {
        defaultSortOptions = [{
          dataField: defaultSort[0],
          order: defaultSort[1].toLowerCase()
        }];
      }

      // Add pagination options
      var paginationOptions = {
        onSizePerPageChange: onSizePerPageChange,
        page: currentPage,
        sizePerPage: sizePerPage,
        totalSize: dataTotalSize,
        paginationTotal: paginationTotal
      };

      var columns = Object.values(tableColumns).map(function (tableColumn) {
        // set column filter, if searchable
        var columnFilter = void 0;
        var filterRenderer = void 0;
        if (tableColumn.column.searchable !== false) {
          var defaultValue = tableColumn.column.defaultValue;

          defaultValue = defaultValue || tableColumn.getBaseDefault();
          var filterOptions = _extends({}, tableColumn.getColumnFilterProps(defaultValue), {
            getFilter: function getFilter(c) {
              _this2.colRef[tableColumn.column.key] = c;
            }
          });
          if (filterOptions.type === 'TextFilter') {
            columnFilter = (0, _reactBootstrapTable2Filter.textFilter)(filterOptions);
          }
          if (filterOptions.type === 'SelectFilter') {
            columnFilter = (0, _reactBootstrapTable2Filter.selectFilter)(filterOptions);
          }
          if (filterOptions.type === 'NumberFilter') {
            columnFilter = (0, _reactBootstrapTable2Filter.numberFilter)(filterOptions);
          }
          if (filterOptions.type === 'CustomFilter') {
            columnFilter = (0, _reactBootstrapTable2Filter.customFilter)();
            filterRenderer = function filterRenderer(onFilter) {
              return tableColumn.getCustomFilter(onFilter, filterOptions);
            };
          }
        }
        return _extends({
          dataField: tableColumn.column.key,
          text: tableColumn.column.title,
          sort: !(tableColumn.column.sortable === false),
          filter: columnFilter
        }, filterRenderer && { filterRenderer: filterRenderer }, {
          headerClasses: '' + (_this2.state.showFilters ? '' : 'hide-filter'),
          hidden: tableColumn.column.hidden
        }, tableColumn.column.width && {
          headerStyle: { width: tableColumn.column.width.toString() + 'px' }
        }, tableColumn.column.width && {
          style: { width: tableColumn.column.width.toString() + 'px' }
        }, tableColumn.column.dataFormat && {
          formatter: tableColumn.column.dataFormat
        }, tableColumn.column.formatExtraData && {
          formatExtraData: tableColumn.column.formatExtraData
        });
      });

      return _react2.default.createElement(
        'div',
        { style: { position: 'relative' } },
        this.renderToolBar(),
        _react2.default.createElement(_reactBootstrapTableNext2.default, {
          remote: { pagination: true },
          keyField: keyField,
          data: tableData || [],
          columns: columns,
          defaultSorted: defaultSortOptions,
          striped: true,
          hover: true,
          pagination: (0, _Pagination2.default)(paginationOptions),
          onTableChange: onTableChange,
          noDataIndication: noDataIndication,
          filter: (0, _reactBootstrapTable2Filter2.default)()
        })
      );
    }
  }]);

  return DataTable;
}(_react2.default.Component);

DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;

exports.default = DataTable;