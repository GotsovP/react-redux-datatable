'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PageButton = require('./PageButton/PageButton');

var _PageButton2 = _interopRequireDefault(_PageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    active: _propTypes2.default.bool,
    title: _propTypes2.default.string
  })).isRequired,
  onPageChange: _propTypes2.default.func.isRequired
};

var PaginatonList = function PaginatonList(_ref) {
  var pages = _ref.pages,
      onPageChange = _ref.onPageChange;
  return _react2.default.createElement(
    'ul',
    { className: 'pagination react-bootstrap-table-page-btns-ul' },
    pages.map(function (pageProps) {
      return _react2.default.createElement(_PageButton2.default, _extends({ key: pageProps.page }, pageProps, { onPageChange: onPageChange }));
    })
  );
};

PaginatonList.propTypes = propTypes;

exports.default = PaginatonList;