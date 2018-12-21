/**
* 792. Number of Matching Subsequences
* https://leetcode.com/problems/number-of-matching-subsequences/
*/

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  let map = {};
  let sum = 0;
  for (let i = 0; i < S.length; i ++) {
    if (map[S[i]]) {
      map[S[i]].push(i);
    } else {
      map[S[i]] = [i];
    }
  }
  for (let word of words) {
    let prev = -1;
    let isSubstring = true;
    for (let c of word) {
      let arr = map[c];
      if (!arr || arr[arr.length - 1] <= prev) {
        isSubstring = false;
        break;
      }
      for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > prev) {
          prev = arr[i];
          break;
        }
      }
    }
    if (isSubstring) {
      sum ++;
    }
  }
  return sum;
};

// Runtime: 188 ms, faster than 87.50% of JavaScript online submissions for Number of Matching Subsequences.
