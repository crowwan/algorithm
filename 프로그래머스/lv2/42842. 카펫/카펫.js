function solution(brown, yellow) {
    // 총 너비에서 brown, yellow 개수를 만족하는 x, y를 찾는다.
    const s = brown + yellow;
    
    for(let i = s; i >= 1; i--){
        if(s % i !== 0) continue;
        const h = s / i;
        const y = (i - 2) * (h - 2);
        const b = s - y;
        
        if(y === yellow && b === brown) return [i,h];
    }
    
    return [0,0];
}