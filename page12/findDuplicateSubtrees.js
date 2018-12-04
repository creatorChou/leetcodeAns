/**
* 652. Find Duplicate Subtrees
* https://leetcode.com/problems/find-duplicate-subtrees/
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let nodes = [];
  let duplicates = new Set();
  function postorder(node) {
    if (node) {
      let l = postorder(node.left);
      let r = postorder(node.right);
      let max = Math.max(l, r);
      if (nodes[max]) {
        let set = nodes[max];
        let hasSame = false;
        set.forEach((val) => {
          if (isSameNode(val, node)) {
            duplicates.add(val);
            hasSame = true;
          }
        });
        if (!hasSame) {
          set.add(node);
        }
      } else {
        nodes[max] = new Set([node]);
      }
      return max + 1;
    }
    return 0
  }
  postorder(root);
  return Array.from(duplicates);
};

function isSameNode(node1, node2) {
  if (node1 == null && node2 == null) return true;
  if (node1 == null || node2 == null) return false;
  if (node1.val !== node2.val) {
    return false;
  }
  return isSameNode(node1.left, node2.left) && isSameNode(node1.right, node2.right);
}

// Runtime: 96 ms, faster than 91.30% of JavaScript online submissions for Find Duplicate Subtrees.
