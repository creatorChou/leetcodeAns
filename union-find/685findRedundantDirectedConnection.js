/**
* 685. Redundant Connection II
* https://leetcode.com/problems/redundant-connection-ii/
*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  let N = edges.length;

  let uf = new UF(N + 1);

  let res;

  for (let i = 0; i < N; i ++) {
    let p = uf.find(edges[i][0]);
    let q = uf.find(edges[i][1]);
    if (p === q) {
      res = edges[i];
    } else {
      uf.union(p, q);
    }
  }
  return res;
};

class UF {

  constructor (N) {
    this.id = new Array(N);
    for (let i = 0; i < N; i ++) {
      this.id[i] = i;
    }
  }

  union (p, q) {
    this.id[q] = p;
  }

  find (i) {
    while (this.id[i] !== i) {
      i = this.id[i];
    }
    return i;
  }

}
