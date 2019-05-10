/**
* 970. Powerful Integers
* https://leetcode.com/problems/powerful-integers/
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  if (x === 1 && y === 1) {
    if (bound >= 2) {
      return [2];
    } else {
      return [];
    }
  }
  if (x === 1) {
    let val, res = [];
    for (let i = 0; (val = Math.pow(y, i) + 1) <= bound; i ++) {
      res.push(val);
    }
    return res;
  }
  if (y === 1) {
    let val, res = [];
    for (let i = 0; (val = Math.pow(x, i) + 1) <= bound; i ++) {
      res.push(val);
    }
    return res;
  }
  let ans = new Set(), val1, val2;
  for (let i = 0; (val1 = Math.pow(x, i)) < bound; i ++) {
    for (let j = 0; (val2 = val1 + Math.pow(y, j)) <= bound; j ++) {
      console.log(i, j, val1, val2)
      ans.add(val2);
    }
  }
  return Array.from(ans);
};

console.log(powerfulIntegers(2,1,10));

// Runtime: 80 ms, faster than 18.10% of JavaScript online submissions for Powerful Integers.
// Memory Usage: 36.3 MB, less than 33.33% of JavaScript online submissions for Powerful Integers.
