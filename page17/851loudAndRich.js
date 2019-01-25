/**
* 851. Loud and Rich
* https://leetcode.com/problems/loud-and-rich/
*/

// In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, and different levels of quietness.

// For convenience, we'll call the person with label x, simply "person x".

// We'll say that richer[i] = [x, y] if person x definitely has more money than person y.  Note that richer may only be a subset of valid observations.

// Also, we'll say quiet[x] = q if person x has quietness q.

// Now, return answer, where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]), among all people who definitely have equal to or more money than person x.

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  let len = quiet.length;
  let ans = new Array(len);
  let memo = new Array(len);
  for (let i = 0; i < len; i ++) {
    let richers = getRichers(richer, memo, i);
    ans[i] = i;
    richers.forEach(val => {
      if (quiet[val] < quiet[ans[i]]) {
        ans[i] = val;
      }
    });
  }
  return ans;
};

function getRichers(richer, memo, p) {
  if (memo[p]) return memo[p];
  memo[p] = new Set();
  for (let r of richer) {
    if(r[1] === p && !memo[p].has(r[0])) {
      memo[p].add(r[0]);
      let next;
      if (memo[r[0]]) {
        next = memo[r[0]];
      } else {
        next = getRichers(richer, memo, r[0])
      }
      next.forEach(val => memo[p].add(val));
    }
  }
  return memo[p];
}

// Runtime: 728 ms, faster than 5.56% of JavaScript online submissions for Loud and Rich.
