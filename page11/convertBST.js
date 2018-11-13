/**
* 538. Convert BST to Greater Tree
* https://leetcode.com/problems/convert-bst-to-greater-tree/
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
var convertBST = function(root) {
  let sum = 0;
  function inorder(node) {
    if (!node) return;
    inorder(node.right);
    sum += node.val;
    node.val = sum;
    inorder(node.left);
  }
  inorder(root);
  return root;
};

