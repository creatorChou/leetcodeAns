/**
* 779. K-th Symbol in Grammar
* https://leetcode.com/problems/k-th-symbol-in-grammar/
*/

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
  if (K === 1) return 0;
  if (K === 2) return 1;
  K = K - 1;
  let isBegin = K % 2 === 0;
  let prev = kthGrammar(N, Math.floor(K / 2) + 1);
  if (prev === 0) {
    return isBegin ? 0 : 1;
  } else {
    return isBegin ? 1 : 0;
  }
};

// 0
// 01
// 0110
// 01101001
// 0110100110010110
// 01101001100101101001011001101001

// Runtime: 52 ms, faster than 38.46% of JavaScript online submissions for K-th Symbol in Grammar.
