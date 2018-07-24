/**
* 187. Repeated DNA Sequences
* https://leetcode.com/problems/repeated-dna-sequences/description/
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let map = {}, ss;
  for (let i = 0; i <= s.length - 10; i ++) {
    ss = s.slice(i, i + 10);
    if (!map[ss]) {
      map[ss] = 1;
    } else {
      map[ss] ++;
    }
  }
  let res = [];
  console.log(map);
  for(let j in map) {
    if (map[j] > 1) {
      res.push(j);
    }
  }
  return res;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
