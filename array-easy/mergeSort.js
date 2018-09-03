/**
* merge sort
* https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%BC%E3%82%B8%E3%82%BD%E3%83%BC%E3%83%88
*/

function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length - 1);
}

function _mergeSort(arr, start, end) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  _mergeSort(arr, start, mid);
  _mergeSort(arr, mid + 1, end);

  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let container = [],
      l = start,
      r = mid + 1;

  while (container.length < end - start + 1) {
    if (l === mid + 1) {
      container.push(arr[r]);
      r ++;
    } else if (r === end + 1) {
      container.push(arr[l]);
      l ++;
    } else {
      if (arr[l] < arr[r]) {
        container.push(arr[l]);
        l ++;
      } else {
        container.push(arr[r]);
        r ++;
      }
    }
  }
  for (let i = start, j = 0; i <= end; i ++, j ++) {
    arr[i] = container[j];
  }
}

let arr = [5,6,2,1,5,3,3,19,5,2,45,21,65,4,53];

mergeSort(arr);

console.log(arr);
