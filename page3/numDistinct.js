/**
* 115. Distinct Subsequences
* https://leetcode.com/problems/distinct-subsequences/description/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let result = new Array(t.length).fill(0), i, j;
  for (i = 0; i < s.length; i ++) {
    for (j = t.length - 1; j >= 0; j --) {
      if (s[i] === t[j]) {
        if (j === 0) {
          result[j] ++;
        } else {
          result[j] += result[j - 1];
        }
      }
    }
  }
  return result[result.length - 1];
};

console.log(numDistinct("aaaaaaaaaaaaa","aa"));
