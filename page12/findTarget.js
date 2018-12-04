/**
* 653. Two Sum IV - Input is a BST
* https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let set = new Set();
  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i ++) {
      let node = queue.shift();
      if (set.has(k - node.val)) return true;
      set.add(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return false;
};

// Runtime: 92 ms, faster than 90.75% of JavaScript online submissions for Two Sum IV - Input is a BST.
