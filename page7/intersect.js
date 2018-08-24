/**
* 350. Intersection of Two Arrays II
* https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map1 = {}, map2 = {};
  for (let i = 0; i < nums1.length; i ++) {
    if (map1[nums1[i]]) {
      map1[nums1[i]] ++;
    } else {
      map1[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i ++) {
    if (map2[nums2[i]]) {
      map2[nums2[i]] ++;
    } else {
      map2[nums2[i]] = 1;
    }
  }
  let result = [];
  for (let key in map1) {
    if (map2[key]) {
      for (let i = 0; i < Math.min(map1[key], map2[key]); i ++) {
        result.push(parseInt(key));
      }
    }
  }
  return result;
};
