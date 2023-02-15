const fs = require('fs');
const count = [fs.readFileSync("/dev/stdin").toString()].map(Number)[0];

const res = [];

// 일단 처음에 원판 개수에서 

if (count <= 20) {
  (function hanoi(n, s, m, t) {
    if (n === 0) return;
    hanoi(n - 1, s, t, m); // hanoi를 호출하면 어쨌든 n개의 원판이 s에서 m으로 이동한다.`
    res.push(`${s} ${t}`);
    hanoi(n - 1, m, s, t); // hanoi를 호출하면 어쨌든 n개의 원판이 m에서 t으로 이동한다.
  })(count, 1, 2, 3);
  console.log(res.length);
  console.log(res.join("\n"));
} else {
  console.log(String(BigInt(2) ** BigInt(count) - BigInt(1)));
}