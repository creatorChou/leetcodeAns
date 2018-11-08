/**
* Find Mode in Binary Search Tree
* https://leetcode.com/problems/find-mode-in-binary-search-tree/
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
var findMode = function(root) {
  let map = {};
  let level = 0;
  let result = [];
  traversal(root, map);
  for (let i in map) {
    if (map[i] > level) {
      level = map[i];
      result = [i];
    } else if (map[i] === level) {
      result.push(i);
    }
  }
  return result;
};

function traversal (node, map) {
  if (node) {
    if (map[node.val]) {
      map[node.val] ++;
    } else {
      map[node.val] = 1;
    }
    traversal(node.left, map);
    traversal(node.right, map);
  }
}
