/**
* 312. Burst Balloons
* https://leetcode.com/problems/burst-balloons/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  let arr = [1, ...nums, 1];
  let len = arr.length;
  let memo = [];
  for (let i = 0; i < len; i ++) {
    let subArr = new Array(len);
    subArr.fill(0);
    memo.push(subArr);
  }
  return burst(memo, arr, 0, len - 1);
};


function burst (memo, arr, l, r) {
  if (l === r - 1) return 0;
  if (memo[l][r] > 0) return memo[l][r];
  let result = 0,
      product = arr[l] * arr[r],
      curr;
  for (let i = l + 1; i < r; i ++) {
    curr = arr[i] * product + burst(memo, arr, l, i) + burst(memo, arr, i, r);
    result = Math.max(result, curr);
  }
  memo[l][r] = result;
  return result;
}

console.log(maxCoins([1,4,8,1]));
