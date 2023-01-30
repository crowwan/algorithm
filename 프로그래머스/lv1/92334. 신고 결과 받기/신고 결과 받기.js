// function solution(id_list, report, k) {
//     const res = [];
//     const user = id_list.reduce((a,b) => (a[b] = new Set(), a),{});
//     const reported = {}
    
//     report.forEach(a =>{
//         const [id, re] = a.split(' ');
//         const bs = user[id].size;
//         user[id].add(re);
//         if(bs !== user[id].size) reported[re] = reported[re] ? reported[re] + 1 : 1;
//     })
    
//     const banned = Object.keys(reported).filter(a => reported[a] >= k);
    
//     for(const k in user){
//         res.push(filter(a => banned.includes(a), user[k]).length);
//     }
    
//     return res;
// }
// function filter(predi, iter){
//     const res = [];
//     for(const a of iter){
//         if(predi(a)) res.push(a)
//     }
//     return res;
// }

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
