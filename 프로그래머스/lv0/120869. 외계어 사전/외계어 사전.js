function solution(spell, dic) {
    for(const a of dic){
        if(spell.filter(b => a.includes(b)).length === spell.length) return 1;
    }
    return 2;
}