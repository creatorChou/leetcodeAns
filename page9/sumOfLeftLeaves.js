/**
*  404. Sum of Left Leaves
*  https://leetcode.com/problems/sum-of-left-leaves/description/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root, isLeft = false) {
  if (!root) return 0;
  if (!root.left && !root.right && isLeft) {
    return root.val;
  }
  let count = 0;
  count += sumOfLeftLeaves(root.left, true);
  count += sumOfLeftLeaves(root.right, false);
  return count;
};
