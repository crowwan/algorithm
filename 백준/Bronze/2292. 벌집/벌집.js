const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reCalc(num, count, prev = 1){
  const SIX = 6;
  const calculated = count * SIX;
  if(calculated + prev < num){
    return reCalc(num,++count, calculated+prev);
  }else{
    return ++count;
  }
}
function parse(line){
  return +line;
}
function calc(line){
  const input = parse(line);
  let count = 1;
  
  if(input === 1) return 1;

  return reCalc(input,count);

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

