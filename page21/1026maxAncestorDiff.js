/**
* 1026. Maximum Difference Between Node and Ancestor
* https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
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
var maxAncestorDiff = function(root) {
  let max = 0;
  function findExtremum (node) {
    let maxVal = node.val;
    let minVal = node.val;
    if (node.left) {
      let objLeft = findExtremum(node.left);
      maxVal = Math.max(objLeft.max, maxVal);
      minVal = Math.min(objLeft.min, minVal);
    }
    if (node.right) {
      let objRight = findExtremum(node.right);
      maxVal = Math.max(objRight.max, maxVal);
      minVal = Math.min(objRight.min, minVal);
    }
    max = Math.max(Math.abs(node.val - minVal), Math.abs(node.val - maxVal), max);
    return {
      max: maxVal,
      min: minVal
    }
  }
  findExtremum(root);
  return max;
};

// Runtime: 60 ms, faster than 96.45% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
// Memory Usage: 36.4 MB, less than 70.91% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
