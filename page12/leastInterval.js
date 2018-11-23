/**
* 621. Task Scheduler
* https://leetcode.com/problems/task-scheduler/
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  if (n === 0) return tasks.length;
  if (tasks.length === 0) return 0;
  let map = {};
  for (let t of tasks) {
    if (map[t]) {
      map[t] ++;
    } else {
      map[t] = 1;
    }
  }
  let arr = [];
  for (let t in map) {
    arr.push(map[t]);
  }
  arr.sort((a, b) => b - a);
  let result = [];
  for (let num of arr) {
    for (let i = 0; i < num; i ++) {
    }
  }
  return count;
};
