/**
* 842. Split Array into Fibonacci Sequence
* https://leetcode.com/problems/split-array-into-fibonacci-sequence/
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  let len = S.length / 3 * 2;
  for (let i = 1; i < len; i ++) {
    for (let j = i + 1; j < len + 1; j ++) {
      let fib = [parseInt(S.slice(0, i)), parseInt(S.slice(i, j))];
      let next = fib[0] + fib[1];
      let start = j;
      while (start < S.length && next >= 0 && next <= 2147483647) {
        let n = String(next);
        if (S.indexOf(n, start) !== start) break;
        start += n.length;
        fib.push(next);
        next = fib[fib.length - 1] + fib[fib.length - 2];
      }
      if (start === S.length && fib.length >= 3 && fib.join("") === S) return fib;
    }
  }
  return [];
};

// Runtime: 108 ms, faster than 68.18% of JavaScript online submissions for Split Array into Fibonacci Sequence.
