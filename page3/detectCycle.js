/**
* 142. Linked List Cycle II
* https://leetcode.com/problems/linked-list-cycle-ii/description/
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let node = head;
  let set = new Set();
  while(node) {
    if (set.has(node)) {
      return node;
    }
    set.add(node);
    node = node.next;
  }
  return null;
};

var detectCycle2 = function(head) {
  let slow = head,
      fast = head,
      entry = head;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      while(entry !== slow) {

      }
      return entry;
    }
  }
  return null;
};
