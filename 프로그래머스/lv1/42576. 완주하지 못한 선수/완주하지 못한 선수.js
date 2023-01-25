function solution(participant, completion) {
    const map = participant.reduce((a,b) =>{
         !a[b] && (a[b] = []);
        a[b].push(1);
        return a;
    },{});
    completion.forEach(a => {
        map[a].pop();
    });
    for(const [key,value] of Object.entries(map)){
        if(value.length) return key; 
    }
}