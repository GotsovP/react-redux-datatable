"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Set a local storage item
 *
 * @param {string} itemName The name of the item to be set.
 * @param {*} value The value to be set.
 */
var setLocalStorageItem = exports.setLocalStorageItem = function setLocalStorageItem(itemName, value) {
  global.window.localStorage.setItem(itemName, JSON.stringify(value));
};

/**
 * Retrieve an item from local storage
 *
 * @param {string} itemName The name of the item to be retrieved.
 * @return {any} The local storage item.
 */
var getLocalStorageItem = exports.getLocalStorageItem = function getLocalStorageItem(itemName) {
var item = global.window.localStorage.getItem(itemName);
	if(item) {
  return JSON.parse(item);}
};

/**
 * Remove an item from local storage
 *
 * @param {string} itemName The name of the item to be removed.
 */
var removeLocalStorageItem = exports.removeLocalStorageItem = function removeLocalStorageItem(itemName) {
  global.window.localStorage.removeItem(itemName);
};

/**
 * Update a local storage item
 *
 * @param {string} itemName The name of the item to be updated.
 * @param {*} value The value to be added/updated.
 */
var updateLocalStorageItem = exports.updateLocalStorageItem = function updateLocalStorageItem(itemName, value) {
  setLocalStorageItem(itemName, _extends({}, getLocalStorageItem(itemName), value));
};