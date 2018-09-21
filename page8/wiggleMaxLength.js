/**
* 376. Wiggle Subsequence
* https://leetcode.com/problems/wiggle-subsequence/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (!nums || !nums.length) return 0;
  let findMin = null;
  let cur = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] > nums[i - 1]) {
      if (findMin === false || findMin === null) {
        findMin = true;
        count ++;
      }
    } else if (nums[i] < nums[i - 1]) {
      if (findMin === true || findMin === null) {
        findMin = false;
        count ++;
      }
    }
  }
  return count;
};
