/**
*	354. Russian Doll Envelopes
*	https://leetcode.com/problems/russian-doll-envelopes/description/
*/

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
	if (!envelopes || !envelopes.length) return 0;
	envelopes.sort((a, b) => {
		if(b[0] === a[0]) {
			return b[1] - a[1];
		} else {
			return a[0] - b[0];
		}
	});
	return lengthOfLIS(envelopes)
};

var lengthOfLIS = function(nums) {
	console.log(nums)
	let tmp = [nums[0]]
	for (let i = 1; i < nums.length; i++) {
		if (nums[i][1] > tmp[tmp.length - 1][1]) {
		  tmp.push(nums[i])
		} else if (nums[i][1] < tmp[0][1]) {
		  tmp[0] = nums[i]
		} else {
		  for (let j = 0; j < tmp.length - 1; j++) {
	      if (nums[i][1] > tmp[j][1] && nums[i][1] < tmp[j + 1][1]) {
	        tmp[j + 1] = nums[i]
	      }
		  }
		}
		console.log(tmp)
	}
	return tmp.length
};

console.log(maxEnvelopes([[1,3],[3,5],[6,7],[6,8],[8,4],[9,5]]));
// console.log(maxEnvelopes([[46,89],[50,53],[52,68],[72,45],[77,81]]));
// console.log(maxEnvelopes([[5,4],[6,4],[5,5],[6,7],[2,3]]));
