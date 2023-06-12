function solution(n) {
    let memo = [];
    
    const reCur = (n) => {
        if(memo[n]) return memo[n];
        if(n === 0) return 1;
        else if(n < 0) return 0;
        else {
            memo[n] = (reCur(n-1) + reCur(n-2)) % 1234567;
            return (reCur(n-1) + reCur(n-2)) % 1234567;
        }
    }
    return reCur(n) % 1234567;

}