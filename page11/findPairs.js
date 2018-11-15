/**
* 532. K-diff Pairs in an Array
* https://leetcode.com/problems/k-diff-pairs-in-an-array/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  let set = new Set();
  let res = new Set();
  for (let n of nums) {
    if (set.has(n + k)) res.add(n + k)
    if (set.has(n - k)) res.add(n)
      set.add(n)
  }
  return res.size;
};
