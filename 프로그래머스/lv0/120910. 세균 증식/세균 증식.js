function solution(n, t) {
    if(t === 0) return n;
    return solution(2 * n, --t);
}