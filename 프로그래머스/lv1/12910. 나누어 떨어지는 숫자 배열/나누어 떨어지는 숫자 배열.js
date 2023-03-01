function solution(arr, divisor) {
    const res = arr.filter(a => !(a % divisor)).sort((a,b) => a - b);
    return res.length ? res : [-1];
}