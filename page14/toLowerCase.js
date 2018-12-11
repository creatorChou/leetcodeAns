/**
* 709. To Lower Case
* https://leetcode.com/problems/to-lower-case/
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = "";
  for (let c of str) {
    let codePoint = c.codePointAt();
    if (65 <= codePoint && codePoint <= 90) {
      codePoint += 32;
    }
    res += String.fromCharCode(codePoint);
  }
  return res;
};

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for To Lower Case.
