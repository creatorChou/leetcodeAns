/**
* 960. Delete Columns to Make Sorted III
* https://leetcode.com/problems/delete-columns-to-make-sorted-iii/
*/

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let dp = new Array(A.length);
  let n = A[0].length;
  for (let i = 0; i < A.length; i ++) {
    dp[i] = getSortedSubstr(A[i]);
  }
  let rest = new Set(dp[0]);
  for (let i = 1; i < A.length; i ++) {
    let currArr = dp[i];
    let newRest = new Set();
    for (let j = 0; j < currArr.length; j ++) {
      if (rest.has(currArr[j])) {
        newRest.add(currArr[j]);
      }
    }
    if (newRest.size === 0) {
      return n - 1;
    } else {
      rest = newRest;
    }
  }
  if (rest.size === 0) {
    return n - 1;
  }
  let maxLength = 0;
  rest.forEach(val => maxLength = Math.max(maxLength, val.length));
  return n - maxLength;
};

function getSortedSubstr(str) {
  let res = [];
  for (let i = 0; i < str.length; i ++) {
    let newStrs = [];
    for (let idx of res) {
      let lastIdx = idx[idx.length - 1];
      if (str[i] >= str[lastIdx]) newStrs.push(idx + i);
    }
    newStrs.push(i + "");
    res = res.concat(newStrs);
  }
  return res;
}

// time error

console.log(minDeletionSize(["aaaabaa"]));    // 1
console.log(minDeletionSize(["babca","bbazb"]))   // 3
console.log(minDeletionSize(["edcba"]))  // 4
console.log(minDeletionSize(["ghi","def","abc"]))  // 0
console.log(minDeletionSize(["deehdecfcgegffegghfhfaagcaaffbfahcfaghgdfggbbddbff","dchhgcbahdbdgbbaafhbgfggcbebfacdebhfgcfaafcgbgbggg","hehdggagfabdfbhegebhaaddcaghhegeegdgegagehhdhheecd","fhbbagbdffedafacbeahddbgagggdafceeabaffhhhhcedcfbh","caaefgdgefeahcgfgccaacdfabdgdbdhdbhbhfadbeaegbbdce","habgbahaeebeacccbdhfhddegfebheeffdbcbgfahhgbhcheeb","gfaaedgcachcehgdghebbhegbfagdgcdcgebddbdccbedbbhcd","badaebdbdgeadbfgchaegaddgdhdgaeaaedagacgbdecfdghca","eefcceffcggeefbecaceadbdcfccgbfgffgahfgeebafdcfhhb","aeebdahabfecbafgbcchbhdeecaadaccbahghcbdcfaeagehha"]))
// console.log(getSortedSubstr("aaaabaa"));

/**
 * @param {string[]} A
 * @return {number}
 */
function minDeletionSize(A) {
  
}

