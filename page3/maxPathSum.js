/**
* 124. Binary Tree Maximum Path Sum
* https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = -Number.MAX_VALUE;
  function postorder(node) {
    if (node) {
      let l = postorder(node.left);
      let r = postorder(node.right);
      let sum = Math.max(l + node.val, r + node.val, node.val);
      max = Math.max(sum, node.val + l + r, max);
      return sum;
    } else {
      return 0;
    }
  }
  postorder(root);
  return max;
};
