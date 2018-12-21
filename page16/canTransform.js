/**
* 777. Swap Adjacent in LR String
* https://leetcode.com/problems/swap-adjacent-in-lr-string/
*/

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
  let marks = [];
  for (let i = end.length - 1; i >= 0; i --) {
    if (end[i] === "R") {
      marks.push(i);
    }
    if (start[i] === "L") {
      if (marks.length !== 0) return false;
    } else if (start[i] === "R") {
      if (marks.length === 0) return false;
      marks.shift();
    }
  }
  if (marks.length > 0) return false;
  marks = [];
  for (let i = end.length - 1; i >= 0; i --) {
    if (start[i] === "L") {
      marks.push(i);
    }
    if (end[i] === "R") {
      if (marks.length !== 0) return false;
    } else if (end[i] === "L") {
      if (marks.length === 0) return false;
      marks.shift();
    }
  }
  if (marks.length > 0) return false;
  return true;
};

// Runtime: 60 ms, faster than 97.44% of JavaScript online submissions for Swap Adjacent in LR String.
