function solution(n) {
    const arr = Array(n * 3)
                .fill()
                .map((_,i) => i+1)
                .filter(a => (a % 3) && !String(a).includes('3'));
    return arr[n-1];
}