/**
* 179. Largest Number
* https://leetcode.com/problems/largest-number/description/
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => {
    a = String(a);
    b = String(b);
    return parseInt(b + a) - parseInt(a + b);
  });
  let res = nums.join("");
  if (parseInt(res) === 0) {
    return "0";
  } else {
    return res;
  }
};

largestNumber([3,30,34,5,9]);
