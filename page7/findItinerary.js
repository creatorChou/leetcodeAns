/**
* 332. Reconstruct Itinerary
* https://leetcode.com/problems/reconstruct-itinerary/description/
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let map = {};
  for (let i = 0; i < tickets.length; i ++) {
    if (map[tickets[i][0]]) {
      map[tickets[i][0]].push(tickets[i][1]);
    } else {
      map[tickets[i][0]] = [tickets[i][1]];
    }
  }
  for (let i in map) {
    map[i].sort();
  }
  let result = ["JFK"];
  while (result.length < tickets.length + 1) {
    let nextWord = result[result.length - 1];
    result.push(map[nextWord].shift());
  }
  return result;
};


console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
