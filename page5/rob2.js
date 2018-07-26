/**
* 213. House Robber II
* https://leetcode.com/problems/house-robber-ii/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let first, second, 
    nums1 = nums.slice(0, nums.length - 1),
    nums2 = nums.slice(1),
    i;
  for (i = 0; i < nums1.length; i ++) {
    first = nums1[i - 3] || 0;
    second = nums1[i - 2] || 0;
    nums1[i] += Math.max(first, second);
  }
  for (i = 0; i < nums2.length; i ++) {
    first = nums2[i - 3] || 0;
    second = nums2[i - 2] || 0;
    nums2[i] += Math.max(first, second);
  }
  return Math.max(nums1.pop(), nums1.pop(), nums2.pop() ,nums2.pop());
};
