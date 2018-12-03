/**
* 647. Palindromic Substrings
* https://leetcode.com/problems/palindromic-substrings/
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  let len = s.length;
  let dp = new Array(len);
  for (let i = 0; i < len; i ++) {
    dp[i] = new Array(len);
    dp[i][i] = true;
  }
  for (let i = 0; i < len; i ++) {
    for (let j = i; j < len; j ++) {
      if (isPalindrome(s, i, j, dp)) {
        count ++;
      }
    }
  }
  return count;
};

function isPalindrome (s, i, j, dp) {
  if (dp[i][j] != null) return dp[i][j];
  if (dp[i+1][j-1] === true) {
    dp[i][j] = s[i] === s[j];
    return dp[i][j];
  }
  let start = i, end = j;
  while (start < end) {
    if (s[start] !== s[end]) {
      dp[i][j] = false;
      return dp[i][j];
    }
    start ++;
    end --;
  }
  dp[i][j] = true;
  return dp[i][j];
}

// Runtime: 740 ms, faster than 35.71% of JavaScript online submissions for Palindromic Substrings.


function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i ++) {
    count += countPalindrome(s, i, i);
    count += countPalindrome(s, i, i + 1);
  }
  return count;
}

function countPalindrome(s, start, end) {
  let count = 0;
  while (s[start] != null && s[end] != null && s[start] === s[end]) {
    count ++;
    start --;
    end ++;
  }
  return count;
}
