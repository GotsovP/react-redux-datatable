'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createListItems = exports.calculateFromTo = exports.calculatePageCount = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Check if all given values are greater than 0
 *
 * @param {array} values An array of values.
 * @returns {boolean} True if all values are greater than 0.
 */
var valuesGreaterThanZero = function valuesGreaterThanZero(values) {
  return values.every(function (value) {
    return value > 0;
  });
};

/**
 * Calculate the number of pages based on the size per page and data size
 *
 * @param {number} sizePerPage The number of rows shown per page.
 * @param {number} dataSize The total size of the data.
 * @returns {number} The number of pages.
 */
var calculatePageCount = exports.calculatePageCount = function calculatePageCount(sizePerPage, dataSize) {
  return valuesGreaterThanZero([sizePerPage, dataSize]) ? Math.ceil(dataSize / sizePerPage) : 0;
};

/**
 * Calculate the From and To row values for the current page
 *
 * @param {number} currentPage The current page selected.
 * @param {number} currentSizePerPage The number of rows shown per page.
 * @param {number} dataSize The total size of the data.
 * @returns {number[]} The From and To values in an array.
 */
var calculateFromTo = exports.calculateFromTo = function calculateFromTo(currentPage, currentSizePerPage, dataSize) {
  if (!valuesGreaterThanZero([currentPage, currentSizePerPage, dataSize])) return [0, 0];

  var from = (currentPage - 1) * currentSizePerPage;
  var to = Math.min(currentSizePerPage * currentPage, dataSize);
  return [from + 1, to];
};

/**
 * Generate an array of pagination pages (with PAGINATION_SIZE)
 *
 * @param {number} currentPage The current page selected.
 * @param {number} pageCount The total number of pages.
 * @returns {array} An array of page numbers.
 */
var generatePages = function generatePages(currentPage, pageCount) {
  if (pageCount <= 0) return [];

  var startPage = Math.max(currentPage - Math.floor(_constants.PAGINATION_SIZE / 2), 1);
  var endPage = startPage + _constants.PAGINATION_SIZE - 1;

  if (endPage > pageCount) {
    endPage = pageCount;
    startPage = Math.max(endPage - _constants.PAGINATION_SIZE + 1, 1);
  }

  return _lodash2.default.range(startPage, endPage + 1);
};

/**
 * Retrieve the LIST_ITEM.TITLE for a page
 *
 * @param {string} page The page button text (e.g. '1', '2' or '>>')
 * @returns {string} The text to be used for the page title attribute.
 */
var getListItemTitle = function getListItemTitle(page) {
  var matchListItem = Object.values(_constants.LIST_ITEMS).filter(function (_ref) {
    var TEXT = _ref.TEXT;
    return TEXT === page;
  })[0];
  if (matchListItem) return matchListItem.TITLE;
  return '' + page;
};

/**
 * Generate list item objects
 *
 * @param {array} items An array of list item text strings.
 * @param {number} currentPage The current page selected.
 * @returns {{page: *, active: boolean, title: string}[]} An array of list item objects.
 */
var generateListItems = function generateListItems() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentPage = arguments[1];
  return items.map(function (page) {
    return {
      page: page,
      active: page === currentPage,
      title: getListItemTitle(page)
    };
  });
};

/**
 * Create a list of pagination list item objects
 *
 * @param {number} currentPage The current page selected.
 * @param {number} pageCount The total number of pages.
 * @returns {array} An array of list item objects.
 */
var createListItems = exports.createListItems = function createListItems(currentPage, pageCount) {
  if (!valuesGreaterThanZero([currentPage, pageCount])) return [];

  var pages = generatePages(currentPage, pageCount);
  var firstPageItem = currentPage > 1 && !pages.includes(1) ? [_constants.LIST_ITEMS.FIRST.TEXT] : [];
  var previousPageItem = currentPage > 1 ? [_constants.LIST_ITEMS.PREVIOUS.TEXT] : [];
  var nextPageItem = currentPage < pageCount ? [_constants.LIST_ITEMS.NEXT.TEXT] : [];
  var lastPageItem = currentPage < pageCount && !pages.includes(pageCount) ? [_constants.LIST_ITEMS.LAST.TEXT] : [];

  var listArray = [].concat(firstPageItem, previousPageItem, _toConsumableArray(pages), nextPageItem, lastPageItem);

  return generateListItems(listArray, currentPage);
};