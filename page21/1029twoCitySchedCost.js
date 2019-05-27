/**
* 1029. Two City Scheduling
* https://leetcode.com/problems/two-city-scheduling/
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let n = costs.length;
  let sum = 0;
  for (let i = 0; i < n / 2; i ++) {
    sum += costs[i][0];
  }
  for (let i = n / 2; i < n; i ++) {
    sum += costs[i][1];
  }
  return sum;
};

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));

// Runtime: 56 ms, faster than 92.93% of JavaScript online submissions for Two City Scheduling.
// Memory Usage: 34.7 MB, less than 62.22% of JavaScript online submissions for Two City Scheduling.
