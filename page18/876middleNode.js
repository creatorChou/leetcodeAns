/**
* 876. Middle of the Linked List
* https://leetcode.com/problems/middle-of-the-linked-list/
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
 * @return {ListNode}
 */
var middleNode = function(head) {
  let count = 0;
  let node = head;
  while (node) {
    count ++;
    node = node.next;
  }
  node = head;
  count >>= 1;
  while (count > 0) {
    node = node.next;
    count --;
  }
  return node;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

