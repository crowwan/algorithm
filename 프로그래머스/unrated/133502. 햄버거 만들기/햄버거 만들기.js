
function solution(ingredient) {
    let cnt = 0;
    const s = [];
    for(const a of ingredient){
        s.push(a);
        if(check(s)) {
            cnt++;
            pop4(s);
        }
    }
    return cnt;
}

function check(s){
    if(s.length >= 4){
        if(s[s.length-1] === 1 && s[s.length-2] === 3 && s[s.length - 3] === 2 && s[s.length-4] === 1){
            return true;
        }
    }
    return false;
}
function pop4(s){
    for(let i =0;i<4;i++){
        s.pop();
    }
}