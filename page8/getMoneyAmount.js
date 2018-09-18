/**
* 375. Guess Number Higher or Lower II
* https://leetcode.com/problems/guess-number-higher-or-lower-ii/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  let table = new Array(n + 1);
  for (let i = 1; i <= n; i ++) {
    table[i] = new Array(n + 1);
  }
  let ans = dp(table, 1, n)
  console.log(table);
  return ans;
};

function dp(table, start, end) {
  if (start >= end) return 0;
  if (table[start][end] != null) return table[start][end];
  let res = Number.MAX_VALUE;
  for (let i = start; i <= end; i ++) {
    let tmp = i + Math.max(dp(table, start, i - 1), dp(table, i + 1, end));
    res = Math.min(res, tmp);
  }
  table[start][end] = res;
  return res;
}

console.log(getMoneyAmount(10));
