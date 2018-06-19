/**
*	Remove Nth Node From End of List
*	https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	if (!head.next) return null;
	let lastNode = head;
	for (let i = 1; i < n; i ++) {
		lastNode = lastNode.next;
	}
	if (!lastNode.next) {
		return head.next;
	}
	let cutNode = head;
	let preNode = null;
	while (lastNode.next) {
		lastNode = lastNode.next;
		preNode = cutNode;
		cutNode = cutNode.next;
	}
	if (cutNode.next) {
		preNode.next = cutNode.next;
	} else {
		preNode.next = null;
	}
	return head;
};