/**
* 235. Lowest Common Ancestor of a Binary Search Tree
* https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let max, min;
  if (p.val > q.val) {
    max = p.val;
    min = q.val;
  } else {
    max = q.val;
    min = p.val;
  }
  if (root.val < min) return lowestCommonAncestor(root.right, p, q);
  if (root.val > max) return lowestCommonAncestor(root.left, p, q);
  return root;
};

// Runtime: 84 ms, faster than 75.56% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 43.7 MB, less than 61.68% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
