function solution(s, skip, index) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const filtered = alphabet.filter(a => !skip.includes(a));
    
    return [...s].map(a => {
        const ind = filtered.findIndex(c => c === a);
        return filtered[(ind + index) % filtered.length];
    }).join('');
}