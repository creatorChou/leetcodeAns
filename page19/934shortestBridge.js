/**
* 934. Shortest Bridge
* https://leetcode.com/problems/shortest-bridge/
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
  let OUTLEN = A.length;
  let INNERLEN = A[0].length;
  let points = [];
  for (let i = 0; i < OUTLEN; i ++) {
    let found = false;
    for (let j = 0; j < INNERLEN; j ++) {
      if (A[i][j] === 1) {
        paintTwo(A, points, i, j);
        found = true;
        break;
      }
    }
    if (found) break;
  }
  let lv = 3;
  while (points.length > 0) {
    let newPoints = [];
    for (let point of points) {
      let x = point[0], y = point[1];
      if (A[x - 1]) {
        if (A[x - 1][y] === 0) {
          A[x - 1][y] = lv;
          newPoints.push([x - 1, y]);
        } else if (A[x - 1][y] === 1) {
          return A[x][y] - 2;
        }
      }
      if (A[x + 1]) {
        if (A[x + 1][y] === 0) {
          A[x + 1][y] = lv;
          newPoints.push([x + 1, y]);
        } else if (A[x + 1][y] === 1) {
          return A[x][y] - 2;
        }
      }
      if (A[x][y - 1] === 0) {
        A[x][y - 1] = lv;
        newPoints.push([x, y - 1]);
      } else if (A[x][y - 1] === 1) {
        return A[x][y] - 2;
      }
      if (A[x][y + 1] === 0) {
        A[x][y + 1] = lv;
        newPoints.push([x, y + 1]);
      } else if (A[x][y + 1] === 1) {
        return A[x][y] - 2;
      }
    }
    lv ++;
    points = newPoints;
  }
  return 0;
};

function paintTwo(A, points, i, j) {
  if (!A[i] || A[i][j] !== 1) return;
  A[i][j] = 2;
  points.push([i, j]);
  paintTwo(A, points, i + 1, j);
  paintTwo(A, points, i - 1, j);
  paintTwo(A, points, i, j + 1);
  paintTwo(A, points, i, j - 1);
}

let arr = [
  [1,1,0,0,0],
  [1,0,0,0,0],
  [1,0,0,0,0],
  [0,0,0,1,1],
  [0,0,0,1,1]
];

console.log(shortestBridge(arr));

console.log(arr)

// Runtime: 92 ms, faster than 86.27% of JavaScript online submissions for Shortest Bridge.
// Memory Usage: 40.6 MB, less than 100.00% of JavaScript online submissions for Shortest Bridge.
