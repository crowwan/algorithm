function solution(n) {
    const res = [];
    for(let i = 2; i <= n; i++){
        if(isPrime(i) && n % i === 0){
            res.push(i);
            n /= i;
        }
    }
    
    return [...new Set(res)];
}


function isPrime(num) {
  if(num <= 1) { 
    return false;
  }

  if( num % 2 === 0) { 
    return num === 2 
  }
 
  const sqrt = parseInt(Math.sqrt(num));

  for( let divider = 3; divider <= sqrt; divider += 2) {

    if(num % divider === 0) {
      return false;
    }
    
  }
  
  return true;
}
