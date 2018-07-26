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
      course, dependence, i, j;
  for (i = 0; i < prerequisites.length; i ++) {
    course = prerequisites[i][1];
    dependence = prerequisites[i][0]
    if (courses[course] === true) {
      courses[course] = [dependence];
    } else {
      courses.push(dependence);
    }
  }
  
  
};
