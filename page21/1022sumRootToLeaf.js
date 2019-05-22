/**
* 1022. Sum of Root To Leaf Binary Numbers
* https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
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
var sumRootToLeaf = function(node, prev = "") {
  if (node) {
    prev += node.val;
    if (node.left || node.right) {
      return sumRootToLeaf(node.left, prev) + sumRootToLeaf(node.right, prev);
    } else {
      return parseInt(prev, 2);
    }
  }
  return 0;
};

// Runtime: 76 ms, faster than 30.72% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
// Memory Usage: 35.6 MB, less than 82.35% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
