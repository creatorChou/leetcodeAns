/**
* Increasing Subsequences
* https://leetcode.com/problems/increasing-subsequences/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i ++) {
    fillArr(result, nums, [nums[i]], i + 1);
  }
  return result;
};

function fillArr (result, nums, curr, start) {
  for (let i = start; i < nums.length; i ++) {
    if (nums[i] >= curr[curr.length - 1]) {
      curr.push(nums[i]);
      if (checkArr(result, curr)) {
        result.push(curr.slice());
      }
      fillArr(result, nums, curr, i + 1);
      curr.pop();
    }
  }
}

function checkArr (result, arr) {
  for (let i = 0; i < result.length; i ++) {
    if (result[i].length === arr.length) {
      let allMatch = true;
      for (let j = 0; j < result[i].length; j ++) {
        if (result[i][j] !== arr[j]) {
          allMatch = false;
          break;
        }
      }
      if (allMatch) return false;
    }
  }
  return true;
}

// console.log(findSubsequences([4,6,2,3,-2,11,7,7]));

// 2660 ms

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences2 = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i ++) {
    DFS(result, nums, [nums[i]], i + 1);
  }
  return result;
};

function DFS(result, nums, curr, start) {
  let duplicated = [];
  for (let i = start; i < nums.length; i ++) {
    if (duplicated.indexOf(nums[i]) !== -1) continue;
    if (nums[i] >= curr[curr.length - 1]) {
      duplicated.push(nums[i]);
      curr.push(nums[i]);
      result.push(curr.slice());
      DFS(result, nums, curr, i + 1);
      curr.pop();
    }
  }
}

console.log(findSubsequences2([4,6,2,3,-2,11,7,7]));
