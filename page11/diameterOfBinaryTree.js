/**
* 543. Diameter of Binary Tree
* https://leetcode.com/problems/diameter-of-binary-tree/
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
var diameterOfBinaryTree = function(root) {
  let maxLength = 0;
  function traversal(node) {
    if (node) {
      let l = traversal(node.left) + 1;
      let r = traversal(node.right) + 1;
      maxLength = Math.max(maxLength, l + r - 2);
      return Math.max(l, r);
    }
    return 0;
  }
  traversal(root);
  return maxLength;
};


