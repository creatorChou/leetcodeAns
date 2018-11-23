/**
* 606. Construct String from Binary Tree
* https://leetcode.com/problems/construct-string-from-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) return "";
  return traversal(t);
};

function traversal(node) {
  let str = String(node.val);
  if (node.left) {
    str += "(" + traversal(node.left) + ")";
  } else {
    if (node.right) str += "()";
  }
  if (node.right) {
    str += "(" + traversal(node.right) + ")";
  }
  return str;
}

// Runtime: 68 ms, faster than 98.82% of JavaScript online submissions for Construct String from Binary Tree.
