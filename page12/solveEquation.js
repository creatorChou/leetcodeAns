/**
* 640. Solve the Equation
* https://leetcode.com/problems/solve-the-equation/
*/

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  let coefficient = 0, constant = 0;
  let temp = "";
  let sign = 1;
  let flip = 1;
  for (let char of equation) {
    switch (char) {
      case "+":
        if (temp.length > 0) {
          constant += sign * temp * (-flip);
          temp = "";
        }
        sign = 1;
        break;
      case "-":
        if (temp.length > 0) {
          constant += sign * temp * (-flip);
          temp = "";
        }
        sign = -1;
        break;
      case "x":
        if (temp.length === 0) {
          temp = 1;
        }
        coefficient += sign * temp * flip;
        temp = "";
        break;
      case "=":
        if (temp.length > 0) {
          constant += sign * temp * (-flip);
        }
        temp = "";
        sign = 1;
        flip = -1;
        break;
      default:
        temp += char;
        break;
    }
  }
  if (temp.length > 0) {
    constant += sign * temp * (-flip);
  }
  if (coefficient === 0) {
    if (constant === 0) {
      return "Infinite solutions";
    } else {
      return "No solution"
    }
  }
  return "x=" + constant / coefficient;
};

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Solve the Equation.
