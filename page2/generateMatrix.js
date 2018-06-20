/**
* 59. Spiral Matrix II
* http://web.fxsp.com/sp-web/develop/#apps
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let result = new Array(n);
  for (let i = 0; i < n; i ++) {
    result[i] = new Array(n);
  }
  let x = 0,
      y = 0,
      num = 1,
      direction = "right",
      temp;
  while (num <= n * n) {
    result[y][x] = num ++;
    if (direction === "right") {
      if (x === n - 1 || typeof result[y][x + 1] !== "undefined") {
        direction = "down";
      }
    } else if (direction === "down") {
      if (y === n - 1 || typeof result[y + 1][x] !== "undefined") {
        direction = "left";
      }
    } else if (direction === "left") {
      if (x === 0 || typeof result[y][x - 1] !== "undefined") {
        direction = "up";
      }
    } else if (direction === "up") {
      if (y === 0 || typeof result[y - 1][x] !== "undefined") {
        direction = "right";
      }
    }
    if (direction === "right") {
      x ++;
    } else if (direction === "down") {
      y ++;
    } else if (direction === "left") {
      x --;
    } else if (direction === "up") {
      y --;
    }
  }
  return result;
};

console.log(generateMatrix(0));
