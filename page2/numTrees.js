/**
* 96. Unique Binary Search Trees
* https://leetcode.com/problems/unique-binary-search-trees/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let map = {};
  function tree(start, end) {
    if (start >= end) {
      return 1;
    }
    if (map[end - start]) {
      return map[end - start];
    }
    let total = 0;
    for (let i = start; i <= end; i ++) {
      total += tree(start, i - 1) * tree(i + 1, end);
    }
    map[end - start] = total;
    return total;
  }
  return tree(1, n);
};



console.log(numTrees(4));

// recursively 
