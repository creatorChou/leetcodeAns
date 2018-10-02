/**
* 382. Linked List Random Node
* https://leetcode.com/problems/linked-list-random-node/description/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
  this.values = [head.val];
  this.writeValue();
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  this.writeValue();
  let rand = Math.trunc(Math.random() * this.values.length);
  return this.values[rand];
};

Solution.prototype.writeValue = function() {
  node = this.head;
  if (node.next) {
    this.values.push(node.next.val);
    node = node.next;
  }
  this.head = node;
}
