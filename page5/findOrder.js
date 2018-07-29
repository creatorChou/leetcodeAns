/**
*	210. Course Schedule II
*	https://leetcode.com/problems/course-schedule-ii/description/
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
	let list = genGraph(numCourses, prerequisites);

	let results = [];
	for (let i = 0; i < numCourses; i ++) {
		if (list[i] === true) continue;
		getOrders(list, [i], results);
	}
};

function genGraph (num, rules) {
	let arr = new Array(num).fill(true);
	let index, rule;
	for (let i = 0; i < rules.length; i ++) {
		rule = rules[i][0];
		index = rules[i][1];
		if (arr[index] === true) {
			arr[index] = [rule];
		} else {
			arr[index].push(rule);
		}
	}
	return arr;
}

function getOrders(list, prevs, results) {
	
}
