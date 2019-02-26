/**
* 905. Sort Array By Parity
* https://leetcode.com/problems/sort-array-by-parity/
*/

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let odd = [];
  let even = [];
  for (let num of A) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return even.concat(odd);
};

// Runtime: 84 ms, faster than 66.38% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 37.1 MB, less than 54.13% of JavaScript online submissions for Sort Array By Parity.
