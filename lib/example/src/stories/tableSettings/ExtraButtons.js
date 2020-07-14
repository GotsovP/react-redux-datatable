'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('../../components/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddLink = function AddLink() {
  return _react2.default.createElement(
    'a',
    {
      className: 'table-icons',
      href: '/',
      style: {
        padding: '4px 0px 0px 6px',
        lineHeight: '23px'
      }
    },
    _react2.default.createElement('span', {
      className: 'add link',
      'data-tip': 'Add New',
      style: {
        display: 'inline-block',
        marginBottom: '-4px',
        marginRight: '2px'
      }
    }),
    'Add New'
  );
};

var tableSettings = {
  tableID: 'ExtraButtonsTable',
  keyField: 'request_id',
  extraButtons: AddLink,
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

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst AddLink = () => (\n  <a\n    class="table-icons"\n    href="/"\n    style={{\n      padding: \'4px 0px 2px 6px\',\n      lineHeight: \'23px\',\n    }}\n  >\n    <span\n      class="add link"\n      data-tip="Add New"\n      style={{\n        display: \'inline-block\',\n        marginBottom: \'-4px\',\n        marginRight: \'2px\',\n      }}\n    />\n    Add New\n  </a>\n);\n\nconst tableSettings = {\n  tableID: \'ExtraButtonsTable\',\n  keyField: \'request_id\',\n  extraButtons: AddLink,\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n    },\n    {\n      title: \'First Name\',\n      key: \'first_name\',\n    },\n    {\n      title: \'Last Name\',\n      key: \'surname\',\n    },\n    {\n      title: \'Email Address\',\n      key: \'email\',\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;