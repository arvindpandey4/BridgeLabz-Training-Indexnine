function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (target < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));
