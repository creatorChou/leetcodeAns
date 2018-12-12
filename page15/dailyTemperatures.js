/**
* 739. Daily Temperatures
* https://leetcode.com/problems/daily-temperatures/
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let result = new Array(T.length);
  result[result.length - 1] = 0;
  let map = {};
  let stack = [T[T.length - 1]];
  map[T[T.length - 1]] = T.length - 1;
  for (var i = T.length - 2; i >= 0; i--) {
    map[T[i]] = i;
    while (stack.length > 0 && stack[stack.length - 1] <= T[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      result[i] = 0;
    } else {
      result[i] = map[stack[stack.length - 1]] - i;
    }
    stack.push(T[i]);
  }
  return result;
};

// Runtime: 152 ms, faster than 88.96% of JavaScript online submissions for Daily Temperatures.
