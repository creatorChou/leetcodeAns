/**
* 575. Distribute Candies
* https://leetcode.com/problems/distribute-candies/
*/

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let set = new Set();
  for (let candy of candies) {
    set.add(candy);
    if (set.size === candies.length / 2) break;
  }
  return set.size;
};
