function solution(score) {
    const avgs = score.map(a => (a[0] + a[1])/2).sort((a,b) => b - a);
    return score.map(a => avgs.indexOf((a[0] + a[1])/2) + 1);
}

// 유하님
function solution(score) {
    const avg = score.map((e) => (e[0] + e[1]) / 2);
    const sorted = [...avg].sort((a,b)=> b-a);
    return avg.map((e) => sorted.indexOf(e) + 1);
}