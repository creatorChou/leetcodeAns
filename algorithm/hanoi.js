/**
* https://baike.baidu.com/item/%E6%B1%89%E8%AF%BA%E5%A1%94/3468295#4_10
* 汉诺塔
*/

// A,B,C三根柱子, 从A柱子全部移到C
function hanoi (n, from, mid, to) {
  let count = 0;
  if (n > 0) {
    count += hanoi(n-1, from, to, mid);   // 把n-1（n上面的圆盘）全部移到中间柱子上
    console.log(`第${n}个圆盘从${from}移到了${to}`);  // 把第n个圆盘移到目标柱子上
    count ++;
    count += hanoi(n-1, mid, from, to); // 把中间柱子的圆盘全部移到第n个圆盘上面
  }
  return count;
}

console.log(hanoi(20, "A", "B", "C"));
