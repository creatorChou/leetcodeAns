/**
* 965. Univalued Binary Tree
* https://leetcode.com/problems/univalued-binary-tree/
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
 * @return {boolean}
 */
var isUnivalTree = function(node) {
  if (node) {
    if (node.left) {
      if (node.val !== node.left.val) return false;
    }
    if (node.right) {
      if (node.val !== node.right.val) return false;
    }
    return isUnivalTree(node.left) && isUnivalTree(node.right);
  }
  return true;
};

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Univalued Binary Tree.
// Memory Usage: 33.9 MB, less than 54.00% of JavaScript online submissions for Univalued Binary Tree.
