function solution(s) {
    let start = ''
    let c1 = 0;
    let c2 = 0;
    let res = 0;
    for(const a of s){
        !start && (start = a);
        start === a ? c1++ : c2++;
        
        if(c1 === c2){
            res++;
            c1 = 0;
            c2 = 0;
            start = '';
        }
    }
    if(c1 !== 0 || c2 !== 0) res++;
    return res;
}