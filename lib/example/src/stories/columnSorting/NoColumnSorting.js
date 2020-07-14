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
  tableID: 'NoColumnSorting',
  keyField: 'request_id',
  tableColumns: [{
    title: 'Ref',
    key: 'request_id',
    sortable: false
  }, {
    title: 'First Name',
    key: 'first_name',
    sortable: false
  }, {
    title: 'Last Name',
    key: 'surname',
    sortable: false
  }, {
    title: 'Email Address',
    key: 'email',
    sortable: false
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst tableSettings = {\n  tableID: \'NoColumnSorting\',\n  keyField: \'request_id\',\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n      sortable: false, // Each column is sortable by default\n    },\n    {\n      title: \'First Name\',\n      key: \'first_name\',\n      sortable: false,\n    },\n    {\n      title: \'Last Name\',\n      key: \'surname\',\n      sortable: false,\n    },\n    {\n      title: \'Email Address\',\n      key: \'email\',\n      sortable: false,\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;