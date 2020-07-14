'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('../../components/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customApiError = function customApiError(errorObject) {
  if (errorObject.response.status === 400) {
    return _react2.default.createElement(
      'div',
      { className: 'status_message offline' },
      _react2.default.createElement(
        'p',
        null,
        errorObject.message
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'status_message offline' },
    _react2.default.createElement(
      'p',
      null,
      'Something went wrong!'
    )
  );
};

var tableSettings = {
  tableID: 'CustomApiError',
  keyField: 'request_id',
  customApiError: customApiError,
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

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst customApiError = errorObject => {\n  if (errorObject.response.status === 400) {\n    return (\n      <div className="status_message offline">\n        <p>{errorObject.message}</p>\n      </div>\n    );\n  }\n  return (\n    <div className="status_message offline">\n      <p>Something went wrong!</p>\n    </div>\n  );\n};\n\nconst tableSettings = {\n  tableID: \'CustomApiError\',\n  keyField: \'request_id\',\n  customApiError,\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n    },\n    {\n      title: \'First Name\',\n      key: \'first_name\',\n    },\n    {\n      title: \'Last Name\',\n      key: \'surname\',\n    },\n    {\n      title: \'Email Address\',\n      key: \'email\',\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var DataTable = function DataTable() {
  return _react2.default.createElement(_Story2.default, { responseCode: 400, sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = DataTable;