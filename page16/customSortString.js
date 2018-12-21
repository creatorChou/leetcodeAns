/**
* 791. Custom Sort String
* https://leetcode.com/problems/custom-sort-string/
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let map = {};
  for (let i = 0; i < S.length; i ++) {
    map[S[i]] = i;
  }
  T = T.split("");
  T.sort((a, b) => {
    if (map[a] != null && map[b] != null) {
      return map[a] - map[b];
    } else if (map[a] != null) {
      return -1;
    } else if (map[b] != null) {
      return 1;
    } else {
      return 0;
    }
  })
  return T.join("");
};

// Runtime: 60 ms, faster than 49.58% of JavaScript online submissions for Custom Sort String.
