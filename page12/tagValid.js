/**
* 591. Tag Validator
* https://leetcode.com/problems/tag-validator/
*/

/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  let newCode = code.replace(/<\!\[CDATA\[.*\]\]>/, "");
  let tagStack = [];
  let tagName = "";
  let tagAppending = false;
  let isEndTag = false;
  let tagCount = 0;
  let hasCdData = code !== newCode;
  for (let c of newCode) {
    switch(c) {
      case "<":
        if (tagAppending) return false;
        tagAppending = true;
        break;
      case ">":
        if (tagAppending) {
          if (isEndTag) {
            if (tagStack.pop() !== tagName) return false;
            tagCount ++;
          } else {
            if (/^[A-Z]{1,9}$/.test(tagName)) {
              tagStack.push(tagName);
            } else {
              return false;
            }
          }
          isEndTag = false;
          tagAppending = false;
          tagName = "";
        }
        break;
      case "/":
        if (tagAppending) {
          if (tagName === "") {
            isEndTag = true;
          } else {
            return false;
          }
        }
        break;
      default:
        if (tagAppending) {
          tagName += c;
        }
        break;
    }
  }
  tagContent = newCode.replace(/<\/{0,1}[A-Z]+>/g, "");
  if (tagContent.length === 0) {
    if (!hasCdData && tagCount <= 1) return false;
  } else {
    if (!/^([0-9a-zA-Z]|<|>|\/|\!|\[|\]|\s)+$/.test(tagContent)) {
      return false;
    }
  }
  return tagStack.length === 0 && tagCount > 0;
};
