/**
* 287. Find the Duplicate Number
* https://leetcode.com/problems/find-the-duplicate-number/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */


 // 1.brute force
var findDuplicate = function(nums) {
  let i, j, len = nums.length;
  for (i = 0; i < len - 1; i ++) {
    for (j = i + 1; j < len; j ++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
  return -1;
};

// 2.
var findDuplicate2 = function(nums) {

};
