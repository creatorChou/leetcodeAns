/**
* 686. Repeated String Match
* https://leetcode.com/problems/repeated-string-match/
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let times = Math.ceil(B.length / A.length);
  let s = A.repeat(times);
  if (s.indexOf(B) === -1) {
    s += A;
    times ++;
    if (s.indexOf(B) === -1) {
      return -1;
    }
  }
  return times;
};

// Runtime: 52 ms, faster than 99.23% of JavaScript online submissions for Repeated String Match.
