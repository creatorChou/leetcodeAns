/**
* 698. Partition to K Equal Sum Subsets
* https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  if (k > nums.length) return false;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum % k !== 0) return false;
  let target = sum / k;
  let memo = new Array(nums.length);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i ++) {
    if (memo[i]) continue;
    memo[i] = true;
  }
};
