/**
* 220. Contains Duplicate III
* https://leetcode.com/problems/contains-duplicate-iii/description/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let i, j, end;
  for (i = 0; i < nums.length - 1; i ++) {
    end = Math.min(i + k, nums.length - 1);
    for (j = i + 1; j <= end; j ++) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }
  return false;
};
