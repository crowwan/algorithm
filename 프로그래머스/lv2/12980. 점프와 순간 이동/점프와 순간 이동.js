function solution(n){
    let k = 0;
    while(n > 0){
        if(n % 2 === 0){
            n /= 2;
        }else{
            n--;
            k++;
        }
    }
    return k;
}