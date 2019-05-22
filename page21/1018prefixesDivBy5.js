/**
* 1018. Binary Prefix Divisible By 5
* https://leetcode.com/problems/binary-prefix-divisible-by-5/
*/

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let n = A.length;
  let ans = new Array(n);
  let base = "";
  for (let i = 0; i < n; i ++) {
    base = (base * 2 + A[i]) % 5;
    ans[i] = base === 0;
  }
  return ans;
};

// Runtime: 80 ms, faster than 43.55% of JavaScript online submissions for Binary Prefix Divisible By 5.
// Memory Usage: 38.4 MB, less than 29.00% of JavaScript online submissions for Binary Prefix Divisible By 5.
