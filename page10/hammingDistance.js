/**
* Hamming Distance
* https://leetcode.com/problems/hamming-distance/
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let distance = 0;
  let val = x ^ y;
  for (let i = 0; i < 31; i ++) {
    if (val >> i & 1 === 1) {
      distance ++;
    }
  }
  return distance;
};

function hammingDistance2 (x, y) {
  let distance = 0;
  let val = x ^ y;
  while (val > 0) {
    val &= val - 1;
    distance ++;
  }
  return distance;
}

// 10011000
// 10010111
// -------- &
// 10010000
