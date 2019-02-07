/**
* 875. Koko Eating Bananas
* https://leetcode.com/problems/koko-eating-bananas/
*/

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let sum = piles.reduce((accu, curr) => accu + curr);
  let h = 0;
  let c = Math.ceil(sum / H);
  for (let i of piles) {
    h += Math.ceil(i / c);
  }
  return h < H ? c : c + 1;
};
