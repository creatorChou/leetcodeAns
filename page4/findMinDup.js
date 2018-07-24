/**
* 154. Find Minimum in Rotated Sorted Array II
* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 0) return null;
  let l = 0, r = nums.length - 1, mid;
  if (nums[l] <= nums[r]) {
    return nums[l];
  }
  while (l < r - 1) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === nums[l] && nums[mid] === nums[r]) {
      l ++;
      r --;
    } else if (nums[mid] === nums[l] && nums[mid] !== nums[r]) {
      l = mid;
    } else if (nums[mid] !== nums[l] && nums[mid] === nums[r]) {
      r = mid;
    } else if (nums[mid] !== nums[l] && nums[mid] !== nums[r]) {
      if (nums[mid] > nums[l]) {
        l = mid;
      } else if (nums[mid] < nums[r]) {
        r = mid;
      } else {
        break;
      }
    }
  }
  return nums[l] < nums[r] ? nums[l] : nums[r];;
};
