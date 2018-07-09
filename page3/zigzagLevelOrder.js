/**
* 103. Binary Tree Zigzag Level Order Traversal
* https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
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
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let node, arr, i, len = 1, zigzag = 1;
  while (len > 0) {
    arr = [];
    if (zigzag === 0) {
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
      zigzag = 1;
    } else {
      for (i = len - 1; i >= 0; i --) {
        node = queue[i];
        arr.push(node.val);
        if (node.right) {
          queue.push(node.right);
        }
        if (node.left) {
          queue.push(node.left);
        }
      }
      queue.splice(0, len);
      zigzag = 0;
    }
    result.push(arr);
    len = queue.length;
  }
  return result;
};
