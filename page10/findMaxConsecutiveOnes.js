/**
* Max Consecutive Ones
* https://leetcode.com/problems/max-consecutive-ones/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let now = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] === 1) {
      now ++;
    } else {
      max = Math.max(max, now);
      now = 0;
      if (max >= nums.length - i) {
        break;
      }
    }
  }
  return max;
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Max Consecutive Ones.
