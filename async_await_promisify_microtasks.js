function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadData() {
  await delay(300);
  console.log("Data loaded");
}

loadData();

console.log("start");

Promise.resolve().then(() => console.log("microtask"));

setTimeout(() => console.log("macrotask"), 0);

console.log("end");
