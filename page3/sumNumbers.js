/**
* 129. Sum Root to Leaf Numbers
* https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  let sum = 0;
  function preorder(node, pathSum) {
    pathSum = pathSum * 10 + node.val;
    if (!node.left && !node.right) {
      sum += pathSum;
      return;
    };
    if (node.left) {
      preorder(node.left, pathSum);
    }
    if (node.right) {
      preorder(node.right, pathSum);
    }
  }
  preorder(root, 0);
  return sum;
};
