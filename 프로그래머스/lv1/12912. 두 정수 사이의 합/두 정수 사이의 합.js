function solution(a, b) {
    const [max,min] = [Math.max(a,b),Math.min(a,b)];
    return (max * (max+1) / 2) - (min * (min+1) / 2) + min;
}