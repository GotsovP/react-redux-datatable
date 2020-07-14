'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _Pagination = require('./Pagination.helpers');

var _SizePerPageSelect = require('./SizePerPageSelect/SizePerPageSelect');

var _SizePerPageSelect2 = _interopRequireDefault(_SizePerPageSelect);

var _PaginationList = require('./PaginationList/PaginationList');

var _PaginationList2 = _interopRequireDefault(_PaginationList);

var _PaginationTotal = require('./PaginationTotal/PaginationTotal');

var _PaginationTotal2 = _interopRequireDefault(_PaginationTotal);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  dataSize: _airbnbPropTypes.nonNegativeInteger.isRequired,
  currentPage: _airbnbPropTypes.nonNegativeInteger.isRequired,
  currentSizePerPage: _airbnbPropTypes.nonNegativeInteger.isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  paginationTotal: _propTypes2.default.func
});

var defaultProps = {
  paginationTotal: undefined
};

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isDropDownOpen: false
    }, _this.toggleDropDown = function () {
      _this.setState(function (prevState) {
        return {
          isDropDownOpen: !prevState.isDropDownOpen
        };
      });
    }, _this.closeDropDown = function () {
      _this.setState(function () {
        return {
          isDropDownOpen: false
        };
      });
    }, _this.handleChangeSizePerPage = function (sizePerPage) {
      var _this$props = _this.props,
          currentPage = _this$props.currentPage,
          currentSizePerPage = _this$props.currentSizePerPage,
          dataSize = _this$props.dataSize,
          onSizePerPageChange = _this$props.onSizePerPageChange;


      if (sizePerPage !== currentSizePerPage) {
        var newPageCount = (0, _Pagination.calculatePageCount)(sizePerPage, dataSize);
        onSizePerPageChange(sizePerPage, Math.min(newPageCount, currentPage));
      }
      _this.closeDropDown();
    }, _this.getNewPageNumber = function (newPage) {
      var _this$props2 = _this.props,
          currentPage = _this$props2.currentPage,
          currentSizePerPage = _this$props2.currentSizePerPage,
          dataSize = _this$props2.dataSize;

      var pageCount = (0, _Pagination.calculatePageCount)(currentSizePerPage, dataSize);

      if (newPage === _constants.LIST_ITEMS.PREVIOUS.TEXT) return currentPage - 1;
      if (newPage === _constants.LIST_ITEMS.NEXT.TEXT) return Math.min(currentPage + 1, pageCount);
      if (newPage === _constants.LIST_ITEMS.LAST.TEXT) return pageCount;
      if (newPage === _constants.LIST_ITEMS.FIRST.TEXT) return 1;

      return parseInt(newPage, 10);
    }, _this.handleChangePage = function (newPage) {
      var _this$props3 = _this.props,
          currentPage = _this$props3.currentPage,
          onPageChange = _this$props3.onPageChange;

      var newPageNumber = _this.getNewPageNumber(newPage);
      if (newPageNumber !== currentPage) {
        onPageChange(newPageNumber);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var isDropDownOpen = this.state.isDropDownOpen;
      var _props = this.props,
          currentPage = _props.currentPage,
          dataSize = _props.dataSize,
          currentSizePerPage = _props.currentSizePerPage;

      var pageCount = (0, _Pagination.calculatePageCount)(currentSizePerPage, dataSize);
      var paginationListItems = (0, _Pagination.createListItems)(currentPage, pageCount);

      var _calculateFromTo = (0, _Pagination.calculateFromTo)(currentPage, currentSizePerPage, dataSize),
          _calculateFromTo2 = _slicedToArray(_calculateFromTo, 2),
          from = _calculateFromTo2[0],
          to = _calculateFromTo2[1];

      var pageListClass = (0, _classnames2.default)('react-bootstrap-table-pagination-list', 'col-md-6 col-xs-6 col-sm-6 col-lg-6', {
        'react-bootstrap-table-pagination-list-hidden': pageCount === 1
      });
      return _react2.default.createElement(
        'div',
        { className: 'row react-bootstrap-table-pagination' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          _react2.default.createElement(_SizePerPageSelect2.default, {
            currentSizePerPage: '' + currentSizePerPage,
            isOpen: isDropDownOpen,
            onBlur: this.closeDropDown,
            onClick: this.toggleDropDown,
            onSizePerPageChange: this.handleChangeSizePerPage
          }),
          !this.props.paginationTotal && _react2.default.createElement(_PaginationTotal2.default, { start: from, to: to, total: dataSize }),
          this.props.paginationTotal && this.props.paginationTotal(from, to, dataSize)
        ),
        _react2.default.createElement(
          'div',
          { className: pageListClass },
          _react2.default.createElement(_PaginationList2.default, { pages: paginationListItems, onPageChange: this.handleChangePage })
        )
      );
    }
  }]);

  return Pagination;
}(_react2.default.Component);

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

exports.default = Pagination;