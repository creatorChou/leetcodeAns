/**
* 227. Basic Calculator II
* https://leetcode.com/problems/basic-calculator-ii/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let arr = [],
      num = "";
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") {
      arr.push(parseInt(num));
      num = "";
      arr.push(s[i]);
    } else if (parseInt(s[i]) >= 0) {
      num += s[i];
    }
  }
  arr.push(parseInt(num));
  console.log(arr);
  let arr2 = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === "*") {
      arr2.push(arr2.pop() * arr[i + 1]);
      i ++;
    } else if (arr[i] === "/") {
      arr2.push(Math.floor(arr2.pop() / arr[i + 1]));
      i ++;
    } else {
      arr2.push(arr[i]);
    }
  }
  console.log(arr2);
  let res, operation;
  for (let i = 0; i < arr2.length; i ++) {
    if (arr2[i] === "+" || arr2[i] === "-") {
      operation = arr2[i];
    } else {
      if (res == null && operation == null) {
        res = arr2[i];
      } else if (operation === "+") {
        res += arr2[i];
        operation = null;
      } else if (operation === "-") {
        res -= arr2[i];
        operation = null;
      }
    }
  }
  return res;
};

console.log(calculate("1+2*5/3+6/4*2"));
