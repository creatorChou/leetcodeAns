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
  s = s.join("");
  if (isValid(s)) {
    return [s];
  }
  let left = 0, right = 0, prev, middle, after, j, k, str;
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === "(") left ++;
    if (s[i] === ")") right ++;
  }
  let result = [], max = 0;
  if (left <= right) {
    let start = s.indexOf("(");
    if (start === -1) {
      result.push(s.replace(/\)/g, ""));
    } else {
      prev = s.slice(0, start);
      for (let i = start + 1; i < s.length; i ++) {
        if (s[i] === ")") {
          middle = removeInvalidParentheses(s.slice(start + 1, i));
          after = removeInvalidParentheses(s.slice(i + 1));
          for (j = 0; j < middle.length; j ++) {
            for (k = 0; k < after.length; k ++) {
              str = prev + "(" + middle[j] + ")" + after[k];
              if (str.length > max) {
                result = [str];
                max = str.length;
              } else if (str.length === max) {
                if (result.indexOf(str) === -1) {
                  result.push(str);
                }
              }
            }
          }
        }
      }
    }
  } else if (left > right) {
    let end = -1;
    for (let i = s.length - 1; i >= 0; i --) {
      if (s[i] === ")") {
        end = i;
        break;
      }
    }
    if (end === -1) {
      result.push(s.replace(/\(/g, ""));
    } else {
      after = s.slice(end + 1);
      for (let i = end - 1; i >= 0; i --) {
        if (s[i] === "(") {
          prev = removeInvalidParentheses(s.slice(0, i));
          middle = removeInvalidParentheses(s.slice(i + 1, end));
          for (j = 0; j < prev.length; j ++) {
            for (k = 0; k < middle.length; k ++) {
              str = prev[j] + "(" + middle[k] + ")" + after;
              if (str.length > max) {
                result = [str];
                max = str.length;
              } else if (str.length === max) {
                if (result.indexOf(str) === -1) {
                  result.push(str);
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
};

function isValid(s) {
  let count = 0;
  for (let i = 0; i < s.length; i ++) {
    if(s[i] === "(") {
      count ++;
    } else if (s[i] === ")") {
      if (count > 0) {
        count --;
      } else {
        return false;
      }
    }
  }
  return count === 0;
}

console.log(removeInvalidParentheses("((()))((()(()"))
