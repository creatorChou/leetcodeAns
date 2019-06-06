/**
* 684. Redundant Connection
* https://leetcode.com/problems/redundant-connection/
*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let N = edges.length;
  let uf = new WQUPC(N);
  let res;
  for (let i = 0; i < N; i ++) {
    let p = uf.root(edges[i][0]);
    let q = uf.root(edges[i][1]);
    if (p === q) {
      res = edges[i];
    } else {
      uf.union(p, q);
    }
  }
  return res;
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
    if (this.sz[p] > this.sz[q]) {
      this.id[q] = p;
      this.sz[p] += q;
    } else {
      this.id[p] = q;
      this.sz[q] = p;
    }
  }

  root(i) {
    while (this.id[i] !== i) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }

}

// Runtime: 48 ms, faster than 99.60% of JavaScript online submissions for Redundant Connection.
// Memory Usage: 34.9 MB, less than 85.00% of JavaScript online submissions for Redundant Connection.
