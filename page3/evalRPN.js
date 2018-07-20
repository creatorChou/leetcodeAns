/**
* 150. Evaluate Reverse Polish Notation
* https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [], num1, num2;
  for (let i = 0; i < tokens.length; i ++) {
    switch(tokens[i]) {
      case "+":
        num2 = stack.pop();
        num1 = stack.pop();
        stack.push(num1 + num2);
        break;
      case "-":
        num2 = stack.pop();
        num1 = stack.pop();
        stack.push(num1 - num2);
        break;
      case "*":
        num2 = stack.pop();
        num1 = stack.pop();
        stack.push(num1 * num2);
        break;
      case "/":
        num2 = stack.pop();
        num1 = stack.pop();
        stack.push(parseInt(num1 / num2));
        break;
      default:
        stack.push(parseInt(tokens[i]));
        break;
    }
  }
  return stack.pop();
};
