/**
* 209. Minimum Size Subarray Sum
* https://leetcode.com/problems/minimum-size-subarray-sum/description/
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let l = 0, r = 0, sum = nums[0], allSum = 0, count = nums.length;
  while (l < nums.length && r < nums.length) {
    if (sum < s) {
      if (r < nums.length) {
        allSum += nums[r];
        r ++;
        sum += nums[r];
      } else {
        break;
      }
    } else {
      if (l === r) {
        return 1;
      } else {
        count = Math.min(count, r - l + 1);
        sum -= nums[l];
        l ++;
      }
    }
  }
  if (allSum < s) {
    return 0;
  }
  return count;
};
