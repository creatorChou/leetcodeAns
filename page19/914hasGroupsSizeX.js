/**
* 914. X of a Kind in a Deck of Cards
* https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let map = {};
  for (let num of deck) {
    if (map[num]) map[num] ++;
    else map[num] = 1;
  }
  let level = Number.MAX_VALUE;
  for (let num in map) {
    level = Math.min(level, map[num]);
  }
  while (level >= 2) {
    let pass = true;
    for (let num in map) {
      if (map[num] % level !== 0) {
        pass = false;
        break;
      }
    }
    if (pass) {
      return true;
    } else {
      level --;
    }
  }
  return false;
};

// Runtime: 72 ms, faster than 64.25% of JavaScript online submissions for X of a Kind in a Deck of Cards.
// Memory Usage: 36.9 MB, less than 21.43% of JavaScript online submissions for X of a Kind in a Deck of Cards.


function hasGroupsSizeX(deck) {
  let map = {};
  for (let num of deck) {
    if (map[num]) map[num] ++;
    else map[num] = 1;
  }
  let g = -1;
  for (let num in map) {
    if (g === -1) {
      g = map[num];
    } else {
      g = gcd(map[num], g);
    }
  }
  return g >= 2;
}

function gcd(a, b) {
  let temp;
  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }
  while (b !== 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

// Runtime: 64 ms, faster than 85.47% of JavaScript online submissions for X of a Kind in a Deck of Cards.
// Memory Usage: 36.5 MB, less than 32.14% of JavaScript online submissions for X of a Kind in a Deck of Cards.
