/**
* Jump Game II
* https://leetcode.com/problems/jump-game-ii/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length < 2) {
    return 0;
  }
  let end = nums.length - 1;
  let step = 0;
  let temp;
  let i;
  while (end > 0) {
    temp = end;
    for (i = end - 1; i >= 0; i--) {
      if (i + nums[i] >= end && i < temp) {
        temp = i;
      }
    }
    if (temp === end) {
      return;
    } else {
      end = temp;
      step ++;
    }
  }
  return step;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function(nums) {
  let step = 0;
  let farthest = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i ++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (farthest >= nums.length - 1) {
      step ++;
      break;
    }
    if (i === end) {
      step ++;
      end = farthest;
    }
  }

  return step;
};

console.log(jump2([2,3,1,1,4]))
