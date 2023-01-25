function solution(spell, dic) {
    let flag = 2;
    
    for(const a of dic){
        for(const b of spell){
            if(a.includes(b)) flag = 1;
            else {
                flag = 2;
                break;
            }
        }
        if(flag === 1) return flag;
    }
    return flag
}