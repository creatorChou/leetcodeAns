/**
* 1010. Pairs of Songs With Total Durations Divisible by 60
* https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
*/

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let map = {};
  let count = 0;
  for (let d of time) {
    let k = Math.ceil(d / 60) * 60 - d;
    if (map[k]) count += map[k];
    let n = d % 60;
    if (!map[n]) map[n] = 1;
    else map[n] ++;
  }
  return count;
};

// Runtime: 64 ms, faster than 99.24% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 38.7 MB, less than 12.30% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
