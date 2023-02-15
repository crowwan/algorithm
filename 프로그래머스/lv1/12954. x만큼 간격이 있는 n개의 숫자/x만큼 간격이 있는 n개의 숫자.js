function solution(x, n) {
    return Array(n).fill().map((_,i) => (i+1) * x);
}