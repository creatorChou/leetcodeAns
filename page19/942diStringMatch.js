/**
* 942. DI String Match
* https://leetcode.com/problems/di-string-match/
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let arr = [0];
  let lo = -1, hi = 1;
  for (let i = 1; i <= S.length; i ++) {
    if (S[i-1] === "I") {
      arr[i] = hi;
      hi ++;
    } else {
      arr[i] = lo;
      lo --;
    }
  }
  lo ++;
  for (let i = 0; i <= S.length; i++) {
    arr[i] -= lo;
  }
  return arr;
};

// Runtime: 100 ms, faster than 52.53% of JavaScript online submissions for DI String Match.
// Memory Usage: 37.5 MB, less than 24.59% of JavaScript online submissions for DI String Match.


var diStringMatch = function(S) {
  let arr = [];
  let lo = 0, hi = S.length;
  for (let i = 0; i < S.length; i ++) {
    if (S[i] === "I") {
      arr.push(lo);
      lo ++;
    } else {
      arr.push(hi);
      hi --;
    }
  }
  return arr;
};

// Runtime: 88 ms, faster than 87.81% of JavaScript online submissions for DI String Match.
// Memory Usage: 37.6 MB, less than 24.59% of JavaScript online submissions for DI String Match.

