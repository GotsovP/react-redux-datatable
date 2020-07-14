'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _BasicTable = require('./stories/tableSettings/BasicTable');

var _BasicTable2 = _interopRequireDefault(_BasicTable);

var _DisplayTitle = require('./stories/tableSettings/DisplayTitle');

var _DisplayTitle2 = _interopRequireDefault(_DisplayTitle);

var _ExtraToolbarItems = require('./stories/tableSettings/ExtraToolbarItems');

var _ExtraToolbarItems2 = _interopRequireDefault(_ExtraToolbarItems);

var _ExtraButtons = require('./stories/tableSettings/ExtraButtons');

var _ExtraButtons2 = _interopRequireDefault(_ExtraButtons);

var _CustomHeaders = require('./stories/tableSettings/CustomHeaders');

var _CustomHeaders2 = _interopRequireDefault(_CustomHeaders);

var _CustomPaginationTotal = require('./stories/tableSettings/CustomPaginationTotal');

var _CustomPaginationTotal2 = _interopRequireDefault(_CustomPaginationTotal);

var _MinWidthTable = require('./stories/tableSettings/MinWidthTable');

var _MinWidthTable2 = _interopRequireDefault(_MinWidthTable);

var _NoDataIndication = require('./stories/tableSettings/NoDataIndication');

var _NoDataIndication2 = _interopRequireDefault(_NoDataIndication);

var _UseLocalStorage = require('./stories/tableSettings/UseLocalStorage');

var _UseLocalStorage2 = _interopRequireDefault(_UseLocalStorage);

var _SetWrapperClass = require('./stories/tableSettings/SetWrapperClass');

var _SetWrapperClass2 = _interopRequireDefault(_SetWrapperClass);

var _CustomApiError = require('./stories/tableSettings/CustomApiError');

var _CustomApiError2 = _interopRequireDefault(_CustomApiError);

var _DefaultSearch = require('./stories/globalSearch/DefaultSearch');

var _DefaultSearch2 = _interopRequireDefault(_DefaultSearch);

var _NoSearch = require('./stories/globalSearch/NoSearch');

var _NoSearch2 = _interopRequireDefault(_NoSearch);

var _TextFilter = require('./stories/columnFilters/TextFilter');

var _TextFilter2 = _interopRequireDefault(_TextFilter);

var _NumberFilter = require('./stories/columnFilters/NumberFilter');

var _NumberFilter2 = _interopRequireDefault(_NumberFilter);

var _SelectFilter = require('./stories/columnFilters/SelectFilter');

var _SelectFilter2 = _interopRequireDefault(_SelectFilter);

var _DateRangeFilter = require('./stories/columnFilters/DateRangeFilter');

var _DateRangeFilter2 = _interopRequireDefault(_DateRangeFilter);

var _NoColumnFilter = require('./stories/columnFilters/NoColumnFilter');

var _NoColumnFilter2 = _interopRequireDefault(_NoColumnFilter);

var _DefaultSort = require('./stories/columnSorting/DefaultSort');

var _DefaultSort2 = _interopRequireDefault(_DefaultSort);

var _NoColumnSorting = require('./stories/columnSorting/NoColumnSorting');

var _NoColumnSorting2 = _interopRequireDefault(_NoColumnSorting);

var _ColumnFormatting = require('./stories/otherColumnOptions/ColumnFormatting');

var _ColumnFormatting2 = _interopRequireDefault(_ColumnFormatting);

var _HideColumns = require('./stories/otherColumnOptions/HideColumns');

var _HideColumns2 = _interopRequireDefault(_HideColumns);

var _ColumnWidth = require('./stories/otherColumnOptions/ColumnWidth');

var _ColumnWidth2 = _interopRequireDefault(_ColumnWidth);

var _NoColumnExport = require('./stories/exporting/NoColumnExport');

var _NoColumnExport2 = _interopRequireDefault(_NoColumnExport);

var _NoExport = require('./stories/exporting/NoExport');

var _NoExport2 = _interopRequireDefault(_NoExport);

var _MinimalFeaturesTable = require('./stories/combinedExample/MinimalFeaturesTable');

var _MinimalFeaturesTable2 = _interopRequireDefault(_MinimalFeaturesTable);

var _AdvancedFeaturesTable = require('./stories/combinedExample/AdvancedFeaturesTable');

var _AdvancedFeaturesTable2 = _interopRequireDefault(_AdvancedFeaturesTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Table Settings', module).add('Basic Table', function () {
  return _react2.default.createElement(_BasicTable2.default, null);
}).add('Display Title', function () {
  return _react2.default.createElement(_DisplayTitle2.default, null);
}).add('Extra Toolbar Items', function () {
  return _react2.default.createElement(_ExtraToolbarItems2.default, null);
}).add('Extra Buttons', function () {
  return _react2.default.createElement(_ExtraButtons2.default, null);
}).add('Custom Headers', function () {
  return _react2.default.createElement(_CustomHeaders2.default, null);
}).add('Custom Pagination Total', function () {
  return _react2.default.createElement(_CustomPaginationTotal2.default, null);
}).add('Min Width Table', function () {
  return _react2.default.createElement(_MinWidthTable2.default, null);
}).add('No Data Indication', function () {
  return _react2.default.createElement(_NoDataIndication2.default, null);
}).add('Use Local Storage', function () {
  return _react2.default.createElement(_UseLocalStorage2.default, null);
}).add('Set Wrapper Class', function () {
  return _react2.default.createElement(_SetWrapperClass2.default, null);
}).add('Custom Api Error', function () {
  return _react2.default.createElement(_CustomApiError2.default, null);
});

(0, _react3.storiesOf)('Global Search', module).add('Default Search', function () {
  return _react2.default.createElement(_DefaultSearch2.default, null);
}).add('No Search', function () {
  return _react2.default.createElement(_NoSearch2.default, null);
});

(0, _react3.storiesOf)('Column Filters', module).add('Text Filter', function () {
  return _react2.default.createElement(_TextFilter2.default, null);
}).add('Number Filter', function () {
  return _react2.default.createElement(_NumberFilter2.default, null);
}).add('Select Filter', function () {
  return _react2.default.createElement(_SelectFilter2.default, null);
}).add('Date Range Filter', function () {
  return _react2.default.createElement(_DateRangeFilter2.default, null);
}).add('No Column Filter', function () {
  return _react2.default.createElement(_NoColumnFilter2.default, null);
});

(0, _react3.storiesOf)('Column Sorting', module).add('Default Sort', function () {
  return _react2.default.createElement(_DefaultSort2.default, null);
}).add('No Column Sorting', function () {
  return _react2.default.createElement(_NoColumnSorting2.default, null);
});

(0, _react3.storiesOf)('Other Column Options', module).add('Column Formatting', function () {
  return _react2.default.createElement(_ColumnFormatting2.default, null);
}).add('Hide Columns', function () {
  return _react2.default.createElement(_HideColumns2.default, null);
}).add('Column Width', function () {
  return _react2.default.createElement(_ColumnWidth2.default, null);
});

(0, _react3.storiesOf)('Exporting', module).add('No Column Export', function () {
  return _react2.default.createElement(_NoColumnExport2.default, null);
}).add('No Export', function () {
  return _react2.default.createElement(_NoExport2.default, null);
});

(0, _react3.storiesOf)('General Demo', module).add('Minimal Features', function () {
  return _react2.default.createElement(_MinimalFeaturesTable2.default, null);
}).add('Advanced Features', function () {
  return _react2.default.createElement(_AdvancedFeaturesTable2.default, null);
});