// 진완님
function solution(n) {
    const res = [];
    for(let i = 2; i <= n; i++){
        if(isPrime(i) && n % i === 0){
            res.push(i);
            n /= i;
        }
    }
    // new Set(배열) => 중복이 제거된 Set자료형이 나온다. => 배열에 넣어주고 싶으니까 [... set]
    return res; // Set자료형은 이터러블이기 때문에 스프레드 연산이 된다. (...)
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

// // 윤수님 
// function solution(n) {
//     let array = [];
//     let i = 2;
    
//     while( n >= 2) {
//         if(n % i === 0){
//             array.push(i)
//             n = n / i;
//         }else i++
//     }
//     return [...new Set(array)]  // 배열중복제거방법 new Set
// }

// // 유하님
// function solution(n) {
//     let answer = [];
    
//     for(let i=2; n !== 1; i++){
//         if(n % i === 0){
//             while(n%i === 0) {
//                 n /= i;
//             }
//             answer.push(i);
//         }
//     }
//     return answer;
// }

// // 미리님
// function solution(n) {
//     const aaa = [];
//     const bbb = [];
//   while (n % 2 === 0) {
//     aaa.push(2);
//     n /= 2;
//   }

//   for (let i = 3; i * i <= n; i += 2) {
//     while (n % i === 0) {
//       aaa.push(i);
//       n /= i;
//     }
//   }

//   if (n > 2) aaa.push(n);

//     aaa.forEach( v => {if(!bbb.includes(v)){bbb.push(v)}});
//     return bbb;
// };

// 소수를 구할때
// 소수를 찾았다. => 이 소수의 배수들을 다 제거해 에라토스테네스의 체