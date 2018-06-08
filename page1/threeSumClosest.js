/**
* 3Sum Closest
* https://leetcode.com/problems/3sum-closest/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length === 0) {
    return;
  }
  if (nums.length < 4) {
    return nums.reduce((a, b) => a + b);
  }
  let i, j, k, sum, result = nums[0] + nums[1] + nums[2];
  for (i = 0; i < nums.length - 2; i ++) {
    for (j = i + 1; j < nums.length - 1; j ++) {
      for (k = j + 1; k < nums.length; k ++) {
        sum = nums[i] + nums[j] + nums[k];
        if (sum === target) {
          return target;
        } else {
          result = Math.abs(result - target) < Math.abs(sum - target) ? result : sum;
        }
      }
    }
  }
  
  return result;
};

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));
