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
  let temp = [nums[0]];
  for (let i = 1; i < nums.length; i ++) {
  	if (nums[i] % temp[temp.length - 1] === 0) {
  		temp.push(nums[i]);
  	}
  }
};
