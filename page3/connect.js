/**
* 116. Populating Next Right Pointers in Each Node
* 117. Populating Next Right Pointers in Each Node II
* https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/
* https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/
*/

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) return;
  let queue = [root], prev, node, len, i;
  while (queue.length > 0) {
    len = queue.length;
    prev = null;
    for (i = 0; i < len; i ++) {
      node = queue.shift();
      if (prev) {
        prev.next = node;
      }
      prev = node;
      if (node.left) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
};

var connect2 = function(root) {
  if (!root) return;
  let queue = [root], prev, node, len, i;
  while (queue.length > 0) {
    len = queue.length;
    prev = null;
    for (i = 0; i < len; i ++) {
      node = queue.shift();
      if (prev) {
        prev.next = node;
      }
      prev = node;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
};
