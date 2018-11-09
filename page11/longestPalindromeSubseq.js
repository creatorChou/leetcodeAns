/**
* 516. Longest Palindromic Subsequence
* https://leetcode.com/problems/longest-palindromic-subsequence/
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  if (s.length < 2) return s.length;
  let dp = [];
  for (let i = 0; i < s.length; i ++) {
    dp[i] = new Array(s.length);
  }
  return palindromeLength(s, dp, 0, s.length - 1);
};

function palindromeLength (s, dp, start, end) {
  if (start > end) return 0;
  if (start === end) return 1;
  if (dp[start][end] != null) return dp[start][end];
  let count;
  if (s[start] === s[end]) {
    count = 2 + palindromeLength(s, dp, start + 1, end - 1);
  } else {
    count = Math.max(palindromeLength (s, dp, start + 1, end), palindromeLength (s, dp, start, end - 1));
  }
  dp[start][end] = count;
  return count;
}

console.log(longestPalindromeSubseq("cbbdcbbdcbbdcbbdcbbd"));

// Runtime: 180 ms, faster than 97.78% of JavaScript online submissions for Longest Palindromic Subsequence.
