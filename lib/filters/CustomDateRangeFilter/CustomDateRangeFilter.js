'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDayPicker = require('react-day-picker');

var _getPosition = require('./getPosition');

var _getPosition2 = _interopRequireDefault(_getPosition);

var _DateRangeInputField = require('./DateRangeInputField');

var _DateRangeInputField2 = _interopRequireDefault(_DateRangeInputField);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint jsx-a11y/no-static-element-interactions: 0 */

var propTypes = {
  columnKey: _propTypes2.default.string.isRequired,
  onFilter: _propTypes2.default.func.isRequired,
  defaultValue: _propTypes2.default.object,
  getFilter: _propTypes2.default.func
};

var defaultProps = {
  defaultValue: {},
  getFilter: null
};

var CustomDateFilter = function (_React$Component) {
  _inherits(CustomDateFilter, _React$Component);

  function CustomDateFilter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomDateFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomDateFilter.__proto__ || Object.getPrototypeOf(CustomDateFilter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showPicker: false,
      topPosition: 0,
      leftPosition: -1000,
      from: null,
      to: null,
      displayValue: ''
    }, _this.setDisplayValue = function (fromDate, toDate) {
      var displayValue = '';
      if (_moment2.default.isDate(fromDate)) {
        if (_moment2.default.isDate(toDate)) {
          displayValue = '\n              ' + (0, _moment2.default)(fromDate).format(_constants.DISPLAY_DATE_FORMAT) + '\n              ' + ' - ' + '\n              ' + (0, _moment2.default)(toDate).format(_constants.DISPLAY_DATE_FORMAT) + '\n              ';
        } else displayValue = (0, _moment2.default)(fromDate).format(_constants.DISPLAY_DATE_FORMAT);
      }
      _this.setState({
        displayValue: displayValue
      });
    }, _this.updateFilters = function (fromDate, toDate) {
      var fromValue = (0, _moment2.default)(fromDate).format(_constants.ISO_8601_DATE_FORMAT);
      var toValue = void 0;
      if (_moment2.default.isDate(toDate)) {
        _this.setDisplayValue(fromDate, toDate);
        toValue = (0, _moment2.default)(toDate).hours(23).minutes(59).seconds(59).format(_constants.ISO_8601_DATETIME_FORMAT);
      } else {
        _this.setDisplayValue(fromDate, fromDate);
        toValue = (0, _moment2.default)(fromDate).hours(23).minutes(59).seconds(59).format(_constants.ISO_8601_DATETIME_FORMAT);
      }
      _this.props.onFilter({
        from: fromValue,
        to: toValue
      });
    }, _this.clearFilters = function () {
      _this.setState({
        from: null,
        to: null,
        displayValue: ''
      });
      _this.props.onFilter();
    }, _this.filter = function () {
      if (_moment2.default.isDate(_this.state.from)) {
        _this.updateFilters(_this.state.from, _this.state.to);
      } else {
        _this.clearFilters();
      }
      _this.windowClick();
    }, _this.handleDayClick = function (day) {
      var range = _reactDayPicker.DateUtils.addDayToRange(day, _this.state);
      _this.setState(range);
    }, _this.handleResetClick = function () {
      _this.setState({
        from: null,
        to: null
      });
    }, _this.addEvents = function () {
      window.addEventListener('click', _this.windowClick, false);
      window.addEventListener('scroll', _this.positionPicker, false);
      window.addEventListener('resize', _this.positionPicker, false);
    }, _this.removeEvents = function () {
      window.removeEventListener('click', _this.windowClick);
      window.removeEventListener('scroll', _this.positionPicker);
      window.removeEventListener('resize', _this.positionPicker);
    }, _this.windowClick = function () {
      _this.setState({
        showPicker: false,
        topPosition: 0,
        leftPosition: -1000
      });
      _this.removeEvents();
    }, _this.positionPicker = function () {
      var parentPosition = (0, _getPosition2.default)(document.getElementById(_this.props.columnKey + '-date-filter'));
      var elemWidth = document.getElementById(_this.props.columnKey + '-date-filter-container').offsetWidth;
      var elemHeight = document.getElementById(_this.props.columnKey + '-date-filter-container').offsetHeight;
      var rightOfElement = parentPosition.x + elemWidth;
      var bottomOfElement = parentPosition.y + elemHeight;

      var rightOfScreen = document.documentElement.offsetWidth;
      var bottomOfScreen = Math.max(document.documentElement.offsetHeight, window.innerHeight);

      var leftAdjustmentPadding = 2;
      var leftAdjustment = Math.max(rightOfElement + leftAdjustmentPadding - rightOfScreen, 0);
      var topAdjustmentPadding = 3;
      var topAdjustment = Math.max(bottomOfElement + topAdjustmentPadding - bottomOfScreen, -22);

      _this.setState({
        topPosition: parentPosition.y - topAdjustment,
        leftPosition: parentPosition.x - leftAdjustment
      });
    }, _this.togglePicker = function () {
      var showPicker = _this.state.showPicker;

      _this.removeEvents();
      _this.setState(function (prevState) {
        return {
          showPicker: !prevState.showPicker,
          topPosition: 0,
          leftPosition: -1000
        };
      });
      if (!showPicker) {
        _this.positionPicker(!showPicker);
        _this.addEvents();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomDateFilter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.defaultValue && this.props.defaultValue.from) {
        this.setState({ from: this.props.defaultValue.from });
        if (this.props.defaultValue.to) this.setState({ to: this.props.defaultValue.to });
        this.setDisplayValue(this.props.defaultValue.from, this.props.defaultValue.to);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // export onFilter function to allow users to access
      if (this.props.getFilter) {
        this.props.getFilter(function () {
          _this2.clearFilters();
        });
      }

      this.filter();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'render',
    value: function render() {
      var columnKey = this.props.columnKey;
      var _state = this.state,
          topPosition = _state.topPosition,
          leftPosition = _state.leftPosition,
          from = _state.from,
          to = _state.to,
          displayValue = _state.displayValue;

      // Render the Calendar

      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          onKeyDown: function onKeyDown(e) {
            return e.stopPropagation();
          },
          id: columnKey + '-date-filter',
          className: 'custom-date-filter filter'
        },
        _react2.default.createElement(
          'span',
          { onClick: this.togglePicker, onKeyDown: this.togglePicker, className: 'filter-value' },
          displayValue
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'dropContainer dropHide',
            id: columnKey + '-date-filter-container',
            style: {
              position: 'fixed',
              zIndex: 19,
              top: topPosition,
              left: leftPosition
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'fromToDate' },
            _react2.default.createElement(_DateRangeInputField2.default, { handleDayClick: this.handleDayClick, from: from, to: to })
          ),
          _react2.default.createElement(
            'div',
            { style: { clear: 'both' } },
            _react2.default.createElement(
              'div',
              {
                id: 'cidCourseListFilterOkButton',
                className: 'okButton filterButton',
                onClick: this.filter,
                onKeyDown: this.filter
              },
              'OK'
            ),
            from && _react2.default.createElement(
              'div',
              {
                id: 'cidCourseListFilterClearFilterButton',
                className: 'clearFilterButton',
                onClick: this.handleResetClick,
                onKeyDown: this.handleResetClick
              },
              'Clear Filter'
            )
          )
        )
      );
    }
  }]);

  return CustomDateFilter;
}(_react2.default.Component);

CustomDateFilter.propTypes = propTypes;
CustomDateFilter.defaultProps = defaultProps;

exports.default = CustomDateFilter;