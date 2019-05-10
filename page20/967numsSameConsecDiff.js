/**
* 967. Numbers With Same Consecutive Differences
* https://leetcode.com/problems/numbers-with-same-consecutive-differences/
*/

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  if (N === 1) return [0,1,2,3,4,5,6,7,8,9];
  let ans = [1,2,3,4,5,6,7,8,9];
  for (let i = 1; i < N; i ++) {
    let newAns = [];
    for (let num of ans) {
      let lastDigit = num % 10;
      let lo = lastDigit - K;
      let hi = lastDigit + K;
      if (lo >= 0) {
        newAns.push(num * 10 + lo);
      }
      if (hi <= 9 && hi !== lo) {
        newAns.push(num * 10 + hi);
      }
    }
    ans = newAns;
  }
  return ans;
};

// Runtime: 68 ms, faster than 85.00% of JavaScript online submissions for Numbers With Same Consecutive Differences.
// Memory Usage: 36.2 MB, less than 33.33% of JavaScript online submissions for Numbers With Same Consecutive Differences.
