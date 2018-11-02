/**
* Generate Random Point in a Circle
* https://leetcode.com/problems/generate-random-point-in-a-circle/
*/

class Solution {

  constructor (radius, x_center, y_center) {
    this.r = radius;
    this.x = x_center;
    this.y = y_center;
  }

  randPoint () {
    let angle = Math.random() * Math.PI * 2;
    let len = Math.sqrt(Math.random()) * this.r;
    let x = this.x + Math.cos(angle) * len;
    let y = this.y + Math.sin(angle) * len;
    return [x, y];
  }

}
