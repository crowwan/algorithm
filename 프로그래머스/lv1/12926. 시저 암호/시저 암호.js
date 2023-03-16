function solution(s, n) {
    const tmp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upper = [...tmp];
    const lower = [...tmp.toLowerCase()];
    
    return [...s].map(a => {
        if(a === ' ') return a;
        const idx = upper.findIndex(e => e === a);
        if(idx !== -1){
            return upper[(idx + n) % 26];
        }else{
            const idx2 = lower.findIndex(e => e === a);
            return lower[(idx2 + n) % 26];
        }
    }).join('');
}