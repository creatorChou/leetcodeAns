/**
* 113. Path Sum II
* https://leetcode.com/problems/path-sum-ii/description/
*/

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  const result = [];
  function preorder(node, arr) {
    arr.push(node.val);
    if (!node.left && !node.right && arr.length > 0) {
      let arrSum = arr.reduce((a, b) => a + b);
      if (arrSum === sum) {
        result.push(arr);
      }
    } else {
      if (node.left) {
        preorder(node.left, arr.slice());
      }
      if (node.right) {
        preorder(node.right, arr.slice());
      }
    }
  }
  preorder(root, []);
  return result;
};
