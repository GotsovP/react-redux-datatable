'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment/moment');

var _moment2 = _interopRequireDefault(_moment);

var _Story = require('../../components/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormatter = function dateFormatter(cell) {
  return (0, _moment2.default)(cell).format('ddd, Do MMM YYYY HH:mm');
};

var actionFormatter = function actionFormatter(cell, row, index, extraData) {
  return _react2.default.createElement(
    'div',
    { className: 'table-icons' },
    _react2.default.createElement('span', { className: 'view link' }),
    'Example: ' + cell + ' ' + row.first_name + ' ' + index + ' ' + extraData
  );
};

var tableSettings = {
  tableID: 'ColumnFormatting',
  keyField: 'request_id',
  tableColumns: [{
    title: 'Ref',
    key: 'request_id'
  }, {
    title: 'Request Date',
    key: 'created_at',
    filter: 'CustomDateRangeFilter',
    disableSearchAll: true,
    dataFormat: dateFormatter
  }, {
    title: 'Actions',
    key: 'actions',
    searchable: false,
    sortable: false,
    export: false,
    dataFormat: actionFormatter,
    formatExtraData: 'Some data' // the extra data can be in any format
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport moment from \'moment/moment\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst dateFormatter = cell => moment(cell).format(\'ddd, Do MMM YYYY HH:mm\');\n\nconst actionFormatter = (cell, row, index, extraData) => (\n  <div class="table-icons">\n    <span class="view link" />\n    {\'Example: \' + cell + \' \' + row.first_name + \' \' + index + \' \' + extraData}\n  </div>\n);\n\nconst tableSettings = {\n  tableID: \'ColumnFormatting\',\n  keyField: \'request_id\',\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n    },\n    {\n      title: \'Request Date\',\n      key: \'created_at\',\n      filter: \'CustomDateRangeFilter\',\n      disableSearchAll: true,\n      dataFormat: dateFormatter,\n    },\n    {\n      title: \'Actions\',\n      key: \'actions\',\n      searchable: false,\n      sortable: false,\n      export: false,\n      dataFormat: actionFormatter,\n      formatExtraData: \'Some data\', // the extra data can be in any format\n    },\n  ],\n};\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;