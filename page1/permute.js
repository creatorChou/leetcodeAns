/**
* Permutations
* https://leetcode.com/problems/permutations/description/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let list = [];
  backtrack(list, [], nums);
  return list;
};

var backtrack = function(list, tempList, nums) {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
  } else {
    for (let i = 0; i < nums.length; i ++) {
      if (tempList.indexOf(nums[i]) !== -1) continue;
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.length --;
    }
  }
}

console.log(permute([1,2,3]))
