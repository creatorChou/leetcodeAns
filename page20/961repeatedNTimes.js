/**
* 961. N-Repeated Element in Size 2N Array
* https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let set = new Set();
  for (let num of A) {
    if (set.has(num)) return num;
    set.add(num);
  }
};

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 36.6 MB, less than 50.54% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
