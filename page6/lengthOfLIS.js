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

var lengthOfLIS2 = function(nums) {
  if (!nums || !nums.length) return 0;
  let temp = [nums[0]];
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] > temp[temp.length - 1]) {
      temp.push(nums[i]);
    } else if (nums[i] <= temp[0]) {
      temp[0] = nums[i];
    } else {
      for (let j = 0; j < temp.length - 1; j ++) {
        if (nums[i] > temp[j] && nums[i] < temp[j + 1]) {
          temp[j + 1] = nums[i];
          break;
        }
      }
    }
  }
  return temp.length;
}

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
console.log(lengthOfLIS2([3,5,6,2,5,4,19,5,6,7,12]));
