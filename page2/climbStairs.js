/**
* 70. Climbing Stairs
* https://leetcode.com/problems/climbing-stairs/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  }
  let steps = [];
  for (let i = 0; i < n; i ++) {
    steps[i] = 0;
  }
  steps[0] = 1;
  steps[1] = 2;
  for (let j = 2; j < n; j ++) {
    steps[j] = steps[j-1] + steps[j-2];
  }
  return steps[n-1];
};

console.log(climbStairs(3));
