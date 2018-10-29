/**
* Implement Rand10() Using Rand7()
* https://leetcode.com/problems/implement-rand10-using-rand7/
*/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let l = 1,
      r = 10;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    let rand = rand7();
    if (rand < 4) {
      l = mid;
    } else if (rand > 4) {
      r = mid;
    }
  }
  return l;
};
