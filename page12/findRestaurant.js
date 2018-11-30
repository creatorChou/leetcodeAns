/**
* 599. Minimum Index Sum of Two Lists
* https://leetcode.com/problems/minimum-index-sum-of-two-lists/
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < list1.length; i ++) {
    map1[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i ++) {
    map2[list2[i]] = i;
  }
  let result = [];
  let level = Number.MAX_VALUE;
  for (let n in map1) {
    if (map2[n] != null) {
      let newLevel = map1[n] + map2[n];
      if (newLevel < level) {
        level = newLevel;
        result = [n];
      } else if (newLevel === level) {
        result.push(n);
      }
    }
  }
  return result;
};
