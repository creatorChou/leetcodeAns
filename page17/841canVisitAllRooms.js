/**
* 841. Keys and Rooms
* https://leetcode.com/problems/keys-and-rooms/
*/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let idx = 0;
  function addRoom() {
    let arr = rooms[idx];
    rooms[idx] = false;
    for (let num of arr) {
      if (rooms[num] !== false) {
        idx = num;
        addRoom();
      }
    }
  }
  addRoom();
  for (let room of rooms) {
    if (room !== false) return false;
  }
  return true;
};
