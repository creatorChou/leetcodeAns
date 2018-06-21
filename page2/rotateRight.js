/**
*	Rotate List
*	https://leetcode.com/problems/rotate-list/description/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head;
  }
  let node = head;
  let newHead = null;
  let foot = null;
  let len = 0;
  while (node) {
    if (!node.next) {
      foot = node;
    }
    len ++;
    node = node.next;
  }

  let l = len - k % len;
  if (l === len) {
    return head;
  }
  node = head;
  for (let i = 1; i < l; i ++) {
    node = node.next;
  }
  newHead = node.next;
  node.next = null;
  foot.next = head;
  return newHead;
};
