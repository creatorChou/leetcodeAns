/**
* 316. Remove Duplicate Letters
* https://leetcode.com/problems/remove-duplicate-letters/description/
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  if (s.length === 0) return s;
  let freq = new Array(26),
      stack = [],
      index;
  freq.fill(0);
  for (let i = 0; i < s.length; i ++) {
    freq[s.codePointAt(i) - 97] ++;
  }
  stack.push(s[0]);
  freq[s.codePointAt(0) - 97] --;
  for (let i = 1; i < s.length; i ++) {
    index = s.codePointAt(i) - 97;
    freq[index] --;
    if (stack.indexOf(s[i]) !== -1) continue;
    while (stack.length > 0) {
      let topCode = stack[stack.length - 1].codePointAt() - 97;
      if (topCode < index || freq[topCode] === 0) break;
      stack.pop();
    }
    stack.push(s[i]);
  }
  return stack.join("");
};

console.log(removeDuplicateLetters("cbacdcbc"));
