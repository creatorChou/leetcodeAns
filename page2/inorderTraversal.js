/**
* 94. Binary Tree Inorder Traversal
* https://leetcode.com/problems/binary-tree-inorder-traversal/description/
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var nums = [];
  var inorder = function (root) {
    if (root) {
      inorder(root.left);
      nums.push(root.val);
      inorder(root.right);
    }
  }
  inorder(root);
  return nums;
};
// recursive

var inorderTraversal2 = function(root) {
  let nums = [];
  let stack = [];
  let node = root;
  while (stack.length > 0 || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      nums.push(node.val);
      node = node.right;
    }
  }
  return nums;
};
// iterative
