/**
* Wildcard Matching
* https://leetcode.com/problems/wildcard-matching/description/
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let stringArr = s.split("*");
  let patternArr = p.split("*");
  let left = null;
  let right = null;
  let passModel = false;
  while (stringArr.length > 0) {
    if (!left) {
      if (right === "*") {
        return true;
      }
      left = patternArr.shift();
    }
    if (!right) {
      if (left === "*") {
        return true;
      }
      right = patternArr.pop();
    }
    if (left === "*" && right === "*") {
      passModel = true;
      left = null;
      right = null;
      continue;
    }
    if (left === "?" || left === stringArr[0]) {
      stringArr.shift();
      left = null;
    } else {
      if (left && left !== "*") {
        return false;
      }
    }
    if (right === "?" || right === stringArr[stringArr.length - 1]) {
      stringArr.pop();
      right = null;
    } else {
      if (right && right !== "*") {
        return false;
      }
    }
  }
};