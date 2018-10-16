/**
* 417. Pacific Atlantic Water Flow
* https://leetcode.com/problems/pacific-atlantic-water-flow/description/
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (!matrix || !matrix.length) return [];
  let dpPacific = [];
  let dpAtlantic = [];
  let len = matrix[0].length;
  let result = [];
  for (let i = 0; i < matrix.length; i ++) {
    dpPacific[i] = new Array(len);
    dpAtlantic[i] = new Array(len);
  }
  for (let i = 0; i < matrix.length; i ++) {
    dpPacific[i][0] = true;
    dpAtlantic[i][len - 1] = true;
  }
  for (let j = 0; j < len; j ++) {
    dpPacific[0][j] = true;
    dpAtlantic[matrix.length - 1][j] = true;
  }
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < len; j ++) {
    }
  }
  console.log(dpPacific)
  console.log(dpAtlantic)
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < len; j ++) {
      if (dpPacific[i][j] && dpAtlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

function flowToPacific (matrix, dpPacific, i, j) {

}


let map = [
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]

// let map = [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ]


console.log(pacificAtlantic(map));
