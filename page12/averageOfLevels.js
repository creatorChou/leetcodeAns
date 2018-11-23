/**
* 637. Average of Levels in Binary Tree
* https://leetcode.com/problems/average-of-levels-in-binary-tree/
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i ++) {
      let node = queue.shift();
      sum += node.val;
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    result.push(sum / len);
  }
  return result;
};

// Runtime: 72 ms, faster than 89.54% of JavaScript online submissions for Average of Levels in Binary Tree.
