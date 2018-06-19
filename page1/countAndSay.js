/**
* Count and Say
* https://leetcode.com/problems/count-and-say/description/
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let num = "1";
  let count = 1;
  let readCount, readNum, tempNum, i;
  while (count < n) {
    readCount = 1;
    readNum = num[0];
    tempNum = "";
    for (i = 1; i < num.length; i++) {
      if (readNum !== num[i]) {
        tempNum = tempNum + readCount + readNum;
        readCount = 1;
        readNum = num[i];
      } else {
        readCount ++;
      }
    }
    tempNum = tempNum + readCount + readNum;
    num = tempNum;
    count ++;
  }
  return num;
};

console.log(countAndSay(5));
