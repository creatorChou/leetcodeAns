/**
* 203. Remove Linked List Elements
* https://leetcode.com/problems/remove-linked-list-elements/description/
*/

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let node = head,
      prev, after;

  while (node) {
    if (node.val !== val) {
      prev = node;
      node = node.next;
    } else {
      after = node.next;
      while (after && after.val === val) {
        after = after.next;
      }
      if (prev) {
        prev.next = after;
      } else {
        head = after;
      }
      prev = after;
      node = after;
      after = null;
    }
  }

  return head;
};
