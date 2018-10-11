/**
* 420. Strong Password Checker
* https://leetcode.com/problems/strong-password-checker/description/
*/

/**
A password is considered strong if below conditions are all met:

It has at least 6 characters and at most 20 characters.
It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
*/

/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
  let replace = 0;
      duplicate = 0,
      duplicates = [],
      kind = [false, false, false];
  for (let i = 0; i <= s.length; i ++) {
    if (s[i] === s[i - 1]) {
      duplicate ++;
    } else {
      if (duplicate >= 2) {
        duplicates.push(duplicate + 1);
      }
      duplicate = 0;
    }
    let charCode = s.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      kind[0] = true;
    }
    if (charCode >= 97 && charCode <= 122) {
      kind[1] = true;
    }
    if (charCode >= 65 && charCode <= 90) {
      kind[2] = true;
    }
  }
  let kindCount = 0;
  for (let i = 0; i < 3; i ++) {
    if (kind[i] === true) {
      kindCount ++;
    }
  }
  let duplicateCount = 0;
  for (let i = 0; i < duplicates.length; i ++) {
    duplicateCount += Math.floor(duplicates[i] / 3);
  }
  if (s.length < 6) {

  } else if (s.length > 20) {

  } else {

  }
};
