function solution(s) {
    const ar = s.split(' ');
    return ar.map(a => {
        return a ? a[0].toUpperCase() + a.slice(1).toLowerCase() : a;
        
    }).join(' ');
}