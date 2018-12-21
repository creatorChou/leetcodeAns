/**
* 796. Rotate String
* https://leetcode.com/problems/rotate-string/
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) return false;
  for (let i = 1; i < B.length; i ++) {
    if(B.slice(i) + B.slice(0, i) === A) return true;
  }
  return false;
};

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Rotate String.
