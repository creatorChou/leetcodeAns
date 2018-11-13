/**
* 530. Minimum Absolute Difference in BST
* https://leetcode.com/problems/minimum-absolute-difference-in-bst/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let minDiff = Number.MAX_VALUE;
  let prev = null;
  function inorder (node) {
    if (node) {
      inorder(node.left);
      if (prev === null) {
        prev = node.val;
      } else {
        minDiff = Math.min(node.val - prev, minDiff);
        prev = node.val;
      }
      inorder(node.right);
    }
  }
  inorder(root);
  return minDiff;
};

// Runtime: 72 ms, faster than 83.48% of JavaScript online submissions for Minimum Absolute Difference in BST.
