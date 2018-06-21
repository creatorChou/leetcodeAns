/**
* 62. Unique Paths
* https://leetcode.com/problems/unique-paths/description/
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let x = 1, y = 1;
  return dp(m, n, x, y);
};

var dp = function(m, n, x, y) {
  if (m === x && n === y) {
    return 1;
  }
  let sum = 0;
  if (x !== m) {
    x ++;
    sum += dp(m, n, x, y);
    x --;
  }
  if (y !== n) {
    y ++;
    sum += dp(m, n, x, y);
    y --;
  }
  return sum;
}

console.log(uniquePaths(7, 9));

// Time limited exceeded
