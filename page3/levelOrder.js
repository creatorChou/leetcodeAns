/**
* 102. Binary Tree Level Order Traversal
* https://leetcode.com/problems/binary-tree-level-order-traversal/description/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let node, arr, i, len = 1;
  while (len > 0) {
    arr = [];
    for (i = 0; i < len; i ++) {
      node = queue.shift();
      arr.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(arr);
    len = queue.length;
  }
  return result;
};
