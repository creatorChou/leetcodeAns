/**
* 939. Minimum Area Rectangle
* https://leetcode.com/problems/minimum-area-rectangle/
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  let map = {};
  for (let p of points) {
    let x = p[0], y = p[1];
    if (!map[x]) map[x] = new Set();
    map[x].add(y);
  }
  let minArea = Number.MAX_VALUE;
  for (let p1 of points) {
    for (let p2 of points) {
      if (p1 === p2 || p1[0] === p2[0] || p1[1] === p2[1]) continue;
      if (map[p1[0]].has(p2[1]) && map[p2[0]].has(p1[1])) {
        let S = Math.abs(p1[0] - p2[0]) * Math.abs(p1[1] - p2[1]);
        minArea = Math.min(S, minArea);
      }
    }
  }
  return minArea === Number.MAX_VALUE ? 0 : minArea;
};

// Runtime: 440 ms, faster than 60.87% of JavaScript online submissions for Minimum Area Rectangle.
// Memory Usage: 41.2 MB, less than 36.84% of JavaScript online submissions for Minimum Area Rectangle.
