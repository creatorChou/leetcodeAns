/**
* 949. Largest Time for Given Digits
* https://leetcode.com/problems/largest-time-for-given-digits/
*/

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let reg = /^(([0-1][0-9])|([2][0-3])):[0-5][0-9]$/;
  let max = "00:00";
  let matched = false;
  for (let i = 0; i < 4; i ++) {
    for (let j = 0; j < 4; j ++) {
      if (j === i) continue;
      for (let k = 0; k < 4; k ++) {
        if (k === i || k === j) continue;
        for (let g = 0; g < 4; g ++) {
          if (g === i || g === j || g === k) continue;
          let time = "" + A[i] + A[j] + ":" + A[k] + A[g];
          if (reg.test(time) && time >= max){
            max = time;
            matched = true;
          }
        }
      }
    }
  }
  return matched ? max : "";
};

// Runtime: 64 ms, faster than 83.13% of JavaScript online submissions for Largest Time for Given Digits.
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Largest Time for Given Digits.

