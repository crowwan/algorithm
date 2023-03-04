function solution(s) {
    return s.split(' ').map(a => 
        [...a].map((e,i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join('')
    ).join(' ');
}