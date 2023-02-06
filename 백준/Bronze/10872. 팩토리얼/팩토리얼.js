const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input);

function fac(n){
    if(n <= 0) return 1;
    else return n * fac(n-1);
}
console.log(fac(num))