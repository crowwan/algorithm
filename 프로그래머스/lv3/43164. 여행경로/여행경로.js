function solution(tickets) {
    
    // 루트는 icn으로 시작하는 인덱스
    const res = [];
    let t = false;
    const dfs = (ar,tmp,from) => {
        if(tmp.length === 0) {
            res.push(ar);
            return;
        }
        for(let i = 0; i < tmp.length; i++){
            if(tmp[i][0] === from){
                dfs([...ar,tmp[i][1]],tmp.filter((_,ind) => ind !== i),tmp[i][1]);
            }
        }
        return;
    }
    
    dfs(['ICN'],tickets,'ICN');
    res.sort((a,b) => a.join('') < b.join('') ? -1 : 1)
    return res[0];
}