/**
*	329. Longest Increasing Path in a Matrix
*	https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
	if (matrix === null || matrix.length === 0) return 0;
	let len1 = matrix.length;
	let len2 = matrix[0].length;
	let memo = new Array(len1);
	let i, j;
	let max = 0;
	for (i = 0; i < len1; i ++) {
		memo[i] = new Array(len2);
	}
	for (i = 0; i < len1; i ++) {
		for (j = 0; j < len2; j ++) {
			max = Math.max(helper(matrix, memo, i, j), max);
		}
	}
	return max;
};

function helper(matrix, memo, i, j) {
	if (memo[i][j] != null) return memo[i][j];
	let max = 0;
	if (matrix[i-1] != null && matrix[i-1][j] != null && matrix[i-1][j] < matrix[i][j]) {
		max = Math.max(helper(matrix, memo, i - 1, j), max);
	}
	if (matrix[i+1] != null && matrix[i+1][j] != null && matrix[i+1][j] < matrix[i][j]) {
		max = Math.max(helper(matrix, memo, i + 1, j), max);
	}
	if (matrix[i][j-1] != null && matrix[i][j-1] < matrix[i][j]) {
		max = Math.max(helper(matrix, memo, i, j - 1), max);
	}
	if (matrix[i][j+1] != null && matrix[i][j+1] < matrix[i][j]) {
		max = Math.max(helper(matrix, memo, i, j + 1), max);
	}
	memo[i][j] = max + 1;
	return memo[i][j];
}

console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));
