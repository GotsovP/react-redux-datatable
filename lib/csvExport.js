'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportToCSVFile = exports.canUseDOM = undefined;

var _json2csv = require('json2csv');

var _json2csv2 = _interopRequireDefault(_json2csv);

var _fileSaver = require('file-saver');

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if we are able to user the DOM
 *
 * @returns {boolean} True if we can use the DOM.
 */
var canUseDOM = exports.canUseDOM = function canUseDOM() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
};

/**
 * Export data to a csv file
 *
 * @param {array} fields An array of field names.
 * @param {array} data An array of objects containing field value pairs.
 * @param {string} filename The name of the file to be created.
 */
var exportToCSVFile = exports.exportToCSVFile = function exportToCSVFile(fields, data, filename) {
  var Json2csvParser = _json2csv2.default.Parser;
  var json2csvParser = new Json2csvParser({ fields: fields });
  var csv = json2csvParser.parse(data);

  var saveAs = _fileSaver2.default.saveAs;

  saveAs(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }), filename, true);
};