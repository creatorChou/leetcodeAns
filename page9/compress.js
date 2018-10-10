/**
* 443. String Compression
* https://leetcode.com/problems/string-compression/description/
*/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let countNum = 1, signIndex = 0;
  for (let i = 1; i <= chars.length; i ++) {
    if (chars[i] === chars[i - 1]) {
      countNum ++;
    } else {
      chars[signIndex] = chars[i - 1];
      if (countNum === 1) {
        signIndex ++;
      } else {
        signIndex ++;
        let str = countNum + "";
        for (let j = 0; j < str.length; j ++, signIndex ++) {
          chars[signIndex] = str[j];
        }
      }
      countNum = 1;
    }
  }
  chars.length = signIndex;
  return signIndex;
};

let arr = ["a","a","b","b","c","c","c"];

console.log(compress(arr));

console.log(arr);
