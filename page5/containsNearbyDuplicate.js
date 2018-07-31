/**
* 219. Contains Duplicate II
* https://leetcode.com/problems/contains-duplicate-ii/description/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (nums.length < 2) return false;
  let set = new Set(nums.slice(0, k + 1));
  if (k >= nums.length) {
    k = nums.length - 1;
  }
  if (k + 1 > set.size) return true;
  for (let i = k + 1; i < nums.length; i ++) {
    set.delete(nums[i - k - 1]);
    if(set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};
