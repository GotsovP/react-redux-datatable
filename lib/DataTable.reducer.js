'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _updateReducerState = require('./updateReducerState');

var _updateReducerState2 = _interopRequireDefault(_updateReducerState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    DataTableData: {}
  };
  var action = arguments[1];

  switch (action.type) {
    case 'FETCH_TABLE_DATA':
      {
        return (0, _updateReducerState2.default)(state, action);
      }
    case 'FETCH_TABLE_DATA_REJECTED':
      {
        return (0, _updateReducerState2.default)(state, action);
      }
    case 'FETCH_TABLE_DATA_FULFILLED':
      {
        return (0, _updateReducerState2.default)(state, action);
      }
    default:
      {
        return _extends({}, state);
      }
  }
}