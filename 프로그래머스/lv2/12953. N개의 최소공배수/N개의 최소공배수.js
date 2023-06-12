const gcd = (a,b) => {
    while( b > 0 ){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

const lcm = (a,b) => {
    return (a * b) / gcd(a,b);    
}

function solution(arr) {
    return arr.reduce((a,b) => lcm(a,b));
}