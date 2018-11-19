/**
* 560. Subarray Sum Equals K
* https://leetcode.com/problems/subarray-sum-equals-k/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // Using Cummulative sum
var subarraySum = function(nums, k) {
  let map = [];
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
    map[i] = sum;
    if (sum === k) count ++;
  }
  for (let i = 0; i < nums.length; i ++) {
    map.shift();
    for (let j = 0; j < map.length; j ++) {
      map[j] -= nums[i];
      if (map[j] === k) count ++;
    }
  }
  return count;
};


// Using hashmap
function subarraySum(nums, k) {
  let map = {"0": 1};
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
    if (map[sum - k]) {
      count += map[sum - k];
    }
    if (map[sum]) {
      map[sum] ++;
    } else {
      map[sum] = 1;
    }
  }
  return count;
}
