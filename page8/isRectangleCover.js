/**
* 391. Perfect Rectangle
* https://leetcode.com/problems/perfect-rectangle/description/
*/

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  let xMin = Number.MAX_VALUE,
      xMax = 0,
      yMin = Number.MAX_VALUE,
      yMax = 0,
      sum = 0,
      memo = [],
      rect;

  for (let i = 0; i < rectangles.length; i ++) {
    rect = rectangles[i];
    sum += (rect[2] - rect[0]) * (rect[3] - rect[1]);
    xMin = Math.min(xMin, rect[0], rect[2]);
    xMax = Math.max(xMax, rect[0], rect[2]);
    yMin = Math.min(yMin, rect[1], rect[3]);
    yMax = Math.max(yMax, rect[1], rect[3]);
    for (let j = rect[1]; j < rect[3]; j ++) {
      if (!memo[j]) {
        memo[j] = [];
      }
      for (let k = rect[0]; k < rect[2]; k ++) {
        if (!memo[j][k]) {
          memo[j][k] = true;
        } else {
          return false;
        }
      }
    }
  }
  let area = (xMax - xMin) * (yMax - yMin);
  if(area !== sum) return false;
  for (let i = yMin; i < yMax; i ++) {
    for (let j = xMin; j < xMax; j ++) {
      if (memo[i][j] !== true) {
        return false;
      }
    }
  }
  return true;
};

// Memory Limit Exceeded

// var rectangles = [[0,0,2,2],[1,1,3,3],[2,0,3,1],[0,3,3,4]]
var rectangles =[
  [1,1,3,3],
  [3,1,4,2],
  [3,2,4,4],
  [1,3,2,4],
  [2,3,3,4]
]

console.log(isRectangleCover(rectangles));


var isRectangleCover2 = function(rectangles) {
  let xMin = Number.MAX_VALUE,
      xMax = 0,
      yMin = Number.MAX_VALUE,
      yMax = 0,
      sum = 0,
      cornerSet = new Set(),
      c1, c2, c3, c4, rect;

  for (let i = 0; i < rectangles.length; i ++) {
    rect = rectangles[i];
    sum += (rect[2] - rect[0]) * (rect[3] - rect[1]);
    xMin = Math.min(xMin, rect[0], rect[2]);
    xMax = Math.max(xMax, rect[0], rect[2]);
    yMin = Math.min(yMin, rect[1], rect[3]);
    yMax = Math.max(yMax, rect[1], rect[3]);
    c1 = rect[0] + ":" + rect[1];
    c2 = rect[2] + ":" + rect[3];
    c3 = rect[0] + ":" + rect[3];
    c4 = rect[2] + ":" + rect[1];
    console.log(c1, c2, c3, c4)
    if (cornerSet.has(c1)) {
      cornerSet.delete(c1);
    } else {
      cornerSet.add(c1);
    }
    if (cornerSet.has(c2)) {
      cornerSet.delete(c2);
    } else {
      cornerSet.add(c2);
    }
    if (cornerSet.has(c3)) {
      cornerSet.delete(c3);
    } else {
      cornerSet.add(c3);
    }
    if (cornerSet.has(c4)) {
      cornerSet.delete(c4);
    } else {
      cornerSet.add(c4);
    }
  }
  let area = (xMax - xMin) * (yMax - yMin);
  console.log(cornerSet)
  if (area !== sum) return false;
  c1 = xMin + ":" + yMin;
  c2 = xMin + ":" + yMax;
  c3 = xMax + ":" + yMin;
  c4 = xMax + ":" + yMax;
  if (!cornerSet.has(c1) || !cornerSet.has(c2) || !cornerSet.has(c3) || !cornerSet.has(c4) || cornerSet.size !== 4) {
    return false;
  }
  return true;
};

console.log(isRectangleCover2(rectangles));
