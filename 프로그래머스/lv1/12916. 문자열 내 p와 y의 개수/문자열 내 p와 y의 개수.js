function solution(s){
    const a = [...s.toLowerCase()];
    const a1 = a.filter(a => a === 'p');
    const a2 = a.filter(a => a === 'y');
    
    return a1.length === a2.length;
}