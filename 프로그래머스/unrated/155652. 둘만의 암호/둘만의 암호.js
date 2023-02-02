function solution(s, skip, index) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const filtered = alphabet.filter(a => !skip.includes(a));
    const res = [...s].map(a => {
        const ind = filtered.findIndex(c => c === a);
        console.log( (ind + index) , (filtered.length))
        return filtered[(ind + index) % filtered.length];
    });
    
    return res.join('');
}