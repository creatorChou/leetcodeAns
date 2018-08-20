/**
* 301. Remove Invalid Parentheses
* https://leetcode.com/problems/remove-invalid-parentheses/description/
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  s = s.split("");
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === ")") {
      s[i] = "";
    } else if (s[i] === "(") {
      break;
    }
  }
  for (let i = s.length - 1; i >= 0; i --) {
    if (s[i] === "(") {
      s[i] = "";
    } else if (s[i] === ")") {
      break;
    }
  }
  if (isValid(s)) {
    return [s.join("")];
  }
  let left = [], right = [];
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === "(") {
      left.push(i);
    } else if (s[i] === ")") {
      right.push(i);
    }
  }
  let result = [],
      choose = [],
      diff = Math.abs(left.length - right.length),
      arr = left.length > right.length ? left : right;

  helper(result, choose, diff, arr, s);
  return result;
};

function helper(result, choose, diff, arr, s) {
  console.log(choose)
  if (choose.length === diff) {
    let ss = s.slice();
    for (let i = 0; i < choose.length; i ++) {
      ss[choose[i]] = "";
    }
    ss = ss.join("");
    if (isValid(ss) && result.indexOf(ss) === -1) {
      result.push(ss);
    }
    return;
  }
  for (let i = 0; i < arr.length; i ++) {
    if (choose.indexOf(arr[i]) === -1) {
      choose.push(arr[i]);
      helper(result, choose, diff, arr, s);
      choose.pop();
    }
  }
}

function isValid (s) {
  let stack = [];
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === "(") {
      stack.push("(");
    }
    if (s[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(removeInvalidParentheses("())(((()m)("))
