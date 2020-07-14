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

var actionFormatter = function actionFormatter() {
  return _react2.default.createElement(
    'div',
    { className: 'table-icons' },
    _react2.default.createElement('span', { className: 'view link' })
  );
};

var tableSettings = {
  tableID: 'AdvancedFeaturesTable',
  wrapperType: 'section',
  displayTitle: 'Requests Table',
  keyField: 'request_id',
  defaultSort: ['request_id', 'desc'],
  minWidth: 880,
  useLocalStorage: true,
  tableColumns: [{
    title: 'Ref',
    key: 'request_id',
    filter: 'NumberFilter',
    defaultValue: { comparator: '=' },
    width: 74
  }, {
    title: 'User ID',
    key: 'user_id',
    filter: 'NumberFilter',
    defaultValue: { comparator: '=' },
    width: 74,
    export: false
  }, {
    title: 'First Name',
    key: 'first_name',
    width: 90
  }, {
    title: 'Last Name',
    key: 'surname',
    width: 90
  }, {
    title: 'Email Address',
    key: 'email',
    width: 164
  }, {
    title: 'Request Date',
    key: 'created_at',
    filter: 'CustomDateRangeFilter',
    disableSearchAll: true,
    dataFormat: dateFormatter,
    width: 120
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
    }
  }, {
    title: 'Actions',
    key: 'actions',
    searchable: false,
    sortable: false,
    export: false,
    dataFormat: actionFormatter
  }]
};

var sourceCode = 'import DataTable from \'react-redux-datatable\';\nimport \'react-redux-datatable/dist/styles.css\';\n\nconst apiLocation = \'https://my.api/service\';\n\nconst dateFormatter = cell => moment(cell).format(\'ddd, Do MMM YYYY HH:mm\');\n\nconst actionFormatter = () => (\n  <div class="table-icons">\n    <span class="view link" />\n  </div>\n);\n\nconst tableSettings = {\n  tableID: \'AdvancedFeaturesTable\',\n  wrapperType: \'section\',\n  displayTitle: \'Requests Table\',\n  keyField: \'request_id\',\n  defaultSort: [\'request_id\', \'desc\'],\n  minWidth: 880,\n  useLocalStorage: true,\n  tableColumns: [\n    {\n      title: \'Ref\',\n      key: \'request_id\',\n      filter: \'NumberFilter\',\n      defaultValue: { comparator: \'=\' },\n      width: 74,\n    },\n    {\n      title: \'User ID\',\n      key: \'user_id\',\n      filter: \'NumberFilter\',\n      defaultValue: { comparator: \'=\' },\n      width: 74,\n      export: false,\n    },\n    {\n      title: \'First Name\',\n      key: \'first_name\',\n      width: 90,\n    },\n    {\n      title: \'Last Name\',\n      key: \'surname\',\n      width: 90,\n    },\n    {\n      title: \'Email Address\',\n      key: \'email\',\n      width: 164,\n    },\n    {\n      title: \'Request Date\',\n      key: \'created_at\',\n      filter: \'CustomDateRangeFilter\',\n      disableSearchAll: true,\n      dataFormat: dateFormatter,\n      width: 120,\n    },\n    {\n      title: \'Type\',\n      key: \'type\',\n      filter: \'SelectFilter\',\n      filterOptions: {\n        Add: \'Add\',\n        Amend: \'Amend\',\n        Remove: \'Remove\',\n      },\n    },\n    {\n      title: \'System\',\n      key: \'system_type\',\n      filter: \'SelectFilter\',\n      filterOptions: {\n        training: \'training\',\n        staging: \'staging\',\n        production: \'production\',\n      },\n    },\n    {\n      title: \'Actions\',\n      key: \'actions\',\n      searchable: false,\n      sortable: false,\n      export: false,\n      dataFormat: actionFormatter,\n    },\n  ],\n};\n\nconst DataTable = () => (\n    <DataTable\n      tableSettings={tableSettings}\n      apiLocation={apiLocation}\n    />\n);\n';

var AdvancedFeaturesTable = function AdvancedFeaturesTable() {
  return _react2.default.createElement(_Story2.default, { sourceCode: sourceCode, tableSettings: tableSettings });
};

exports.default = AdvancedFeaturesTable;