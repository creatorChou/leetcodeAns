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

var judgePoint24 = function(nums) {
  for(let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      let a = nums[i];
      let b = nums[j];
      let c = null, d = null;
      for (let k = 0; k < 4; k ++) {
        if (k === i || k === j) continue;
        if (c === null) c = nums[k];
        else d = nums[k];
      }
      let arr1, arr2;
      arr1 = calcTwoNums(a, b);
      arr2 = calcTwoNums(c, d);
    }
  }
};

function calcTwoNums(a, b) {
  let results = [a+b, a-b, b-a, a*b];
  if (a !== 0) results.push(b / a);
  if (b !== 0) results.push(a / b);
  return results;
}
