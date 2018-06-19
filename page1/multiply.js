/**
* Multiply Strings
* http://web.fxsp.com/sp-web/develop/#apps
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  let i, j, product, result = new Array(num1.length + num2.length).fill(0);
  for (i = num1.length - 1; i >= 0 ; i --) {
    for (j = num2.length - 1; j >= 0; j --) {
      product = num1[i] * num2[j] + result[i + j + 1];
      result[i + j] += Math.floor(product / 10);
      result[i + j + 1] = product % 10;
    }
  }
  if (result[0] === 0) {
    result.shift();
  }
  return result.join("");
};

console.log(multiply("2", "3"));
