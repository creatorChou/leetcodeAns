/**
* 754. Reach a Number
* https://leetcode.com/problems/reach-a-number/
*/

/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target);
  let n = Math.ceil((Math.sqrt(8 * target + 1) - 1) / 2);
  let sum = (1 + n) * n / 2;
  while ((sum - target) % 2 !== 0){
    n ++;
    sum += n;
  }
  return n;
};

// Runtime: 52 ms, faster than 90.32% of JavaScript online submissions for Reach a Number.
