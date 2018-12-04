/**
* 655. Print Binary Tree
* https://leetcode.com/problems/print-binary-tree/
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
 * @return {string[][]}
 */
var printTree = function(root) {
  if (!root) return [];
  let vals = [];
  let d = 0;
  function preorder(node, depth) {
    if (node) {
      d = Math.max(depth, d);
      if (vals[depth]) {
        vals[depth].push(node.val);
      } else {
        vals[depth] = [node.val];
      }
      preorder(node.left, depth + 1);
      preorder(node.right, depth + 1);
    }
  }
  preorder(root, 0);
  let maxNodeCount = Math.pow(2, d);
  let len = 2 * maxNodeCount - 1;
  let result = [];
  
};
