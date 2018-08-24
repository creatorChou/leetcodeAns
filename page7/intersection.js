/**
* 349. Intersection of Two Arrays
* https://leetcode.com/problems/intersection-of-two-arrays/description/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set = new Set(nums1),
      result = new Set();
  for (let i = 0; i < nums2.length; i ++) {
    if (set.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }
  return [...result];
};
