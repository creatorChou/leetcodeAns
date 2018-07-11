/**
* 118. Pascal's Triangle
* https://leetcode.com/problems/pascals-triangle/description/
*/

var generate = function(numRows) {
  const result = [];
  if (numRows === 0) {
    return result;
  }
  result.push([1]);
  if (numRows === 1) {
    return result;
  }
  result.push([1, 1]);
  if (numRows === 2) {
    return result;
  }
  let prevArr, nowArr, i;
  while (result.length < numRows) {
    prevArr = result[result.length - 1];
    nowArr = [];
    for (i = 1; i < prevArr.length; i ++) {
      nowArr.push(prevArr[i] + prevArr[i - 1]);
    }
    nowArr.unshift(1);
    nowArr.push(1);
    result.push(nowArr);
  }
  return result;
};
