/**
* LFU Cache
* https://leetcode.com/problems/lfu-cache/
*/

class LFUCache {

  constructor (capacity) {
    this.capacity = capacity;
    this.map = {};
    this.memo = [];
  }

  get (key) {
    let i = this.map[key];
    if (i == null) {
      return -1;
    }
    let val = this.memo[i].value;
    this.memo[i].frequency ++;
    this._adjust(i);
    return val;
  }

  put (key, value) {
    if (this.get(key) !== -1) {
      let i = this.map[key];
      this.memo[i].value = value;
      return;
    }
    let data = {
      key: key,
      value: value,
      frequency: 0
    };
    if (this.memo.length < this.capacity) {
      this.memo.push(data);
      this.map[key] = this.memo.length - 1;
      this._adjust(this.memo.length - 1)
    } else {
      let lastOne = this.memo[this.memo.length - 1];
      if (lastOne != null) {
        this.map[lastOne.key] = null;
        this.memo[this.memo.length - 1] = data;
        this.map[key] = this.memo.length - 1;
        this._adjust(this.memo.length - 1)
      }
    }
  }

  _adjust (i) {
    while (i > 0 && this.memo[i-1].frequency <= this.memo[i].frequency) {
      this.map[this.memo[i].key] = i - 1;
      this.map[this.memo[i-1].key] = i;

      let temp = this.memo[i-1];
      this.memo[i-1] = this.memo[i];
      this.memo[i] = temp;
      i --;
    }
  }

}

["LFUCache","put","put","put","put","get","get"]
[[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]