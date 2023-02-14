const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const count = Number(input);

const res = [];

const hanoi = (n,s,m,t) => {
    if(n === 1) {
        res.push(`${s} ${t}`);
        return;
    }
    hanoi(n-1,s,t,m)
    res.push(`${s} ${t}`)
    hanoi(n-1,m,s,t)
    return;
}
hanoi(count,1,2,3)
console.log(res.length);
console.log(res.join('\n'));