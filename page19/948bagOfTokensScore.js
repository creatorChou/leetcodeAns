/**
* 948. Bag of Tokens
* https://leetcode.com/problems/bag-of-tokens/
*/

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
  tokens.sort((a, b) => a - b);
  let point = 0;
  let max = 0;
  while (tokens.length > 0) {
    if (P < tokens[0]) {
      if (point > 0) {
        P += tokens.pop();
        point --;
      } else {
        break;
      }
    } else {
      P -= tokens.shift();
      point ++;
    }
    max = Math.max(max, point);
  }
  return max;
};

// Runtime: 72 ms, faster than 92.16% of JavaScript online submissions for Bag of Tokens.
// Memory Usage: 35.5 MB, less than 75.00% of JavaScript online submissions for Bag of Tokens.

