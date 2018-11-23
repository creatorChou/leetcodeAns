/**
* 623. Add One Row to Tree
* https://leetcode.com/problems/add-one-row-to-tree/
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d === 1) {
    let node = new TreeNode(v);
    node.left = root;
    return node;
  }
  let queue = [root];
  let depth = 1;
  while (depth < d - 1) {
    let len = queue.length;
    for (let i = 0; i < len; i ++) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth ++;
  }
  for (let i = 0; i < queue.length; i ++) {
    let l = new TreeNode(v);
    let r = new TreeNode(v);
    l.left = queue[i].left;
    r.right = queue[i].right;
    queue[i].left = l;
    queue[i].right = r;
  }
  return root;
};

// Runtime: 80 ms, faster than 71.05% of JavaScript online submissions for Add One Row to Tree.
