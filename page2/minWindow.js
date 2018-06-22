/**
* 76. Minimum Window Substring
* https://leetcode.com/problems/minimum-window-substring/description/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let head = -1,
      tchars = t.split(""),
      resultIndex = [0, s.length - 1],
      hasResult = false,
      charIndex, i;

  for (i = 0; i < s.length; i ++) {
    charIndex = tchars.indexOf(s[i]);
    if (charIndex !== -1) {
      if (head === -1) {
        head = i;
      }
      tchars.splice(charIndex, 1);
      if (tchars.length === 0) {
        hasResult = true;
        tchars = t.split("");
        if ((resultIndex[1] - resultIndex[0]) > (i - head)) {
          resultIndex[0] = head;
          resultIndex[1] = i;
        }
        i = head;
        head = -1;
      }
    }
  }
  if (hasResult) {
    return s.slice(resultIndex[0], resultIndex[1] + 1);
  } else {
    return "";
  }
};

console.log(minWindow("ADOBECODEBANC", "ABC"));

// time limit exceeded
