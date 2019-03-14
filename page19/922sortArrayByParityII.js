/**
* 922. Sort Array By Parity II
* https://leetcode.com/problems/sort-array-by-parity-ii/
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let arr = [];
  let evenIdx = 0;
  let oddIdx = 1;
  for (let num of A) {
    if (num % 2 === 0) {
      arr[evenIdx] = num;
      evenIdx += 2;
    } else {
      arr[oddIdx] = num;
      oddIdx += 2;
    }
  }
  return arr;
};

// Runtime: 104 ms, faster than 91.94% of JavaScript online submissions for Sort Array By Parity II.
// Memory Usage: 40.1 MB, less than 65.52% of JavaScript online submissions for Sort Array By Parity II.
