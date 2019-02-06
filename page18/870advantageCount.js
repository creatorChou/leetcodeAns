/**
* 870. Advantage Shuffle
* https://leetcode.com/problems/advantage-shuffle/
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
  let len = A.length;
  let A1 = A.slice().sort((a, b) => a - b);
  let B1 = B.slice().sort((a, b) => a - b);
  let map = {};
  let rest = [];
  let i = 0;
  for (let num of A1) {
    if (num > B1[i]) {
      if (!map[B1[i]]) {
        map[B1[i]] = [];
      }
      map[B1[i]].push(num);
      i ++;
    } else {
      rest.push(num);
    }
  }
  for (; i < len; i ++) {
    if (!map[B1[i]]) {
      map[B1[i]] = [];
    }
    map[B1[i]].push(rest.pop());
  }
  let result = [];
  for (let num of B) {
    result.push(map[num].pop());
  }
  return result;
};

// Runtime: 252 ms, faster than 41.86% of JavaScript online submissions for Advantage Shuffle.
// Memory Usage: 35 MB, less than 0.00% of JavaScript online submissions for Advantage Shuffle.
