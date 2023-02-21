function solution(a, b) {
    const g = gcd(a,b);
    
    return isFin(b/g);
}
// 기약분수 상태에서 분모가 2나 5로만 나눠지면 유한 소수
// 다른 수로 나눠지면 무한 소수

function gcd(a,b){
    if( !(a % b) ) return b;
    return gcd(b, a % b);   
}
function isFin(a){
    if(a === 1) return 1;
    if(!(a % 2)) return isFin(a / 2);
    else if(!(a % 5)) return isFin(a / 5);
    return 2;
}