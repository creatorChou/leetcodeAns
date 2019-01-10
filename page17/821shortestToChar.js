/**
* 821. Shortest Distance to a Character
* https://leetcode.com/problems/shortest-distance-to-a-character/
*/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let pos = null;
  let distance = 1;
  let res = new Array(S.length);
  for (let i = 0; i < S.length; i ++) {
    if (S[i] === C) {
      let end = pos === null ? 0 : Math.floor((pos + i + 1) / 2);
      for (let j = i, dis = 0; j >= end; j--, dis ++) {
        res[j] = dis;
      }
      distance = 1;
      pos = i;
    } else {
      res[i] = distance;
      distance ++;
    }
  }
  return res;
};

// Runtime: 64 ms
