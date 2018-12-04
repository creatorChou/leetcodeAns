/**
* 654. Maximum Binary Tree
* https://leetcode.com/problems/maximum-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums, s = 0, e = nums.length - 1) {
  if (s > e) return null;
  let maxIdx = s;
  for (let i = s + 1; i <= e; i ++) {
    if (nums[i] > nums[maxIdx]) maxIdx = i;
  }
  let node = new TreeNode(nums[maxIdx]);
  node.left = constructMaximumBinaryTree(nums, s, maxIdx - 1);
  node.right = constructMaximumBinaryTree(nums, maxIdx + 1, e);
  return node;
};

// Runtime: 100 ms, faster than 87.07% of JavaScript online submissions for Maximum Binary Tree.
