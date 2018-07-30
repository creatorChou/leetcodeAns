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
	let i;
	let results = [], prevs;
	console.log(list);
	for (i = 0; i < numCourses; i ++) {
		if (list[i] !== true) continue;
		prevs = [i];
		getOrders(list, prevs, results);
	}
	console.log(results);
	let res = [];
	genOrders(results, [], [], numCourses, res);
	return res[0] || [];
};

function genGraph (num, rules) {
	let arr = new Array(num).fill(true);
	let index, rule;
	for (let i = 0; i < rules.length; i ++) {
		rule = rules[i][1];
		index = rules[i][0];
		if (arr[index] === true) {
			arr[index] = [rule];
		} else {
			arr[index].push(rule);
		}
	}
	return arr;
}

function getOrders(list, prevs, results) {
	let i, j, allMatch, hasMore = false;
	for (i = 0; i < list.length; i ++) {
		if (prevs.indexOf(i) !== -1) continue;
		allMatch = true;
		for (j = 0; j < list[i].length; j ++) {
			if (prevs.indexOf(list[i][j]) === -1) {
				allMatch = false;
				break;
			}
		}
		if (allMatch) {
			hasMore = true;
			prevs.push(i);
			getOrders(list, prevs, results);
			prevs.pop();
		}
	}
	if (!hasMore) {
		results.push(prevs.slice());
	}
}

function genOrders(results, indexes, arr, numCourses, res) {
	if (arr.length === numCourses) {
		let map = {};
		for (i = 0; i < arr.length; i ++) {
			if (!map[arr[i]]) {
				map[arr[i]] = true;
			} else {
				return;
			}
		}
		res.push(arr.slice());
		return;
	}
	let temp;
	for (let i = 0; i < results.length; i ++) {
		if (indexes.indexOf(i) !== -1) continue;
		temp = arr.concat(results[i]);
		indexes.push(i);
		genOrders(results, indexes, temp, numCourses, res);
		indexes.pop(i);
	}
}

// console.log(findOrder(4, [[3,0],[0,1]]));
console.log(findOrder(1, []));
// console.log(findOrder(8, [[1,0],[2,6],[1,7],[5,1],[6,4],[7,0],[0,5]]));
// console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
// console.log(findOrder(3, [[2,0],[2,1]]));

// time limit exceed
// get all results
