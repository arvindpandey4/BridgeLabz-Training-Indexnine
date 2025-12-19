let arr = [10, 20, 30, 40];

console.log(arr[0]);
arr.push(50);
arr.pop();
arr.unshift(5);
arr.shift();

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr.length);
