/**
* 581. Shortest Unsorted Continuous Subarray
* https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let compare = nums.slice().sort((a, b) => a - b);
  let l = 0, r = nums.length - 1;
  while (compare[l] === nums[l] && l < nums.length) {
    l ++;
  }
  if (l === nums.length) return 0;
  while (compare[r] === nums[r]) {
    r --;
  }
  return r - l + 1;
};

// Runtime: 108 ms, faster than 45.52% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
