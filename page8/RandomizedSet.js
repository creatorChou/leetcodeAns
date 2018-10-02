/**
* 380. Insert Delete GetRandom O(1)
* https://leetcode.com/problems/insert-delete-getrandom-o1/description/
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map();
  this.vals = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!this.map.has(val)) {
    this.map.set(val, this.vals.length);
    this.vals.push(val);
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.map.has(val)) {
    let index = this.map.get(val);
    let tail = this.vals[this.vals.length - 1];
    this.vals[index] = tail;
    this.vals.pop();
    this.map.set(tail, index);
    this.map.delete(val);
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let r = Math.trunc(Math.random() * this.vals.length);
  return this.vals[r];
};

let rs = new RandomizedSet();
console.log(rs.remove(0));
console.log(rs.remove(0));
console.log(rs.insert(0));
console.log(rs.getRandom());
console.log(rs.remove(0));
console.log(rs.insert(0));
