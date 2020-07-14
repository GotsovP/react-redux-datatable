'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('../../components/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableSettings = {
  tableID: 'ColumnWidth',
  keyField: 'request_id',
  tableColumns: [{
    title: 'Ref',
    key: 'request_id',
    width: 120 // in pixels
  }, {
    title: 'First Name',
    key: 'first_name',
    width: 50
  }, {
    title: 'Last Name',
    key: 'surname',
    width: 50
  }, {
    title: 'Email Address',
    key: 'email'
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst tableSettings = {\n  tableID: \'ColumnWidth\',\n  keyField: \'request_id\',\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n      width: 140, // in pixels\n    },\n    {\n      title: \'First Name\',\n      key: \'first_name\',\n      width: 40,\n    },\n    {\n      title: \'Last Name\',\n      key: \'surname\',\n      width: 40,\n    },\n    {\n      title: \'Email Address\',\n      key: \'email\',\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;