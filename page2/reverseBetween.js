/**
* 92. Reverse Linked List II
* https://leetcode.com/problems/reverse-linked-list-ii/description/
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let node = head,
      count = 1,
      prev, after, cutHead, cutFoot, curr;
  while (node) {
    if (count < m) {
      prev = node;
      node = node.next;
    } else if (count === m) {
      cutHead = node;
      cutFoot = node;
      node = node.next;
      cutFoot.next = null;
    } else if (count > m && count < n) {
      curr = node;
      node = node.next;
      curr.next = cutHead;
      cutHead = curr;
    } else if (count === n) {
      after = node.next;
      node.next = cutHead;
      cutHead = node;
      if (!prev) {
        cutFoot.next = head;
        head.next = after;
        head = cutHead;
      } else {
        cutFoot.next = after;
        prev.next = cutHead;
      }
      break;
    }
    console.log(head);
    count ++;
  }
  return head;
};

let head = {
  val: 5,
  next: {
    val: 3,
    next: null
  }
}

console.log(reverseBetween(head, 1,2));
