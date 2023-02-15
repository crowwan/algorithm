function solution(x) {
    const s = [...x+''].map(Number).reduce((a,b) => a + b,0);
    return !(x % s);
}