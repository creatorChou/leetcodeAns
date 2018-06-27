/**
* 85. Maximal Rectangle
* https://leetcode.com/problems/maximal-rectangle/description/
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let i, j, k;
  let len = matrix.length,
      innerLen = matrix[0].length,
      board = new Array(len);

  for (i = 0; i < len; i ++) {
    board[i] = new Array(innerLen);
  }
  for (i = 0; i < len; i ++) {
    for (j = 0; j < innerLen; j ++) {
      if (matrix[i][j] === "0") {
        board[i][j] = 0;
      } else if (matrix[i][j] === "1") {
        if (board[i][j - 1] && board[i][j - 1] !== 0) {
          board[i][j] = board[i][j - 1] + 1;
        } else {
          board[i][j] = 1;
        }
      }
    }
  }
  j = 0;
  let arr;
  let maxArea = 0;
  while (j < innerLen) {
    arr = [];
    for (i = 0; i < len; i ++) {
      arr.push(board[i][j])
    }
    maxArea = Math.max(maxArea, largestRectangleArea(arr));
    j ++;
  }
  return maxArea;
};

var largestRectangleArea = function(heights) {
  return heights.length === 0 ? 0 : (function largest(l, r) {
    let minIndex = l;
    for (let i = l + 1; i <= r; i ++) {
      if (heights[i] < heights[minIndex]) {
        minIndex = i;
      }
    }
    let area = heights[minIndex] * (r - l + 1);
    let leftArea, rightArea;
    if (minIndex - 1 < l) {
      leftArea= 0;
    } else {
      leftArea = largest(l, minIndex - 1);
    }
    if (minIndex + 1 > r) {
      rightArea = 0;
    } else {
      rightArea = largest(minIndex + 1, r);
    }
    return Math.max(area, leftArea, rightArea);
  })(0, heights.length - 1);
};

let matrix = [
  ["1","0","1","1","1"],
  ["0","1","0","1","0"],
  ["1","1","0","1","1"],
  ["1","1","0","1","1"],
  ["0","1","1","1","1"]
]

console.log(maximalRectangle(matrix));
