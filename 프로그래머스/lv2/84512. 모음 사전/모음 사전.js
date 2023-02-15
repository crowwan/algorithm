function solution(word) {
    const ar = ['A','E','I','O','U'];
    let cnt = 0;
    
    const f = (s) =>{
        cnt++;
        if(word === s) return true;
        if(s.length === 5) return false;
        for(const a of ar){
            if(f(s + a)) return true;
        }    
    }
    
    for(const a of ar){
        if(f(a)) return cnt;
    }
    return cnt;
}
