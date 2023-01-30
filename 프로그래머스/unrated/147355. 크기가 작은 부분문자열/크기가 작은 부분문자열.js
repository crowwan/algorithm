function solution(t, p) {
    const ar = [];
    for(let i = 0 ;i < t.length - p.length + 1;i++){
        ar.push(t.slice(i,i+p.length));
    }

    return ar.filter(a => +a <= +p).length;
}