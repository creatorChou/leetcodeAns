/**
* 763. Partition Labels
* https://leetcode.com/problems/partition-labels/
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let map = {};
  for (let i = 0; i < S.length; i ++) {
    if (map[S[i]]) {
      map[S[i]][1] = i;
    } else {
      map[S[i]] = [i, i];
    }
  }
  let interval = map[S[0]];
  let result = [];
  while (true) {
    let i = interval[0];
    let end = interval[1];
    for (; i <= end; i ++) {
      end = Math.max(map[S[i]][1], end); 
    }
    result.push(end - interval[0] + 1);
    if (i < S.length) {
      interval = map[S[i]];
    } else {
      break;
    }
  }
  return result;
};

// Runtime: 64 ms, faster than 71.31% of JavaScript online submissions for Partition Labels.
