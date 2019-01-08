/**
* 814. Binary Tree Pruning
* https://leetcode.com/problems/binary-tree-pruning/
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
var pruneTree = function(root) {
  if (root) {
    let l = pruneTree(root.left);
    let r = pruneTree(root.right);
    if (!l && !r && !root.val) return null;
    root.left = l;
    root.right = r;
    return root;
  }
  return null;
};

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Binary Tree Pruning.
