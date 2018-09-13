/**
* 394. Decode String
* https://leetcode.com/problems/decode-string/description/
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let res = s.replace(/([0-9]+)\[([A-Za-z]+)\]/g, (match, p1, p2) => {
    let result = "";
    for (let i = 0; i < parseInt(p1); i ++) {
      result += p2;
    }
    return result;
  });
  if (res.indexOf("[") !== -1) {
    return decodeString(res);
  } else {
    return res;
  }
};

console.log(decodeString("2[abc]3[cd]ef"));

var decodeString2 = function(s) {
  let freqStack = [],
      wordStack = [],
      result = "",
      charCode,
      canAppendNumber = false;

  for (let i = 0; i < s.length; i ++) {
    charCode = s.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      // number
      if (canAppendNumber) {
        freqStack[freqStack.length - 1] += s[i];
      } else {
        freqStack.push(s[i]);
        canAppendNumber = true;
      }
    } else if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
      // letter
      if (wordStack.length === 0) {
        result += s[i];
      } else {
        wordStack[wordStack.length - 1] += s[i];
      }
    } else if (charCode === 91) {
      // [
      canAppendNumber = false;
      wordStack.push("");
    } else if (charCode === 93) {
      // ]
      let freq = parseInt(freqStack.pop());
      let word = wordStack.pop();
      let res = "";
      for (let j = 0; j < freq; j ++) {
        res += word;
      }
      if (wordStack.length === 0) {
        result += res;
      } else {
        wordStack[wordStack.length - 1] += res;
      }
    }
  }

  return result;
};

console.log(decodeString2("2[abc]3[cd]ef"));
