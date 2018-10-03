/**
* 373. Find K Pairs with Smallest Sums
* https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  if (k === 0) return [];
  let result = [];
  for (let i = 0; i < nums1.length; i ++) {
    if (result.length >= k && nums1[i] + nums2[0] >= result[result.length - 1][0] + result[result.length - 1][1]) {
      break;
    }
    for (let j = 0; j < nums2.length; j ++) {
      if (result.length < k) {
        result.push([nums1[i], nums2[j]]);
      } else {
        let pairs = result[result.length - 1];
        if (pairs[0] + pairs[1] > nums1[i] + nums2[j]) {
          result[result.length - 1] = [nums1[i], nums2[j]];
        }
      }
      for (let k = result.length - 1; k >= 1; k --) {
        if (result[k][0] + result[k][1] < result[k - 1][0] + result[k - 1][1]) {
          let temp = result[k];
          result[k] = result[k - 1];
          result[k - 1] = temp;
        } else {
          break;
        }
      }
    }
  }
  return result;
};

console.log(kSmallestPairs([-10,-4,0,0,6], [3,5,6,7,8,100], 10));
