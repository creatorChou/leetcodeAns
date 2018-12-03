/**
* 646. Maximum Length of Pair Chain
* https://leetcode.com/problems/maximum-length-of-pair-chain/
*/

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  let map = {};
  let countMap = {};
  let max = -Number.MAX_VALUE;
  for (let pair of pairs) {
    max = Math.max(pair[0], max);
    if (map[pair[0]] != null) {
      map[pair[0]] = Math.min(map[pair[0]], pair[1]);
    } else {
      map[pair[0]] = pair[1];
    }
  }
  console.log(map);
  let count = 0;
  for (let s in map) {
    count = Math.max(count, getCount(map, s, countMap, max));
  }
  console.log(countMap)
  return count;
};

function getCount(map, s, countMap, max) {
  if (countMap[s]) return countMap[s];
  let e = map[s] + 1;
  let count = 0;
  for (let i = e; i <= max; i ++) {
    if (map[i] != null) {
      count = Math.max(count, getCount(map, i, countMap, max));
    }
  }
  countMap[s] = count + 1;
  return countMap[s];
}

console.log(findLongestChain([[9,10],[-1,0],[-1,4],[4,6],[0,6],[-9,4]]))
// Runtime: 704 ms, faster than 0.00% of JavaScript online submissions for Maximum Length of Pair Chain.
