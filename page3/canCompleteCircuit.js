/**
* 134. Gas Station
* https://leetcode.com/problems/gas-station/description/
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let index = -1,
      sum = 0,
      accumulation = 0,
      oil;
  for (let i = 0; i < gas.length; i ++) {
    oil = gas[i] - cost[i];
    sum += oil;
    accumulation += oil;
    if (accumulation < 0) {
      index = -1;
      accumulation = 0;
    }
    if (oil >= 0 && index === -1) {
      index = i;
    }
  }
  if (sum < 0) {
    return -1;
  } else {
    return index;
  }
};

console.log(canCompleteCircuit([2,3,4], [3,4,3]));
