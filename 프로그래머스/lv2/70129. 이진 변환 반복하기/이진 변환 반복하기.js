function solution(s) {
    const res = [0,0];
    while(s !== '1'){
        const len = [...s].filter(a => a !== '0').length;
        res[1] += s.length - len;
        res[0]++;
        s = len.toString(2);
    }
    return res;
}