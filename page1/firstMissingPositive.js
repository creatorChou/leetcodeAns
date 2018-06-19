/**
* First Missing Positive
* https://leetcode.com/problems/first-missing-positive/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let record = [];
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] > 0) {
      record[nums[i]] = nums[i];
    }
  }
  
  let i = 1;
  for (; i < record.length; i ++) {
    if (!record[i]) {
      return i;
    }
  }
  return record.length;
};

console.log(firstMissingPositive([3,4,-1,1]));
