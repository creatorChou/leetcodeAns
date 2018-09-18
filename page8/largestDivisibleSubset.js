/**
* 368. Largest Divisible Subset
* https://leetcode.com/problems/largest-divisible-subset/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
	if (!nums || !nums.length) return [];
  nums.sort((a, b) => a - b);
  let dp = new Array(nums.length).fill(0);
  let prevs = new Array(nums.length).fill(null);
  let max = 0;
  for (let i = 1; i < nums.length; i ++) {
  	for (let j = i - 1; j >= 0; j --) {
      if (nums[i] % nums[j] === 0 && dp[j] >= dp[i]) {
        dp[i] = dp[j] + 1;
        prevs[i] = j;
        max = Math.max(max, dp[i]);
      }
    }
  }
  let index = dp.indexOf(max);
  let res = [nums[index]];
  while (prevs[index] !== null) {
    index = prevs[index];
    res.unshift(nums[index]);
  }
  return res;
};

console.log(largestDivisibleSubset([1,2,3,6,4,9,8,12,16,24]));
