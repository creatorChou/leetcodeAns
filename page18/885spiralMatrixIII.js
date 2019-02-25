/**
* 885. Spiral Matrix III
* https://leetcode.com/problems/spiral-matrix-iii/
*/

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  let len = -1;
  let result = [[r0, c0]];
  let direction = "d";
  while (result.length < R * C) {
    switch (direction) {
      case "w":
        r0 --;
        for (let tmp = r0; r0 >= tmp - len; r0--) {
          let p = [r0, c0];
          if (isInGrid(R, C, p)) result.push(p);
        }
        r0 ++;
        direction = "d";
        break;
      case "s":
        r0 ++;
        for (let tmp = r0; r0 <= tmp + len; r0++) {
          let p = [r0, c0];
          if (isInGrid(R, C, p)) result.push(p);
        }
        r0 --;
        direction = "a";
        break;
      case "a":
        len ++;
        c0 --;
        for (let tmp = c0; c0 >= tmp - len; c0--) {
          let p = [r0, c0];
          if (isInGrid(R, C, p)) result.push(p);
        }
        c0 ++;
        direction = "w";
        break;
      case "d":
        len ++;
        c0 ++;
        for (let tmp = c0; c0 <= tmp + len; c0++) {
          let p = [r0, c0];
          if (isInGrid(R, C, p)) result.push(p);
        }
        c0 --;
        direction = "s";
        break;
    }
  }
  return result;
};

function isInGrid(R, C, point) {
  return point[0] >= 0 && point[0] < R && point[1] >= 0 && point[1] < C;
}

console.log(spiralMatrixIII(5, 6, 1, 4));

// 148 ms
