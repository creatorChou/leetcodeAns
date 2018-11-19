/**
* 528. Random Pick with Weight
* https://leetcode.com/problems/random-pick-with-weight/
*/

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.sum = 0;
  this.memo = [];
  for (let i = 0; i < w.length; i ++) {
    this.sum += w[i];
    this.memo[i] = this.sum;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  let rand = Math.random() * this.sum;
  let lo = 0, hi = this.memo.length - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (rand >= this.memo[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(w)
 * var param_1 = obj.pickIndex()
 */
