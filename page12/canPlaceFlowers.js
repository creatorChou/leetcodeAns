/**
* 605. Can Place Flowers
* https://leetcode.com/problems/can-place-flowers/
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) return true;
  if (n > flowerbed.length / 2 + 1) return false;
  for (let i = 0; i < flowerbed.length; i ++) {
    if (flowerbed[i] === 1) continue;
    let prev = flowerbed[i - 1];
    let next = flowerbed[i + 1];
    if ((prev == null || prev === 0) && (next == null || next === 0)) {
      flowerbed[i] = 1;
      n --;
    }
    if (n === 0) break;
  }
  return n === 0;
};
