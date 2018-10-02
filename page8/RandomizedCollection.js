/**
* 381. Insert Delete GetRandom O(1) - Duplicates allowed
* https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/description/
*/

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.map = {};
  this.vals = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  let ret = false;
  if (!this.map[val]) {
    this.map[val] = [this.vals.length]
    ret = true;
  } else {
    this.map[val].push(this.vals.length);
  }
  this.vals.push(val);
  return ret;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (this.map[val]) {
    let index = this.map[val].pop();
    if (index !== this.vals.length - 1) {
      let tail = this.vals[this.vals.length - 1];
      this.vals[index] = tail;
      this.map[tail].pop();
      this.map[tail].push(index);
      for (let i = this.map[tail].length - 1; i > 0; i --) {
        if (this.map[tail][i] < this.map[tail][i - 1]) {
          this.map[tail][i] ^= this.map[tail][i - 1];
          this.map[tail][i - 1] ^= this.map[tail][i];
          this.map[tail][i] ^= this.map[tail][i - 1];
        } else {
          break;
        }
      }
    }
    this.vals.pop();  
    if (this.map[val].length === 0) {
      delete this.map[val];
    }
    return true;
  }
  return false;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  let r = Math.trunc(Math.random() * this.vals.length);
  return this.vals[r];
};

let c = new RandomizedCollection();
c.insert(10);
c.insert(10);
c.insert(20);
c.insert(20);
c.insert(30);
c.insert(30);
c.remove(10);
c.remove(10);
c.remove(30);
c.remove(30);
