/**
* 322. Coin Change
* https://leetcode.com/problems/coin-change/description/
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 // recursive
var coinChange = function(coins, amount, count) {
	if (amount === 0) return 0;
	let min = null,
			after;
	if (!count) {
		count = [];
	}
	if (count[amount] != null) {
		return count[amount];
	}
	for (let i = 0; i < coins.length; i ++) {
		if (amount > coins[i]) {
			after = coinChange(coins, amount - coins[i], count);
			if (after !== -1) {
				min = min === null ? after : Math.min(min, after);
			}
		} else if (amount === coins[i]) {
			return 1;
		}
	}
	if (min === null) {
		count[amount] = -1;
	} else {
		count[amount] = min + 1;
	}
	return count[amount];
};

// console.log(coinChange([186,419,83,408], 6249));
// [186,419,83,408]
// 6249

function coinChange2 (coins, amount) {
	if (amount === 0) return 0;
	let dp = [],
			sum = 1;
	dp[0] = 0;
	while (sum <= amount) {
		for (let i = 0; i < coins.length; i ++) {
			if (sum >= coins[i] && dp[sum - coins[i]] != null && dp[sum - coins[i]] !== -1) {
				dp[sum] = dp[sum] == null ? dp[sum - coins[i]] + 1 : Math.min(dp[sum], dp[sum - coins[i]] + 1);
			}
		}
		sum ++;
	}
	return dp[amount] || -1;
}

console.log(coinChange2([186,419,83,408], 6249));
