function parse(line){
  return line.split(' ').map(elem => parseInt(elem));
}

function calc(line){
  const inputs = parse(line);
  const [ a,b,v ] = inputs;
  const diff = a-b;
  const v_tmp = v-a;
  let count = v_tmp%diff ? parseInt(v_tmp/diff)+1 : parseInt(v_tmp/diff);
  let ret = count+1;
  
  return ret;
}

function showResult(line){
  const result = calc(line);
  console.log(result);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  showResult(line);

  rl.close();
}).on("close", function() {
  process.exit();
});