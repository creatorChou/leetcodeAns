/**
* 145. Binary Tree Postorder Traversal
* https://leetcode.com/problems/binary-tree-postorder-traversal/description/
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];
  let stack = [root, root],
      nums = [],
      node;

  while (stack.length > 0) {
    node = stack.pop();
    if (node === stack[stack.length - 1]) {
      if (node.right) {
        stack.push(node.right);
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
        stack.push(node.left);
      }
    } else {
      nums.push(node.val);
    }
  }
  return nums;
};
