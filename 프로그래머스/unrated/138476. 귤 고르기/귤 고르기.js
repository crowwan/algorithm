function solution(k, tangerine) {
    const countMap = tangerine.reduce((a,b) => {
        !a.get(b) ?  a.set(b,1) : a.set(b,a.get(b) + 1);
        return a;
    },new Map())
    const arr = Array.from(countMap).sort((a,b) => b[1] - a[1]);
    const sortedMap = new Map(arr);
    const res = [];
    for(const [key,value] of sortedMap){
        k = k - value;
        res.push(key);
        
        if(k <= 0) return res.length;   
    }
}