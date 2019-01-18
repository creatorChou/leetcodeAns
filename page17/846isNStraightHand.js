/**
* 846. Hand of Straights
* https://leetcode.com/problems/hand-of-straights/
*/

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  if (hand.length % W !== 0) return false;
  if (W === 1) return true;
  hand.sort((a, b) => a - b);
  let prev = null
  let count = 0;
  while (hand.length > 0) {
    if (count === 0) {
      prev = hand.shift();
      count = 1;
    } else {
      let found = false;
      for (let i = 0; i < hand.length; i ++) {
        if (hand[i] !== prev) {
          if (hand[i] === prev + 1) {
            found = true;
            hand.splice(i, 1);
            prev ++;
            count ++;
            break;
          }
        }
      }
      if (!found) return false;
      if (count === W) {
        count = 0;
        prev = null;
      }
    }
  }
  return true;
};

console.log(isNStraightHand([3,1,2], 3));

// Runtime: 152 ms, faster than 30.00% of JavaScript online submissions for Hand of Straights.
