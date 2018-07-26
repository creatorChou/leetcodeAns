/**
* 206. Reverse Linked List
* https://leetcode.com/problems/reverse-linked-list/description/
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let node = head, prev = null, temp;
  while (node) {
    temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }
  return prev;
};

var reverseList = function(head, prev = null) {
  if (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    if (next) {
      return reverseList(next, prev);
    } else {
      return prev;
    }
  } else {
    return head;
  }
};
