'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactRedux = require('react-redux');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = require('axios-mock-adapter');

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _CodeBlock = require('./CodeBlock');

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _TableSettings = require('../../../shapes/TableSettings.shape');

var _TableSettings2 = _interopRequireDefault(_TableSettings);

var _search = require('../../../../.storybook/mocks/api/search.json');

var _search2 = _interopRequireDefault(_search);

var _search3 = require('../../../../.storybook/mocks/api/search');

var _search4 = _interopRequireDefault(_search3);

var _DataTableContainer = require('../../../DataTableContainer');

var _DataTableContainer2 = _interopRequireDefault(_DataTableContainer);

require('../../../assets/sass/styles.scss');

require('../assets/sass/CodeBlock.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-unresolved
var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  sourceCode: _propTypes2.default.string.isRequired,
  tableSettings: _TableSettings2.default.isRequired,
  responseCode: _airbnbPropTypes.nonNegativeInteger
});

var defaultProps = {
  responseCode: 200
};

var mock = new _axiosMockAdapter2.default(_axios2.default);
var MOCK_API_LOCATION = 'http://localhost/api/search';

var Story = function Story(_ref) {
  var responseCode = _ref.responseCode,
      sourceCode = _ref.sourceCode,
      tableSettings = _ref.tableSettings;

  mock.onPost(MOCK_API_LOCATION).reply(function (config) {
    var params = new URLSearchParams(decodeURIComponent(config.data));
    return [responseCode, (0, _search4.default)(_search2.default, params)];
  });
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_DataTableContainer2.default, { tableSettings: tableSettings, apiLocation: MOCK_API_LOCATION, axiosInstance: _axios2.default }),
      _react2.default.createElement(
        _CodeBlock2.default,
        null,
        sourceCode
      )
    )
  );
};

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;

exports.default = Story;