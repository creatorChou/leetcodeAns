/**
* 671. Second Minimum Node In a Binary Tree
* https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
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
var findSecondMinimumValue = function(root) {
  if (root && root.left) {
    let l = root.left.val;
    let r = root.right.val;
    if (l > root.val && r > root.val) {
      return Math.min(l, r);
    }
    if (l === root.val) {
      l = findSecondMinimumValue(root.left);
    }
    if (r === root.val) {
      r = findSecondMinimumValue(root.right);
    }
    if (l === -1 && r === -1) return -1;
    if (l !== -1 && r !== -1) return Math.min(l, r);
    return Math.max(l, r);
  }
  return -1;
};

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
