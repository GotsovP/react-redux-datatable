'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = require('redux-promise-middleware');

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _root = require('./root.reducer');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [(0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default];

var middleware = _redux.applyMiddleware.apply(undefined, middlewares);

exports.default = (0, _redux.createStore)(_root2.default, middleware);