function solution(n) {
    return Array(n).fill(0).map((_,i) => i+1).filter(a => !(n % a)).reduce((a,b) => a + b,0);
}