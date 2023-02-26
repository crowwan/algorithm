function solution(s) {
    const ar = s.split(' ');
    return `${Math.min(...ar)} ${Math.max(...ar)}`;
}