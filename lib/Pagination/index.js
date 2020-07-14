'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaginationContext = require('./PaginationContext');

var _PaginationContext2 = _interopRequireDefault(_PaginationContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    createContext: _PaginationContext2.default,
    options: options
  };
};