'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _SizePerPageOption = require('./SizePerPageOption/SizePerPageOption');

var _SizePerPageOption2 = _interopRequireDefault(_SizePerPageOption);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  currentSizePerPage: _propTypes2.default.string.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool,
  options: _propTypes2.default.array
});

var defaultProps = {
  isOpen: false,
  options: _constants.SIZE_PER_PAGE_LIST
};

var SizePerPageSelect = function SizePerPageSelect(props) {
  var isOpen = props.isOpen,
      onClick = props.onClick,
      onBlur = props.onBlur,
      options = props.options,
      currentSizePerPage = props.currentSizePerPage,
      onSizePerPageChange = props.onSizePerPageChange;


  var openClass = isOpen ? 'open show' : '';
  var classes = (0, _classnames2.default)(openClass, 'react-bs-table-sizePerPage-dropdown', 'dropdown');

  return _react2.default.createElement(
    'span',
    { className: classes },
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        id: 'pageDropDown',
        className: 'btn btn-default btn-secondary dropdown-toggle',
        'data-toggle': 'dropdown',
        'aria-expanded': isOpen,
        onClick: onClick,
        onBlur: onBlur
      },
      currentSizePerPage,
      ' ',
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'caret' })
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu ' + openClass, role: 'menu', 'aria-labelledby': 'pageDropDown' },
      options.map(function (option) {
        return _react2.default.createElement(_SizePerPageOption2.default, { key: option, text: option, page: option, onSizePerPageChange: onSizePerPageChange });
      })
    )
  );
};

SizePerPageSelect.propTypes = propTypes;
SizePerPageSelect.defaultProps = defaultProps;

exports.default = SizePerPageSelect;