/**
* 824. Goat Latin
* https://leetcode.com/problems/goat-latin/
*/

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  let s = S.split(" ");
  let a = "a";
  let vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  for (let i = 0; i < s.length; i ++) {
    if (!vowel.has(s[i][0])) {
      s[i] = s[i].slice(1) + s[i][0];
    }
    s[i] += "ma" + a;
    a += "a";
  }
  return s.join(" ");
};
