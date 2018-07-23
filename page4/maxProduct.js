/**
*	152. Maximum Product Subarray
*	https://leetcode.com/problems/maximum-product-subarray/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 0) return 0;
	let max = nums[0],
			i, j, temp;
	for (i = 0; i < nums.length; i ++) {
		temp = 1;
		for (j = i; j < nums.length; j ++) {
			temp *= nums[j];
			max = Math.max(max, temp);
		}
	}
	return max;
};

console.log(maxProduct([-2,0,-1]));
