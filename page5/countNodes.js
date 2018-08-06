/**
* 222. Count Complete Tree Nodes
* https://leetcode.com/problems/count-complete-tree-nodes/description/
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
var countNodes = function(root) {
  let count = 0;
  function inorder(node) {
    if (node) {
      inorder(node.right);
      count ++;
      inorder(node.left);
    }
  }
  inorder(root);
  return count;
};
