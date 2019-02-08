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
  let lo = 1,
      hi = 1;

  for (let pile of piles) {
    hi = Math.max(hi, pile);
  }

  while (lo < hi) {
    let K = Math.floor((lo + hi) / 2);
    if (canFinish(piles, H, K)) {
      hi = K;
    } else {
      lo = K + 1;
    }
  }
  return hi;
};

function canFinish (piles, H, K) {
  let sumHours = 0;
  for (let pile of piles) {
    sumHours += Math.ceil(pile / K);
  }
  return sumHours <= H;
}

// Runtime: 108 ms, faster than 55.56% of JavaScript online submissions for Koko Eating Bananas.
// Memory Usage: 20.9 MB, less than 34.78% of JavaScript online submissions for Koko Eating Bananas.
