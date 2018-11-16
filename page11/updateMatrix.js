/**
* 542. 01 Matrix
* https://leetcode.com/problems/01-matrix/
*/

// BFS
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  if (!matrix || matrix.length === 0) return [];
  let h = matrix.length;
  let w = matrix[0].length
  let result = [];
  for (let i = 0; i < h; i ++) {
    result[i] = new Array(w).fill(Number.MAX_VALUE);
  }
  let set = new Set();
  for (let i = 0; i < h; i ++) {
    for (let j = 0; j < w; j ++) {
      if (matrix[i][j] === 0) {
        set.add(`${i}-${j}`);
        result[i][j] = 0;
      }
    }
  }
  let level = 1;
  while (set.size > 0) {
    let newSet = new Set();
    set.forEach((val) => {
      let position = val.split("-");
      let i = parseInt(position[0]);
      let j = parseInt(position[1]);
      if (result[i-1] != null && result[i-1][j] > level) {
        newSet.add(`${i-1}-${j}`);
        result[i-1][j] = level;
      }
      if (result[i+1] != null && result[i+1][j] > level) {
        newSet.add(`${i+1}-${j}`);
        result[i+1][j] = level;
      }
      if (result[i][j-1] != null && result[i][j-1] > level) {
        newSet.add(`${i}-${j-1}`);
        result[i][j-1] = level;
      }
      if (result[i][j+1] != null && result[i][j+1] > level) {
        newSet.add(`${i}-${j+1}`);
        result[i][j+1] = level;
      }
    });
    set = newSet;
    level ++;
  }
  return result;
};


// DFS
function updateMatrix2(matrix) {
  if (!matrix || matrix.length === 0) return [];
  let h = matrix.length;
  let w = matrix[0].length
  let result = [];
  for (let i = 0; i < h; i ++) {
    result[i] = new Array(w).fill(Number.MAX_VALUE);
  }
  for (let i = 0; i < h; i ++) {
    for (let j = 0; j < w; j ++) {
      if (matrix[i][j] === 0) {
        dfs(matrix, result, i, j, 0);
      }
    }
  }
  return result;
}

function dfs(matrix, result, i, j, val) {
  result[i][j] = val;
  let nextVal = val + 1;
  if (result[i-1] && result[i-1][j] > nextVal)
    dfs(matrix, result, i - 1, j, nextVal);
  if (result[i+1] && result[i+1][j] > nextVal)
    dfs(matrix, result, i + 1, j, nextVal);
  if (result[i][j+1] != null && result[i][j+1] > nextVal)
    dfs(matrix, result, i, j + 1, nextVal);
  if (result[i][j-1] != null && result[i][j-1] > nextVal)
    dfs(matrix, result, i, j - 1, nextVal);
}
// time limit excceeded
[
  [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
]
