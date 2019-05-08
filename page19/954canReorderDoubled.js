/**
* 954. Array of Doubled Pairs
* https://leetcode.com/problems/array-of-doubled-pairs/
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
  let map = {};
  let max = 0;
  for (let num of A) {
    if (!map[num]) map[num] = 0;
    map[num] ++;
    max = Math.max(max, Math.abs(num));
  }
  if (map[0] && map[0] % 2 !== 0) return false;
  map[0] = 0;
  for (let i = 1; i <= max; i ++) {
    if (map[i] != null) {
      let prev1 = i / 2;
      if (map[prev1] != null) {
        if (map[prev1] <= map[i]) {
          map[i] -= map[prev1];
          map[prev1] = 0;
        } else {
          return false;
        }
      }
    }
    if (map[-i] != null) {
      let prev2 = -i / 2;
      if (map[prev2] != null) {
        if (map[prev2] <= map[-i]) {
          map[-i] -= map[prev2];
          map[prev2] = 0;
        } else {
          return false;
        }
      }
    }
  }
  for (let n in map) {
    if (map[n] !== 0) return false;
  }
  return true;
};
// Runtime: 132 ms, faster than 83.02% of JavaScript online submissions for Array of Doubled Pairs.
// Memory Usage: 40.7 MB, less than 100.00% of JavaScript online submissions for Array of Doubled Pairs.
