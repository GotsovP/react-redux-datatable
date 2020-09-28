'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactRedux = require('react-redux');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _TableSettings = require('./shapes/TableSettings.shape');

var _TableSettings2 = _interopRequireDefault(_TableSettings);

var _csvExport = require('./csvExport');

var _DataTable = require('./DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _DataTable3 = require('./DataTable.actions');

var _LoadingGif = require('./LoadingGif/LoadingGif');

var _LoadingGif2 = _interopRequireDefault(_LoadingGif);

var _localStorage = require('./localStorage');

var _ColumnFilters = require('./ColumnFilters');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultAxiosInstance = _axios2.default.create();
defaultAxiosInstance.defaults.timeout = 60000;

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  dispatch: _propTypes2.default.func.isRequired,
  tableSettings: _TableSettings2.default.isRequired,
  apiLocation: _propTypes2.default.string.isRequired,
  axiosInstance: _propTypes2.default.func,
  DataTableData: _propTypes2.default.any,
  ownProps: _propTypes2.default.object
});

var defaultProps = {
  axiosInstance: defaultAxiosInstance,
  DataTableData: null,
  ownProps: {}
};

var DataTableContainer = exports.DataTableContainer = function (_React$Component) {
  _inherits(DataTableContainer, _React$Component);

  function DataTableContainer(props) {
    _classCallCheck(this, DataTableContainer);

    var _this = _possibleConstructorReturn(this, (DataTableContainer.__proto__ || Object.getPrototypeOf(DataTableContainer)).call(this, props));

    _this.onTableChange = function (type, _ref) {
      var _ref$page = _ref.page,
          page = _ref$page === undefined ? 1 : _ref$page,
          _ref$sizePerPage = _ref.sizePerPage,
          sizePerPage = _ref$sizePerPage === undefined ? 10 : _ref$sizePerPage,
          filters = _ref.filters,
          sortField = _ref.sortField,
          sortOrder = _ref.sortOrder;

      if (!_this.isSetup || _this.state.clearingFilters) return;

      var filterValues = (0, _ColumnFilters.getFilterValues)(_this.tableColumns, filters);
      _this.columnFilters = (0, _ColumnFilters.generateColumnFilters)(_this.tableColumns, filterValues);

      if (_this.props.tableSettings.useLocalStorage) {
        (0, _localStorage.updateLocalStorageItem)('tableFilters', _defineProperty({}, _this.props.tableSettings.tableID, (0, _ColumnFilters.setStorageFilters)(_this.tableColumns, filterValues)));
      }

      _this.getTableData({
        sizePerPage: sizePerPage,
        page: page,
        sortField: sortField,
        sortOrder: sortOrder
      });

      _this.setState({
        sizePerPage: sizePerPage,
        currentPage: page,
        sortField: sortField,
        sortOrder: sortOrder,
        lastRefresh: Date.now() // eslint-disable-line react/no-unused-state
      });
    };

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
  clearTimeout (timer);
  timer = setTimeout(callback, ms);
 };
})();

    _this.onSearchChange = function (e) {
var searchEvent = {...e};
delay(function(){
    var text = searchEvent.target.value.trim();
      if (_this.props.tableSettings.useLocalStorage) {
        (0, _localStorage.updateLocalStorageItem)('tableSearch', _defineProperty({}, _this.props.tableSettings.tableID, text));
      }
      _this.searchValue = text;
      _this.getTableData({});
      _this.setState({
        currentPage: 1
      });
  }, 1000 );
    };

    _this.onSizePerPageChange = function (sizePerPage) {
      _this.setState({
        sizePerPage: sizePerPage
      });
    };

    _this.onExportToCSV = function () {
      if ((0, _csvExport.canUseDOM)()) {
        (0, _DataTable3.fetchExportData)(_this.props.tableSettings, _this.state.sortField, _this.state.sortOrder, _this.searchValue, _this.columnFilters, _this.props.apiLocation, _this.props.axiosInstance).then(function (data) {
          var fields = Object.values(_this.tableColumns).filter(function (filter) {
            return filter.column.export !== false;
          }).map(function (tableColumn) {
            return tableColumn.column.key;
          });

          (0, _csvExport.exportToCSVFile)(fields, data, 'exportDownload_' + (0, _moment2.default)().format('YYYY-MM-DD_HH-mm') + '.csv');
        });
      }
    };

    _this.getTableData = function (_ref2) {
      var _ref2$sizePerPage = _ref2.sizePerPage,
          sizePerPage = _ref2$sizePerPage === undefined ? _this.state.sizePerPage : _ref2$sizePerPage,
          _ref2$page = _ref2.page,
          page = _ref2$page === undefined ? 1 : _ref2$page,
          _ref2$sortField = _ref2.sortField,
          sortField = _ref2$sortField === undefined ? _this.state.sortField : _ref2$sortField,
          _ref2$sortOrder = _ref2.sortOrder,
          sortOrder = _ref2$sortOrder === undefined ? _this.state.sortOrder : _ref2$sortOrder,
          selectedCustomer = (0, _localStorage.getLocalStorageItem)('selectedCustomer');

      _this.props.dispatch((0, _DataTable3.fetchTableData)(_this.props.tableSettings, sizePerPage, (page - 1) * sizePerPage, sortField, sortOrder, _this.searchValue, _this.columnFilters, _this.props.apiLocation, _this.props.axiosInstance, selectedCustomer ));
    };

    _this.setupTable = function () {
      var tableColumns = _this.props.tableSettings.tableColumns;

      _this.tableColumns = (0, _ColumnFilters.setupTableColumns)(tableColumns);

      if (_this.props.tableSettings.useLocalStorage) {
        // set table search
        var previousTableSearch = (0, _localStorage.getLocalStorageItem)('tableSearch');
        if (previousTableSearch && previousTableSearch[_this.props.tableSettings.tableID]) {
          _this.searchValue = previousTableSearch[_this.props.tableSettings.tableID];
        }

        // set table filters
        var previousTableFilters = (0, _localStorage.getLocalStorageItem)('tableFilters');
        if (previousTableFilters && previousTableFilters[_this.props.tableSettings.tableID]) {
          (0, _ColumnFilters.setDefaultFilters)(_this.tableColumns, previousTableFilters[_this.props.tableSettings.tableID]);
        }
      }
    };

    _this.initiateTable = function () {
      var filterValues = (0, _ColumnFilters.getDefaultFilterValues)(_this.tableColumns);
      _this.columnFilters = (0, _ColumnFilters.generateColumnFilters)(_this.tableColumns, filterValues);
      _this.getTableData({
        page: _this.state.currentPage
      });
    };

    _this.refreshTable = function () {
      _this.getTableData({
        page: _this.state.currentPage
      });
      _this.setState({
        lastRefresh: Date.now() // eslint-disable-line react/no-unused-state
      });
    };

    _this.startClearingFilters = function () {
      _this.setState({
        clearingFilters: true
      });
    };

    _this.clearFilters = function () {
      if (_this.props.tableSettings.useLocalStorage) {
        var previousTableFilters = (0, _localStorage.getLocalStorageItem)('tableFilters');
        if (previousTableFilters) {
          var newTableFilters = _extends({}, previousTableFilters);
          delete newTableFilters[_this.props.tableSettings.tableID];
          (0, _localStorage.setLocalStorageItem)('tableFilters', newTableFilters);
        }
      }
      _this.columnFilters = undefined;
      _this.getTableData({});
      _this.setState({
        currentPage: 1,
        clearingFilters: false
      });
    };

    _this.makeFullscreen = function () {
      _this.setState(function (prevState) {
        return { isFullscreen: !prevState.isFullscreen };
      });
    };

    _this.getApiError = function () {
      var _this$props = _this.props,
          tableSettings = _this$props.tableSettings,
          DataTableData = _this$props.DataTableData;


      if (DataTableData && DataTableData[tableSettings.tableID] && DataTableData[tableSettings.tableID].error) {
        return DataTableData[tableSettings.tableID].error;
      }

      return null;
    };

    _this.state = {
      isFullscreen: false,
      sizePerPage: _constants.SIZE_PER_PAGE,
      currentPage: 1,
      sortField: undefined,
      sortOrder: undefined,
      clearingFilters: false,
      lastRefresh: 0 // eslint-disable-line react/no-unused-state
    };
    _this.isSetup = false;
    _this.searchValue = '' + (props.tableSettings.defaultSearch || '');
    _this.columnFilters = undefined;
    _this.setupTable();
    _this.initiateTable();
    return _this;
  }

  _createClass(DataTableContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var setRef = this.props.ownProps.setRef;

      if (typeof setRef !== 'undefined') {
        setRef(this);
      }
      this.isSetup = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var setRef = this.props.ownProps.setRef;

      if (typeof setRef !== 'undefined') {
        setRef(null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tableSettings = _props.tableSettings,
          DataTableData = _props.DataTableData;


      if (!tableSettings.tableID || tableSettings.tableID === '') {
        return 'Missing tableID';
      }

      var error = this.getApiError();
      if (error) return tableSettings.customApiError ? tableSettings.customApiError(error) : (0, _constants.DEFAULT_ERROR)();

      var isLoading = !DataTableData || !DataTableData[tableSettings.tableID] || DataTableData[tableSettings.tableID].fetching;

      var isFiltered = this.columnFilters && this.columnFilters.length > 0;

      var tableData = null;
      if (DataTableData && DataTableData[tableSettings.tableID] && DataTableData[tableSettings.tableID].data) {
        tableData = DataTableData[tableSettings.tableID].data;
      }

      var tableDataSize = 0;
      if (DataTableData && DataTableData[tableSettings.tableID] && DataTableData[tableSettings.tableID].dataTotalSize) {
        tableDataSize = DataTableData[tableSettings.tableID].dataTotalSize;
      }

      if (!tableSettings.extraToolbarItems) tableSettings.extraToolbarItems = null;
      return _react2.default.createElement(
        'div',
        {
          className: '\n                ' + tableSettings.wrapperType + '\n                ' + (this.state.isFullscreen ? 'section-isFullscreen' : '') + '\n                react-datatable\n            '
        },
        tableSettings.displayTitle && _react2.default.createElement(
          'div',
          { className: 'section-toolbar' },
          _react2.default.createElement(
            'span',
            { className: 'section-toolbar-title' },
            tableSettings.displayTitle
          ),
          tableSettings.extraToolbarItems && tableSettings.extraToolbarItems(),
          _react2.default.createElement(
            'div',
            { className: 'section-toolbar-group' },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: '\n                            section-toolbar-icon\n                            section-toolbar-fullscreen\n                            ' + (this.state.isFullscreen ? 'section-toolbar-isFullscreen' : '') + '\n                        ',
                title: 'Toggle Fullscreen',
                onClick: this.makeFullscreen
              },
              'Fullscreen'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'inner', style: { overflow: 'auto' } },
          _react2.default.createElement(
            'div',
            { style: { minWidth: tableSettings.minWidth } },
            isLoading && _react2.default.createElement(
              'div',
              { className: 'loadingContainer', style: { opacity: 0.3 } },
              _react2.default.createElement(_LoadingGif2.default, null)
            ),
            _react2.default.createElement(_DataTable2.default, {
              keyField: tableSettings.keyField,
              noDataIndication: tableSettings.noDataIndication,
              extraButtons: tableSettings.extraButtons,
              paginationTotal: tableSettings.customPaginationTotal,
              defaultSort: tableSettings.defaultSort,
              tableColumns: this.tableColumns,
              tableData: tableData,
              dataTotalSize: tableDataSize,
              onTableChange: this.onTableChange,
              onSizePerPageChange: this.onSizePerPageChange,
              onSearchChange: this.onSearchChange,
              onExportToCSV: this.onExportToCSV,
              currentPage: this.state.currentPage,
              sizePerPage: this.state.sizePerPage,
              refreshTable: this.refreshTable,
              searchValue: this.searchValue,
              isFiltered: isFiltered,
              startClearingFilters: this.startClearingFilters,
              clearFilters: this.clearFilters
            })
          )
        )
      );
    }
  }]);

  return DataTableContainer;
}(_react2.default.Component);

DataTableContainer.propTypes = propTypes;
DataTableContainer.defaultProps = defaultProps;

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    DataTableData: state.DataTableReducer.DataTableData,
    ownProps: ownProps
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(DataTableContainer);