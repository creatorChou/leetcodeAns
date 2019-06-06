/**
* 547. Friend Circles
* https://leetcode.com/problems/friend-circles/
*/

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let N = M.length;

  let quickUF = new QuickUnionUF(N);

  for (let i = 0; i < N; i ++) {
    for (let j = 0; j < N; j ++) {
      if (M[i][j] === 1) {
        quickUF.union(i, j);
      }
    }
  }
  return new Set(quickUF.id).size;
};

class QuickUnionUF {

  constructor (N) {
    this.id = new Array(N);
    for (let i = 0; i < N; i ++) {
      this.id[i] = i;
    }
  }

  union (p, q) {
    let id = this.id;
    if (id[p] === id[q]) return;
    let i = id[p];
    let j = id[q];
    for (let k = 0; k < id.length; k ++) {
      if (id[k] === j) {
        id[k] = i;
      }
    }
  }

}

let M = [[1,1,0],[1,1,0],[0,0,1]];

console.log(findCircleNum(M));

// Runtime: 68 ms, faster than 89.35% of JavaScript online submissions for Friend Circles.
// Memory Usage: 36.6 MB, less than 68.37% of JavaScript online submissions for Friend Circles.


/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let N = M.length;
  let uf = new WQUPC(N);

  for (let i = 0; i < N; i ++) {
    for (let j = 0; j < N; j ++) {
      if (M[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.count();
};

class WQUPC {

  constructor (N) {
    this.id = new Array(N);
    this.sz = new Array(N).fill(1);
    for (let i = 0; i < N; i ++) {
      this.id[i] = i;
    }
  }

  union (p, q) {
    let i = this.root(p);
    let j = this.root(q);
    if (i !== j) {
      if (this.sz[i] > this.sz[j]) {
        this.id[j] = i;
        this.sz[i] += this.sz[j];
      } else {
        this.id[i] = j;
        this.sz[j] += this.sz[i];
      }
    }
  }

  root(i) {
    while (this.id[i] !== i) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }

  count() {
    let set = new Set();
    for (let i = 0; i < this.id.length; i ++) {
      set.add(this.root(i));
    }
    return set.size;
  }

}

// Runtime: 72 ms, faster than 80.15% of JavaScript online submissions for Friend Circles.
// Memory Usage: 37.1 MB, less than 35.20% of JavaScript online submissions for Friend Circles.
