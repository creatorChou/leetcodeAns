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
  let map = {};
  for (let i = 0; i < equations.length; i ++) {
    if (!map[equations[i][0]]) {
      map[equations[i][0]] = {}
    }
    map[equations[i][0]][equations[i][1]] = values[i];
  }
  let result = [];
  for (let i = 0; i < queries.length; i ++) {
    let obj = map[queries[i][0]];
    if(!obj) {
      result[i] = -1;
    } else {
      if (queries[i][0] === queries[i][1]) {
        result[i] = 1;
        continue;
      }
      if (obj[queries[i][1]] != null) {
        result[i] = obj[queries[i][1]];
      } else if (map[queries[i][1]] != null && map[queries[i][1]][queries[i][0]] != null) {
        if (map[queries[i][1]][queries[i][0]] !== 0) {
          result[i] = 1 / map[queries[i][1]][queries[i][0]];
        } else {
          result[i] = 0;
        }
      } else {
        result[i] = -1;
        for (let j in obj) {
          if (map[j] != null && map[j][queries[i][1]] != null) {
            found = true;
            result[i] = map[j][queries[i][1]] * obj[j];
            break;
          }
        }
      }
    }
  }
  return result;
};

let equations = [ ["a", "b"], ["b", "c"] ],
    values = [2.0, 3.0],
    queries = [ ["a", "c"], ["b", "c"], ["a", "e"], ["a", "a"], ["x", "x"] ];

console.log(calcEquation(equations, values, queries))

// [["a","b"],["b","c"],["bc","cd"]]
// [1.5,2.5,5.0]
// [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
