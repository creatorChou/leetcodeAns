/**
* 593. Valid Square
* https://leetcode.com/problems/valid-square/
*/

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  let set = new Set([distance(p1, p2), distance(p1, p3), distance(p1, p4), distance(p2, p3), distance(p2, p4), distance(p3, p4)]);
  if (set.size !== 2) return false;
  let arr = Array.from(set);
  return Math.max(...arr) === Math.min(...arr) * 2;
};

function distance(p1, p2) {
  return Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2);
}

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Valid Square.
