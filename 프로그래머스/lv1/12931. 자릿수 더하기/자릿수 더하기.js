function solution(n){
    return [...n+''].map(a => +a).reduce((a,b) => a + b,0);
}