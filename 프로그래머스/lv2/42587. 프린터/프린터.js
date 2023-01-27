function solution(priorities, location) {
    const s1 = [];
    const s2 = [];
    const ar = priorities.map((a,i) => [i,a]);
    
    while(ar.length){
        const a = ar.shift();
        console.log(a)
        if((s1.length) && a[1] > s1[s1.length-1][1] ){
            while(s1.length && s1[s1.length-1][1] < a[1]){
                s2.push(s1.pop())
            }
            while(s2.length){
                ar.push(s2.pop())
            }
        }
        s1.push(a);
    }
        
    
    
    console.log(s1)
    return s1.findIndex(a => a[0] === location) + 1;
}