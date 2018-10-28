/**
* Minimum Moves to Equal Array Elements
* https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  while (nums[nums.length - 1] !== nums[0]) {
    let diff = nums[nums.length - 1] - nums[0];
    for (let i = 0; i < nums.length - 1; i ++) {
      nums[i] += diff;
    }
    nums.unshift(nums.pop());
    count += diff;
  }
  return count;
};

// correct!
var minMoves2 = function(nums) {
  let min = Math.min(...nums);
  let count = 0;
  for (let i = 0; i < nums.length; i ++) {
    count += nums[i] - min;
  }
  return count;
}

// wrong!
var minMoves2 = function(nums) {
  let max = Math.max(...nums);
  let count = 0;
  for (let i = 0; i < nums.length; i ++) {
    count += max - nums[i];
  }
  return count;
}
