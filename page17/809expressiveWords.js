/**
* 809. Expressive Words
* https://leetcode.com/problems/expressive-words/
*/

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  let target = [];
  for (let i = 0; i < S.length; i ++) {
    if (S[i] !== S[i-1]) {
      target.push({
        val: S[i],
        count: 1
      });
    } else {
      target[target.length - 1].count ++;
    }
  }
  let regStr = "^";
  let sum = 0;
  for (let i = 0; i < target.length; i ++) {
    regStr += target[i].val;
    if (target[i].count === 2) {
      regStr += "{2}";
    } else if (target[i].count > 2) {
      regStr += "{1," + target[i].count + "}"
    }
  }
  regStr += "$";
  let reg = new RegExp(regStr);
  for (let word of words) {
    if (reg.test(word)) sum ++;
  }
  return sum;
};


expressiveWords("heeellooo", ["hello", "hi", "helo"]);
