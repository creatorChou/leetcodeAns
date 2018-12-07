/**
* 662. Maximum Width of Binary Tree
* https://leetcode.com/problems/maximum-width-of-binary-tree/
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
var widthOfBinaryTree = function(root) {
  let width = [];
  function preorder(node, depth, pos) {
    if (node) {
      if (width[depth]) {
        if (pos < width[depth][0]) {
          width[depth][0] = pos;
        } else if (pos > width[depth][1]) {
          width[depth][1] = pos;
        }
      } else {
        width[depth] = [pos, pos];
      }
      pos *= 2;
      preorder(node.left, depth + 1, pos - 1);
      preorder(node.right, depth + 1, pos);
    }
  }
  preorder(root, 0, 1);
  let max = 0;
  for (let i = 0; i < width.length; i ++) {
    let campare;
    if (width[i][1] === width[i][0]) {
      compare = 1;
    } else {
      compare = width[i][1] - width[i][0] + 1
    }
    max = Math.max(max, compare);
  }
  return max;
};
