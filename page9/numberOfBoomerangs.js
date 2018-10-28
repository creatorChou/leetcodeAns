/**
* Number of Boomerangs
* https://leetcode.com/problems/number-of-boomerangs/
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let count = 0;
  for (let i = 0; i < points.length; i ++) {
    let map = {};
    for (let j = 0; j < points.length; j ++) {
      let dy = points[i][1] - points[j][1],
          dx = points[i][0] - points[j][0],
          distance2 = Math.pow(dy, 2) + Math.pow(dx, 2);
      if (map[distance2]) {
        map[distance2] ++;
      } else {
        map[distance2] = 1;
      }
    }
    for (let k in map) {
      if (map[k] >= 2) {
        count += map[k] * (map[k] - 1);
      }
    }
  }
  return count;
};

var numberOfBoomerangs2 = function(points) {
  let maps = new Array(points.length);
  for (let i = 0; i < points.length; i ++) {
    maps[i] = {};
  }
  for (let i = 0; i < points.length - 1; i ++) {
    for (let j = i + 1; j < points.length; j ++) {
      let distance = (points[i][1] - points[j][1]) * (points[i][1] - points[j][1]) + (points[i][0] - points[j][0]) * (points[i][0] - points[j][0]);
      if (maps[i][distance]) {
        maps[i][distance] ++;
      } else {
        maps[i][distance] = 1;
      }
      if (maps[j][distance]) {
        maps[j][distance] ++;
      } else {
        maps[j][distance] = 1;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < maps.length; i ++) {
    for (let j in maps[i]) {
      if (maps[i][j] >= 2) {
        count += maps[i][j] * (maps[i][j] - 1);
      }
    }
  }
  return count;
}
