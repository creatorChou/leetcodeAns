/**
* 920. Number of Music Playlists
* https://leetcode.com/problems/number-of-music-playlists/
*/

/**
 * @param {number} N
 * @param {number} L
 * @param {number} K
 * @return {number}
 */
var numMusicPlaylists = function(N, L, K) {
  let mod = 10 ** 9 + 7;
  let dp = new Array(L + 1);
  for (let i = 0; i <= L; i ++) {
    dp[i] = new Array(N + 1).fill(0);
  }
  dp[0][0] = 1;
  for (let i = 1; i <= L; i ++) {
    for (let j = 1; j <= N; j ++) {
      
    }
  }
};

console.log(numMusicPlaylists(3,3,2));
