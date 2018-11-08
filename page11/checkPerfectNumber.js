/**
* 507. Perfect Number
* https://leetcode.com/problems/perfect-number/
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2; i < Math.sqrt(num); i ++) {
    if (num % i === 0) {
      sum += i + num / i;
    }
    if (sum > num) return false;
  }
  return sum === num;
};

// Runtime: 56 ms, faster than 98.96% of JavaScript online submissions for Perfect Number.
