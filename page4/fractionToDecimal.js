/**
* 166. Fraction to Recurring Decimal
* https://leetcode.com/problems/fraction-to-recurring-decimal/description/
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  let plusMinus = "";
  if (numerator * denominator < 0) {
    plusMinus = "-";
  }
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  let res = [Math.floor(numerator/denominator), "."];
  let numerators = new Map();
  let division, index;
  numerator %= denominator;
  numerator *= 10;
  while (numerator !== 0) {
    if (numerators.has(numerator)) {
      res.push(")");
      index = numerators.get(numerator);
      res[index] = "(" + res[index];
      break;
    } else {
      division = Math.floor(numerator/denominator);
      res.push(division);
      numerators.set(numerator, res.length - 1);
      numerator %= denominator;
      numerator *= 10;
    }
  }
  if (res[res.length - 1] === ".") {
    res.pop();
  }
  return plusMinus + res.join("");
};

console.log(fractionToDecimal(50,8));
