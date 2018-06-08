/**
* Longest Common Prefix
* https://leetcode.com/problems/longest-common-prefix/description/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let shortestIndex = 0;
  for (let i = 1; i < strs.length; i ++) {
    if (strs[i].length < strs[shortestIndex].length) {
      shortestIndex = i;
    }
  }

  let pass;
  while (strs[shortestIndex].length > 0) {
    pass = true;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].indexOf(strs[shortestIndex]) !== 0) {
        pass = false;
        break;
      }
    }
    if (pass) {
      return strs[shortestIndex];
    } else {
      strs[shortestIndex] = strs[shortestIndex].slice(0, strs[shortestIndex].length - 1);
    }
  }
  return "";
};

console.log(longestCommonPrefix(["ca","a"]));
