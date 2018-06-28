/**
* 90. Subsets II
* https://leetcode.com/problems/subsets-ii/description/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  backtrack(result, nums, [], 0);
  return result;
};

var backtrack = function(result, nums, arr, start) {
  result.push(arr.slice());
  for (let i = start; i < nums.length; i ++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    arr.push(nums[i]);
    backtrack(result, nums, arr, i + 1);
    arr.pop();
  }
}

// var check = function(result, arr) {
//   let myArr,
//       allMatch,
//       index,
//       i,
//       j;
//   for (i = 0; i < result.length; i ++) {
//     if (result[i].length === arr.length) {
//       allMatch = true;
//       myArr = arr.slice();
//       for (j = 0; j < result[i].length; j ++) {
//         index = myArr.indexOf(result[i][j]);
//         if(index === -1) {
//           allMatch = false;
//           break;
//         } else {
//           myArr.splice(index, 1);
//         }
//       }
//       if (allMatch) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

console.log(subsetsWithDup([1,2,2]));
