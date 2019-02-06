/**
* 860. Lemonade Change
* https://leetcode.com/problems/lemonade-change/
*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  for (let pay of bills) {
    switch (pay) {
      case 5:
        five ++;
        break;
      case 10:
        five --;
        ten ++;
        break;
      case 20:
        if (ten > 0) {
          ten --;
          five --;
        } else {
          five -= 3;
        }
        break;
    }
    if (five < 0 || ten < 0) return false;
  }
  return true;
};

// Runtime: 80 ms, faster than 81.82% of JavaScript online submissions for Lemonade Change.
