/**
* 724. Find Pivot Index
* https://leetcode.com/problems/find-pivot-index/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let memo1 = [];
  let memo2 = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i ++) {
    memo1[i] = sum;
    sum += nums[i];
  }
  sum = 0;
  for (let i = nums.length - 1; i >= 0; i --) {
    memo2[i] = sum;
    sum += nums[i];
  }
  for (let i = 0; i < nums.length; i ++) {
    if (memo1[i] === memo2[i]) return i;
  }
  return -1;
};
