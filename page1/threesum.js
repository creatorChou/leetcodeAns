/**
* 3Sum
* https://leetcode.com/problems/3sum/description/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length <= 2) return [];
  let result = [], i, j, pick, pickIndex;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      pick = - (nums[i] + nums[j]);
      pickIndex = nums.indexOf(pick);
      if (pickIndex !== -1 && pickIndex !== i && pickIndex !== j) {
        result.push([nums[i], nums[j], pick]);
      }
    }
  }
  if (result.length <= 1) return result;

  let hasFullZero = false;
  for (i = 0; i < result.length; i ++) {
    if (result[i][0] === 0 && result[i][1] === 0) {
      if (hasFullZero) {
        result.splice(i, 1);
        i --;
      } else {
        hasFullZero = true;
      }
      continue;
    }
    for (j = i + 1; j < result.length; j ++) {
      if (result[j].indexOf(result[i][0]) !== -1 && result[j].indexOf(result[i][1]) !== -1 && result[j].indexOf(result[i][2]) !== -1) {
        result.splice(i, 1);
        i --;
        break;
      }
    }
  }
  return result;
};

console.log(threeSum([3,0,3,2,-4,0,-3,2,2,0,-1,-5]));

// Time Limit Exceeded
