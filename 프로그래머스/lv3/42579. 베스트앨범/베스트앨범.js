function solution(genres, plays) {
    const map = genres.map((a,i) => ({genre:a, play:plays[i], ind: i})).reduce((a,b) => {
        
        !a[b.genre] && (a[b.genre] = {});
        !a[b.genre].li && (a[b.genre].li = []);
        a[b.genre].li.push(b);
        !a[b.genre].sum && (a[b.genre].sum = 0);
        a[b.genre].sum += b.play;
        return a;
    },{});
    console.log(map);
    Object.values(map).forEach(a =>{
        a.li.sort((a,b) => b.play - a.play || a.i - b.i);
        a.li.length > 2 && (a.li.length = 2);
    });
    
    const sortedKey = Object.keys(map).sort((a,b) => {
        return map[b].sum - map[a].sum;
    });
    console.log(sortedKey)
    
    const res = [];
    sortedKey.forEach(a =>{
        map[a].li.forEach(b => res.push(b.ind));
    })
    return res;
}