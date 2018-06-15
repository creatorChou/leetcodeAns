/**
* Jump Game II
* https://leetcode.com/problems/jump-game-ii/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length <= 1) {
    return 0;
  }
  let index;
  for (let i = 0; i < nums.length - 1; i ++) {
    if ((nums[i] + i) >= (nums.length - 1)) {
      index = i;
      break;
    }
  }
  if (index && index !== 0) {
    let count = jump(nums.slice(0, index + 1));
    if (!count && count !== 0) {
      return count;
    } else {
      return 1 + count;
    }
  } else {
    if (index === undefined) {
      return;
    } else {
      return 1;
    }
  }
};

console.log(jump([2,0,0,0,0,0,1,2,1,2]))

// timeout
