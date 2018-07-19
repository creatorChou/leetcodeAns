/**
* 138. Copy List with Random Pointer
* https://leetcode.com/problems/copy-list-with-random-pointer/description/
*/

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  let map = new Map();
  function copy(node) {
    if (!node) {
      return null;
    }
    if (map.has(node.label)) {
      return map.get(node.label);
    }
    let newNode = new RandomListNode(node.label);
    map.set(node.label, newNode);
    newNode.next = copy(node.next);
    newNode.random = copy(node.random);
    return newNode;
  }
  return copy(head);
};