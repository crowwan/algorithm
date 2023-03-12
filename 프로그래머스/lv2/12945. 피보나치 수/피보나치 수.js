function solution(n) {
    const ar = [0,1];
    
    for(let i = 2; i <= n; i++){
        ar.push((ar[i-2] + ar[i-1]) % 1234567);
    }
    return ar[n] % 1234567;
}