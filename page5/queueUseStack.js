class Stack {

  constructor () {
    this.stk = [];
  }

  push (elem) {
    this.stk.push(elem);
  }

  pop () {
    return this.stk.pop();
  }

  size () {
    return this.stk.length;
  }

  empty () {
    return this.size() === 0;
  }

}

class MyQueue {

  constructor () {
    this.stk = new Stack();
  }

  push (elem) {
    this.stk.push(elem);
  }

  pop () {
    let arr = this._toArray();
    for (let i = 1; i < arr.length; i ++) {
      this.stk.push(arr[i]);
    }
    return arr[0];
  }

  peek () {
    let arr = this._toArray();
    for (let i = 0; i < arr.length; i ++) {
      this.stk.push(arr[i]);
    }
    return arr[0];
  }

  size () {
    return this.stk.size();
  }

  empty () {
    return this.stk.size() === 0;
  }

  _toArray () {
    let arr = [];
    for (let i = this.stk.size() - 1; i >= 0; i--) {
      arr[i] = this.stk.pop();
    }
    return arr;
  }

}
