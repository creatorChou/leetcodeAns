/**
* Rotate Array
* https://leetcode.com/problems/integer-to-roman/description/
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (num < 1 || num > 3999) return "";
  let thousands = Math.floor(num / 1000);
  let hundreds = Math.floor(num % 1000 / 100);
  let tens = Math.floor(num % 100 / 10);
  let ones = Math.floor(num % 10);

  let roman = "";
  let i;

  for (i = 0; i < thousands; i++) {
    roman += "M";
  }

  if (hundreds < 4) {
    for (i = 0; i < hundreds; i++) {
      roman += "C";
    }
  } else if (hundreds === 4) {
    roman += "CD";
  } else if (hundreds > 4 && hundreds < 9) {
    roman += "D";
    for (i = 0; i < hundreds - 5; i++) {
      roman += "C";
    }
  } else if (hundreds === 9) {
    roman += "CM";
  }

  if (tens < 4) {
    for (i = 0; i < tens; i++) {
      roman += "X";
    }
  } else if (tens === 4) {
    roman += "XL";
  } else if (tens > 4 && tens < 9) {
    roman += "L";
    for (i = 0; i < tens - 5; i++) {
      roman += "X";
    }
  } else if (tens === 9) {
    roman += "XC";
  }

  if (ones < 4) {
    for (i = 0; i < ones; i++) {
      roman += "I";
    }
  } else if (ones === 4) {
    roman += "IV";
  } else if (ones > 4 && ones < 9) {
    roman += "V";
    for (i = 0; i < ones - 5; i++) {
      roman += "I";
    }
  } else if (ones === 9) {
    roman += "IX";
  }

  return roman;
};

let arr = [];
for (let i=1; i<=3999; i++) {
  arr.push(intToRoman(i));
}

console.log(arr);
