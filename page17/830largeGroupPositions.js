/**
* 830. Positions of Large Groups
* https://leetcode.com/problems/positions-of-large-groups/
*/

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let result = [];
  let len = 1;
  for (let i = 1; i <= S.length; i ++) {
    if (S[i] === S[i-1]) {
      len ++;
    } else {
      if (len >= 3) {
        result.push([i - len, i - 1]);
      }
      len = 1;
    }
  }
  return result;
};
