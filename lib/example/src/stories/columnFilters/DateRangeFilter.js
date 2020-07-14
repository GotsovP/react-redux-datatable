'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('../../components/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var from = new Date('2016-01-01');
var to = new Date('2020-01-01');

var tableSettings = {
  tableID: 'DateRangeFilter',
  keyField: 'request_id',
  tableColumns: [{
    title: 'Ref',
    key: 'request_id',
    searchable: false
  }, {
    title: 'Request Date',
    key: 'created_at',
    filter: 'CustomDateRangeFilter',
    defaultValue: { from: from, to: to } // You can also set default values
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst from = new Date(\'2017-01-01\');\nconst to = new Date(\'2018-01-01\');\n\nconst tableSettings = {\n  tableID: \'DateRangeFilter\',\n  keyField: \'request_id\',\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n      searchable: false,\n    },\n    {\n      title: \'Request Date\',\n      key: \'created_at\',\n      filter: \'CustomDateRangeFilter\',\n      defaultValue: { from, to }, // You can also set default values\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;