/**
* 886. Possible Bipartition
* https://leetcode.com/problems/possible-bipartition/
*/

// Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

// Each person may dislike some other people, and they should not go into the same group. 

// Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

// Return true if and only if it is possible to split everyone into two groups in this way.

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  let members = new Array(N + 1);
  for (let i = 1; i <= N; i ++) {
    members[i] = [];
  }
  for (let pair of dislikes) {
    members[pair[0]].push(pair[1]);
    members[pair[1]].push(pair[0]);
  }
  let colorMap = {};
  for (let i = 1; i <= N; i ++) {
    if (colorMap[i] != null) continue;
    if (!arrange(members, i, 1, colorMap)) {
      return false;
    }
  }
  return true;
};

function arrange(members, i, color, colorMap) {
  if (colorMap[i] != null) return colorMap[i] === color;
  colorMap[i] = color;
  for (let member of members[i]) {
    if (!arrange(members, member, -color, colorMap)) return false;
  }
  return true;
}

// Runtime: 132 ms, faster than 70.97% of JavaScript online submissions for Possible Bipartition.
// Memory Usage: 50.1 MB, less than 100.00% of JavaScript online submissions for Possible Bipartition.
