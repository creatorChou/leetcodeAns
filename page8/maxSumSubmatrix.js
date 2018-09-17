/**
*	363. Max Sum of Rectangle No Larger Than K
*	https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/description/
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
	if (!matrix || !matrix.length) return 0;
	let maxSum = -Number.MAX_VALUE,
			len = matrix.length,
			innerLen = matrix[0].length,
			dp;
	for (let i = 0; i < len; i ++) {
		dp = matrix[i].slice();
		let currentMax = maxSubarray(dp, k);
		if (currentMax === k) return k;
		maxSum = Math.max(currentMax, maxSum);
		for (let j = i + 1; j < len; j ++) {
			for (let k = 0; k < innerLen; k ++) {
				dp[k] += matrix[j][k];
			}
			currentMax = maxSubarray(dp, k);
			if (currentMax === k) return k;
			maxSum = Math.max(currentMax, maxSum);
		}
	}
	return maxSum === -Number.MAX_VALUE ? 0 : maxSum;
};

function maxSubarray (arr, k) {
	if (arr.length === 0) return 0;
	let sum = 0;
	let dp = [];
	let maxNum = arr[0];
	for (let i = 0; i < arr.length; i ++) {
		sum += arr[i];
		dp[i] = sum;
		maxNum = Math.max(arr[i], maxNum);
	}
	if (maxNum <= 0 && maxNum <= k) return maxNum;
	let range;
	let result = -Number.MAX_VALUE;
	for (let i = 0; i < dp.length; i ++) {
		for (let j = i; j < dp.length; j ++) {
			range = dp[j] - dp[i] + arr[i];
			if (range < k) {
				result = Math.max(result, range);
			} else if (range === k) {
				return k;
			}
		}
	}
	return result;
}

let arr = [[-9,-6,-1,-7,-6,-5,-4,-7,-6,0],[-4,-9,-4,-7,-7,-4,-4,-6,-6,-6],[-2,-2,-6,-7,-7,0,-1,-1,-8,-2],[-5,-3,-1,-6,-1,-1,-6,-3,-4,-8],[-4,-1,0,-8,0,-9,-8,-7,-2,-4],[0,-3,-1,-7,-2,-5,-5,-5,-8,-7],[-2,0,-8,-2,-9,-2,0,0,-9,-6],[-3,-4,-3,-7,-2,-1,-9,-5,-7,-2],[-8,-3,-2,-8,-9,0,-7,-8,-9,-3],[-7,-4,-3,-3,-3,-1,0,-1,-8,-2]]

console.log(maxSumSubmatrix(arr, -321));
