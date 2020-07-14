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
  tableID: 'MinimalFeaturesTable',
  keyField: 'request_id',
  tableColumns: [{
    title: 'Ref',
    key: 'request_id',
    searchable: false,
    sortable: false,
    export: false
  }, {
    title: 'First Name',
    key: 'first_name',
    searchable: false,
    sortable: false,
    export: false
  }, {
    title: 'Last Name',
    key: 'surname',
    searchable: false,
    sortable: false,
    export: false
  }, {
    title: 'Email Address',
    key: 'email',
    searchable: false,
    sortable: false,
    export: false
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst tableSettings = {\n  tableID: \'MinimalFeaturesTable\',\n  keyField: \'request_id\',\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n      searchable: false,\n      sortable: false,\n      export: false,\n    },\n    {\n      title: \'First Name\',\n      key: \'first_name\',\n      searchable: false,\n      sortable: false,\n      export: false,\n    },\n    {\n      title: \'Last Name\',\n      key: \'surname\',\n      searchable: false,\n      sortable: false,\n      export: false,\n    },\n    {\n      title: \'Email Address\',\n      key: \'email\',\n      searchable: false,\n      sortable: false,\n      export: false,\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;