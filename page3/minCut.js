/**
* 132. Palindrome Partitioning II
* https://leetcode.com/problems/palindrome-partitioning-ii/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let len = s.length;
  if (len === 0) return 0;
  let i, j;
  let dp = new Array(len);
  for (i = 0; i < len; i ++) {
    dp[i] = [];
  }
  let l, r, str, isPalindrome;
  for (i = 0; i < len; i ++) {
    for (j = i; j < len; j ++) {
      str = s.slice(i, j + 1);
      l = 0;
      r = str.length - 1;
      isPalindrome = true;
      while (l < r) {
        if (str[l] !== str[r]) {
          isPalindrome = false;
          break;
        }
        l ++;
        r --;
      }
      dp[i].push(isPalindrome);
    }
  }
  console.log(dp);
  let count;
  let min = Number.MAX_VALUE;
  let k;
  for (i = 0; i < len; i ++) {
    if (!dp[0][i]) continue;
    k = i + 1;
    count = 0;
    while (k < len) {
      for (j = dp[k].length - 1; j >= 0; j--) {
        if (dp[k][j]) {
          count ++;
          k = k + j + 1;
          break;
        }
      }
    }
    // console.log(count);
    min = Math.min(min, count);
  }
  return min;
};

console.log(minCut("aabaabcaddac"));
