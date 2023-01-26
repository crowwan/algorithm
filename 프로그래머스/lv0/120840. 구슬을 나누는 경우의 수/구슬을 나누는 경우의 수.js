function solution(balls, share) {
    if(balls === share) return 1;
    return factorial(balls) / (factorial((balls - share)) * factorial(share))
}

function factorial(num){
    if(num === 1) return BigInt(num);
    return BigInt(num) * factorial(num-1);
}