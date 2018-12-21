/**
* 799. Champagne Tower
* https://leetcode.com/problems/champagne-tower/
*/

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  let rests = [poured];
  for (let i = 0; i < query_row; i ++) {
    let temp = [];
    for (let j = 0; j < i + 1; j ++) {
      let prev = rests[j - 1] || 0;
      let back = rests[j] || 0;
      let pullIn = Math.max((prev - 1) / 2, 0) + Math.max((back - 1) / 2, 0);
      temp.push(pullIn);
    }
    rests = temp;
  }
  return rests[query_glass] > 1 ? 1 : rests[query_glass];
};

// Runtime: 72 ms, faster than 76.47% of JavaScript online submissions for Champagne Tower.
