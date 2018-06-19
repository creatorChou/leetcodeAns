/**
* Search in Rotated Sorted Array
* https://leetcode.com/problems/search-in-rotated-sorted-array/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  let l = nums[0];
  let r = nums[l - 1];
  let mid;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      r = mid - 1;
    } else if (nums[mid] > target) {
      if (target <= nums[r]) {
        l = mid + 1;
      } else if (target >= nums[l]) {
        r = mid - 1;
      } else {
        return -1;
      }
    } else {
      return mid;
    }
  }
  return -1;
};
