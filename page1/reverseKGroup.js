

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
var reverseKGroup = function(head, k) {
  if (k === 0 || k > head.length) return head;
  let nodeArray = [];
  while (head) {
    nodeArray.push(head);
    head = head.next;
  }
  let result = null, i, j, maxIndex, temp;
  for (i = 0; i < nodeArray.length; i += k) {
    if ((i + k) > nodeArray.length) break;
    j = i;
    maxIndex = i + k - 1
    while (j < maxIndex) {
      temp = nodeArray[j];
      nodeArray[j] = nodeArray[maxIndex];
      nodeArray[maxIndex] = temp;
      j ++;
      maxIndex --;
    }
  }
  for (i = 1; i < nodeArray.length; i ++) {
    if (i === nodeArray.length - 1) {
      nodeArray[i].next = null;
    }
    nodeArray[i-1].next = nodeArray[i];
  }
  return nodeArray[0];
};
