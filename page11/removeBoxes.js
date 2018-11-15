/**
* 546. Remove Boxes
* https://leetcode.com/problems/remove-boxes/
*/

/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
  let memo = "0".repeat(boxes.length);
  return dfs(boxes, {}, memo);
};

function dfs(boxes, map, memo) {
  if (map[memo] != null) return map[memo];
  let max = 0;
  for (let i = 0; i < boxes.length; i ++) {
    let start = i;
    let end = i + 1;
    let replaceStr = "1"
    while (boxes[end] === boxes[start]) {
      replaceStr += "1";
      end ++;
    }
  }
  map[memo] = max;
  return max;
}
