/**
* 744. Find Smallest Letter Greater Than Target
* https://leetcode.com/problems/find-smallest-letter-greater-than-target/
*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let res = letters[0];
  let l = 0, r = letters.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (letters[mid] > target) {
      res = letters[mid];
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
};
