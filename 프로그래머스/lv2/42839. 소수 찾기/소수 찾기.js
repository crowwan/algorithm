const isPrime = (num) => {
    if(num === 0 || num === 1) return false;
    if(num === 2) return true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    // 소수 판별 함수를 만든다.
    // 반복의 깊이를 모르니 재귀함수를 이용한다.
    // 소수를 저장하는 set을 만든다.
    // 자신을 제외한 나머지 숫자를 하나씩 붙여서 확인한다.
    const visited = new Array(numbers.length).fill(0);
    const res = new Set();
    
    const getNum = (str) => {
        if(str != '' && isPrime(parseInt(str))) res.add(parseInt(str));
        
        for(let i = 0 ; i < numbers.length; i++){
            if(!visited[i]){
                visited[i] = 1;
                getNum(str + numbers[i]);
                visited[i] = 0;
            }
        }
    }
    
    getNum('');
    
    return res.size;
}

