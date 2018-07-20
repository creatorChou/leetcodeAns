/**
* 143. Reorder List
* https://leetcode.com/problems/reorder-list/description/
*/

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let node = head,
      nodes = [];

  while (node) {
    nodes.push(node);
    node = node.next;
  }

  let l = 0,
      r = nodes.length - 1,
      prev;
  while (l <= r) {
    if (prev) {
      prev.next = nodes[l];
    }
    nodes[l].next = nodes[r];
    nodes[r].next = null;
    prev = nodes[r];
    l ++;
    r --;
  }
};
