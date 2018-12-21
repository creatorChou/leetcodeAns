/**
* 767. Reorganize String
* https://leetcode.com/problems/reorganize-string/
*/

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  let map = {};
  for (let c of S) {
    if (map[c]) {
      map[c] ++;
    } else {
      map[c] = 1;
    }
  }
  
};
