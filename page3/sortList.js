/**
* 148. Sort List
* https://leetcode.com/problems/sort-list/description/
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head) return head;
  let node = head,
      minNode = head,
      prevNode;
  while (node.next) {
    if (node.next.val < minNode.val) {
      minNode = node.next;
      prevNode = node;
    }
    node = node.next;
  }
  if (prevNode) {
    prevNode.next = minNode.next;
    minNode.next = sortList(head);
  } else {
    minNode.next = sortList(minNode.next);
  }
  return minNode;
};

// Runtime: 1832 ms
