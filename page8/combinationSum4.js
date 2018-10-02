/**
*	377. Combination Sum IV
*	https://leetcode.com/problems/combination-sum-iv/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
	nums.sort((a, b) => a - b);
  let dp = new Array(target + 1);
	return helper(nums, target, dp);
};

function helper (nums, target, dp) {
  if (dp[target] != null) return dp[target];
	let count = 0;
	for (let i = 0; i < nums.length; i ++) {
		if (nums[i] < target) {
			count += helper(nums, target - nums[i], dp);
		} else {
			if (nums[i] === target) {
				count ++;
			}
			break;
		}
	}
  dp[target] = count;
	return count;
}
