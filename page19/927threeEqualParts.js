/**
* 927. Three Equal Parts
* https://leetcode.com/problems/three-equal-parts/
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
  let indices = [];
  for(let i=0; i<A.length; i++) {
    if(A[i] === 1) indices.push(i);
  }
  if (indices.length % 3 !== 0) return [-1, -1];
  if (indices.length === 0) return [0, 2];
  let partLength = indices.length / 3;
  let part1 = "1";
  let tailZero = A.length - indices[indices.length - 1] - 1;
  let start = 1;
  let end = partLength;
  for (let i=start; i<end; i++) {
    part1 += "0".repeat(indices[i] - indices[i-1] - 1) + 1;
  }
  if (indices[end] - indices[end - 1] - 1 < tailZero) return [-1, -1];
  
  let part2 = "1";
  start = partLength + 1;
  end = partLength * 2;
  for (let i=start; i<end; i ++) {
    part2 += "0".repeat(indices[i] - indices[i-1] - 1) + 1;
  }
  if (indices[end] - indices[end - 1] - 1 < tailZero) return [-1, -1];
  if (part2 !== part1) return [-1, -1];
  
  let part3 = "1";
  start = partLength * 2 + 1;
  end = indices.length;
  for (let i=start; i<end; i ++) {
    part3 += "0".repeat(indices[i] - indices[i-1] - 1) + 1;
  }
  if (part3 !== part1) return [-1, -1];
  let l = indices[partLength - 1] + tailZero;
  let r = indices[partLength * 2 - 1] + 1 + tailZero;
  return [l, r];
};

// Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Three Equal Parts.
// Memory Usage: 42.2 MB, less than 100.00% of JavaScript online submissions for Three Equal Parts.

