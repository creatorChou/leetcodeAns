/**
* 1036. Escape a Large Maze
* https://leetcode.com/problems/escape-a-large-maze/
*/

/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
  if (blocked.length < 2) return true;
  let traveled = new Map();
  traveled.set(source[0], new Set());
  traveled.get(source[0]).add(source[1]);
  let blockedMap = new Map();
  for (let pos of blocked) {
    if (!blockedMap.has(pos[0])) {
      blockedMap.set(pos[0], new Set());
    }
    blockedMap.get(pos[0]).add(pos[1]);
  }
  let queue = [source];
  while (queue.length > 0) {
    let n = queue.length;
    for (let pos of queue) {
      if (pos[0] === target[0] && pos[1] === target[1]) {
        return true;
      }
    }
    for (let i = 0; i < n; i ++) {
      let pos = queue.shift();
      queue = queue.concat(getAdjacentPositions(pos, blockedMap, traveled));
    }
    
  }
  return false;
};

function getAdjacentPositions(pos, blockedMap, traveled) {
  let results = [];
  let pos1 = [pos[0]-1, pos[1]];
  let pos2 = [pos[0]+1, pos[1]];
  let pos3 = [pos[0], pos[1]-1];
  let pos4 = [pos[0], pos[1]+1];
  if (isPositonValid(pos1, blockedMap, traveled)) {
    results.push(pos1);
    if (!traveled.has(pos1[0])) traveled.set(pos1[0], new Set());
    traveled.get(pos1[0]).add(pos1[1]);
  }
  if (isPositonValid(pos2, blockedMap, traveled)) {
    results.push(pos2);
    if (!traveled.has(pos2[0])) traveled.set(pos2[0], new Set());
    traveled.get(pos2[0]).add(pos2[1]);
  }
  if (isPositonValid(pos3, blockedMap, traveled)) {
    results.push(pos3);
    if (!traveled.has(pos3[0])) traveled.set(pos3[0], new Set());
    traveled.get(pos3[0]).add(pos3[1]);
  }
  if (isPositonValid(pos4, blockedMap, traveled)) {
    results.push(pos4);
    if (!traveled.has(pos4[0])) traveled.set(pos4[0], new Set());
    traveled.get(pos4[0]).add(pos4[1]);
  }
  return results;
}

function isPositonValid(pos, blockedMap, traveled) {
  let MIN = 0;
  let MAX = 10 ** 6 - 1;
  if (pos[0] < MIN || pos[0] > MAX || pos[1] < MIN || pos[1] > MAX) return false;
  if (traveled.has(pos[0])) {
    if (traveled.get(pos[0]).has(pos[1])) return false;
  }
  if (blockedMap.has(pos[0])) {
    if (blockedMap.get(pos[0]).has(pos[1])) return false;
  }
  return true;
}

// Time Limit Exceeded
