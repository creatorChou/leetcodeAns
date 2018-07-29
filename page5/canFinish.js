/**
* 207. Course Schedule
* https://leetcode.com/problems/course-schedule/description/
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let courses = new Array(numCourses).fill(true),
      course, pre, i, j;
  // 生成graph
  for (i = 0; i < prerequisites.length; i ++) {
    course = prerequisites[i][1];
    pre = prerequisites[i][0]
    if (courses[course] === true) {
      courses[course] = [pre];
    } else {
      courses[course].push(pre);
    }
  }
  console.log(courses)
  for (i = 0; i < courses.length; i ++) {
    if (courses[i] === true) continue;
    if(!check(courses, [i])) {
      return false;
    }
  }

  return true;
};

function check(courses, waiting) {
  let prerequisites = courses[waiting[waiting.length - 1]];
  let index;
  for (let i = 0; i < prerequisites.length; i ++) {
    index = prerequisites[i];
    if (courses[index] === true) continue;
    if (waiting.indexOf(index) !== -1) return false;
    waiting.push(index);
    if (!check(courses, waiting)) {
      return false;
    }
  }
  courses[waiting.pop()] = true;
  return true;
}

console.log(canFinish(3, [[1,0],[2,0],[0,2]]));

// console.log(canFinish(3, [[0,1],[0,2],[1,2]]));
// console.log(canFinish(8, [[1,0],[2,6],[1,7],[6,4],[7,0],[0,5]]));
