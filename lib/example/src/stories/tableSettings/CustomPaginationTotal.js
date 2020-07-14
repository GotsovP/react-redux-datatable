'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('../../components/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationTotal = function PaginationTotal(start, to, total) {
  return _react2.default.createElement(
    'div',
    { style: { float: 'right' } },
    start,
    '-',
    to,
    ' of ',
    total
  );
};

var tableSettings = {
  tableID: 'CustomPaginationTable',
  keyField: 'request_id',
  displayTitle: 'Requests Table',
  customPaginationTotal: PaginationTotal,
  tableColumns: [{
    title: 'Ref',
    key: 'request_id'
  }, {
    title: 'First Name',
    key: 'first_name'
  }, {
    title: 'Last Name',
    key: 'surname'
  }, {
    title: 'Email Address',
    key: 'email'
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst PaginationTotal = (start, to, total) => (\n  <div style={{ float: \'right\' }}>\n    {start}-{to} of {total}\n  </div>\n);\n\nconst tableSettings = {\n  tableID: \'CustomPaginationTable\',\n  keyField: \'request_id\',\n  displayTitle: \'Requests Table\',\n  customPaginationTotal: PaginationTotal,\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n    },\n    {\n      title: \'First Name\',\n      key: \'first_name\',\n    },\n    {\n      title: \'Last Name\',\n      key: \'surname\',\n    },\n    {\n      title: \'Email Address\',\n      key: \'email\',\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;