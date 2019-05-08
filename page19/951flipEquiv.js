/**
* 951. Flip Equivalent Binary Trees
* https://leetcode.com/problems/flip-equivalent-binary-trees/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function flipEquiv(node1, node2) {
  if (!node1 && !node2) return true;
  if (node1 && node2 && node1.val === node2.val) {
    if (node1.left && node2.left) {
      if (node1.left.val !== node2.left.val) {
        reverse(node2);
      }
    } else {
      if (node1.left || node2.left) {
        reverse(node2);
      }
    }
    if (node1.left && node2.left) {
      if (node1.left.val !== node2.left.val) return false;
    } else {
      if (node1.left || node2.left) return false;
    }
    if (node1.right && node2.right) {
      if (node1.right.val !== node2.right.val) return false;
    } else {
      if (node1.right || node2.right) return false;
    }
    let prev = flipEquiv(node1.left, node2.left);
    let back = flipEquiv(node1.right, node2.right);
    return prev && back;
  }
  return false;
}

function reverse(node) {
  if (node) {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
}


// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Flip Equivalent Binary Trees.
// Memory Usage: 34.2 MB, less than 40.00% of JavaScript online submissions for Flip Equivalent Binary Trees.

