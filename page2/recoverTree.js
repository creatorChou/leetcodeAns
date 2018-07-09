/**
* 99. Recover Binary Search Tree
* https://leetcode.com/problems/recover-binary-search-tree/description/
*/

var recoverTree = function(root) {
  let node = root, stack = [];
  let first, second, prev;
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if (prev) {
        if (prev.val >= node.val) {
          if (!first) {
            first = prev;
            second = node;
          } else {
            second = node;
            break;
          }
        }
      } else {
        prev = node;
      }
      node = node.right;
    }
  }
  first.val ^= second.val;
  second.val ^= first.val;
  first.val ^= second.val;
};

var recoverTree2 = function(root) {
  let first, second, prev;
  function inorder(root) {
    if (root) {
      inorder(root.left);
      if (prev && prev.val >= root.val) {
        second = root;
        if (!first) {
          first = prev;
        }
      }
      prev = root;
      inorder(root.right);
    }
  };
  inorder(root);
  first.val ^= second.val;
  second.val ^= first.val;
  first.val ^= second.val;
}