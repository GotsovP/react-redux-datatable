'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  onPageChange: _propTypes2.default.func.isRequired,
  page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  active: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.string
};

var defaultProps = {
  title: ''
};

var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      event.preventDefault();
      _this.props.onPageChange(_this.props.page);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          page = _props.page,
          title = _props.title,
          active = _props.active;

      var classes = (0, _classnames2.default)({
        active: active,
        'page-item': true
      });

      return _react2.default.createElement(
        'li',
        { className: classes, title: title },
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.handleClick, className: 'page-link' },
          page
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = propTypes;
PageButton.defaultProps = defaultProps;

exports.default = PageButton;