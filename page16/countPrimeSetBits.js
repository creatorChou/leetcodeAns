/**
* 762. Prime Number of Set Bits in Binary Representation
* https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
*/

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let count = 0;
  let n = new BinaryNumber(L);
  while (n.num <= R) {
    if (n.isPrimeCount()) count ++;
    n.add();
  }
  return count;
};

class BinaryNumber {
  constructor (num) {
    this.num = num;
    this.arr = [];
    while (num > 0) {
      this.arr.unshift(num & 1);
      num >>= 1;
    }
  }

  add () {
    this.num ++;
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (this.arr[i] === 1) {
        this.arr[i] = 0;
      } else {
        this.arr[i] = 1;
        return;
      }
    }
    this.arr.unshift(1);
  }

  isPrimeCount () {
    let count = this._countSetBit();
    if (count < 2) return false;
    for (let i = 2; i < count; i ++) {
      if (count % i === 0) return false;
    }
    return true;
  }

  _countSetBit() {
    let count = 0;
    for (let bit of this.arr) {
      if (bit === 1) count ++;
    }
    return count;
  }
}

// Runtime: 160 ms, faster than 60.00% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.
