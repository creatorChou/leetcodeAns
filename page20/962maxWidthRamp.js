/**
* 962. Maximum Width Ramp
* https://leetcode.com/problems/maximum-width-ramp/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  let map = {};
  for (let i = 0; i < A.length; i ++) {
    if (!map[A[i]]){
      map[A[i]] = [i, i];
    } else {
      map[A[i]][1] = i;
    }
  }
  let lo = A.length;
  let range = 0;
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i ++) {
    lo = Math.min(lo, map[A[i]][0])
    range = Math.max(range, map[A[i]][1] - lo);
  }
  return range;
};

// Runtime: 208 ms, faster than 54.90% of JavaScript online submissions for Maximum Width Ramp.
// Memory Usage: 52.1 MB, less than 11.11% of JavaScript online submissions for Maximum Width Ramp.

/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  let map = {};
  for (let i = 0; i < A.length; i ++) {
    if (!map[A[i]]) map[A[i]] = [];
    map[A[i]].push(i);
  }
  let lo = A.length;
  let range = 0;
  for (let i = 0; i <= 50000; i ++) {
    if (map[i]) {
      lo = Math.min(map[i][0], lo);
      range = Math.max(map[i].pop() - lo, range);
    }
  }
  return range;
};


// Runtime: 196 ms, faster than 54.90% of JavaScript online submissions for Maximum Width Ramp.
// Memory Usage: 66 MB, less than 11.11% of JavaScript online submissions for Maximum Width Ramp.

