/**
* 60. Permutation Sequence
* https://leetcode.com/problems/permutation-sequence/description/
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let result = [];
  let chars = [];
  backtrack(result, chars, n, k);
  return result[k-1];
};

var backtrack = function(result, chars, n, k) {
  if (chars.length === n) {
    let str = chars.join("");
    result.push(str);
    if (result.length === k) {
      return true;
    }
    return false;
  }
  for (let i = 1; i <= n; i ++) {
    if (chars.indexOf(i) === -1) {
      chars.push(i);
      if(backtrack(result, chars, n, k)) {
        return true;
      }
      chars.pop();
    }
  }
}

console.log(getPermutation(4, 100));
