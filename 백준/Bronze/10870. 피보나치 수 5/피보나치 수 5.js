const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input);

function fib(num) {
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fib(num - 1) + fib(num-2);
}
console.log(fib(num));