function solution(numbers, target) {
    let res = 0;
    const dfs = (n,s) => {
        if(n === numbers.length) {
            if(s === target) {
                res++;
            }   
            return;
        }
        
        dfs(n+1,numbers[n]+s);
        dfs(n+1,-numbers[n]+s);
        
        return ;
    }
    dfs(0,0);
    return res;
}