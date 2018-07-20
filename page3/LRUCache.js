/**
* 146. LRU Cache
* https://leetcode.com/problems/lru-cache/description/
*/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.queue = [];
  this.map = {};
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let index = this.queue.indexOf(key);
  if (index === -1 || key == null) {
    return -1;
  } else {
    let mapKey = this.queue.splice(index, 1)[0];
    this.queue.unshift(mapKey);
    return this.map[mapKey];
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map[key] == null) {
    this.queue.unshift(key);
    if (this.queue.length > this.capacity) {
      delete this.map[this.queue.pop()];
    }
  } else {
    let index = this.queue.indexOf(key);
    this.queue.splice(index, 1);
    this.queue.unshift(key);
  }
  this.map[key] = value;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
