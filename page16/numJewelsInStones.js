/**
* 771. Jewels and Stones
* https://leetcode.com/problems/jewels-and-stones/
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let jewels = new Set(J);
  let count = 0;
  for (let stone of S) {
    if (jewels.has(stone)) count ++;
  }
  return count;
};
