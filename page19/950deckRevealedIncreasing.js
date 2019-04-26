/**
* 950. Reveal Cards In Increasing Order
* https://leetcode.com/problems/reveal-cards-in-increasing-order/
*/


/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  let len = deck.length;
  deck.sort((a, b) => a - b);
  let res = [];
  for (let i = len - 1; i >= 0; i--) {
    let last = res.length - 1;
    let newRes = res.slice(0, last);
    if (res[last] != null) {
      newRes.unshift(res[last]);
    }
    newRes.unshift(deck[i]);
    res = newRes;
  }
  return res;
};

// Runtime: 100 ms, faster than 8.22% of JavaScript online submissions for Reveal Cards In Increasing Order.
// Memory Usage: 42 MB, less than 5.26% of JavaScript online submissions for Reveal Cards In Increasing Order.

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  let len = deck.length;
  deck.sort((a, b) => a - b);
  let res = [deck[len - 1]];
  for (let i = len - 2; i >= 0; i--) {
    res.unshift(res.pop());
    res.unshift(deck[i]);
  }
  return res;
};

// Runtime: 72 ms, faster than 96.09% of JavaScript online submissions for Reveal Cards In Increasing Order.
// Memory Usage: 35.8 MB, less than 36.84% of JavaScript online submissions for Reveal Cards In Increasing Order.
