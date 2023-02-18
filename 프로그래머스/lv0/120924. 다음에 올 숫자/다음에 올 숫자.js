function solution(common) {
    if(common[1] - common[0] === common.at(-1) - common.at(-2)) return common.at(-1) + common[1] - common[0];
    
    return common.at(-1) * common[1] / common[0];
}