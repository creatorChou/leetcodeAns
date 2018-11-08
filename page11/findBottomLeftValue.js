/**
* 513. Find Bottom Left Tree Value
* https://leetcode.com/problems/find-bottom-left-tree-value/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let level = 0;
  let val = root.val;
  function inOrder(node, depth) {
    if (node) {
      inOrder(node.left, depth + 1);
      if (depth > level) {
        level = depth;
        val = node.val;
      }
      inOrder(node.right, depth + 1);
    }
  }
  inOrder(root, 0);
  return val;
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Find Bottom Left Tree Value.
