function solution(s1, s2) {
    const obj = {}
    let count = 0
    for(let i = 0; i< s1.length;i++){
        obj[s1[i]] = 1;
    }
    for(let i = 0; i < s2.length; i++){
        if(obj[s2[i]] === 1) count++;
    }
    return count
}