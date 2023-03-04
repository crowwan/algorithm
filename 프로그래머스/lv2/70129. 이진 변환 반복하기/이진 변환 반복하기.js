function solution(s) {
    let cnt = 0;
    let zeroCnt = 0;
    while(s !== '1'){
        cnt++;
        zeroCnt += [...s].filter(a => a === '0').length;
        s = [...s].filter(a => a !== '0').length.toString(2);
    }
    return [cnt,zeroCnt];
}