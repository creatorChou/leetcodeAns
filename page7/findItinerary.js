/**
* 332. Reconstruct Itinerary
* https://leetcode.com/problems/reconstruct-itinerary/description/
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  tickets.sort((a, b) => {
    let str1 = a[1],
        str2 = b[1],
        compare;
    for (let i = 0; i < str1.length; i ++) {
      compare = str1.codePointAt(i) - str2.codePointAt(i);
      if (compare !== 0) return compare;
    }
    return 0;
  });
  let result = ["JFK"];
  dfs(tickets, result);
  return result;
};

function dfs (tickets, arr) {
  let nextWord = arr[arr.length - 1];
  let index = 0;
  for (; index < tickets.length; index ++) {
    if (tickets[index] && tickets[index][0] === nextWord) break;
  }
  arr.push(tickets[index][1]);
  tickets[index] = null;
  if (arr.length < tickets.length + 1) {
    dfs(tickets, arr);
  }
}

console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
