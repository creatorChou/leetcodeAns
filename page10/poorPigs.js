/**
* Poor Pigs
* https://leetcode.com/problems/poor-pigs/
*/

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  if (buckets < 2) return 0;
  let len = Math.floor(minutesToTest / minutesToDie) + 1;
  let count = 1;
  while (Math.pow(len, count) < buckets) {
    count ++;
  }
  return count;
};

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Poor Pigs.
