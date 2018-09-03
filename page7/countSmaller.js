/**
* 315. Count of Smaller Numbers After Self
* https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i ++) {
    result[i] = 0;
    for (let j = i + 1; j < nums.length; j ++) {
      if (nums[j] < nums[i]) result[i] ++;
    }
  }
  return result;
};

console.log(countSmaller([5,2,6,1]));
// Time Limit Exceeded


