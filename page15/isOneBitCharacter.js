/**
* 717. 1-bit and 2-bit Characters
* https://leetcode.com/problems/1-bit-and-2-bit-characters/
*/

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  if (bits.length === 1) return true;
  if (bits.pop() === bits.pop()) return true;
  if (bits[bits.length - 1] === 0) return false;
  let singleOne = false;
  for (let i = 0; i < bits.length; i ++) {
    if (!singleOne && bits[i] === 1) {
      singleOne = true;
    } else {
      singleOne = false;
    }
  }
  return singleOne;
};
