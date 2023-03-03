function solution(a, b) {
    return a.map((a,i) => a * b[i]).reduce((a,b) => a + b,0);
}