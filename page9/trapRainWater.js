/**
* 406. Queue Reconstruction by Height
* https://leetcode.com/problems/queue-reconstruction-by-height/
*/

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  if (!heightMap || !heightMap[0]) return 0;
  let sum = 0;
  let dp = [];
  let len = heightMap[0].length;
  for (let i = 0; i < heightMap.length; i ++) {
    dp[i] = new Array(len);
    dp[i].fill(0);
  }
  // 横
  for (let i = 1; i < heightMap.length - 1; i ++) {
    let l = 0,
        r = len - 1,
        level = 0;
    while (l < r) {
      if (heightMap[i][l] < heightMap[i][r]) {
        level = Math.max(level, heightMap[i][l]);
        dp[i][l] = level - heightMap[i][l];
        sum += dp[i][l];
        l ++;
      } else {
        level = Math.max(level, heightMap[i][r]);
        dp[i][r] = level - heightMap[i][r];
        sum += dp[i][r];
        r --;
      }
    }
  }

  // 直
  for (let i = 1; i < len - 1; i ++) {
    let l = 0,
        r = heightMap.length - 1,
        level = 0;
    while (l < r) {
      if (heightMap[l][i] < heightMap[r][i]) {
        level = Math.max(level, heightMap[l][i]);
        let water = level - heightMap[l][i];
        if (water < dp[l][i]) {
          sum -= dp[l][i] - water;
          dp[l][i] -= water;
        }
        l ++;
      } else {
        level = Math.max(level, heightMap[r][i]);
        let water = level - heightMap[r][i];
        if (water < dp[r][i]) {
          sum -= dp[r][i] - water;
          dp[r][i] -= water;
        }
        r --;
      }
    }
  }
  console.log(dp);
  return sum;
};

// wrong!

// let matrix = [
//   [1,4,3,1,3,2],
//   [3,2,1,3,2,4],
//   [2,3,3,2,3,1]
// ]
let matrix = [
  [12,13,1,12],
  [13,4,13,12],
  [13,8,10,12],
  [12,13,12,12],
  [13,13,13,13]
]

console.log(trapRainWater(matrix))


function trapRainWater2 (heightMap) {
  let tracked = [];
  for (let i = 0; i < heightMap.length; i ++) {
    tracked[i] = new Array(heightMap[i].length);
    tracked[i].fill(false);
  }
  for (let i = 1; i < heightMap.length - 1; i ++) {
    for (let j = 1; j < heightMap[i].length - 1; j ++) {
      if (tracked[i][j]) continue;
      let heights = [];
      let maxHeight = BFS(heightMap, tracked, heights, i, j);
    }
  }
}

function BFS (heightMap, tracked, heights, i, j) {
  let len = heightMap[0].length;
  if (i === 0 || i === heightMap.length - 1 || j === 0 || j === len - 1) {
    // edge
    return heightMap[i][j];
  }
  
}
