/**
* 324. Wiggle Sort II
* https://leetcode.com/problems/wiggle-sort-ii/description/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] < nums[i + 1]) continue;
    for (let j = i + 2; j < nums.length; j ++) {
      if (nums[j] > nums[i]) {
        nums[j] ^= nums[i + 1];
        nums[i + 1] ^= nums[j];
        nums[j] ^= nums[i + 1];
        break;
      }
    }
  }
};

let arr = [2,2,2,1,1,1,2];

wiggleSort(arr);

console.log(arr);
