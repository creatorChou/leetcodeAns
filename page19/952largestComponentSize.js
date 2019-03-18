/**
* 952. Largest Component Size by Common Factor
* https://leetcode.com/problems/largest-component-size-by-common-factor/
*/

function DSU(N) {
  this.parents = new Array(N);
  for (let i=0; i<N; i++) this.parents[i] = i;
}

DSU.prototype.find = function(x) {
  if(this.parents[x] !== x) {
    return this.find(this.parents[x]);
  } else {
    return x;
  }
}

DSU.prototype.union = function(x, y) {
  this.parents[this.find(x)] = this.find(y);
}

var largestComponentSize = function(A) {
  A.sort((a, b) => a - b);
  let N = A.length;
  let mydsu = new DSU(N);
  for(let i=0; i<N-1; i++) {
    for(let j=i+1; j<N; j++) {
      if(gcd(A[i], A[j]) > 1) {
        mydsu.union(j, i);
      }
    }
  }
  let map = {};
  let p = mydsu.parents;
  console.log(p)
  let max = 0;
  for(let i=0; i<N; i++) {
    if (map[p[i]]) {
      map[p[i]] ++;
    } else {
      map[p[i]] = 1;
    }
    max = Math.max(max, map[p[i]]);
  }
  return max;
};

function gcd(A, B) {
  if (B < A) {
    A ^= B;
    B ^= A;
    A ^= B;
  }
  let remainder = A % B;
  while (remainder > 0) {
    A = B;
    B = remainder;
    remainder = A % B;
  }
  return B;
};

console.log(largestComponentSize([4,6,15,35]));
console.log(largestComponentSize([20,50,9,63]));
console.log(largestComponentSize([2,3,6,7,4,12,21,39]));
