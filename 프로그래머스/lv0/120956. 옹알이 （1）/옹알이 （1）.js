function solution(babbling) {
    const ar = ["aya", "ye", "woo", "ma" ];
    let cnt = 0;
    for(let a of babbling){
        for(const b of ar){
            a = a.replace(b,'1');
        }
        const set = new Set([...a.split('')]);
        if(set.size === 1 && set.has('1')) cnt++;
    }
    return cnt;
}