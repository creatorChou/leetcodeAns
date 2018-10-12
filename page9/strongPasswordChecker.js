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
  let duplicate = 0,
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
  duplicates.sort((a, b) => a - b);
  let kindCount = 0;
  for (let i = 0; i < 3; i ++) {
    if (kind[i] === true) {
      kindCount ++;
    }
  }
  console.log(s.length, kindCount, duplicates);
  if (s.length < 5) {
    return 6 - s.length;
  } else if (s.length === 5) {
    if (kindCount === 1) {
      return 2;
    } else {
      return 1;
    }
  } else if (s.length > 20) {
    let shouldDeleteCount = s.length - 20;
    let canDeleteDuplicateCount = 0;
    for (let i = 0; i < duplicates.length; i ++) {
      if (duplicates[i] > 2) {
        canDeleteDuplicateCount += duplicates[i] - 2;
      }
    }
    if (shouldDeleteCount >= canDeleteDuplicateCount) {
      return shouldDeleteCount + 3 - kindCount;
    } else {
      let shouldChangeCount1 = 0;
      let shouldDeleteCount1 = shouldDeleteCount;
      let duplicates1 = duplicates.slice();
      for (let i = 0; i < duplicates1.length; i ++) {
        while (duplicates1[i] > 2 && shouldDeleteCount1 > 0) {
          duplicates1[i] --;
          shouldDeleteCount1 --;
        }
        shouldChangeCount1 += Math.floor(duplicates1[i] / 3);
      }
      let shouldChangeCount2 = 0;
      let shouldDeleteCount2 = shouldDeleteCount;
      let duplicates2 = duplicates.slice();
      for (let i = 0; i < duplicates2.length; i ++) {
        if (shouldDeleteCount2 > 0) {
          if (duplicates2[i] > 2) {
            duplicates2[i] --;
            shouldDeleteCount2 --;
          }
          if (i === duplicates2.length - 1) {
            i = -1;
          }
        } else {
          shouldChangeCount2 += Math.floor(duplicates2[i] / 3);
        }
      }
      let shouldChangeCount = Math.min(shouldChangeCount1, shouldChangeCount2);
      return s.length - 20 + Math.max(shouldChangeCount, 3 - kindCount);
    }
  } else {
    let shouldChangeCount = 0;
    for (let i = 0; i < duplicates.length; i ++) {
      shouldChangeCount += Math.floor(duplicates[i] / 3);
    }
    return Math.max(3 - kindCount, shouldChangeCount);
  }
};

// console.log(strongPasswordChecker("AAAAAABBBBBB123456789a"));
console.log(strongPasswordChecker("aaaaabbbb1234567890ABA"));
