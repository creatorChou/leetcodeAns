/**
* Matchsticks to Square
* https://leetcode.com/problems/matchsticks-to-square/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
  if (!nums || nums.length < 4) return false;
  let sum = 0;
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
  }
  if (sum === 0 || sum % 4 !== 0) return false;
  let sideLength = sum / 4;

  let allScheme = [];
  backtrack(nums, 0, sideLength, allScheme, [], 0);
  if (allScheme.length < 4) return false;
  
  let used = new Array(nums.length).fill(false);
  return DFS(allScheme, used, 0, 0);
};

/**
* @param {number[]} nums: all matches
* @param {number} length: the sum of selected matches
* @param {number} target: side length of the square
* @param {number[][]} allScheme: we use this to save all array of legal combinations
* @param {number[]} now: the combinations we are operating now(all this array are indices)
* @param {number} start: the first index of the loop
*/
function backtrack (nums, length, target, allScheme, now, start) {
  if (length >= target) {
    if (length === target) {
      allScheme.push(now.slice());
    }
    return;
  }
  for (let i = start; i < nums.length; i ++) {
    now.push(i);
    backtrack(nums, length + nums[i], target, allScheme, now, i + 1);
    now.pop();
  }
}

/**
* @param {number[][]} allScheme: we use this to save all array of legal combinations
* @param {boolean[]} used: to memo which match we have been used
* @param {number} start: the first index of the loop
* @param {number} satisfied: satisfied side count
*/
function DFS (allScheme, used, start, satisfied) {
  if (satisfied >= 4) return true;
  for (let i = start; i < allScheme.length; i ++) {
    let pass = true;
    for (let j = 0; j < allScheme[i].length; j ++) {
      let idx = allScheme[i][j];
      if (used[idx]) {
        pass = false;
        break;
      }
    }
    if (pass) {
      let tempUsed = used.slice();
      for (let j = 0; j < allScheme[i].length; j ++) {
        let idx = allScheme[i][j];
        tempUsed[idx] = true;
      }
      if (DFS(allScheme, tempUsed, i + 1, satisfied + 1)) {
        return true;
      }
    }
  }
  return false;
}

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Matchsticks to Square.
