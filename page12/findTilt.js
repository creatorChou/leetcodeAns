/**
* 563. Binary Tree Tilt
* https://leetcode.com/problems/binary-tree-tilt/
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
 * @return {number}
 */
var findTilt = function(root) {
  if (!root) return 0;
  let tilt = 0;
  function traversal(node) {
    let l = 0, r = 0;
    if (node.left) {
      l = traversal(node.left);
    }
    if (node.right) {
      r = traversal(node.right);
    }
    tilt += Math.abs(l - r);
    return l + r + node.val;
  }
  traversal(root);
  return tilt;
};

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Binary Tree Tilt.
