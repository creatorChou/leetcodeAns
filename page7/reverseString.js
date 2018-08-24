/**
* 344. Reverse String
* https://leetcode.com/problems/reverse-string/description/
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let before = "",
      after = "",
      l = 0,
      r = s.length - 1;
  while (l < r) {
    before += s[r];
    after = s[l] + after;
    l ++;
    r --;
  }
  if (s.length % 2 === 0) {
    return before + after;
  } else {
    return before + s[l] + after;
  }
};

console.log(reverseString("oleh"));
