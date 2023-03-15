function solution(n) {
    let next = n+1;
    const l = [...n.toString(2)].filter(a => a === '1').length;
    while(true){
        const bi = next.toString(2);
        if([...bi].filter(a => a === '1').length === l) return next;
        next++;   
    }
    return null;
}