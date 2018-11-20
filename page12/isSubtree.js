/**
* 572. Subtree of Another Tree
* https://leetcode.com/problems/subtree-of-another-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let queue = [s];
  let compareNode;
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < queue.length; i ++) {
      let node = queue.shift();
      if (node.val === t.val && traversal(node, t)) {
        return true;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  function traversal(node1, node2) {
    if (!node1 && node2 || node1 && !node2) {
      return false;
    }
    if (node1) {
      if (node1.val !== node2.val) {
        return false;
      }
      let l = traversal(node1.left, node2.left);
      let r = traversal(node1.right, node2.right);
      return l && r;
    }
    return true;
  }
  return false;
};
