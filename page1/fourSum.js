/**
*	4Sum
*	https://leetcode.com/problems/4sum/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	if (nums.length < 4) {
		return [];
	}
  let result = [],
  		i, j, k, o, p, sum, pass;

  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length - 3; i ++) {
  	for (j = i + 1; j < nums.length - 2; j ++) {
  		for (k = j + 1; k < nums.length - 1; k ++) {
  			for (o = k + 1; o < nums.length; o ++) {
  				sum = nums[i] + nums[j] + nums[k] + nums[o];
  				console.log(nums[i],nums[j],nums[k],nums[o]);
  				if (sum === target) {
  					pass = true;
  					for (p = 0; p < result.length; p ++) {
  						if (result[p][0] === nums[i] && result[p][1] === nums[j]
  							&& result[p][2] === nums[k] && result[p][3] === nums[o]) {
  							pass = false;
  							break;
  						}
  					}
						if (pass) {
							result.push([nums[i], nums[j], nums[k], nums[o]]);
						}
  				}
	 			}
	 		}
	 	}
  }

  return result;
};

console.log(fourSum([2,-4,-5,-2,-3,-5,0,4,-2], -14));