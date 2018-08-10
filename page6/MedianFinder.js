/**
* 295. Find Median from Data Stream
* https://leetcode.com/problems/find-median-from-data-stream/description/
*/

class MedianFinder {

  constructor () {
    this.head = null;
    this.length = 0;
  }

  /** 
   * @param {number} num
   * @return {void}
   */
  addNum (num) {
    let newNode = new Node(num);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let node = this.head,
          prev = null;
      while (node && node.val <= num) {
        prev = node;
        node = node.next;
      }
      if (prev) {
        newNode.next = prev.next;
        prev.next = newNode;
      } else {
        newNode.next = node;
        this.head = newNode;
      }
    }
    this.length ++;
  }

  /**
   * @return {number}
   */
  findMedian() {
    if (this.length === 0) return -1;
    if (this.length === 1) return this.head.val;
    let count = 1,
        node = this.head,
        index = Math.floor(this.length / 2);
    while (count < index) {
      node = node.next;
      count ++;
    }
    if (this.length % 2 !== 0) {
      return node.next.val;
    } else {
      return (node.val + node.next.val) / 2;
    }
  };

}

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

let mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian());
mf.addNum(3);
mf.addNum(5);
mf.addNum(6);
console.log(mf.findMedian());
