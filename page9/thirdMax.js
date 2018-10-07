/**
*	414. Third Maximum Number
*	https://leetcode.com/problems/third-maximum-number/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	nums.sort((a, b) => b - a);
	let removeDuplicateArr = Array.from(new Set(nums))
	return removeDuplicateArr[2] != null ? removeDuplicateArr[2] : removeDuplicateArr[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax2 = function(nums) {
	let first = -Number.MAX_VALUE,
			second = -Number.MAX_VALUE,
			third = -Number.MAX_VALUE;

	for (let i = 0; i < nums.length; i ++) {
		if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
		if (nums[i] > first) {
			third = second;
			second = first;
			first = nums[i];
		} else if (nums[i] > second) {
			third = second;
			second = nums[i];
		} else if (nums[i] > third) {
			nums[i] = third;
		}
	}

	if (third === -Number.MAX_VALUE) {
		return first;
	} else {
		return third;
	}
};

console.log(thirdMax([3,3,4,3,4,3,0,3,3]));
