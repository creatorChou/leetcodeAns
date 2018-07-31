/**
* 216. Combination Sum III
* https://leetcode.com/problems/combination-sum-iii/description/
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let results = [];
  helper(results, [], 0, k, n);
  return results;
};

function helper (results, nums, sum, k, n) {
  if (nums.length === k) {
    if (sum === n) {
      results.push(nums.slice());
    }
    return;
  }
  let start = nums[nums.length - 1] || 0;
  start ++;
  for (let i = start; i <= 9; i ++) {
    if (sum + i <= n) {
      nums.push(i);
      helper(results, nums, sum + i, k, n);
      nums.pop();
    }
  }
}

console.log(combinationSum3(3, 15));
