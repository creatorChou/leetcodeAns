class Stack {

  constructor () {
    this.stk = [];
  }

  push (elem) {
    this.stk = this.stk.concat(elem);
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
