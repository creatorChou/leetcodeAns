/**
* 816. Ambiguous Coordinates
* https://leetcode.com/problems/ambiguous-coordinates/
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function(S) {
  let results = [];
  for (let i = 2; i < S.length - 1; i ++) {
    let part1 = genNumber(S.slice(1, i));
    let part2 = genNumber(S.slice(i, S.length - 1));
    if (part1.length > 0 && part2.length > 0) {
      for (let num1 of part1) {
        for (let num2 of part2) {
          results.push(`(${num1},${num2})`);
        }
      }
    }
  }
  return results;
};

function genNumber(S) {
  if (S.length === 1) {
    return [S];
  }
  if (S[0] === "0") {
    if (S[S.length - 1] === "0") {
      return [];
    } else {
      let re = `${S[0]}.${S.slice(1)}`;
      return [re];
    }
  } else if (S[S.length - 1] === "0") {
    return [S];
  } else {
    let results = [S];
    for (let i = 1; i < S.length; i ++) {
      results.push(`${S.slice(0, i)}.${S.slice(i)}`);
    }
    return results;
  }
}

// Runtime: 84 ms, faster than 75.00% of JavaScript online submissions for Ambiguous Coordinates.
