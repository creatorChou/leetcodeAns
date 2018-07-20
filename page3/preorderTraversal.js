/**
* 144. Binary Tree Preorder Traversal
* https://leetcode.com/problems/binary-tree-preorder-traversal/description/
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return [];
  let stack = [root],
      num = [],
      node;
  while (stack.length > 0) {
    node = stack.pop();
    num.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return num;
};
