function solution(id_list, report, k) {
    const res = [];
    const user = id_list.reduce((a,b) => (a[b] = new Set(), a),{});
    const reported = {}
    
    report.forEach(a =>{
        const [id, re] = a.split(' ');
        const bs = user[id].size;
        user[id].add(re);
        if(bs !== user[id].size) reported[re] = reported[re] ? reported[re] + 1 : 1;
    })
    
    const banned = Object.keys(reported).filter(a => reported[a] >= k);
    
    for(const k in user){
        res.push(filter(a => banned.includes(a), user[k]).length);
    }
    
    return res;
}
function filter(predi, iter){
    const res = [];
    for(const a of iter){
        if(predi(a)) res.push(a)
    }
    return res;
}