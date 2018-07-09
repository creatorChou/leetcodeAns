/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return postorder(p, q);
};

var postorder = function(p, q) {
  if (p === null && q === null) {
    return true;
  } else if (p !== null && q !== null) {
    if (p.val === q.val) {
      let l = postorder(p.left, q.left);
      let r = postorder(p.right, q.right);
      return l && r;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
