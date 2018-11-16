/**
* 540. Single Element in a Sorted Array
* https://leetcode.com/problems/single-element-in-a-sorted-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let preCount = (r - l) / 2 % 2;
    let mid = Math.floor((l + r) / 2);
    if (preCount === 1) {
      if (nums[mid] === nums[mid - 1]) {
        l = mid + 1;
      } else if (nums[mid] === nums[mid + 1]) {
        r = mid - 1;
      } else {
        return nums[mid];
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        r = mid;
      } else if (nums[mid] === nums[mid + 1]) {
        l = mid;
      } else {
        return nums[mid];
      }
    }
  }
  return nums[l];
};
