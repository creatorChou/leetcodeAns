/**
* 594. Longest Harmonious Subsequence
* https://leetcode.com/problems/longest-harmonious-subsequence/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i ++) {
    if (map[nums[i]]) {
      map[nums[i]] ++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let max = 0;
  for (let i in map) {
    let key = parseInt(i);
    if (map[key + 1]) {
      max = Math.max(map[key + 1] + map[i], max);
    }
    if (map[key - 1]) {
      max = Math.max(map[key - 1] + map[i], max);
    }
  }
  return max;
};
