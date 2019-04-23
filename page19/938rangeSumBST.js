/**
* 938. Range Sum of BST
* https://leetcode.com/problems/range-sum-of-bst/
*/

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let finished = false;
  let meetLeft = false;
  let sum = L + R;
  function inorder(node) {
    if (node) {
      inorder(node.left);
      if (!meetLeft) {
        if (node.val === L) {
          meetLeft = true;
        }
      } else {
        if (!finished) {
          if (node.val === R) {
            finished = true;
            return;
          } else {
            sum += node.val;
          }
        }
      }
      inorder(node.right);
    }
  }
  inorder(root);
  return sum;
};

// Runtime: 188 ms, faster than 52.98% of JavaScript online submissions for Range Sum of BST.
// Memory Usage: 67 MB, less than 61.60% of JavaScript online submissions for Range Sum of BST.
