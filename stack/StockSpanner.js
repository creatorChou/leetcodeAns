/**
* 901. Online Stock Span
* https://leetcode.com/problems/online-stock-span/
*/

class StockSpanner {
  constructor () {
    this.prices = [];
    this.outCount = [];
  }

  next(price) {
    let out = 1;
    let prices = this.prices;
    let outCount = this.outCount;
    while (prices.length > 0 && prices[prices.length - 1] <= price) {
      prices.pop();
      out += outCount.pop();
    }
    prices.push(price);
    outCount.push(out);
    return out;
  }
}

// Runtime: 348 ms, faster than 100.00% of JavaScript online submissions for Online Stock Span.
// Memory Usage: 65.6 MB, less than 72.73% of JavaScript online submissions for Online Stock Span.
