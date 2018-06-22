/**
* 75. Sort Colors
* https://leetcode.com/problems/sort-colors/description/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let l = 0,
      r = nums.length - 1;
      i = l;
  while (i <= r) {
    if (nums[r] < nums[l]) {
      nums[r] ^= nums[l];
      nums[l] ^= nums[r];
      nums[r] ^= nums[l];
    }
    if (nums[l] === 0 || nums[r] === 2) {
      if (nums[l] === 0) {
        l ++;
        i = l;
      }
      if (nums[r] === 2) {
        r --;
      }
      continue;
    } else {
      if (nums[i] === 0) {
        nums[i] = nums[l];
        nums[l] = 0;
        l ++;
      } else if (nums[i] === 2) {
        nums[i] = nums[r];
        nums[r] = 2;
        r --;
      }
      i ++;
    }
  }
};

let nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums);
