/**
* Merge Two Sorted Lists
* http://web.fxsp.com/sp-web/develop/#apps
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let list = null;
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  } else if (!l1 && !l2) {
    return null;
  } else {
    if (l1.val < l2.val) {
      list = l1;
      l1 = l1.next;  
    } else {
      list = l2;
      l2 = l2.next;
    }
  }
  let result = list;

  while (l1 || l2) {
    if (!l1) {
      list.next = l2;
      break;
    } else if (!l2) {
      list.next = l1;
      break;
    } else {
      if (l1.val < l2.val) {
        list.next = l1;
        if (l1) {
          l1 = l1.next;
        }
      } else {
        list.next = l2;
        if (l2) {
          l2 = l2.next;
        }
      }
    }
    list = list.next;
  }

  return result;
};
