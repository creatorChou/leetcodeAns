/**
* Validate IP Address
* https://leetcode.com/problems/validate-ip-address/
*/

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (IP.length > 15) {
    if (isIPv6(IP)) {
      return "IPv6"
    }
  } else if (IP.length < 15) {
    if (isIPv4(IP)) {
      return "IPv4"
    }
  } else {
    if (IP[1] === ":") {
      if (isIPv6(IP)) {
        return "IPv6";
      }
    } else {
      if (isIPv4(IP)) {
        return "IPv4"
      }
    }
  }
  return "Neither"
};

function isIPv4(IP) {
  let parts = IP.split(".");
  if (parts.length !== 4) return false;
  for (let i = 0; i < parts.length; i ++) {
    let num = parseInt(parts[i]);
    if (parts[i] !== String(num) || num !== num || num < 0 || num > 255) return false;
  }
  return true;
}

function isIPv6(IP) {
  let parts = IP.split(":");
  if (parts.length !== 8) return false;
  for (let i = 0; i < parts.length; i ++) {
    if (!/^[A-Fa-f0-9]{1,4}$/.test(parts[i])) return false;
    let num = parseInt(parts[i], 16);
    if (num < 0 || num > 65535) return false;
  }
  return true;
}

