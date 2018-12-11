/**
* 697. Degree of an Array
* https://leetcode.com/problems/degree-of-an-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  if (!nums || nums.length === 0) return 0;
  let map = {};
  let maxKey = nums[0];
  for (let i = 0; i < nums.length; i ++) {
    if (map[nums[i]]) {
      map[nums[i]].freq ++;
      map[nums[i]].len = i - map[nums[i]].begin + 1;
    } else {
      map[nums[i]] = {
        begin: i,
        len: 1,
        freq: 1
      }
    }
    if (map[nums[i]].freq > map[maxKey].freq) {
      maxKey = nums[i];
    } else if (map[nums[i]].freq === map[maxKey].freq) {
      if (map[nums[i]].len < map[maxKey].len) maxKey = nums[i];
    }
  }
  return map[maxKey].len;
};

// Runtime: 72 ms, faster than 94.85% of JavaScript online submissions for Degree of an Array.
