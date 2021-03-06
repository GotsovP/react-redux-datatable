'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Get the previous data table data and remove the updated table
 *
 * @param DataTableData The current data table data in state.
 * @param removeTableId The id of the table that has updated.
 *
 * @returns {Object} The previous data table data, less the updated table.
 */
var getPreviousDataTableData = function getPreviousDataTableData(DataTableData, removeTableId) {
  if ((typeof DataTableData === 'undefined' ? 'undefined' : _typeof(DataTableData)) !== 'object') return {};
  return Object.keys(DataTableData).filter(function (table) {
    return table !== removeTableId;
  }).reduce(function (obj, key) {
    var prevObj = _extends({}, obj);
    prevObj[key] = DataTableData[key];
    return prevObj;
  }, {});
};

/**
 * Update Data Table Data
 *
 * Combine the updated table payload with the previous data table data.
 *
 * @param {Object} DataTableData The current data table data in state.
 * @param {Object} tableUpdate The table update payload.
 *
 * @return {Object} The new table data object.
 */
var updateDataTableData = function updateDataTableData(DataTableData, tableUpdate) {
  return _extends({}, getPreviousDataTableData(DataTableData, tableUpdate.tableId), tableUpdate.tableData);
};

var updateState = function updateState(state, action) {
  return {
    DataTableData: updateDataTableData(state.DataTableData, action.payload)
  };
};

exports.default = updateState;