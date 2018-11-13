/**
* 553. Optimal Division
* https://leetcode.com/problems/optimal-division/
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  if (nums.length === 2) return nums[0] + "/" + nums[1];
  let str = "/(";
  for (let i = 1; i < nums.length; i ++) {
    str += nums[i];
    if (i !== nums.length - 1) {
      str += "/";
    } else {
      str += ")";
    }
  }
  if (str === "/(") str = "";
  return nums[0] + str;
};

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Optimal Division.
