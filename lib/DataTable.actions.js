'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTableData = exports.fetchExportData = undefined;

require('url-search-params-polyfill');

var _constants = require('./constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dispatchError = function dispatchError(dispatch, tableSettings, error) {
  return dispatch({
    type: 'FETCH_TABLE_DATA_REJECTED',
    payload: {
      tableId: tableSettings.tableID,
      tableData: _defineProperty({}, tableSettings.tableID, {
        fetching: false,
        fetched: false,
        error: error,
        data: null,
        dataTotalSize: 0
      })
    }
  });
};

var prepareFetchTableParams = function prepareFetchTableParams(tableSettings, limit, offset, sortName, sortOrder, searchValue, columnFilters) {
  var params = new URLSearchParams();
  params.append('tableSettings', JSON.stringify(tableSettings));
  params.append('limit', limit);
  params.append('offset', offset);
  if (typeof sortName !== 'undefined') params.append('sortName', sortName);
  if (typeof sortOrder !== 'undefined') params.append('sortOrder', sortOrder);
  if (typeof searchValue !== 'undefined') params.append('searchValue', searchValue);
  if (typeof columnFilters !== 'undefined') params.append('columnFilters', JSON.stringify(columnFilters));
  return params;
};

var fetchExportData = exports.fetchExportData = function fetchExportData(tableSettings, sortName, sortOrder, searchValue, columnFilters, apiLocation, axiosInstance) {
  var params = prepareFetchTableParams(tableSettings, 1000, 0, sortName, sortOrder, searchValue, columnFilters);
  return axiosInstance.post(apiLocation, params, {
    headers: tableSettings.headers || _constants.REQUEST_HEADERS
  }).then(function (response) {
    if (response.data.searchSuccess) {
      return response.data.data;
    }
    return 'error';
  }).catch(function () {
    return 'error';
  });
};

var fetchTableData = exports.fetchTableData = function fetchTableData(tableSettings, limit, offset, sortName, sortOrder, searchValue, columnFilters, apiLocation, axiosInstance) {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_TABLE_DATA',
      payload: {
        tableId: tableSettings.tableID,
        tableData: _defineProperty({}, tableSettings.tableID, {
          fetching: true,
          fetched: false,
          error: null,
          data: null,
          dataTotalSize: null
        })
      }
    });

    var params = prepareFetchTableParams(tableSettings, limit, offset, sortName, sortOrder, searchValue, columnFilters);
    axiosInstance.post(apiLocation, params, {
      headers: tableSettings.headers || _constants.REQUEST_HEADERS
    }).then(function (response) {
      if (response.data.searchSuccess) {
        dispatch({
          type: 'FETCH_TABLE_DATA_FULFILLED',
          payload: {
            tableId: tableSettings.tableID,
            tableData: _defineProperty({}, tableSettings.tableID, {
              fetching: false,
              fetched: true,
              error: null,
              data: response.data.data,
              dataTotalSize: response.data.dataTotalSize
            })
          }
        });
      } else {
        dispatchError(dispatch, tableSettings, response);
      }
    }).catch(function (error) {
      dispatchError(dispatch, tableSettings, error);
    });
  };
};