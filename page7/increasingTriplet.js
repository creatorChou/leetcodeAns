/**
*	334. Increasing Triplet Subsequence
*	https://leetcode.com/problems/increasing-triplet-subsequence/description/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	if (!nums || nums.length < 3) return false;
	let num1 = nums[0],
			num2 = null,
			num3 = null;

	for (let i = 1; i < nums.length; i ++) {
		if (num3 !== null) {
			if (nums[i] > num3) {
				if (nums[i] > num2) {
					return true;
				} else {
					num1 = num3;
					num2 = nums[i];
					num3 = null;
				}
			} else {
				num3 = nums[i];
			}
		} else if (num2 !== null) {
			if (nums[i] > num2) {
				return true;
			} else {
				if (nums[i] > num1) {
					num2 = nums[i];
				} else {
					num3 = nums[i];
				}
			}
		} else {
			if (nums[i] > num1) {
				num2 = nums[i];
			} else {
				num1 = nums[i];
			}
		}
	}
	return false;
};


