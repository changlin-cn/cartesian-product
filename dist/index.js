"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require("babel-runtime/core-js/object/values");

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function recur(validData) {
  var combination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var current = validData.slice(0, 1)[0];
  var others = validData.length > 1 ? validData.slice(1) : null;

  current.forEach(function (item) {
    var tempCombination = combination.concat(item);
    if (!others) {
      result.push(tempCombination);
    } else {
      recur(others, tempCombination, result);
    }
  });
  return result;
}

var filter = function filter(arr) {
  return Array.isArray(arr) && arr.length;
};

/**
 * cartesian product
 * @param {object} arrays
 * @returns {array}
 */
function cartesianProductFn(arrays) {
  if (filter(arrays)) {
    return recur(arrays.filter(filter));
  } else if (arrays instanceof Object) {
    var temp = (0, _values2.default)(arrays).filter(filter);
    if (temp.length) {
      return recur(temp);
    }
  }
  return [];
}

exports.default = cartesianProductFn;