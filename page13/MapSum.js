/**
* 677. Map Sum Pairs
* https://leetcode.com/problems/map-sum-pairs/
*/

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.tireHead = new TireNode();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let node = this.tireHead;
  let nodes = [];
  for (let char of key) {
    if (!node.next[char]) {
      node.next[char] = new TireNode();
    }
    node = node.next[char];
    nodes.push(node);
  }
  let override = false;
  if (node.isEnd) {
    override = true;
  }
  node.isEnd = true;
  for (let i = 0; i < nodes.length; i ++) {
    if (override) {
      nodes[i].value = val;
    } else {
      nodes[i].value += val;
    }
  }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let node = this.tireHead;
  let idx = 0;
  while (node && idx < prefix.length) {
    node = node.next[prefix[idx]];
    idx ++;
  }
  if (!node) {
    return 0;
  } else {
    return node.value;
  }
};


function TireNode () {
  this.isEnd = false;
  this.value = 0;
  this.next = {}
}

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

// Runtime: 60 ms, faster than 33.96% of JavaScript online submissions for Map Sum Pairs.
