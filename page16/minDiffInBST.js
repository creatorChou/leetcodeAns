/**
* 783. Minimum Distance Between BST Nodes
* https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
var minDiffInBST = function(root) {
  let prev = null,
      minDiff = Number.MAX_VALUE;
  function inorder(node) {
    if (node) {
      inorder(node.left);
      if (prev !== null) {
        minDiff = Math.min(node.val - prev, minDiff);
      }
      prev = node.val;
      inorder(node.right);
    }
  }
  inorder(root);
  return minDiff;
};
