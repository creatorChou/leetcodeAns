/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var i,
      j,
      searchMaxLength = 0,
      canSearchBefore = true,
      canSearchAfter = true,
      substringLength = 0,
      charSet = new Set();

  for(i=0; i<s.length; i++) {
    if (s.length - i > i) {
      searchMaxLength = s.length - i;
    } else {
      searchMaxLength = i;
    }
    charSet.add(s[i]);
    canSearchBefore = true;
    canSearchAfter = true;
    for (j = 1; j < searchMaxLength; j++) {
      if (!canSearchBefore && !canSearchAfter) {
        break;
      }
      if (canSearchBefore) {
        if (s[i - j] && !charSet.has(s[i - j])) {
          charSet.add(s[i - j]);
        } else {
          canSearchBefore = false;
        }
      }
      if (canSearchAfter) {
        if (s[i + j] && !charSet.has(s[i + j])) {
          charSet.add(s[i + j]);
        } else {
          canSearchAfter = false;
        }
      }
    }
    if (substringLength < charSet.size) {
      substringLength = charSet.size;
    }
    charSet.clear();
  }

  return substringLength;
};

var len = lengthOfLongestSubstring("asjrgapa");

console.log(len)
