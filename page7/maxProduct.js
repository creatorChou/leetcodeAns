/**
* 318. Maximum Product of Word Lengths
* https://leetcode.com/problems/maximum-product-of-word-lengths/description/
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let i, j,
      len = words.length,
      bits = new Array(len);
  bits.fill(0);
  for (i = 0; i < len; i ++) {
    for (j = 0; j < words[i].length; j ++) {
      bits[i] |= 1 << (words[i][j].charCodeAt() - 97);
    }
  }
  console.log(bits)
  let max = 0;
  for (i = 0; i < len - 1; i ++) {
    for (j = i + 1; j < len; j ++) {
      if ((bits[i] & bits[j]) === 0) {
        max = Math.max(words[i].length * words[j].length, max);
      }
    }
  }
  return max;
};


console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));
