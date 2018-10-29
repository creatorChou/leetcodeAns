/**
* Minimum Moves to Equal Array Elements II
* https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let mid = nums[Math.floor(nums.length / 2)];
  let count = 0;
  for (let i = 0; i < nums.length; i ++) {
    count += Math.abs(mid - nums[i]);
  }
  return count;
};

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Minimum Moves to Equal Array Elements II.
