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
  tableID: 'NumberFilter',
  keyField: 'request_id',
  tableColumns: [{
    title: 'Ref',
    key: 'request_id',
    filter: 'NumberFilter', // Set the number filter
    defaultValue: { comparator: '=' } // You must also set the default comparator '=', '>', '>=', '<', '<=', '!='
  }, {
    title: 'User ID',
    key: 'user_id',
    filter: 'NumberFilter',
    defaultValue: { comparator: '>', number: 50 } // You can also set a default number value
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst tableSettings = {\n  tableID: \'NumberFilter\',\n  keyField: \'request_id\',\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n      filter: \'NumberFilter\', // Set the number filter\n      defaultValue: { comparator: \'>\' }, // You must also set the default comparator \'=\', \'>\', \'>=\', \'<\', \'<=\', \'!=\'\n    },\n    {\n      title: \'User ID\',\n      key: \'user_id\',\n      filter: \'NumberFilter\',\n      defaultValue: { comparator: \'>\', number: 50 }, // You can also set a default number value\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;