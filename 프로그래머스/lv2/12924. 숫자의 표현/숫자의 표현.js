const sum = (arr) => arr.reduce((a,b) => a + b);
function solution(n) {
    let cnt = 0;
    let tmp = [0];
    let i = 1;
    while (i <= Math.ceil(n)){
        if(sum(tmp) < n){
            tmp.push(i++);
        }else if(sum(tmp) === n){
            tmp.push(i++);
            cnt++;
        }else{
            tmp = tmp.slice(1);
        }
    }
    return cnt+1;
}
