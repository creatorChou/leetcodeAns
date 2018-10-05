/**
* 393. UTF-8 Validation
* https://leetcode.com/problems/utf-8-validation/description/
*/

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  if (!data || !data.length) return false;
  let count = 0;
  let max = 0;
  for (let i = 0; i < data.length; i ++) {
    if (data[0] < 0 || data[0] >= 256) {
      return false;
    }
    let binaryStr = baseTenToBinary(data[i]);
    let headOneCount = 0;
    for (let j = 0; j < 8; j ++) {
      if (binaryStr[j] === "1") {
        headOneCount ++;
      } else {
        break;
      }
    }
    if (headOneCount > 4 || headOneCount > data.length) {
      return false;
    }
    if (headOneCount === 0) {
      if (count !== 0 || max !== 0) {
        return false;
      }
    } else if (headOneCount === 1) {
      if (count < max) {
        count ++;
        if (count === max) {
          count = 0;
          max = 0;
        }
      } else {
        return false;
      }
    } else if (headOneCount > 1) {
      if (count !== 0 || max !== 0) {
        return false;
      }
      max = headOneCount - 1;
    }
  }
  return true;
};

function baseTenToBinary (num) {
  let binary = "";
  while (num > 1) {
    binary = (num & 1) + binary;
    num >>>= 1;
  }
  binary = num + binary;
  if (binary.length < 8) {
    for (let i = binary.length; i < 8; i ++) {
      binary = "0" + binary;
    }
  }
  return binary;
}

console.log(validUtf8([250,145,145,145,145]))
