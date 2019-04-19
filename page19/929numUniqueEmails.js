 /**
 * 929. Unique Email Addresses
 * https://leetcode.com/problems/unique-email-addresses/
 */

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let map = {};
  let count = 0;
  for (let email of emails) {
    let [local, domain] = email.split("@");
    local = local.replace(/\+.*$/, "").replace(/\./g, "");
    if (!map[domain]) {
      map[domain] = new Set([local]);
      count ++;
    } else if (!map[domain].has(local)) {
      map[domain].add(local);
      count ++;
    }
  }
  return count;
};
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));

// Runtime: 104 ms, faster than 41.68% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 41.2 MB, less than 64.66% of JavaScript online submissions for Unique Email Addresses.


/**
 * @param {string[]} emai
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    return (new Set(emails.map(function (email) {
        return email.replace(/(\+.*|\..*)(?=@)/g, '');
    }))).size;
};
