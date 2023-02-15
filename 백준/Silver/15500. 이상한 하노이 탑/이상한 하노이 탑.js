const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let cnt = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const s2 = [];
const res = [];

while (cnt > 0) {
  while (arr.length) {
    const top = arr.pop();
    if (top === cnt) {
      cnt--;
      res.push("1 3");
    } else {
      s2.push(top);
      res.push("1 2");
    }
  }
  while (s2.length) {
    const top = s2.pop();
    if (top === cnt) {
      cnt--;
      res.push("2 3");
    } else {
      arr.push(top);
      res.push("2 1");
    }
  }
}

console.log(res.length);
console.log(res.join("\n"));
