/**
* Partition Equal Subset Sum
* https://leetcode.com/problems/partition-equal-subset-sum/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
    max = Math.max(max, nums[i]);
  }
  let target = sum / 2;
  console.log(sum, target);
  if (max > target || sum % 2 !== 0) return false;
  return dfs(nums, target, nums.length - 1, 0);
};

function dfs(nums, target, start, part) {
  for (let i = start; i >= 0; i --) {
    part += nums[i];
    if (part < target) {
      if (dfs(nums, target, i - 1, part)) return true;
    } else if (part === target) {
      return true;
    } else {
      break;
    }
    part -= nums[i];
  }
  return false;
}

let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,97,95]

console.log(canPartition(arr));

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Partition Equal Subset Sum.
