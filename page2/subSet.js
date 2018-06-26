/**
* 78. Subsets
* https://leetcode.com/problems/subsets/description/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]];
  let subs = [];
  backtrack(result, subs, nums);
  return result;
};

var backtrack = function(result, subs, nums) {
  let index = nums.indexOf(subs[subs.length-1]);
  let i;
  if (index !== -1) {
    i = index + 1;
  } else {
    i = 0;
  }
  for (; i < nums.length; i ++) {
    subs.push(nums[i]);
    result.push(subs.slice(0));
    backtrack(result, subs, nums);
    subs.pop()
  }
}

console.log(subsets([1]));
