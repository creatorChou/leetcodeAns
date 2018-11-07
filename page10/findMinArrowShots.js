/**
* Minimum Number of Arrows to Burst Balloons
* https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (!points || points.length === 0) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let coordinate = points[0][1];
  for (let i = 1; i < points.length; i ++) {
    if (coordinate < points[i][0] || coordinate > points[i][1]) {
      count ++;
      coordinate = points[i][1];
    }
  }
  return count;
};

console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]));

// 108 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Arrows to Burst Balloons.
