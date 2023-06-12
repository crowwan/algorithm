function solution(people, limit) {
    let res = 0;
    let h = 0;
    let t = people.length-1;
    people.sort((a,b) => a - b);
    while(h <= t){
        if(people[h] + people[t] <= limit){
            h++;
            t--;
        }else{
            t--;
        }
        res++;
    }
    
    return res;
}