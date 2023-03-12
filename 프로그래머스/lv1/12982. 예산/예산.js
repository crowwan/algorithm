function solution(d, budget) {
    d.sort((a,b) => a - b);
    let cnt = 0;
    for(const a of d){
        if(budget - a >= 0) {
            cnt++;
            budget -= a;
        }else{
            return cnt;
        }
    }
    return cnt;
}