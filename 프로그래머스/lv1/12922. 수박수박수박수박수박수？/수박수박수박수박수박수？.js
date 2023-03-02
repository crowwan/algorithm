function solution(n) {
    return Array(n).fill().map((_,i) => i % 2 ? '박' : '수').join('');
}