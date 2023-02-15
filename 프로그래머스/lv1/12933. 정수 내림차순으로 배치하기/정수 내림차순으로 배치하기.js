function solution(n) {
    return Number([...n+''].map(Number).sort((a,b) => b - a).join(''))
}