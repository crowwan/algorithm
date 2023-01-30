function solution(citations) {
    const res = [];
    citations.sort((a,b) => b - a);
    for(let i = 0;i < citations.length; i++){
        if(citations[i] < i + 1) return i;
        else res.push(i);
    }
    return res.length;
}