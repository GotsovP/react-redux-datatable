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
  tableID: 'SelectFilter',
  keyField: 'request_id',
  tableColumns: [{
    title: 'Ref',
    key: 'request_id',
    searchable: false
  }, {
    title: 'Type',
    key: 'type',
    filter: 'SelectFilter',
    filterOptions: {
      Add: 'Add',
      Amend: 'Amend',
      Remove: 'Remove'
    }
  }, {
    title: 'System',
    key: 'system_type',
    filter: 'SelectFilter',
    filterOptions: {
      training: 'training',
      staging: 'staging',
      production: 'production'
    },
    defaultValue: 'training'
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst tableSettings = {\n  tableID: \'SelectFilter\',\n  keyField: \'request_id\',\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n      searchable: false,\n    },\n    {\n      title: \'Type\',\n      key: \'type\',\n      filter: \'SelectFilter\',\n      filterOptions: {\n        Add: \'Add\',\n        Amend: \'Amend\',\n        Remove: \'Remove\',\n      },\n    },\n    {\n      title: \'System\',\n      key: \'system_type\',\n      filter: \'SelectFilter\',\n      filterOptions: {\n        training: \'training\',\n        staging: \'staging\',\n        production: \'production\',\n      },\n      defaultValue: \'training\',\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;