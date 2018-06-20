/**
* Spiral Matrix
* https://leetcode.com/problems/spiral-matrix/description/
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let result = [];
  let i;
  let lastArr;
  while (matrix.length > 0) {
    result = result.concat(matrix.shift());
    for (i = 0; i < matrix.length - 1; i ++) {
      result.push(matrix[i].pop());
      if (matrix[i].length === 0) {
        matrix.splice(i, 1);
        i --;
      }
    }
    lastArr = matrix.pop();
    if (lastArr) {
      result = result.concat(lastArr.reverse());
    } else {
      break;
    }
    for (i = matrix.length - 1; i >= 0; i--) {
      result.push(matrix[i].shift());
      if (matrix[i].length === 0) {
        matrix.splice(i, 1);
        if (matrix.length === 0) {
          break;
        }
      }
    }
  }
  return result;
};

let arr = [[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]];

console.log(spiralOrder(arr));
