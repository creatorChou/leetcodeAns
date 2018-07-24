/**
*	198. House Robber
*	https://leetcode.com/problems/house-robber/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let first, second;
	for (var i = 0; i < nums.length; i ++) {
		first = nums[i - 3];
		second = nums[i - 2];
		if (first == null && second == null) {
			continue;
		} else if (first == null) {
			nums[i] += second;
		} else {
			nums[i] += Math.max(first, second);
		}
	}
	if (nums[nums.length-2] != null) {
    return Math.max(nums[nums.length-1], nums[nums.length-2]);
  } else {
    return nums[nums.length-1] || 0;
  }
};
