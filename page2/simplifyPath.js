/**
* 71. Simplify Path
* https://leetcode.com/problems/simplify-path/description/
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let paths = path.split("/");
  let stack = [];
  for (let i = 0; i < paths.length; i ++) {
    if (paths[i] === "." || paths[i] === "") {
      continue;
    } else if (paths[i] === "..") {
      stack.pop();
    } else {
      stack.push(paths[i]);
    }
  }
  return "/" + stack.join("/");
};

console.log(simplifyPath("/home//foo/"));
