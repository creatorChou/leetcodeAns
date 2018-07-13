/**
* 128. Longest Consecutive Sequence
* https://leetcode.com/problems/longest-consecutive-sequence/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i ++) {
    map[nums[i]] = 1;
  }
  let sum = 0, next;
  for (let key in map) {
    next = parseInt(key) + 1;
    while (map[next] !== undefined) {
      map[key] += map[next];
      delete map[next];
      next ++;
    }
    sum = Math.max(sum, map[key]);
  }
  return sum;
};

console.log(longestConsecutive([100, 4, 200, 1, 2]));
