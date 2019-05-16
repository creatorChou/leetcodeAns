/**
* 1002. Find Common Characters
* https://leetcode.com/problems/find-common-characters/
*/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let map = {};
  for (let c of A[0]) {
    if (map[c]) {
      map[c] ++;
    } else {
      map[c] = 1;
    }
  }
  for (let i = 1; i < A.length; i++) {
    let w = A[i];
    let newMap = {};
    for (let c of w) {
      if (newMap[c]) {
        newMap[c] ++;
      } else {
        newMap[c] = 1;
      }
    }
    for (let c in map) {
      if (newMap[c]) {
        if (newMap[c] < map[c]) {
          map[c] = newMap[c];
        }
      } else {
        delete map[c];
      }
    }
  }
  let ans = [];
  for (let c in map) {
    for (let i = 0; i < map[c]; i ++) {
      ans.push(c);
    }
  }
  return ans;
};

// Runtime: 116 ms, faster than 20.46% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 43 MB, less than 100.00% of JavaScript online submissions for Find Common Characters.
