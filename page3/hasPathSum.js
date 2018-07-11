/**
* 112. Path Sum
* https://leetcode.com/problems/path-sum/description/
*/

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  return DFS(root, root.val, sum);
};

var DFS = function(node, num, sum) {
  let now = num + node.val;
  if (!node.left && !node.right) {
    return sum === now;
  } else {
    let l = false, r = false;
    if (node.left) {
      l = DFS(node.left, now, sum);
    }
    if (node.right) {
      r = DFS(node.right, now, sum);
    }
    return l || r;
  }
}

var hasPathSum2 = function(root, sum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val === sum;
  } else {
    sum -= root.val;
    return hasPathSum2(root.left, sum) || hasPathSum2(root.right, sum);
  }
};
