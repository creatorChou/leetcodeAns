/**
* Swap Nodes in Pairs
* https://leetcode.com/problems/swap-nodes-in-pairs/description/
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
var swapPairs = function(head) {
  if (head && head.next) {
    let first = head.next;
    let second = head;
    let rest = head.next.next;
    first.next = second;
    second.next = swapPairs(rest);
    return first;
  } else {
    return head;
  }
};
