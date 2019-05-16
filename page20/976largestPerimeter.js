/**
* 976. Largest Perimeter Triangle
* https://leetcode.com/problems/largest-perimeter-triangle/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => b - a);
  for (let i = 2; i < A.length; i ++) {
    let a = A[i-2], b = A[i-1], c = A[i];
    if (a + b > c && b + c > a && a + c > b) return a + b + c;
  }
  return 0;
};

// Runtime: 92 ms, faster than 99.19% of JavaScript online submissions for Largest Perimeter Triangle.
// Memory Usage: 38.2 MB, less than 66.19% of JavaScript online submissions for Largest Perimeter Triangle.
