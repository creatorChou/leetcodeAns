/**
* 300. Longest Increasing Subsequence
* https://leetcode.com/problems/longest-increasing-subsequence/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  let arr = new Array(nums.length).fill(1);
  let len = 1;
  for (i = 1; i < nums.length; i ++) {
    let max = arr[i],
        needAdd = false;
    for (j = 0; j < i; j ++) {
      if (nums[i] > nums[j]) {
        needAdd = true;
        max = Math.max(max, arr[j]);
      }
    }
    if (needAdd) {
      arr[i] += max;
      len = Math.max(len, arr[i]);
    }
  }
  return len;
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
