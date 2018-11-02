/**
* Teemo Attacking
* https://leetcode.com/problems/teemo-attacking/
*/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (!timeSeries || !timeSeries.length) return 0;
  let sum = duration;
  for (let i = 1; i < timeSeries.length; i ++) {
    sum += duration;
    let diff = timeSeries[i] - timeSeries[i - 1];
    if (diff < duration) {
      sum -= duration - diff;
    }
  }
  return sum;
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Teemo Attacking.
