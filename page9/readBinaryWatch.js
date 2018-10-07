/**
*	401. Binary Watch
*	https://leetcode.com/problems/binary-watch/description/
*/

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
	if (num >= 10) return [];
  let h = [1, 2, 4, 8],
  		m = [1, 2, 4, 8, 16, 32],
  		set = new Set();
  for (let i = 0; i <= num; i ++) {
  	let hours = [],
  			minutes = [];
  	getHours(h, hours, 0, 0, 0, i);
  	getMinutes(m, minutes, 0, 0, 0, num - i);
  	for (let j = 0; j < hours.length; j ++) {
  		for (let k = 0; k < minutes.length; k ++) {
  			set.add(hours[j] + ":" + minutes[k]);
  		}
  	}
  }
  return Array.from(set);
};

function getHours (h, res, start, choosed, count, max) {
	if (count === max) {
		let val = choosed + "";
		if (choosed <= 11 && res.indexOf(val) === -1) {
			res.push(val);
		}
		return;
	}
	for (let i = start; i < h.length; i ++) {
		choosed += h[i];
		getHours(h, res, i + 1, choosed, count + 1, max);
		choosed -= h[i];
	}
}

function getMinutes (m, res, start, choosed, count, max) {
	if (count === max) {
		let val;
		if (choosed < 10) {
			val = "0" + choosed;
		} else {
			val = "" + choosed;
		}
		if (choosed < 60 && res.indexOf(val) === -1) {
			res.push(val);
		}
		return;
	}
	for (let i = start; i < m.length; i ++) {
		choosed += m[i];
		getMinutes(m, res, i + 1, choosed, count + 1, max);
		choosed -= m[i];
	}
}

console.log(readBinaryWatch(1));
