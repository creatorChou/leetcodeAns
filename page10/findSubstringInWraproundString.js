/**
* Unique Substrings in Wraparound String
* https://leetcode.com/problems/unique-substrings-in-wraparound-string/
*/

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  let map = {};
  map[p[0]] = 1;
  let headLetter = null;
  let len = 1;
  for (let i = 1; i < p.length; i ++) {
    if (!map[p[i]]) {
      map[p[i]] = 1;
    }
    if ((p.codePointAt(i) - p.codePointAt(i - 1) === 1) || (p[i] === "a" && p[i-1] === "z")) {
      if (headLetter === null) {
        headLetter = p[i-1];
      }
      len ++;
      if (len > map[headLetter]) {
        map[headLetter] = len;
      }
    } else {
      headLetter = null;
      len = 1;
    }
  }

  let sum = 0;
  for (let i in map) {
    sum += (1 + map[i]) * map[i] / 2;
  }
  return sum;
};
