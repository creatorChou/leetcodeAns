/**
* 788. Rotated Digits
* https://leetcode.com/problems/rotated-digits/
*/

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let set1 = new Set(["3", "4", "7"]);
  let set2 = new Set(["2", "5", "6", "9"]);
  let count = 0;
  for (let i = 1; i <= N; i ++) {
    let good = true;
    let changed = false;
    for (let d of String(i)) {
      if (set1.has(d)) {
        good = false;
        break;
      } else if (set2.has(d)) {
        changed = true;
      }
    }
    if (good && changed) count ++;
  }
  return count;
};
