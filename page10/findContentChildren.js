/**
* Assign Cookies
* https://leetcode.com/problems/assign-cookies/
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let content = 0;
  for (let i = 0; i < s.length && content < g.length; i ++) {
    if (s[i] < g[content]) continue;
    content ++;
  }
  return content;
};

findContentChildren([1,2,3], [1,1]);
