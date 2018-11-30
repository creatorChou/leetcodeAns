/**
* 592. Fraction Addition and Subtraction
* https://leetcode.com/problems/fraction-addition-and-subtraction/
*/

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  if (expression[0] !== "-") expression = "+" + expression;
  let fractions = [];
  let sign, fraction = "";
  for (let c of expression) {
    if (c === "+" || c === "-") {
      if (fraction !== "") {
        let arr = fraction.split("/");
        arr[0] = parseInt(arr[0]);
        arr[1] = parseInt(arr[1]);
        if (sign === "-") {
          arr[0] = -arr[0];
        }
        fractions.push(arr);
      }
      fraction = "";
      sign = c;
    } else {
      fraction += c;
    }
  }
  let lastFraction = fraction.split("/");
  lastFraction[0] = parseInt(lastFraction[0]);
  lastFraction[1] = parseInt(lastFraction[1]);
  if (sign === "-") {
    lastFraction[0] = -lastFraction[0];
  }
  for (let frac of fractions) {
    lastFraction[0] *= frac[1];
    frac[0] *= lastFraction[1];
    lastFraction[0] += frac[0];
    lastFraction[1] = frac[1] * lastFraction[1];
  }
  let lastSign = lastFraction[0] < 0 ? "-" : "";
  lastFraction[0] = Math.abs(lastFraction[0]);
  for (let i = lastFraction[0]; i > 1; i --) {
    if (lastFraction[1] % i === 0 && lastFraction[0] % i === 0) {
      lastFraction[1] /= i;
      lastFraction[0] /= i;
      i = lastFraction[0];
    }
  }
  if (lastFraction[0] === 0) lastFraction[1] = 1;
  return lastSign + lastFraction[0] + "/" + lastFraction[1];
};
