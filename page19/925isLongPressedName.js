/**
* 925. Long Pressed Name
* https://leetcode.com/problems/long-pressed-name/
*/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (typed.length < name.length) return false;
  let j = 0, prev = "";
  for (let i = 0; i < typed.length; i ++) {
    if (typed[i] === name[j]) {
      prev = name[j];
      j ++;
    } else if (typed[i] !== prev) {
      return false;
    }
  }
  return j === name.length;
};

// Runtime: 56 ms, faster than 84.52% of JavaScript online submissions for Long Pressed Name.
// Memory Usage: 33.8 MB, less than 50.00% of JavaScript online submissions for Long Pressed Name.
