/**
* 811. Subdomain Visit Count
* https://leetcode.com/problems/subdomain-visit-count/
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let map = {};
  for (let info of cpdomains) {
    let infos = info.split(" ");
    let times = parseInt(infos[0]);
    let domains = infos[1].split(".");
    let dm = "";
    while (domains.length > 0) {
      dm = domains.pop() + "." + dm;
      if (map[dm] != null) {
        map[dm] += times;
      } else {
        map[dm] = times;
      }
    }
  }
  let results = [];
  for (let dm in map) {
    results.push(map[dm] + " " + dm.slice(0, dm.length - 1));
  }
  return results;
};

// Runtime: 84 ms, faster than 64.41% of JavaScript online submissions for Subdomain Visit Count.
