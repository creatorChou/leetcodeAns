/**
* 331. Verify Preorder Serialization of a Binary Tree
* https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/
*/

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  if (preorder === "#") return true;
  preorderArr = preorder.split(",");
  let stack = [], val;
  while (preorderArr.length > 0) {
    val = preorderArr.shift();
    if (stack.length > 0) {
      stack.pop();
    } else {
      if (val === "#" || preorder.indexOf(val) !== 0) {
        return false;
      }
    }
    if (val !== "#") {
      stack.push(val);
      stack.push(val);
    }
  }
  return stack.length === 0;
};

console.log(isValidSerialization("9,3,4,#,#,#,1,#,#,2,#,6,#,#"))

var isValidSerialization2 = function(preorder) {
  preorder = preorder.split(",");
  let diff = 1;
  for (let i = 0; i < preorder.length; i ++) {
    if (--diff < 0) return false;
    if (preorder[i] !== "#") {
      diff += 2;
    }
  }
  return diff === 0;
}

console.log(isValidSerialization2("9,3,4,#,#,1,#,#,2,#,6,#,#"))
