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
  		arr = [];
  backtracking(result, arr, n, k, 1);
  return result;
};

var backtracking = function(result, arr, n, k, index) {
	if (arr.length === k) {
		result.push(arr.slice(0));
		return;
	}
	for (let i = index; i <= n; i ++) {
		arr.push(i);
		backtracking(result, arr, n, k, i + 1);
		arr.pop();
	}
}

let n = 4,
		k = 2;

console.log(combine(n, k));

// backtracking
