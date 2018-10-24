/**
* Minimum Genetic Mutation
* https://leetcode.com/problems/minimum-genetic-mutation/
*/

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  if (bank.indexOf(end) === -1) return -1;
  let tracked = new Array(bank.length).fill(false);
  return findNext(bank, tracked, 0, [start], end);
};

function findNext(bank, tracked, step, curr, target) {
  let next = [];
  for (let i = 0; i < curr.length; i ++) {
    if (curr[i] === target) return step;
    for (let j = 0; j < bank.length; j ++) {
      if (curr[i] === bank[j]) tracked[j] = true;
      if (tracked[j] || curr[i].length !== bank[j].length) continue;
      let diff = 0;
      for (let k = 0; k < curr[i].length; k ++) {
        if (curr[i][k] !== bank[j][k]) {
          diff ++;
        }
        if (diff > 1) break;
      }
      if (diff === 1 && next.indexOf(bank[j]) === -1) {
        next.push(bank[j]);
      }
    }
  }
  if (next.length === 0) {
    return -1;
  } else {
    return findNext(bank, tracked, step + 1, next, target);
  }
}


minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]);

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Minimum Genetic Mutation.
