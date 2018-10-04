/**
* 399. Evaluate Division
* https://leetcode.com/problems/evaluate-division/description/
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
 
var calcEquation = function(equations, values, queries) {
  let result = [];
  for (let i = 0; i < queries.length; i ++) {
    if (queries[i][0] === queries[i][1]) {
      result[i] = -1;
      for (let j = 0; j < equations.length; j ++) {
        if (equations[j][0] === queries[i][0] || equations[j][1] === queries[i][0]) {
          result[i] = 1;
          break;
        }
      }
    } else {
      result[i] = getRelation(equations, values, [], queries[i][0], queries[i][1]);
    }
  }
  return result;
};


function getRelation (equations, values, tracked, first, second) {
  if (tracked.length === equations.length) {
    return -1;
  }
  let newFirsts = [],
      newSeconds = [],
      firstVals = [],
      secondVals = [],
      firstTracked = [],
      secondTracked = [];
  for (let i = 0; i < equations.length; i ++) {
    if (tracked.indexOf(i) !== -1) continue;
    let equation = equations[i];
    if (equation[0] === first) {
      if (equation[1] === second) {
        return values[i];
      }
      newFirsts.push(equation[1]);
      firstVals.push(values[i]);
      firstTracked.push(i);
    }
    if (equation[1] === first) {
      if (equation[0] === second) {
        return 1 / values[i];
      }
      newFirsts.push(equation[0]);
      firstVals.push(1 / values[i]);
      firstTracked.push(i);
    }
    if (equation[0] === second) {
      newSeconds.push(equation[1]);
      secondVals.push(1 / values[i]);
      secondTracked.push(i);
    }
    if (equation[1] === second) {
      newSeconds.push(equation[0]);
      secondVals.push(values[i]);
      secondTracked.push(i);
    }
  }
  if (newFirsts.length > 0 && newSeconds.length > 0) {
    for (let i = 0; i < newFirsts.length; i ++) {
      for (let j = 0; j < newSeconds.length; j ++) {
        if (newFirsts[i] === newSeconds[j]) {
          return firstVals[i] * secondVals[j];
        }
        let nextTracked = tracked.slice();
        nextTracked.push(firstTracked[i]);
        nextTracked.push(secondTracked[j]);
        let res = getRelation(equations, values, nextTracked, newFirsts[i], newSeconds[j]);
        if (res !== -1) {
          return firstVals[i] * secondVals[j] * res;
        }
      }
    }
  }
  return -1;
}

// let equations = [ ["a", "b"], ["b", "c"] ],
//     values = [2.0, 3.0],
//     queries = [ ["a", "c"], ["b", "c"], ["a", "e"], ["a", "a"], ["x", "x"] ];

let equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]],
values = [3.0,4.0,5.0,6.0],
queries = [["x5","x2"]];

console.log(calcEquation(equations, values, queries))

// [["a","b"],["b","c"],["bc","cd"]]
// [1.5,2.5,5.0]
// [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]

// [["a","b"],["c","d"]]
// [1.0,1.0]
// [["a","c"],["b","d"],["b","a"],["d","c"]]

// beat 100%!!!!
