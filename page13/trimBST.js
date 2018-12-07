/*
* 669. Trim a Binary Search Tree
* https://leetcode.com/problems/trim-a-binary-search-tree/
*/

var trimBST = function(root, L, R) {
  if (root) {
    if (root.val < L) {
      return trimBST(root.right, L, R);
    } else if (root.val > R) {
      return trimBST(root.left, L, R);
    } else {
      root.left = trimBST(root.left, L, R);
      root.right = trimBST(root.right, L, R);
      return root;
    }
  }
  return null;
};
