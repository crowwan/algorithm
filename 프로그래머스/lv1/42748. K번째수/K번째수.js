function solution(array, commands) {
    return commands.map(([s,l,o]) => {
        return array.slice(s-1,l).sort((a,b) => a - b)[o-1]
    });
    
}