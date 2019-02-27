/**
* 911. Online Election
* https://leetcode.com/problems/online-election/
*/

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.times = times;
  this.memo = [];
  let map = {};
  let leader = persons[0];
  for (let i = 0; i < persons.length; i ++) {
    if (map[persons[i]]) {
      map[persons[i]] ++;
    } else {
      map[persons[i]] = 1;
    }
    leader = map[persons[i]] >= map[leader] ? persons[i] : leader;
    this.memo[i] = leader;
  }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let idx = this.getRecentTime(t);
  return this.memo[idx];
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.getRecentTime = function(t) {
  let l = 0, r = this.times.length - 1;
  if (t <= this.times[l]) return l;
  if (t >= this.times[r]) return r;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (t < this.times[mid]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return r - 1;
};


/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = Object.create(TopVotedCandidate).createNew(persons, times)
 * var param_1 = obj.q(t)
 */

// Runtime: 404 ms, faster than 100.00% of JavaScript online submissions for Online Election.
// Memory Usage: 69.1 MB, less than 100.00% of JavaScript online submissions for Online Election.
