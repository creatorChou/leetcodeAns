/**
*  405. Convert a Number to Hexadecimal
*  https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
*/

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) return "0";
  let binary = "";
  for (let i = 0; i < 32; i ++) {
    let bit = num & 1;
    binary = bit + binary;
    num >>>= 1;
  }
  console.log(binary)
  let power = 3,
      temp = 0,
      hex = "";
  for (let i = 0; i < binary.length; i ++) {
    if (binary[i] === "1") {
      temp += Math.pow(2, power);
    }
    power --;
    if (power < 0) {
      power = 3;
      if (temp < 10) {
        hex += temp;
      } else {
        hex += String.fromCodePoint(temp + 87);
      }
      temp = 0;
    }
  }
  let start = 0;
  while (hex[start] === "0") start ++;
  return hex.slice(start);
};

console.log(toHex(-10));

// beat 98.08% !!
