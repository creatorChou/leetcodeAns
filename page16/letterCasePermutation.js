/**
* 784. Letter Case Permutation
* https://leetcode.com/problems/letter-case-permutation/
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let result = [];
  helper(result, S.split(""), 0);
  return result;
};

function helper (result, S, i) {
  for (; i < S.length; i ++) {
    if (/[a-z]/.test(S[i])) {
      let temp = S[i];
      S[i] = temp.toUpperCase();
      helper(result, S, i + 1);
      S[i] = temp;
    } else if (/[A-Z]/.test(S[i])) {
      let temp = S[i];
      S[i] = temp.toLowerCase();
      helper(result, S, i + 1);
      S[i] = temp;
    }
  }
  result.push(S.join(""));
}
