/**
* 966. Vowel Spellchecker
* https://leetcode.com/problems/vowel-spellchecker/
*/

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
  let capMatchList = [];
  let volMatchList = [];
  let ans = [];
  for (let word of wordlist) {
    let lower = word.toLowerCase();
    capMatchList.push(lower);
    volMatchList.push(lower.replace(/[aeiou]/g, "*"))
  }
  for (let q of queries) {
    let candidate = false;
    let candidateType = 0;
    let lower = q.toLowerCase();
    let volQuery = lower.replace(/[aeiou]/g, "*");
    for (let i = 0; i < wordlist.length; i ++) {
      let word = wordlist[i];
      let capMatch = capMatchList[i];
      let volMatch = volMatchList[i];
      if (q === word) {
        // same word
        candidate = word;
        break;
      } else if (lower === capMatch) {
        // Capitalization
        if (candidate) {
          if (candidateType === 2) {
            candidate = word;
            candidateType = 1;
          }
        } else {
          candidate = word;
          candidateType = 1;
        }
      } else if (volQuery === volMatch) {
        // Vowel Errors
        if (!candidate) {
          candidate = word;
          candidateType = 2;
        }
      }
    }
    ans.push(candidate ? candidate : "");
  }
  return ans;
};

// Runtime: 1284 ms, faster than 21.62% of JavaScript online submissions for Vowel Spellchecker.
// Memory Usage: 46.2 MB, less than 100.00% of JavaScript online submissions for Vowel Spellchecker.
