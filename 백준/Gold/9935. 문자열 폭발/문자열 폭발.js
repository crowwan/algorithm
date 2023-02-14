let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

const [str, c4] = input;
const s = [];

for (const a of str) {
  s.push(a);
  if (checkIsBomb(s, c4)) {
    for (let i = 0; i < c4.length; i++) s.pop();
  }
}
if(s.length) console.log(s.join(''));
else console.log('FRULA')

function checkIsBomb(ar, b) {
  return ar.slice(ar.length - b.length, ar.length).join("") === b;
}
