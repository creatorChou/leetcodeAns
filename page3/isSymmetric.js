/**
* 101. Symmetric Tree
* https://leetcode.com/problems/symmetric-tree/description/
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let queue = [root];
  let i, arr, node, len, mirr, notNull = true;
  while (notNull) {
    arr = [];
    len = queue.length;
    for (i = 0; i < len; i ++) {
      node = queue[i];
      mirr = queue[len - 1 - i];
      if (node && mirr) {
        if (node.val !== mirr.val) {
          return false;
        }
        arr.push(node.left);
        arr.push(node.right);
      } else if (!node && !mirr) {
        arr.push(null);
        arr.push(null);
      } else {
        return false;
      }
    }
    notNull = false;
    for (i = 0; i < arr.length; i ++) {
      if (arr[i]) {
        notNull = true;
        break;
      }
    }
    queue = arr;
  }
  return true;
};

var isSymmetric2 = function (root) {
  if (!root) return true;
  return isSame(root.left, root.right);
}

var isSame = function(l, r) {
  if (!l && !r) {
    return true;
  }
  if (!l || !r) {
    return false;
  }
  return l.val === r.val && isSame(l.left, r.right) && isSame(l.right, r.left);
}
