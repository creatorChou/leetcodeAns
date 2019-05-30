/**
* 1038. Binary Search Tree to Greater Sum Tree
* https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let sum = 0;
  function inorder(node) {
    if (node) {
      inorder(node.right);
      sum += node.val;
      node.val = sum;
      inorder(node.left);
    }
  }
  inorder(root);
  return root;
};

// Runtime: 52 ms, faster than 85.31% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
