/**
* Implement Rand10() Using Rand7()
* https://leetcode.com/problems/implement-rand10-using-rand7/
*/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */

let matrix = [
  [1,2,3,4,5,6,7],
  [8,9,10,1,2,3,4],
  [5,6,7,8,9,10,1],
  [2,3,4,5,6,7,8],
  [9,10,1,2,3,4,5],
  [6,7,8,9,10,null,null],
  [null,null,null,null,null,null,null],
]

var rand10 = function() {
  let i = rand7() - 1;
  let j = rand7() - 1;
  if (matrix[i][j] !== null) {
    return matrix[i][j];
  } else {
    return rand10();
  }
};

// Runtime: 132 ms, faster than 100.00% of JavaScript online submissions for Implement Rand10() Using Rand7().
