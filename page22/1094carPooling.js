/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const memo = new Array(1001).fill(0);
  for (let trip of trips) {
    const passagers = trip[0];
    for (let i = trip[1]; i < trip[2]; i ++) {
      memo[i] += passagers;
      if (memo[i] > capacity) return false;
    }
  }
  return true;
};

// Runtime: 64 ms, faster than 68.32% of JavaScript online submissions for Car Pooling.
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for Car Pooling.
