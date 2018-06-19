/**
* Search Insert Position
* https://leetcode.com/problems/search-insert-position/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0;
  let l = 0;
  let r = nums.length - 1;
  if (target <= nums[l]) {
    return 0;
  } else if (target >= nums[r]) {
    return nums.length;
  } else {
    let mid;
    while (l < r - 1) {
      mid = Math.floor((l + r) / 2);
      if (target < nums[mid]) {
        r = mid;
      } else if (target > nums[mid]) {
        l = mid;
      } else {
        return mid;
      }
    }
    return r;
  }
};

console.log(searchInsert([1,3,5,6], 5));
