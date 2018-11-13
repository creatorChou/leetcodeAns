/**
* 524. Longest Word in Dictionary through Deleting
* https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
*/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  let memo = new Array(d.length).fill(0);
  for (let i = 0; i < s.length; i ++) {
    for (let j = 0; j < d.length; j ++) {
      let idx = memo[j];
      if (s[i] === d[j][idx]) {
        memo[j] ++;
      }
    }
  }
  let result = "";
  for (let i = 0; i < d.length; i ++) {
    if (memo[i] === d[i].length) {
      if (d[i].length > result.length) {
        result = d[i];
      } else if (d[i].length === result.length) {
        if (d[i] < result) {
          result = d[i];
        }
      }
    }
  }
  return result;
};

function findLongestWord2 (s, d) {
  d.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    if (b < a) {
      return 1;
    } else {
      return -1;
    }
  });
  for (let str of d) {
    let idx = 0;
    for (let i = 0; i < s.length; i ++) {
      if (str[idx] === s[i]) idx ++;
      if (idx === str.length) return str;
    }
  }
  return "";
}

console.log(findLongestWord2("abpcplea", ["ale","applea","monkey","plea"]))
