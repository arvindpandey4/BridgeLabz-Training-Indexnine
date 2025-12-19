function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(a, b) {
  let res = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }
  return res.concat(a.slice(i)).concat(b.slice(j));
}

console.log(mergeSort([38, 27, 43, 3]));
