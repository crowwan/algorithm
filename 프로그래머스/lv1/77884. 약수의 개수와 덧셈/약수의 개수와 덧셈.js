const getDivisor = num => {
    const res = [];
    for(let i = 1; i<= num; i++){
        !(num % i) && res.push(i);
    }
    return res;
}
function solution(left, right) {
    const res = [];
    for(let i = left; i <= right; i++){
        res.push(getDivisor(i).length % 2 ? -i : i);
    }
    return res.reduce((a,b) => a + b, 0);
}

