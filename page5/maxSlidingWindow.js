/**
* 239. Sliding Window Maximum
* https://leetcode.com/problems/sliding-window-maximum/description/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  let queue = nums.slice(0, k),
      rest = nums.slice(k),
      result = [];

  result.push(Math.max(...queue));
  for (let i = 0; i < rest.length; i ++) {
    queue.shift();
    queue.push(rest[i]);
    result.push(Math.max(...queue));
  }
  return result;
};
