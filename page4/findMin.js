/**
* 153. Find Minimum in Rotated Sorted Array
* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 0) return null;
  let l = 0, r = nums.length - 1, mid;
  if (nums[l] <= nums[r]) return nums[l];
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[l]) {
      l = mid;
    } else if (nums[mid] < nums[r]) {
      r = mid;
    } else {
      break;
    }
  }
  return nums[r];
};
