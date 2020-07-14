'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (isRemotePagination, handleRemotePageChange) {
  var _class, _temp2;

  var PaginationContext = _react2.default.createContext();

  var PaginationProvider = (_temp2 = _class = function (_React$Component) {
    _inherits(PaginationProvider, _React$Component);

    function PaginationProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, PaginationProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaginationProvider.__proto__ || Object.getPrototypeOf(PaginationProvider)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (selectedPage) {
        var options = _this.props.pagination.options;


        if (isRemotePagination()) {
          handleRemotePageChange(selectedPage, options.sizePerPage);
        }
        _this.forceUpdate();
      }, _this.handleChangeSizePerPage = function (currentSizePerPage, currentPage) {
        var options = _this.props.pagination.options;


        if (options.onSizePerPageChange) {
          options.onSizePerPageChange(currentSizePerPage, currentPage);
        }

        if (isRemotePagination()) {
          handleRemotePageChange(currentPage, currentSizePerPage);
          return;
        }
        _this.forceUpdate();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PaginationProvider, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            data = _props.data,
            children = _props.children,
            options = _props.pagination.options;


        return _react2.default.createElement(
          PaginationContext.Provider,
          { value: { data: data } },
          children,
          _react2.default.createElement(_Pagination2.default, {
            key: 'pagination',
            dataSize: options.totalSize || data.length,
            currentPage: options.page,
            currentSizePerPage: options.sizePerPage,
            onPageChange: this.handleChangePage,
            onSizePerPageChange: this.handleChangeSizePerPage,
            paginationTotal: options.paginationTotal
          })
        );
      }
    }]);

    return PaginationProvider;
  }(_react2.default.Component), _class.propTypes = {
    data: _propTypes2.default.array.isRequired,
    pagination: _propTypes2.default.object.isRequired,
    children: _propTypes2.default.node
  }, _class.defaultProps = {
    children: null
  }, _temp2);


  return {
    Provider: PaginationProvider,
    Consumer: PaginationContext.Consumer
  };
};