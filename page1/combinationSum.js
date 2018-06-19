/**
* Combination Sum
* https://leetcode.com/problems/combination-sum/description/
*/ 

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  let targetArr;
  let selectIndex;
  let sum, i, j;
  for (i = 0; i < candidates.length; i ++) {
    selectIndex = i;
    targetArr = [];
    if (candidates[selectIndex] > target) continue;
    while (selectIndex < candidates.length) {
      sum = 0;
      for (j = 0; j < targetArr.length; j ++) {
        sum += targetArr[j];
      }
      sum += candidates[selectIndex];
      if (sum === target) {
        result.push([...targetArr, candidates[selectIndex]]);
      }
      if (sum >= target) {
        targetArr.pop();
        selectIndex ++
      } else {
        targetArr.push(candidates[selectIndex]);
      }
    }
  }
  return result;
};

console.log(combinationSum([2,3,5], 8))
