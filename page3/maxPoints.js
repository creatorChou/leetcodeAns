/**
* 149. Max Points on a Line
* https://leetcode.com/problems/max-points-on-a-line/description/
*/

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 2) return points.length;
  let p1, p2, p3, k, b, i, j, z, count, max = 0;
  for (i = 0; i < points.length - 1; i ++) {
    for (j = i + 1; j < points.length; j ++) {
      p1 = points[i];
      p2 = points[j];
      k = (p1.y - p2.y) / (p1.x - p2.x);
      b = p1.y - k * p1.x;
      count = 2;
      for (z = 0; z < points.length; z++) {
        if (z === i || z === j) continue;
        p3 = points[z];
        if (k === Infinity) {
          if (p3.x === p1.x) {
            count ++;
          }
        } else if (k === 0) {
          if (p3.y === p1.y) {
            count ++;
          }
        } else if (k !== k) {
          if (p3.x === p1.x && p3.y === p1.y) {
            count ++;
          }
        } else {
          if (p3.y === k * p3.x + b) {
            count ++;
          }
        }
      }
      max = Math.max(max, count);
    }
  }
  return max;
};

console.log(maxPoints([{x:4,y:4},{x:4,y:4},{x:4,y:4}]));
