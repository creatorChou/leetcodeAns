/**
* 752. Open the Lock
* https://leetcode.com/problems/open-the-lock/
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  if (target === "0000") return 0;
  let dead = new Set(deadends);
  if (dead.has("0000")) return -1;
  dead.add("0000");
  let queue = ["0000"];
  let map = {
    "0": ["1", "9"],
    "1": ["0", "2"],
    "2": ["1", "3"],
    "3": ["2", "4"],
    "4": ["3", "5"],
    "5": ["4", "6"],
    "6": ["5", "7"],
    "7": ["6", "8"],
    "8": ["7", "9"],
    "9": ["8", "0"]
  }
  let count = 0;
  while (queue.length > 0) {
    count ++;
    let len = queue.length;
    for (let i = 0; i < len; i ++) {
      let code = queue.shift().split("");
      for (let j = 0; j < code.length; j ++) {
        let temp = code[j];
        let arr = map[code[j]];
        let newCode;
        code[j] = arr[0];
        newCode = code.join("");
        if (newCode === target) return count;
        if (!dead.has(newCode)) {
          dead.add(newCode);
          queue.push(newCode);
        }
        code[j] = arr[1];
        newCode = code.join("");
        if (newCode === target) return count;
        if (!dead.has(newCode)) {
          dead.add(newCode);
          queue.push(newCode);
        }
        code[j] = temp;
      }
    }
  }
  return -1;
};

// Runtime: 472 ms, faster than 46.94% of JavaScript online submissions for Open the Lock.


var twoEndBFS = (deadends, target) => {
    let begin = new Set(['0000'])
    let end = new Set([target])
    deadends = new Set(deadends)
    let ret = 0
    while (begin.size > 0 && end.size > 0) {
        let tmp = new Set()
        for (let str of begin) {
            if (end.has(str)) {
                return ret
            }
            if (deadends.has(str)) {
                continue
            }
            deadends.add(str)
            let nexts = getNext(str)
            for (let next of nexts) {
                if (!deadends.has(next)) {
                    tmp.add(next)
                }
            }
        }
        ret++
        begin = end
        end = tmp
    }
    return -1
}

