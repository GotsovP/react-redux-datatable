'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PAGINATION_SIZE = exports.PAGINATION_SIZE = 5;
var SIZE_PER_PAGE_LIST = exports.SIZE_PER_PAGE_LIST = [10, 25, 50, 100];

var LIST_ITEMS = exports.LIST_ITEMS = {
  FIRST: {
    TEXT: '<<',
    TITLE: 'first page'
  },
  PREVIOUS: {
    TEXT: '<',
    TITLE: 'previous page'
  },
  NEXT: {
    TEXT: '>',
    TITLE: 'next page'
  },
  LAST: {
    TEXT: '>>',
    TITLE: 'last page'
  }
};