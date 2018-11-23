/**
* 609. Find Duplicate File in System
* https://leetcode.com/problems/find-duplicate-file-in-system/
*/

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  let contentMap = {};
  let fileRegex = /(\w+\.txt)\((\w{1,50})\)/;
  for (let path of paths) {
    let parts = path.split(" ");
    let basePath = parts[0];
    for (let j = 1; j < parts.length; j ++) {
      let fileArr = fileRegex.exec(parts[j]);
      let fileName = fileArr[1];
      let fileContent = fileArr[2];
      let absPath = basePath + "/" + fileName;
      if (contentMap[fileContent]) {
        contentMap[fileContent].push(absPath);
      } else {
        contentMap[fileContent] = [absPath];
      }
    }
  }
  let result = [];
  for (let content in contentMap) {
    if (contentMap[content].length > 1) {
      result.push(contentMap[content]);
    }
  }
  return result;
};

// Runtime: 136 ms, faster than 93.18% of JavaScript online submissions for Find Duplicate File in System.
