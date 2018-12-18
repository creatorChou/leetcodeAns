/**
* 746. Min Cost Climbing Stairs
* https://leetcode.com/problems/min-cost-climbing-stairs/
*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  for (let i = 2; i < cost.length; i ++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }
  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let pp = cost[0];
  let p = cost[1];
  for (let i = 2; i < cost.length; i ++) {
    let temp = cost[i] + Math.min(pp, p);
    pp = p;
    p = temp;
  }
  return Math.min(p, pp);
};
