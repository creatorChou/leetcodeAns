/**
* 541. Reverse String II
* https://leetcode.com/problems/reverse-string-ii/
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    let start = i;
    let end = i + k - 1;
    if (end > s.length - 1) end = s.length - 1;
    while (start < end) {
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start ++;
      end --;
    }
  }
  return s.join("");
};

// Runtime: 60 ms, faster than 94.00% of JavaScript online submissions for Reverse String II.
