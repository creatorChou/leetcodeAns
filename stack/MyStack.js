/**
* 225. Implement Stack using Queues
* https://leetcode.com/problems/implement-stack-using-queues/
*/

class MyStack {
  constructor () {
    this.q = new Queue();
  }

  push (n) {
    this.q.enqueue(n);
  }

  pop () {
    let temp = new Queue();
    while (this.q.size() > 1) {
      temp.enqueue(this.q.dequeue());
    }
    let res = this.q.dequeue();
    this.q = temp;
    return res;
  }

  top () {
    let temp = new Queue();
    while (this.q.size() > 1) {
      temp.enqueue(this.q.dequeue());
    }
    let res = this.q.dequeue();
    temp.enqueue(res);
    this.q = temp;
    return res;
  }

  empty () {
    return this.q.size() === 0;
  }
}

class Queue {

  constructor () {
    this.q = [];
  }

  enqueue (n) {
    this.q.unshift(n);
  }

  dequeue () {
    return this.q.pop();
  }

  size () {
    return this.q.length;
  }

}

// Runtime: 52 ms, faster than 84.06% of JavaScript online submissions for Implement Stack using Queues.
// Memory Usage: 34.1 MB, less than 5.30% of JavaScript online submissions for Implement Stack using Queues.
