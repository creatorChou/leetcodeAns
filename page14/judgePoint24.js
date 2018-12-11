/**
* 679. 24 Game
* https://leetcode.com/problems/24-game/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  let results = dfs(nums, {});
  for (let res of results) {
    if (res === 24) return true;
  }
  return false;
};

function dfs(nums, map) {
  if (nums.length === 1) return nums;
  let key = "";
  for (let num of nums) {
    key += num;
  }
  if (map[key]) {
    return map[key];
  }
  let results = [];
  
}

