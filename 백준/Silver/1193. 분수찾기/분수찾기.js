const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function parse(line){
  return +line;
}
function isEven(num){
  if(num%2 ===0) return true;
  return false;
}
function calc(line){
  let input = parse(line);
  let count = 1;

  while(input - count > 0){
    input -= count;
    count++;
  }
  
  const result = makeResult(input, count, isEven(count));
  return result;
}
function makeResult(input, cnt, even){
  let q = even ? input : 1+cnt-input;
  let r = even ? 1+cnt-input: input;
  return `${q}/${r}`;
}
function showResult(line){
  const result = calc(line);

  console.log(result);
}

rl.on('line', function(line) {
  showResult(line);
  rl.close();
}).on("close", function() {
  process.exit();
});