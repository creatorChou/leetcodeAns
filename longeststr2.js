/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let maxCount = 0,
        count = 0,
        queue = [];

    for (var i = 0; i < s.length; i++) {
        let idx = queue.indexOf(s[i]);
        if (idx === -1) {
            queue.push(s[i]);
            count = queue.length;
            if (count > maxCount) {
                maxCount = count;
            }
        } else {
            queue.splice(0, idx+1);
            queue.push(s[i])
            count = queue.length;
        }
    }
    return maxCount;
}

let res = lengthOfLongestSubstring("asjrgapa");

console.log(res);
