/**
*	77. Combinations
*	https://leetcode.com/problems/combinations/description/
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = [],
  		nums = [],
  		arr = [],
  		i, j, num;
  for (i = 1; i < n; i ++) {
  	nums.push([i]);
  }
  for (i = 0; i < nums.length; i ++) {
  	num = nums[i][nums[i].length - 1] + 1;
  	while (nums[i].length < k) {
  		if (num > n) {
  			break;
  		}
  		
  	}
  }
  return result;
};


let n = 4,
		k = 2;

console.log(combine(n, k));

// backtracking
