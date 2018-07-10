/**
* 107. Binary Tree Level Order Traversal II
* https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  let arr, len = 1;
  while (len > 0) {
    arr = [];
    for (i = 0; i < len; i ++) {
      arr.push(queue[i].val);
      if(queue[i].left) {
        queue.push(queue[i].left);
      }
      if(queue[i].right) {
        queue.push(queue[i].right);
      }
    }
    result.unshift(arr);
    queue.splice(0, len);
    len = queue.length;
  }
  return result;
};
